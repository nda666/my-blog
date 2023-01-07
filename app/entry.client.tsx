import { RemixBrowser } from "@remix-run/react";
// import { hydrate } from "react-dom";
import { hydrateRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";

// hydrate(<RemixBrowser />, document);
hydrateRoot(document, <RemixBrowser />);

inject();
