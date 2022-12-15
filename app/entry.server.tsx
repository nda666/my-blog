// entry.server.tsx
import type { EntryContext } from "@remix-run/node"; // Depends on the runtime you choose
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import config from "./config";
import { SentryInit } from "./utils/sentry";

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
process.env.NODE_ENV === "production" && SentryInit(config.sentryDsn);

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const html = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Cache-Control", "max-age=300, s-maxage=3600");
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Transfer-Encoding", "chunked");
  responseHeaders.set("Connection", "keep-alive");

  return new Response(`<!DOCTYPE html>${html}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
