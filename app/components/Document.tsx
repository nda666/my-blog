import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  ThrownResponse,
  useCatch,
} from "@remix-run/react";
import { Component, ReactNode } from "react";
import { AppProvider } from "~/contexts/AppContext";
import ProgressBar from "./ProgressBar";

export interface DocumentInterface {
  children: ReactNode;
  theme: "light" | "dark";
  shouldHydrate?: boolean;
  caught?: ThrownResponse<number, any>;
}
export default function Document({
  children,
  theme,
  caught,
}: DocumentInterface) {
  return (
    <html
      lang="en"
      data-theme={`${theme || "dark"}`}
      data-color-mode={`${theme || "dark"}`}
      className={`h-full ${theme || "dark"}`}
    >
      <head>
        {caught && <title>{`${caught.status} ${caught.statusText} | `}</title>}
        <Meta />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <Links />
      </head>
      <body className="h-full">
        <ProgressBar percent={100} />
        <AppProvider initialTheme={theme}>{children}</AppProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
