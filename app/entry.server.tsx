// entry.server.tsx
import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node"; // Depends on the runtime you choose

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

  return new Response(`<!DOCTYPE html>${html}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
