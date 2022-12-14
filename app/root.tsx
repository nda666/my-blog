import {
  json,
  LinksFunction,
  LoaderArgs,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Outlet, useCatch, useLoaderData } from "@remix-run/react";
import { withSentry } from "@sentry/remix";
import Document from "./components/Document";
import NotFound from "./components/Errors/404";
import { useTheme } from "./contexts/ThemeContext";

import tailwindStylesheetUrl from "./styles/app.css";
import { SentryInit } from "./utils/sentry";
import { getThemeSession } from "./utils/theme.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lobster&display=swap",
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const theme = await getThemeSession(request);
  const userTheme = await getThemeSession(request);

  if (!userTheme.getTheme()) {
    const headerRequestTheme = request.headers.get(
      "Sec-CH-Prefers-Color-Scheme"
    );
    userTheme.setTheme(
      headerRequestTheme == "light" || headerRequestTheme == "dark"
        ? headerRequestTheme
        : "light"
    );
  }

  return json(
    {
      theme: theme.getTheme(),
      appName: process.env.APP_NAME,
      enableSentry: process.env.NODE_ENV === "production",
      env: {
        APP_NAME: process.env.APP_NAME,
        SENTRY_DSN: process.env.SENTRY_DSN,
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        SOCIAL_EMAIL: process.env.SOCIAL_EMAIL,
        SOCIAL_FACEBOOK_URL: process.env.SOCIAL_FACEBOOK_URL,
        SOCIAL_INSTAGRAM_USERNAME: process.env.SOCIAL_INSTAGRAM_USERNAME,
        SOCIAL_TWITTER_USERNAME: process.env.SOCIAL_TWITTER_USERNAME,
      },
    },
    {
      headers: {
        "Set-Cookie": await userTheme.commit(),
      },
    }
  );
};

export const meta: MetaFunction = ({ data, params }) => ({
  charset: "utf-8",
  title: data?.env?.APP_NAME || "",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Adha Bakhtiar A passionate frontend & backend developer from Indonesia 🇮🇩",
});

export function CatchBoundary() {
  const { theme } = useTheme();
  const caught = useCatch();
  return (
    <Document theme={theme || "dark"}>
      <NotFound status={caught.status} statusText={caught.statusText} />
    </Document>
  );
}

function App() {
  const { theme, enableSentry, env } = useLoaderData();
  enableSentry && SentryInit(env.SENTRY_DSN);
  return (
    <Document theme={theme || "dark"}>
      <Outlet />
    </Document>
  );
}
export default withSentry(App);
