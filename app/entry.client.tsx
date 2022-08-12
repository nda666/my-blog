import * as React from "react";
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import ThemeProvider from "./contexts/ThemeContext";

hydrate(<RemixBrowser />, document);
