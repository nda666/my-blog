import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getThemeSession } from "~/utils/theme.server";

export const action: ActionFunction = async ({ request }) => {
  const theme = await getThemeSession(request);
  const newTheme = theme.getTheme() === "light" ? "dark" : "light";
  theme.setTheme(newTheme);
  return json(
    { success: true },
    { headers: { "Set-Cookie": await theme.commit() } }
  );
};
export const loader: LoaderFunction = () => redirect("/", { status: 404 });
