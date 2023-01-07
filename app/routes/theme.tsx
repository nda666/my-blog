import type { ActionFunction } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getThemeSession } from "~/theme.server";

export const action: ActionFunction = async ({ request }) => {
  const theme = await getThemeSession(request);
  const newTheme = theme.getTheme() === "light" ? "dark" : "light";
  theme.setTheme(newTheme);
  return json(
    { success: true },
    { headers: { "Set-Cookie": await theme.commit() } }
  );
};
export async function loader() {
  throw new Response(null, { status: 404 });
}

export default function Theme() {
  return <></>;
}
