// app/utils/auth.server.ts
import { prisma } from "./prisma.server";
import { CookieSerializeOptions, Response } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import type { LoginForm, RegisterForm } from "~/types/form";
import { sessionStorage } from "./session.server";
import type { User } from "@prisma/client";

let currentUser: any = undefined;

export async function register(user: RegisterForm) {
  const exists = await prisma.user.count({ where: { email: user.email } });
  if (exists) {
    return json(
      { error: `User already exists with that email` },
      { status: 400 }
    );
  }
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

export async function authenticatedRoute(request: Request): Promise<User> {
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

export async function unauthenticatedRoute(request: Request) {
  if (await getUser(request)) throw redirect("/");
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }
  if (typeof currentUser !== "undefined") return currentUser;

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
