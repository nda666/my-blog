import { createCookieSessionStorage } from "@remix-run/node";
import config from "./config.server";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: [config.sessionSecret], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
    maxAge: 24 * 60 * 60,
  },
});

export async function getSession(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return {
    ...session,
    commit: async () => await sessionStorage.commitSession(session),
    destroy: async () => await sessionStorage.destroySession(session),
  };
}

// you can also export the methods individually for your own usage
// export let { getSession, commitSession, destroySession } = sessionStorage;
