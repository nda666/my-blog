import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { Form } from "@remix-run/react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
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
