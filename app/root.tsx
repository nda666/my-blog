import type {
  DataFunctionArgs,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import { Headers, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Outlet,
  useCatch,
  useLoaderData,
  useLocation,
  useMatches,
} from "@remix-run/react";
import { withSentry } from "@sentry/remix";
import Document from "./components/Document";
import NotFound from "./components/Errors/404";
import { useTheme } from "./contexts/ThemeContext";
import {
  AuthenticityTokenProvider,
  createAuthenticityToken,
} from "remix-utils";
import { inject } from "@vercel/analytics";
import tailwindStylesheetUrl from "./styles/app.css";
import { SentryInit } from "./utils/sentry";
import { getThemeSession } from "~/theme.server";
import { webVitals } from "./utils/webVitals";
import { useEffect, useState } from "react";
import { getSession } from "./session.server";
import type { FlashMessageType } from "./types/session";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
    },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
  ];
};

export const loader = async ({ request }: DataFunctionArgs) => {
  const theme = await getThemeSession(request);
  const session = await getSession(request);
  const token = createAuthenticityToken(session);
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

  const headers = new Headers();
  const message = session.get("message") as FlashMessageType | undefined | null;
  headers.append("Set-Cookie", await userTheme.commit());
  headers.append("Set-Cookie", await session.commit());
  return json(
    {
      csrf: token,
      message: message,
      theme: theme.getTheme(),
      appName: process.env.APP_NAME,
      isProduction: process.env.NODE_ENV === "production",
      env: {
        APP_NAME: process.env.APP_NAME,
        SENTRY_DSN: process.env.SENTRY_DSN,
        GITHUB_USERNAME: process.env.GITHUB_USERNAME,
        SOCIAL_EMAIL: process.env.SOCIAL_EMAIL,
        SOCIAL_FACEBOOK_URL: process.env.SOCIAL_FACEBOOK_URL,
        SOCIAL_INSTAGRAM_USERNAME: process.env.SOCIAL_INSTAGRAM_USERNAME,
        SOCIAL_TWITTER_USERNAME: process.env.SOCIAL_TWITTER_USERNAME,
        VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
      },
    },
    {
      headers,
    }
  );
};

export type RootLoader = typeof loader;

export const meta: MetaFunction = ({ data, params }) => {
  return {
    "google-site-verification": "pFGje8l5p-QEdP53PomhKujGUGinfTxQ2g15lnQ6mJw",
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };
};

export function CatchBoundary() {
  const caught = useCatch();
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  return (
    <Document theme={currentTheme || "dark"} caught={caught}>
      <NotFound status={caught.status} statusText={caught.statusText} />
    </Document>
  );
}

function App() {
  const { theme, isProduction, env, csrf } = useLoaderData<RootLoader>();
  const [currentTheme, setCurrentTheme] = useState(theme);
  const matches = useMatches();
  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  useEffect(() => {
    const index = matches.length - 1 || 0;
    isProduction &&
      webVitals({
        analyticsId: env.VERCEL_ANALYTICS_ID!,
        debug: !isProduction,
        params: matches[index].params,
        path: matches[index].pathname,
      });
  }, [env.VERCEL_ANALYTICS_ID, isProduction, matches]);

  if (isProduction) {
    SentryInit(env.SENTRY_DSN);
    inject();
  }

  return (
    <AuthenticityTokenProvider token={csrf}>
      <Document theme={currentTheme || "dark"}>
        <Outlet />
      </Document>
    </AuthenticityTokenProvider>
  );
}
export default withSentry(App);
