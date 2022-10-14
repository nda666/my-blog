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
import ThemeProvider from "./contexts/ThemeContext";
import DefaultLayout from "./layouts/DefaultLayout";

import tailwindStylesheetUrl from "./styles/app.css";
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

export default function App() {
  const { theme, appName, env } = useLoaderData();
  return (
    <html lang="en" className={`h-full ${theme || ""}`}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <ThemeProvider>
          <DefaultLayout env={env}>
            <Outlet />
          </DefaultLayout>
        </ThemeProvider>

        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
