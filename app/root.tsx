import {
  json,
  LinksFunction,
  LoaderArgs,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { withSentry } from "@sentry/remix";
import ProgressBar from "./components/progressBar";
import config from "./config";
import ThemeProvider from "./contexts/ThemeContext";
import DefaultLayout from "./layouts/defaultLayout";

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
});

function App() {
  const { theme, appName, env } = useLoaderData();
  SentryInit(env.SENTRY_DSN);
  return (
    <html lang="en" className={`h-full ${theme || "dark"}`}>
      <head>
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
      </head>
      <body className="h-full">
        <ProgressBar percent={100} />
        <ThemeProvider>
          <DefaultLayout env={env}>
            <Outlet />
          </DefaultLayout>
        </ThemeProvider>

        <ScrollRestoration />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export default withSentry(App);
