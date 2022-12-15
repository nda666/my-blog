import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Component, ReactNode } from "react";
import { AppProvider } from "~/contexts/AppContext";
import ProgressBar from "./ProgressBar";

export interface DocumentInterface {
  children: ReactNode;
  theme: "light" | "dark";
}
export default function Document({ children, theme }: DocumentInterface) {
  return (
    <html
      lang="en"
      data-theme={`${theme || "dark"}`}
      data-color-mode={`${theme || "dark"}`}
      className={`h-full ${theme || "dark"}`}
    >
      <head>
        <Meta />
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
