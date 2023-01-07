// app/utils/auth.server.ts
import { prisma } from "../db.server";
import { CookieSerializeOptions, Response } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import type { LoginForm, RegisterForm } from "~/types/form";
import { getSession, sessionStorage } from "../session.server";

export interface UserData {
  id: string;
  email: string;
}

let currentUser: UserData | null = null;

export async function register(user: RegisterForm, request: Request) {
  const exists = await prisma.user.count({ where: { email: user.email } });
  if (exists) {
    return json(
      { error: `User already exists with that email` },
      { status: 400 }
    );
  }
  const created = await prisma.user.create({
    data: {
      email: user.email,
      password: bcrypt.hashSync(user.password),
    },
  });
  const session = await getSession(request);
  session.flash("message", {
    result: created ? true : false,
    message: created
      ? "User created successfully"
      : "User created unsuccessfully",
  });
  return redirect("/login", {
    headers: {
      "Set-Cookie": await session.commit(),
    },
  });
}

function getUserSession(request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function authenticatedRoute(request: Request): Promise<UserData> {
  const user = await getUser(request);
  if (!user) {
    const url = new URL(request.url);
    const redirectUrl = url.pathname ? `?redirect=${url.pathname}` : "";
    const isJson =
      request.headers.get("accept")?.toLowerCase() == "application/json";
    if (isJson) {
      throw new Response(`Unauthorized`, {
        status: 401,
      });
    } else {
      throw redirect(`/login${redirectUrl}`, {
        status: 302,
      });
    }
  }
  return user;
}

export async function isAnyUserExist() {
  return (await prisma.user.count()) > 0 ? true : false;
}

export async function unauthenticatedRoute(request: Request) {
  if (await getUser(request)) throw redirect("/admin");
}

export async function getUser(request: Request): Promise<UserData | null> {
  const userId = await getUserId(request);
  console.log("userId", userId);
  if (typeof userId !== "string") {
    return null;
  }

  if (typeof currentUser === "undefined" || currentUser !== null)
    return currentUser;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true },
    });
    currentUser = user;
    return user;
  } catch {
    throw logout(request);
  }
}

async function findUserByEmailAndPassword({ email, password }: LoginForm) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user || !(await bcrypt.compare(password, user.password))) return false;
  return user;
}

export async function login(input: LoginForm) {
  const user = await findUserByEmailAndPassword(input);
  if (!user) return json({ error: `Incorrect login` }, { status: 400 });
  return createUserSession(
    user.id,
    input.redirectTo || "/admin",
    input.remember
  );
}

export async function createUserSession(
  userId: string,
  redirectTo: string,
  remember: boolean = false
) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  const sessionOption: CookieSerializeOptions = {};
  if (remember) {
    sessionOption.maxAge = 60 * 60 * 24 * 365;
  }
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, sessionOption),
    },
  });
}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  await sessionStorage.destroySession(session);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
