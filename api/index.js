var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all4) => {
  for (var name in all4)
    __defProp(target, name, { get: all4[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/aboutMe.tsx
var require_aboutMe = __commonJS({
  "app/routes/aboutMe.tsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_react3 = require("@remix-run/react");

// app/utils/sentry.ts
var import_react = require("@remix-run/react"), Sentry = __toESM(require("@sentry/remix")), import_react2 = require("react"), SentryInit = (dsn) => {
  Sentry.init({
    dsn,
    tracesSampleRate: 1,
    integrations: [
      new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.remixRouterInstrumentation(
          import_react2.useEffect,
          import_react.useLocation,
          import_react.useMatches
        )
      })
    ]
  });
};

// app/config.ts
var config = {
  appName: process.env.APP_NAME || "My Blog",
  githubUsername: process.env.GITHUB_USERNAME || "",
  githubToken: process.env.GITHUB_TOKEN || "",
  githubTopic: process.env.GITHUB_TOPIC || void 0,
  sessionSecret: process.env.SESSION_SECRET || "",
  contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID || "",
  contentfulEnvironmentId: process.env.CONTENTFUL_ENVIRONMENT_ID || "master",
  contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  sentryDsn: process.env.SENTRY_DSN || ""
}, config_default = config;

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
SentryInit(config_default.sentryDsn);
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let html4 = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Cache-Control", "max-age=300, s-maxage=3600"), responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${html4}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_remix = require("@sentry/remix");

// app/contexts/ThemeContext.tsx
var import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_react6 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ThemeContext = (0, import_react6.createContext)({}), useValue = (initialTheme) => {
  let [theme, setTheme] = (0, import_react6.useState)(), [submitState, setSubmitState] = (0, import_react6.useState)("idle"), persistTheme = (0, import_react4.useFetcher)(), persistThemeRef = (0, import_react5.useRef)(persistTheme);
  (0, import_react6.useEffect)(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);
  let mountRun = (0, import_react5.useRef)(!1);
  return (0, import_react6.useEffect)(() => {
    if (!mountRun.current) {
      mountRun.current = !0;
      return;
    }
    !theme || persistThemeRef.current.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]), (0, import_react6.useEffect)(() => {
    setSubmitState(persistTheme.state);
  }, [persistTheme == null ? void 0 : persistTheme.state]), {
    theme,
    setTheme,
    submitState
  };
};
function ThemeProvider({
  initialTheme,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeContext.Provider, {
    value: useValue(initialTheme),
    children
  }, void 0, !1, {
    fileName: "app/contexts/ThemeContext.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
var useTheme = () => {
  let { theme, setTheme, submitState } = (0, import_react5.useContext)(ThemeContext);
  return {
    isDark: () => theme === "dark",
    toggleTheme: () => {
      setTheme(theme === "dark" ? "light" : "dark");
    },
    submitState
  };
};

// app/components/BreadCrumb.tsx
var import_react7 = require("@remix-run/react"), import_ti = require("react-icons/ti"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Breadcrumb() {
  let route = (0, import_react7.useMatches)()[1];
  if (route.pathname === "/")
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, !1, {
      fileName: "app/components/BreadCrumb.tsx",
      lineNumber: 8,
      columnNumber: 12
    }, this);
  let pathNames = route.pathname.split("/"), breadCrumbs = [];
  for (let i = 0; i < pathNames.length; i++)
    breadCrumbs.push({
      name: pathNames[i],
      path: pathNames.slice(0, i + 1).join("/"),
      active: i + 1 == pathNames.length
    });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "px-10 mb-10",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
      className: "flex",
      "aria-label": "Breadcrumb",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        className: "inline-flex items-center space-x-1 md:space-x-3",
        children: breadCrumbs.map((breadCrumb, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mr-2 text-primary",
                children: breadCrumb.name == "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ti.TiHomeOutline, {}, void 0, !1, {
                  fileName: "app/components/BreadCrumb.tsx",
                  lineNumber: 29,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ti.TiChevronRightOutline, {}, void 0, !1, {
                  fileName: "app/components/BreadCrumb.tsx",
                  lineNumber: 31,
                  columnNumber: 21
                }, this)
              }, void 0, !1, {
                fileName: "app/components/BreadCrumb.tsx",
                lineNumber: 27,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
                to: breadCrumb.path,
                className: `capitalize link link-hover ${breadCrumb.active ? "link-neutral" : "link-primary"} `,
                children: breadCrumb.name || "Home"
              }, void 0, !1, {
                fileName: "app/components/BreadCrumb.tsx",
                lineNumber: 34,
                columnNumber: 17
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/BreadCrumb.tsx",
            lineNumber: 26,
            columnNumber: 15
          }, this)
        }, index2, !1, {
          fileName: "app/components/BreadCrumb.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this))
      }, void 0, !1, {
        fileName: "app/components/BreadCrumb.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/BreadCrumb.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/BreadCrumb.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/footer.tsx
var import_react8 = require("@remix-run/react"), import_ri = require("react-icons/ri"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Footer(props) {
  return console.log(props), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    className: "footer footer-center mt-10 p-10 bg-primary text-primary-content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "grid grid-flow-col gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            to: "",
            className: "link link-hover",
            children: "Home"
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            to: "repository",
            className: "link link-hover",
            children: "Repository"
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            to: "blog",
            className: "link link-hover",
            children: "Blog"
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
            to: "profile",
            className: "link link-hover",
            children: "Profile"
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
            width: "50",
            height: "50",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            fillRule: "evenodd",
            clipRule: "evenodd",
            className: "inline-block fill-current",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
              d: "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "font-bold",
            children: props.appName
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: "Copyright \xA9 2022 - All right reserved"
          }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/footer.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid grid-flow-col gap-4",
          children: [
            props.env.GITHUB_USERNAME && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialLink, {
              url: `https://github.com/${props.env.GITHUB_USERNAME}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri.RiGithubFill, {}, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 51,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this),
            props.env.SOCIAL_EMAIL && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialLink, {
              url: `mailto:${props.env.SOCIAL_EMAIL}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri.RiMailFill, {}, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 56,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 55,
              columnNumber: 13
            }, this),
            props.env.SOCIAL_INSTAGRAM_USERNAME && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialLink, {
              url: `https://instagram.com/${props.env.SOCIAL_INSTAGRAM_USERNAME}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri.RiInstagramFill, {}, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 63,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this),
            props.env.SOCIAL_TWITTER_USERNAME && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SocialLink, {
              url: `https://twitter.com/${props.env.SOCIAL_TWITTER_USERNAME}`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri.RiTwitterFill, {}, void 0, !1, {
                fileName: "app/components/footer.tsx",
                lineNumber: 70,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/footer.tsx",
              lineNumber: 67,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/footer.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
function SocialLink({ children, url }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
    title: url,
    className: "text-4xl",
    target: "_blank",
    rel: "noreferrer",
    href: url,
    children
  }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/components/navbar.tsx
var import_md2 = require("react-icons/md");

// app/components/drawer.tsx
var import_react9 = require("react"), import_react10 = require("@headlessui/react"), import_md = require("react-icons/md"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Drawer({}) {
  let [open, setOpen] = (0, import_react9.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
        id: "menu-button",
        tabIndex: 0,
        onClick: () => setOpen(!0),
        className: "btn btn-ghost btn-circle",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h7"
          }, void 0, !1, {
            fileName: "app/components/drawer.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/drawer.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/drawer.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DrawerContainer, {
        open,
        setOpen
      }, void 0, !1, {
        fileName: "app/components/drawer.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/drawer.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var DrawerContainer = ({ open, setOpen }) => {
  let body = typeof document < "u" ? document.body : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Transition.Root, {
    show: open,
    as: import_react9.Fragment,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Dialog, {
      as: "div",
      className: "relative z-50",
      onClose: setOpen,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "fixed inset-0 overflow-hidden",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "absolute inset-0 overflow-hidden",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pointer-events-none fixed inset-y-0 left-0 flex max-w-full",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Transition.Child, {
              as: import_react9.Fragment,
              enter: "transform transition ease-in-out duration-500 sm:duration-700",
              enterFrom: "-translate-x-full",
              enterTo: "-translate-x-0",
              leave: "transform transition ease-in-out duration-500 sm:duration-700",
              leaveFrom: "-translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Dialog.Panel, {
                className: "pointer-events-auto relative w-screen max-w-md",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex h-full flex-col bg-white text-gray-900 dark:bg-slate-800 dark:text-white shadow-xl overflow-y-auto",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "px-4 py-2 w-full flex flex-row justify-between items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Dialog.Title, {
                          className: "text-lg font-medium",
                          children: "Menu"
                        }, void 0, !1, {
                          fileName: "app/components/drawer.tsx",
                          lineNumber: 59,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Transition.Child, {
                          as: import_react9.Fragment,
                          enter: "ease-in-out duration-500",
                          enterFrom: "opacity-0",
                          enterTo: "opacity-100",
                          leave: "ease-in-out duration-500",
                          leaveFrom: "opacity-100",
                          leaveTo: "opacity-0",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            type: "button",
                            className: "btn btn-ghost btn-circle btn-lg",
                            onClick: () => setOpen(!1),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "sr-only",
                                children: "Close panel"
                              }, void 0, !1, {
                                fileName: "app/components/drawer.tsx",
                                lineNumber: 76,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_md.MdClose, {}, void 0, !1, {
                                fileName: "app/components/drawer.tsx",
                                lineNumber: 77,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/components/drawer.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/components/drawer.tsx",
                          lineNumber: 62,
                          columnNumber: 23
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/components/drawer.tsx",
                      lineNumber: 58,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "relative flex-1 px-4 overflow-y-auto",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                        className: "menu w-full p-0 rounded-box",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              children: "Home"
                            }, void 0, !1, {
                              fileName: "app/components/drawer.tsx",
                              lineNumber: 84,
                              columnNumber: 27
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/components/drawer.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              children: "Repository"
                            }, void 0, !1, {
                              fileName: "app/components/drawer.tsx",
                              lineNumber: 87,
                              columnNumber: 27
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/components/drawer.tsx",
                            lineNumber: 86,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              children: "Blog"
                            }, void 0, !1, {
                              fileName: "app/components/drawer.tsx",
                              lineNumber: 90,
                              columnNumber: 27
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/components/drawer.tsx",
                            lineNumber: 89,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                              children: "Profile"
                            }, void 0, !1, {
                              fileName: "app/components/drawer.tsx",
                              lineNumber: 93,
                              columnNumber: 27
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/components/drawer.tsx",
                            lineNumber: 92,
                            columnNumber: 25
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/components/drawer.tsx",
                        lineNumber: 82,
                        columnNumber: 23
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/components/drawer.tsx",
                      lineNumber: 81,
                      columnNumber: 21
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/components/drawer.tsx",
                  lineNumber: 57,
                  columnNumber: 19
                }, this)
              }, void 0, !1, {
                fileName: "app/components/drawer.tsx",
                lineNumber: 56,
                columnNumber: 17
              }, this)
            }, void 0, !1, {
              fileName: "app/components/drawer.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this)
          }, void 0, !1, {
            fileName: "app/components/drawer.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/drawer.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, !1, {
        fileName: "app/components/drawer.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/drawer.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/drawer.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
};

// app/components/navbar.tsx
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Navbar({
  title,
  children
}) {
  let { isDark, toggleTheme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "fixed z-10 top-0 navbar bg-base-100 dark:bg-gray-900 dark:text-slate-100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "navbar-start justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Drawer, {}, void 0, !1, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "hidden md:block",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
                to: "/",
                className: "btn btn-ghost normal-case hover:dark:bg-slate-600",
                children: "Home"
              }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 22,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
                to: "/repository",
                className: "btn btn-ghost normal-case hover:dark:bg-slate-600",
                children: "Repository"
              }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 28,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "navbar-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          className: "btn btn-ghost normal-case text-2xl app-name-header ",
          children: title || "APP_TITLE"
        }, void 0, !1, {
          fileName: "app/components/navbar.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "navbar-end justify-end md:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "hidden md:block",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                className: "btn btn-ghost normal-case hover:dark:bg-slate-600 ",
                children: "Blog"
              }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 43,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                className: "btn btn-ghost normal-case hover:dark:bg-slate-600 ",
                children: "Profile"
              }, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 46,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "btn btn-ghost btn-circle",
            onClick: toggleTheme,
            children: [
              isDark() === !1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_md2.MdOutlineDarkMode, {}, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 51,
                columnNumber: 34
              }, this),
              isDark() && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_md2.MdOutlineLightMode, {}, void 0, !1, {
                fileName: "app/components/navbar.tsx",
                lineNumber: 52,
                columnNumber: 24
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/navbar.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/navbar.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navbar.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/components/OverlayLoading.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OverlayLoading({ message }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "fixed dark:bg-white bg-black opacity-70 z-50 h-full w-full flex items-center justify-center",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex items-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
          className: "inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-violet-600",
          viewBox: "0 0 100 101",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
              d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
              fill: "currentColor"
            }, void 0, !1, {
              fileName: "app/components/OverlayLoading.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
              d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
              fill: "currentFill"
            }, void 0, !1, {
              fileName: "app/components/OverlayLoading.tsx",
              lineNumber: 18,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/OverlayLoading.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "sr-only",
          children: "Loading..."
        }, void 0, !1, {
          fileName: "app/components/OverlayLoading.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/OverlayLoading.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/OverlayLoading.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/layouts/DefaultLayout.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function DefaultLayout({
  env,
  children
}) {
  let { submitState } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      submitState != "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayLoading, {
        message: "Loading theme for you"
      }, void 0, !1, {
        fileName: "app/layouts/DefaultLayout.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-white dark:bg-gray-800 relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {
            title: env.APP_NAME
          }, void 0, !1, {
            fileName: "app/layouts/DefaultLayout.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-20",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumb, {}, void 0, !1, {
                fileName: "app/layouts/DefaultLayout.tsx",
                lineNumber: 25,
                columnNumber: 11
              }, this),
              children
            ]
          }, void 0, !0, {
            fileName: "app/layouts/DefaultLayout.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
            env
          }, void 0, !1, {
            fileName: "app/layouts/DefaultLayout.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/layouts/DefaultLayout.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/layouts/DefaultLayout.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-XIVXUZ2W.css";

// app/utils/theme.server.ts
var import_node = require("@remix-run/node"), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var themeStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "theme",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: !0
  }
});
async function getThemeSession(request) {
  let session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => session.get("theme"),
    setTheme: (theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session)
  };
}

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: app_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lobster&display=swap"
  }
], loader = async ({ request }) => {
  let theme = await getThemeSession(request), userTheme = await getThemeSession(request);
  if (!userTheme.getTheme()) {
    let headerRequestTheme = request.headers.get(
      "Sec-CH-Prefers-Color-Scheme"
    );
    userTheme.setTheme(
      headerRequestTheme == "light" || headerRequestTheme == "dark" ? headerRequestTheme : "light"
    );
  }
  return (0, import_node2.json)(
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
        SOCIAL_TWITTER_USERNAME: process.env.SOCIAL_TWITTER_USERNAME
      }
    },
    {
      headers: {
        "Set-Cookie": await userTheme.commit()
      }
    }
  );
}, meta = ({ data, params }) => {
  var _a;
  return {
    charset: "utf-8",
    title: ((_a = data == null ? void 0 : data.env) == null ? void 0 : _a.APP_NAME) || "",
    viewport: "width=device-width,initial-scale=1"
  };
};
function App() {
  let { theme, appName, env } = (0, import_react12.useLoaderData)();
  return SentryInit(env.SENTRY_DSN), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: `h-full ${theme || ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 91,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 92,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DefaultLayout, {
              env,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 97,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 96,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 95,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 101,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `window.env = ${JSON.stringify(env)}`
            }
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 102,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 107,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix.withSentry)(App);

// app/routes/repository.$repoName.tsx
var repository_repoName_exports = {};
__export(repository_repoName_exports, {
  default: () => Repository,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react15 = require("@remix-run/react");

// app/utils/cache.ts
var import_lru_cache = __toESM(require("lru-cache")), cache, cacheOption = {
  ttl: 1e3 * 60,
  max: 200
};
global.__cache || (global.__cache = new import_lru_cache.default(cacheOption)), cache = global.__cache;
var cache_default = cache;

// app/api/getGithubReadme.ts
function getGithubReadme(repoName) {
  return new Promise((resolve, reject) => {
    let cacheExist = cache_default.get(
      `repositories.${repoName}.readme`
    );
    if (cacheExist)
      return resolve(cacheExist), !0;
    fetch(
      `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repoName}/readme`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    ).then(async (response) => {
      let result = {
        data: response.ok ? await response.json() : void 0,
        error: response.ok ? void 0 : { type: "api", ...await response.json() }
      };
      response.ok && cache_default.set(`repositories.${repoName}`, result), resolve(result);
    }).catch((error) => {
      resolve({
        data: void 0,
        error
      });
    }).finally(() => {
      console.log("GetGithubReposResponse: from response");
    });
  });
}

// app/api/getGithubRepoDetail.ts
function getGithubRepoDetail(repoName) {
  return new Promise((resolve, reject) => {
    let cacheExist = cache_default.get(
      `repositories.${repoName}`
    );
    if (cacheExist)
      return resolve(cacheExist), console.log("GetGithubReposResponse: from cache"), !0;
    fetch(
      `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repoName}`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`
        }
      }
    ).then(async (response) => {
      let result = {
        data: response.ok ? await response.json() : void 0,
        error: response.ok ? void 0 : { type: "api", ...await response.json() }
      };
      response.ok && cache_default.set(`repositories.${repoName}`, result), resolve(result);
    }).catch((error) => {
      resolve({
        data: void 0,
        error
      });
    }).finally(() => {
      console.log("GetGithubReposResponse: from response");
    });
  });
}

// node_modules/.pnpm/react-markdown@8.0.3_q5o373oqrklnndq2vhekyuzhxi/node_modules/react-markdown/lib/uri-transformer.js
var protocols = ["http", "https", "mailto", "tel"];
function uriTransformer(uri) {
  let url = (uri || "").trim(), first = url.charAt(0);
  if (first === "#" || first === "/")
    return url;
  let colon = url.indexOf(":");
  if (colon === -1)
    return url;
  let index2 = -1;
  for (; ++index2 < protocols.length; ) {
    let protocol = protocols[index2];
    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol)
      return url;
  }
  return index2 = url.indexOf("?"), index2 !== -1 && colon > index2 || (index2 = url.indexOf("#"), index2 !== -1 && colon > index2) ? url : "javascript:void(0)";
}

// node_modules/.pnpm/react-markdown@8.0.3_q5o373oqrklnndq2vhekyuzhxi/node_modules/react-markdown/lib/react-markdown.js
var import_react14 = __toESM(require("react"), 1);

// node_modules/.pnpm/vfile@5.3.5/node_modules/vfile/lib/index.js
var import_is_buffer = __toESM(require("is-buffer"), 1);

// node_modules/.pnpm/unist-util-stringify-position@3.0.2/node_modules/unist-util-stringify-position/index.js
function stringifyPosition(value) {
  return !value || typeof value != "object" ? "" : "position" in value || "type" in value ? position(value.position) : "start" in value || "end" in value ? position(value) : "line" in value || "column" in value ? point(value) : "";
}
function point(point4) {
  return index(point4 && point4.line) + ":" + index(point4 && point4.column);
}
function position(pos) {
  return point(pos && pos.start) + "-" + point(pos && pos.end);
}
function index(value) {
  return value && typeof value == "number" ? value : 1;
}

// node_modules/.pnpm/vfile-message@3.1.2/node_modules/vfile-message/index.js
var VFileMessage = class extends Error {
  constructor(reason, place, origin) {
    let parts = [null, null], position3 = {
      start: { line: null, column: null },
      end: { line: null, column: null }
    };
    if (super(), typeof place == "string" && (origin = place, place = void 0), typeof origin == "string") {
      let index2 = origin.indexOf(":");
      index2 === -1 ? parts[1] = origin : (parts[0] = origin.slice(0, index2), parts[1] = origin.slice(index2 + 1));
    }
    place && ("type" in place || "position" in place ? place.position && (position3 = place.position) : "start" in place || "end" in place ? position3 = place : ("line" in place || "column" in place) && (position3.start = place)), this.name = stringifyPosition(place) || "1:1", this.message = typeof reason == "object" ? reason.message : reason, this.stack = typeof reason == "object" ? reason.stack : "", this.reason = this.message, this.fatal, this.line = position3.start.line, this.column = position3.start.column, this.source = parts[0], this.ruleId = parts[1], this.position = position3, this.actual, this.expected, this.file, this.url, this.note;
  }
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.fatal = null;
VFileMessage.prototype.column = null;
VFileMessage.prototype.line = null;
VFileMessage.prototype.source = null;
VFileMessage.prototype.ruleId = null;
VFileMessage.prototype.position = null;

// node_modules/.pnpm/vfile@5.3.5/node_modules/vfile/lib/minpath.js
var import_path = __toESM(require("path"), 1);

// node_modules/.pnpm/vfile@5.3.5/node_modules/vfile/lib/minproc.js
var import_process = __toESM(require("process"), 1);

// node_modules/.pnpm/vfile@5.3.5/node_modules/vfile/lib/minurl.js
var import_url = require("url");

// node_modules/.pnpm/vfile@5.3.5/node_modules/vfile/lib/minurl.shared.js
function isUrl(fileURLOrPath) {
  return fileURLOrPath !== null && typeof fileURLOrPath == "object" && fileURLOrPath.href && fileURLOrPath.origin;
}

// node_modules/.pnpm/vfile@5.3.5/node_modules/vfile/lib/index.js
var order = ["history", "path", "basename", "stem", "extname", "dirname"], VFile = class {
  constructor(value) {
    let options;
    value ? typeof value == "string" || (0, import_is_buffer.default)(value) ? options = { value } : isUrl(value) ? options = { path: value } : options = value : options = {}, this.data = {}, this.messages = [], this.history = [], this.cwd = import_process.default.cwd(), this.value, this.stored, this.result, this.map;
    let index2 = -1;
    for (; ++index2 < order.length; ) {
      let prop2 = order[index2];
      prop2 in options && options[prop2] !== void 0 && (this[prop2] = prop2 === "history" ? [...options[prop2]] : options[prop2]);
    }
    let prop;
    for (prop in options)
      order.includes(prop) || (this[prop] = options[prop]);
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(path2) {
    isUrl(path2) && (path2 = (0, import_url.fileURLToPath)(path2)), assertNonEmpty(path2, "path"), this.path !== path2 && this.history.push(path2);
  }
  get dirname() {
    return typeof this.path == "string" ? import_path.default.dirname(this.path) : void 0;
  }
  set dirname(dirname) {
    assertPath(this.basename, "dirname"), this.path = import_path.default.join(dirname || "", this.basename);
  }
  get basename() {
    return typeof this.path == "string" ? import_path.default.basename(this.path) : void 0;
  }
  set basename(basename) {
    assertNonEmpty(basename, "basename"), assertPart(basename, "basename"), this.path = import_path.default.join(this.dirname || "", basename);
  }
  get extname() {
    return typeof this.path == "string" ? import_path.default.extname(this.path) : void 0;
  }
  set extname(extname) {
    if (assertPart(extname, "extname"), assertPath(this.dirname, "extname"), extname) {
      if (extname.charCodeAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (extname.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = import_path.default.join(this.dirname, this.stem + (extname || ""));
  }
  get stem() {
    return typeof this.path == "string" ? import_path.default.basename(this.path, this.extname) : void 0;
  }
  set stem(stem) {
    assertNonEmpty(stem, "stem"), assertPart(stem, "stem"), this.path = import_path.default.join(this.dirname || "", stem + (this.extname || ""));
  }
  toString(encoding) {
    return (this.value || "").toString(encoding);
  }
  message(reason, place, origin) {
    let message = new VFileMessage(reason, place, origin);
    return this.path && (message.name = this.path + ":" + message.name, message.file = this.path), message.fatal = !1, this.messages.push(message), message;
  }
  info(reason, place, origin) {
    let message = this.message(reason, place, origin);
    return message.fatal = null, message;
  }
  fail(reason, place, origin) {
    let message = this.message(reason, place, origin);
    throw message.fatal = !0, message;
  }
};
function assertPart(part, name) {
  if (part && part.includes(import_path.default.sep))
    throw new Error(
      "`" + name + "` cannot be a path: did not expect `" + import_path.default.sep + "`"
    );
}
function assertNonEmpty(part, name) {
  if (!part)
    throw new Error("`" + name + "` cannot be empty");
}
function assertPath(path2, name) {
  if (!path2)
    throw new Error("Setting `" + name + "` requires `path` to be set too");
}

// node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
function bail(error) {
  if (error)
    throw error;
}

// node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
var import_is_buffer2 = __toESM(require("is-buffer"), 1), import_extend = __toESM(require("extend"), 1);

// node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
function isPlainObject(value) {
  if (typeof value != "object" || value === null)
    return !1;
  let prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}

// node_modules/.pnpm/trough@2.1.0/node_modules/trough/index.js
function trough() {
  let fns = [], pipeline = { run, use };
  return pipeline;
  function run(...values) {
    let middlewareIndex = -1, callback = values.pop();
    if (typeof callback != "function")
      throw new TypeError("Expected function as last argument, not " + callback);
    next(null, ...values);
    function next(error, ...output) {
      let fn = fns[++middlewareIndex], index2 = -1;
      if (error) {
        callback(error);
        return;
      }
      for (; ++index2 < values.length; )
        (output[index2] === null || output[index2] === void 0) && (output[index2] = values[index2]);
      values = output, fn ? wrap(fn, next)(...output) : callback(null, ...output);
    }
  }
  function use(middelware) {
    if (typeof middelware != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + middelware
      );
    return fns.push(middelware), pipeline;
  }
}
function wrap(middleware, callback) {
  let called;
  return wrapped;
  function wrapped(...parameters) {
    let fnExpectsCallback = middleware.length > parameters.length, result;
    fnExpectsCallback && parameters.push(done);
    try {
      result = middleware.apply(this, parameters);
    } catch (error) {
      let exception = error;
      if (fnExpectsCallback && called)
        throw exception;
      return done(exception);
    }
    fnExpectsCallback || (result instanceof Promise ? result.then(then, done) : result instanceof Error ? done(result) : then(result));
  }
  function done(error, ...output) {
    called || (called = !0, callback(error, ...output));
  }
  function then(value) {
    done(null, value);
  }
}

// node_modules/.pnpm/unified@10.1.2/node_modules/unified/lib/index.js
var unified = base().freeze(), own = {}.hasOwnProperty;
function base() {
  let transformers = trough(), attachers = [], namespace = {}, frozen, freezeIndex = -1;
  return processor.data = data, processor.Parser = void 0, processor.Compiler = void 0, processor.freeze = freeze, processor.attachers = attachers, processor.use = use, processor.parse = parse4, processor.stringify = stringify3, processor.run = run, processor.runSync = runSync, processor.process = process2, processor.processSync = processSync, processor;
  function processor() {
    let destination = base(), index2 = -1;
    for (; ++index2 < attachers.length; )
      destination.use(...attachers[index2]);
    return destination.data((0, import_extend.default)(!0, {}, namespace)), destination;
  }
  function data(key, value) {
    return typeof key == "string" ? arguments.length === 2 ? (assertUnfrozen("data", frozen), namespace[key] = value, processor) : own.call(namespace, key) && namespace[key] || null : key ? (assertUnfrozen("data", frozen), namespace = key, processor) : namespace;
  }
  function freeze() {
    if (frozen)
      return processor;
    for (; ++freezeIndex < attachers.length; ) {
      let [attacher, ...options] = attachers[freezeIndex];
      if (options[0] === !1)
        continue;
      options[0] === !0 && (options[0] = void 0);
      let transformer = attacher.call(processor, ...options);
      typeof transformer == "function" && transformers.use(transformer);
    }
    return frozen = !0, freezeIndex = Number.POSITIVE_INFINITY, processor;
  }
  function use(value, ...options) {
    let settings;
    if (assertUnfrozen("use", frozen), value != null)
      if (typeof value == "function")
        addPlugin(value, ...options);
      else if (typeof value == "object")
        Array.isArray(value) ? addList(value) : addPreset(value);
      else
        throw new TypeError("Expected usable value, not `" + value + "`");
    return settings && (namespace.settings = Object.assign(namespace.settings || {}, settings)), processor;
    function add(value2) {
      if (typeof value2 == "function")
        addPlugin(value2);
      else if (typeof value2 == "object")
        if (Array.isArray(value2)) {
          let [plugin, ...options2] = value2;
          addPlugin(plugin, ...options2);
        } else
          addPreset(value2);
      else
        throw new TypeError("Expected usable value, not `" + value2 + "`");
    }
    function addPreset(result) {
      addList(result.plugins), result.settings && (settings = Object.assign(settings || {}, result.settings));
    }
    function addList(plugins) {
      let index2 = -1;
      if (plugins != null)
        if (Array.isArray(plugins))
          for (; ++index2 < plugins.length; ) {
            let thing = plugins[index2];
            add(thing);
          }
        else
          throw new TypeError("Expected a list of plugins, not `" + plugins + "`");
    }
    function addPlugin(plugin, value2) {
      let index2 = -1, entry2;
      for (; ++index2 < attachers.length; )
        if (attachers[index2][0] === plugin) {
          entry2 = attachers[index2];
          break;
        }
      entry2 ? (isPlainObject(entry2[1]) && isPlainObject(value2) && (value2 = (0, import_extend.default)(!0, entry2[1], value2)), entry2[1] = value2) : attachers.push([...arguments]);
    }
  }
  function parse4(doc) {
    processor.freeze();
    let file = vfile(doc), Parser2 = processor.Parser;
    return assertParser("parse", Parser2), newable(Parser2, "parse") ? new Parser2(String(file), file).parse() : Parser2(String(file), file);
  }
  function stringify3(node, doc) {
    processor.freeze();
    let file = vfile(doc), Compiler = processor.Compiler;
    return assertCompiler("stringify", Compiler), assertNode(node), newable(Compiler, "compile") ? new Compiler(node, file).compile() : Compiler(node, file);
  }
  function run(node, doc, callback) {
    if (assertNode(node), processor.freeze(), !callback && typeof doc == "function" && (callback = doc, doc = void 0), !callback)
      return new Promise(executor);
    executor(null, callback);
    function executor(resolve, reject) {
      transformers.run(node, vfile(doc), done);
      function done(error, tree, file) {
        tree = tree || node, error ? reject(error) : resolve ? resolve(tree) : callback(null, tree, file);
      }
    }
  }
  function runSync(node, file) {
    let result, complete;
    return processor.run(node, file, done), assertDone("runSync", "run", complete), result;
    function done(error, tree) {
      bail(error), result = tree, complete = !0;
    }
  }
  function process2(doc, callback) {
    if (processor.freeze(), assertParser("process", processor.Parser), assertCompiler("process", processor.Compiler), !callback)
      return new Promise(executor);
    executor(null, callback);
    function executor(resolve, reject) {
      let file = vfile(doc);
      processor.run(processor.parse(file), file, (error, tree, file2) => {
        if (error || !tree || !file2)
          done(error);
        else {
          let result = processor.stringify(tree, file2);
          result == null || (looksLikeAVFileValue(result) ? file2.value = result : file2.result = result), done(error, file2);
        }
      });
      function done(error, file2) {
        error || !file2 ? reject(error) : resolve ? resolve(file2) : callback(null, file2);
      }
    }
  }
  function processSync(doc) {
    let complete;
    processor.freeze(), assertParser("processSync", processor.Parser), assertCompiler("processSync", processor.Compiler);
    let file = vfile(doc);
    return processor.process(file, done), assertDone("processSync", "process", complete), file;
    function done(error) {
      complete = !0, bail(error);
    }
  }
}
function newable(value, name) {
  return typeof value == "function" && value.prototype && (keys(value.prototype) || name in value.prototype);
}
function keys(value) {
  let key;
  for (key in value)
    if (own.call(value, key))
      return !0;
  return !1;
}
function assertParser(name, value) {
  if (typeof value != "function")
    throw new TypeError("Cannot `" + name + "` without `Parser`");
}
function assertCompiler(name, value) {
  if (typeof value != "function")
    throw new TypeError("Cannot `" + name + "` without `Compiler`");
}
function assertUnfrozen(name, frozen) {
  if (frozen)
    throw new Error(
      "Cannot call `" + name + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function assertNode(node) {
  if (!isPlainObject(node) || typeof node.type != "string")
    throw new TypeError("Expected node, got `" + node + "`");
}
function assertDone(name, asyncName, complete) {
  if (!complete)
    throw new Error(
      "`" + name + "` finished async. Use `" + asyncName + "` instead"
    );
}
function vfile(value) {
  return looksLikeAVFile(value) ? value : new VFile(value);
}
function looksLikeAVFile(value) {
  return Boolean(
    value && typeof value == "object" && "message" in value && "messages" in value
  );
}
function looksLikeAVFileValue(value) {
  return typeof value == "string" || (0, import_is_buffer2.default)(value);
}

// node_modules/.pnpm/mdast-util-to-string@3.1.0/node_modules/mdast-util-to-string/index.js
function toString(node, options) {
  var { includeImageAlt = !0 } = options || {};
  return one(node, includeImageAlt);
}
function one(node, includeImageAlt) {
  return node && typeof node == "object" && (node.value || (includeImageAlt ? node.alt : "") || "children" in node && all(node.children, includeImageAlt) || Array.isArray(node) && all(node, includeImageAlt)) || "";
}
function all(values, includeImageAlt) {
  for (var result = [], index2 = -1; ++index2 < values.length; )
    result[index2] = one(values[index2], includeImageAlt);
  return result.join("");
}

// node_modules/.pnpm/micromark-util-chunked@1.0.0/node_modules/micromark-util-chunked/index.js
function splice(list3, start, remove, items) {
  let end = list3.length, chunkStart = 0, parameters;
  if (start < 0 ? start = -start > end ? 0 : end + start : start = start > end ? end : start, remove = remove > 0 ? remove : 0, items.length < 1e4)
    parameters = Array.from(items), parameters.unshift(start, remove), [].splice.apply(list3, parameters);
  else
    for (remove && [].splice.apply(list3, [start, remove]); chunkStart < items.length; )
      parameters = items.slice(chunkStart, chunkStart + 1e4), parameters.unshift(start, 0), [].splice.apply(list3, parameters), chunkStart += 1e4, start += 1e4;
}
function push(list3, items) {
  return list3.length > 0 ? (splice(list3, list3.length, 0, items), list3) : items;
}

// node_modules/.pnpm/micromark-util-combine-extensions@1.0.0/node_modules/micromark-util-combine-extensions/index.js
var hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  let all4 = {}, index2 = -1;
  for (; ++index2 < extensions.length; )
    syntaxExtension(all4, extensions[index2]);
  return all4;
}
function syntaxExtension(all4, extension2) {
  let hook;
  for (hook in extension2) {
    let left = (hasOwnProperty.call(all4, hook) ? all4[hook] : void 0) || (all4[hook] = {}), right = extension2[hook], code3;
    for (code3 in right) {
      hasOwnProperty.call(left, code3) || (left[code3] = []);
      let value = right[code3];
      constructs(
        left[code3],
        Array.isArray(value) ? value : value ? [value] : []
      );
    }
  }
}
function constructs(existing, list3) {
  let index2 = -1, before = [];
  for (; ++index2 < list3.length; )
    (list3[index2].add === "after" ? existing : before).push(list3[index2]);
  splice(existing, 0, 0, before);
}

// node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/lib/unicode-punctuation-regex.js
var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

// node_modules/.pnpm/micromark-util-character@1.1.0/node_modules/micromark-util-character/index.js
var asciiAlpha = regexCheck(/[A-Za-z]/), asciiDigit = regexCheck(/\d/), asciiHexDigit = regexCheck(/[\dA-Fa-f]/), asciiAlphanumeric = regexCheck(/[\dA-Za-z]/), asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/), asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code3) {
  return code3 !== null && (code3 < 32 || code3 === 127);
}
function markdownLineEndingOrSpace(code3) {
  return code3 !== null && (code3 < 0 || code3 === 32);
}
function markdownLineEnding(code3) {
  return code3 !== null && code3 < -2;
}
function markdownSpace(code3) {
  return code3 === -2 || code3 === -1 || code3 === 32;
}
var unicodeWhitespace = regexCheck(/\s/), unicodePunctuation = regexCheck(unicodePunctuationRegex);
function regexCheck(regex) {
  return check;
  function check(code3) {
    return code3 !== null && regex.test(String.fromCharCode(code3));
  }
}

// node_modules/.pnpm/micromark-factory-space@1.0.0/node_modules/micromark-factory-space/index.js
function factorySpace(effects, ok2, type, max) {
  let limit = max ? max - 1 : Number.POSITIVE_INFINITY, size = 0;
  return start;
  function start(code3) {
    return markdownSpace(code3) ? (effects.enter(type), prefix(code3)) : ok2(code3);
  }
  function prefix(code3) {
    return markdownSpace(code3) && size++ < limit ? (effects.consume(code3), prefix) : (effects.exit(type), ok2(code3));
  }
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/content.js
var content = {
  tokenize: initializeContent
};
function initializeContent(effects) {
  let contentStart = effects.attempt(
    this.parser.constructs.contentInitial,
    afterContentStartConstruct,
    paragraphInitial
  ), previous3;
  return contentStart;
  function afterContentStartConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    return effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, contentStart, "linePrefix");
  }
  function paragraphInitial(code3) {
    return effects.enter("paragraph"), lineStart(code3);
  }
  function lineStart(code3) {
    let token = effects.enter("chunkText", {
      contentType: "text",
      previous: previous3
    });
    return previous3 && (previous3.next = token), previous3 = token, data(code3);
  }
  function data(code3) {
    if (code3 === null) {
      effects.exit("chunkText"), effects.exit("paragraph"), effects.consume(code3);
      return;
    }
    return markdownLineEnding(code3) ? (effects.consume(code3), effects.exit("chunkText"), lineStart) : (effects.consume(code3), data);
  }
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/document.js
var document2 = {
  tokenize: initializeDocument
}, containerConstruct = {
  tokenize: tokenizeContainer
};
function initializeDocument(effects) {
  let self = this, stack = [], continued = 0, childFlow, childToken, lineStartOffset;
  return start;
  function start(code3) {
    if (continued < stack.length) {
      let item = stack[continued];
      return self.containerState = item[1], effects.attempt(
        item[0].continuation,
        documentContinue,
        checkNewContainers
      )(code3);
    }
    return checkNewContainers(code3);
  }
  function documentContinue(code3) {
    if (continued++, self.containerState._closeFlow) {
      self.containerState._closeFlow = void 0, childFlow && closeFlow();
      let indexBeforeExits = self.events.length, indexBeforeFlow = indexBeforeExits, point4;
      for (; indexBeforeFlow--; )
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          point4 = self.events[indexBeforeFlow][1].end;
          break;
        }
      exitContainers(continued);
      let index2 = indexBeforeExits;
      for (; index2 < self.events.length; )
        self.events[index2][1].end = Object.assign({}, point4), index2++;
      return splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      ), self.events.length = index2, checkNewContainers(code3);
    }
    return start(code3);
  }
  function checkNewContainers(code3) {
    if (continued === stack.length) {
      if (!childFlow)
        return documentContinued(code3);
      if (childFlow.currentConstruct && childFlow.currentConstruct.concrete)
        return flowStart(code3);
      self.interrupt = Boolean(
        childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack
      );
    }
    return self.containerState = {}, effects.check(
      containerConstruct,
      thereIsANewContainer,
      thereIsNoNewContainer
    )(code3);
  }
  function thereIsANewContainer(code3) {
    return childFlow && closeFlow(), exitContainers(continued), documentContinued(code3);
  }
  function thereIsNoNewContainer(code3) {
    return self.parser.lazy[self.now().line] = continued !== stack.length, lineStartOffset = self.now().offset, flowStart(code3);
  }
  function documentContinued(code3) {
    return self.containerState = {}, effects.attempt(
      containerConstruct,
      containerContinue,
      flowStart
    )(code3);
  }
  function containerContinue(code3) {
    return continued++, stack.push([self.currentConstruct, self.containerState]), documentContinued(code3);
  }
  function flowStart(code3) {
    if (code3 === null) {
      childFlow && closeFlow(), exitContainers(0), effects.consume(code3);
      return;
    }
    return childFlow = childFlow || self.parser.flow(self.now()), effects.enter("chunkFlow", {
      contentType: "flow",
      previous: childToken,
      _tokenizer: childFlow
    }), flowContinue(code3);
  }
  function flowContinue(code3) {
    if (code3 === null) {
      writeToChild(effects.exit("chunkFlow"), !0), exitContainers(0), effects.consume(code3);
      return;
    }
    return markdownLineEnding(code3) ? (effects.consume(code3), writeToChild(effects.exit("chunkFlow")), continued = 0, self.interrupt = void 0, start) : (effects.consume(code3), flowContinue);
  }
  function writeToChild(token, eof) {
    let stream = self.sliceStream(token);
    if (eof && stream.push(null), token.previous = childToken, childToken && (childToken.next = token), childToken = token, childFlow.defineSkip(token.start), childFlow.write(stream), self.parser.lazy[token.start.line]) {
      let index2 = childFlow.events.length;
      for (; index2--; )
        if (childFlow.events[index2][1].start.offset < lineStartOffset && (!childFlow.events[index2][1].end || childFlow.events[index2][1].end.offset > lineStartOffset))
          return;
      let indexBeforeExits = self.events.length, indexBeforeFlow = indexBeforeExits, seen, point4;
      for (; indexBeforeFlow--; )
        if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
          if (seen) {
            point4 = self.events[indexBeforeFlow][1].end;
            break;
          }
          seen = !0;
        }
      for (exitContainers(continued), index2 = indexBeforeExits; index2 < self.events.length; )
        self.events[index2][1].end = Object.assign({}, point4), index2++;
      splice(
        self.events,
        indexBeforeFlow + 1,
        0,
        self.events.slice(indexBeforeExits)
      ), self.events.length = index2;
    }
  }
  function exitContainers(size) {
    let index2 = stack.length;
    for (; index2-- > size; ) {
      let entry2 = stack[index2];
      self.containerState = entry2[1], entry2[0].exit.call(self, effects);
    }
    stack.length = size;
  }
  function closeFlow() {
    childFlow.write([null]), childToken = void 0, childFlow = void 0, self.containerState._closeFlow = void 0;
  }
}
function tokenizeContainer(effects, ok2, nok) {
  return factorySpace(
    effects,
    effects.attempt(this.parser.constructs.document, ok2, nok),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}

// node_modules/.pnpm/micromark-util-classify-character@1.0.0/node_modules/micromark-util-classify-character/index.js
function classifyCharacter(code3) {
  if (code3 === null || markdownLineEndingOrSpace(code3) || unicodeWhitespace(code3))
    return 1;
  if (unicodePunctuation(code3))
    return 2;
}

// node_modules/.pnpm/micromark-util-resolve-all@1.0.0/node_modules/micromark-util-resolve-all/index.js
function resolveAll(constructs2, events, context) {
  let called = [], index2 = -1;
  for (; ++index2 < constructs2.length; ) {
    let resolve = constructs2[index2].resolveAll;
    resolve && !called.includes(resolve) && (events = resolve(events, context), called.push(resolve));
  }
  return events;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/attention.js
var attention = {
  name: "attention",
  tokenize: tokenizeAttention,
  resolveAll: resolveAllAttention
};
function resolveAllAttention(events, context) {
  let index2 = -1, open, group, text8, openingSequence, closingSequence, use, nextEvents, offset;
  for (; ++index2 < events.length; )
    if (events[index2][0] === "enter" && events[index2][1].type === "attentionSequence" && events[index2][1]._close) {
      for (open = index2; open--; )
        if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index2][1]).charCodeAt(0)) {
          if ((events[open][1]._close || events[index2][1]._open) && (events[index2][1].end.offset - events[index2][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index2][1].end.offset - events[index2][1].start.offset) % 3))
            continue;
          use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index2][1].end.offset - events[index2][1].start.offset > 1 ? 2 : 1;
          let start = Object.assign({}, events[open][1].end), end = Object.assign({}, events[index2][1].start);
          movePoint(start, -use), movePoint(end, use), openingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start,
            end: Object.assign({}, events[open][1].end)
          }, closingSequence = {
            type: use > 1 ? "strongSequence" : "emphasisSequence",
            start: Object.assign({}, events[index2][1].start),
            end
          }, text8 = {
            type: use > 1 ? "strongText" : "emphasisText",
            start: Object.assign({}, events[open][1].end),
            end: Object.assign({}, events[index2][1].start)
          }, group = {
            type: use > 1 ? "strong" : "emphasis",
            start: Object.assign({}, openingSequence.start),
            end: Object.assign({}, closingSequence.end)
          }, events[open][1].end = Object.assign({}, openingSequence.start), events[index2][1].start = Object.assign({}, closingSequence.end), nextEvents = [], events[open][1].end.offset - events[open][1].start.offset && (nextEvents = push(nextEvents, [
            ["enter", events[open][1], context],
            ["exit", events[open][1], context]
          ])), nextEvents = push(nextEvents, [
            ["enter", group, context],
            ["enter", openingSequence, context],
            ["exit", openingSequence, context],
            ["enter", text8, context]
          ]), nextEvents = push(
            nextEvents,
            resolveAll(
              context.parser.constructs.insideSpan.null,
              events.slice(open + 1, index2),
              context
            )
          ), nextEvents = push(nextEvents, [
            ["exit", text8, context],
            ["enter", closingSequence, context],
            ["exit", closingSequence, context],
            ["exit", group, context]
          ]), events[index2][1].end.offset - events[index2][1].start.offset ? (offset = 2, nextEvents = push(nextEvents, [
            ["enter", events[index2][1], context],
            ["exit", events[index2][1], context]
          ])) : offset = 0, splice(events, open - 1, index2 - open + 3, nextEvents), index2 = open + nextEvents.length - offset - 2;
          break;
        }
    }
  for (index2 = -1; ++index2 < events.length; )
    events[index2][1].type === "attentionSequence" && (events[index2][1].type = "data");
  return events;
}
function tokenizeAttention(effects, ok2) {
  let attentionMarkers2 = this.parser.constructs.attentionMarkers.null, previous3 = this.previous, before = classifyCharacter(previous3), marker;
  return start;
  function start(code3) {
    return effects.enter("attentionSequence"), marker = code3, sequence(code3);
  }
  function sequence(code3) {
    if (code3 === marker)
      return effects.consume(code3), sequence;
    let token = effects.exit("attentionSequence"), after = classifyCharacter(code3), open = !after || after === 2 && before || attentionMarkers2.includes(code3), close = !before || before === 2 && after || attentionMarkers2.includes(previous3);
    return token._open = Boolean(marker === 42 ? open : open && (before || !close)), token._close = Boolean(marker === 42 ? close : close && (after || !open)), ok2(code3);
  }
}
function movePoint(point4, offset) {
  point4.column += offset, point4.offset += offset, point4._bufferIndex += offset;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/autolink.js
var autolink = {
  name: "autolink",
  tokenize: tokenizeAutolink
};
function tokenizeAutolink(effects, ok2, nok) {
  let size = 1;
  return start;
  function start(code3) {
    return effects.enter("autolink"), effects.enter("autolinkMarker"), effects.consume(code3), effects.exit("autolinkMarker"), effects.enter("autolinkProtocol"), open;
  }
  function open(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), schemeOrEmailAtext) : asciiAtext(code3) ? emailAtext(code3) : nok(code3);
  }
  function schemeOrEmailAtext(code3) {
    return code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3) ? schemeInsideOrEmailAtext(code3) : emailAtext(code3);
  }
  function schemeInsideOrEmailAtext(code3) {
    return code3 === 58 ? (effects.consume(code3), urlInside) : (code3 === 43 || code3 === 45 || code3 === 46 || asciiAlphanumeric(code3)) && size++ < 32 ? (effects.consume(code3), schemeInsideOrEmailAtext) : emailAtext(code3);
  }
  function urlInside(code3) {
    return code3 === 62 ? (effects.exit("autolinkProtocol"), end(code3)) : code3 === null || code3 === 32 || code3 === 60 || asciiControl(code3) ? nok(code3) : (effects.consume(code3), urlInside);
  }
  function emailAtext(code3) {
    return code3 === 64 ? (effects.consume(code3), size = 0, emailAtSignOrDot) : asciiAtext(code3) ? (effects.consume(code3), emailAtext) : nok(code3);
  }
  function emailAtSignOrDot(code3) {
    return asciiAlphanumeric(code3) ? emailLabel(code3) : nok(code3);
  }
  function emailLabel(code3) {
    return code3 === 46 ? (effects.consume(code3), size = 0, emailAtSignOrDot) : code3 === 62 ? (effects.exit("autolinkProtocol").type = "autolinkEmail", end(code3)) : emailValue(code3);
  }
  function emailValue(code3) {
    return (code3 === 45 || asciiAlphanumeric(code3)) && size++ < 63 ? (effects.consume(code3), code3 === 45 ? emailValue : emailLabel) : nok(code3);
  }
  function end(code3) {
    return effects.enter("autolinkMarker"), effects.consume(code3), effects.exit("autolinkMarker"), effects.exit("autolink"), ok2;
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/blank-line.js
var blankLine = {
  tokenize: tokenizeBlankLine,
  partial: !0
};
function tokenizeBlankLine(effects, ok2, nok) {
  return factorySpace(effects, afterWhitespace, "linePrefix");
  function afterWhitespace(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/block-quote.js
var blockQuote = {
  name: "blockQuote",
  tokenize: tokenizeBlockQuoteStart,
  continuation: {
    tokenize: tokenizeBlockQuoteContinuation
  },
  exit
};
function tokenizeBlockQuoteStart(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    if (code3 === 62) {
      let state = self.containerState;
      return state.open || (effects.enter("blockQuote", {
        _container: !0
      }), state.open = !0), effects.enter("blockQuotePrefix"), effects.enter("blockQuoteMarker"), effects.consume(code3), effects.exit("blockQuoteMarker"), after;
    }
    return nok(code3);
  }
  function after(code3) {
    return markdownSpace(code3) ? (effects.enter("blockQuotePrefixWhitespace"), effects.consume(code3), effects.exit("blockQuotePrefixWhitespace"), effects.exit("blockQuotePrefix"), ok2) : (effects.exit("blockQuotePrefix"), ok2(code3));
  }
}
function tokenizeBlockQuoteContinuation(effects, ok2, nok) {
  return factorySpace(
    effects,
    effects.attempt(blockQuote, ok2, nok),
    "linePrefix",
    this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
  );
}
function exit(effects) {
  effects.exit("blockQuote");
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-escape.js
var characterEscape = {
  name: "characterEscape",
  tokenize: tokenizeCharacterEscape
};
function tokenizeCharacterEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("characterEscape"), effects.enter("escapeMarker"), effects.consume(code3), effects.exit("escapeMarker"), open;
  }
  function open(code3) {
    return asciiPunctuation(code3) ? (effects.enter("characterEscapeValue"), effects.consume(code3), effects.exit("characterEscapeValue"), effects.exit("characterEscape"), ok2) : nok(code3);
  }
}

// node_modules/.pnpm/character-entities@2.0.2/node_modules/character-entities/index.js
var characterEntities = {
  AElig: "\xC6",
  AMP: "&",
  Aacute: "\xC1",
  Abreve: "\u0102",
  Acirc: "\xC2",
  Acy: "\u0410",
  Afr: "\u{1D504}",
  Agrave: "\xC0",
  Alpha: "\u0391",
  Amacr: "\u0100",
  And: "\u2A53",
  Aogon: "\u0104",
  Aopf: "\u{1D538}",
  ApplyFunction: "\u2061",
  Aring: "\xC5",
  Ascr: "\u{1D49C}",
  Assign: "\u2254",
  Atilde: "\xC3",
  Auml: "\xC4",
  Backslash: "\u2216",
  Barv: "\u2AE7",
  Barwed: "\u2306",
  Bcy: "\u0411",
  Because: "\u2235",
  Bernoullis: "\u212C",
  Beta: "\u0392",
  Bfr: "\u{1D505}",
  Bopf: "\u{1D539}",
  Breve: "\u02D8",
  Bscr: "\u212C",
  Bumpeq: "\u224E",
  CHcy: "\u0427",
  COPY: "\xA9",
  Cacute: "\u0106",
  Cap: "\u22D2",
  CapitalDifferentialD: "\u2145",
  Cayleys: "\u212D",
  Ccaron: "\u010C",
  Ccedil: "\xC7",
  Ccirc: "\u0108",
  Cconint: "\u2230",
  Cdot: "\u010A",
  Cedilla: "\xB8",
  CenterDot: "\xB7",
  Cfr: "\u212D",
  Chi: "\u03A7",
  CircleDot: "\u2299",
  CircleMinus: "\u2296",
  CirclePlus: "\u2295",
  CircleTimes: "\u2297",
  ClockwiseContourIntegral: "\u2232",
  CloseCurlyDoubleQuote: "\u201D",
  CloseCurlyQuote: "\u2019",
  Colon: "\u2237",
  Colone: "\u2A74",
  Congruent: "\u2261",
  Conint: "\u222F",
  ContourIntegral: "\u222E",
  Copf: "\u2102",
  Coproduct: "\u2210",
  CounterClockwiseContourIntegral: "\u2233",
  Cross: "\u2A2F",
  Cscr: "\u{1D49E}",
  Cup: "\u22D3",
  CupCap: "\u224D",
  DD: "\u2145",
  DDotrahd: "\u2911",
  DJcy: "\u0402",
  DScy: "\u0405",
  DZcy: "\u040F",
  Dagger: "\u2021",
  Darr: "\u21A1",
  Dashv: "\u2AE4",
  Dcaron: "\u010E",
  Dcy: "\u0414",
  Del: "\u2207",
  Delta: "\u0394",
  Dfr: "\u{1D507}",
  DiacriticalAcute: "\xB4",
  DiacriticalDot: "\u02D9",
  DiacriticalDoubleAcute: "\u02DD",
  DiacriticalGrave: "`",
  DiacriticalTilde: "\u02DC",
  Diamond: "\u22C4",
  DifferentialD: "\u2146",
  Dopf: "\u{1D53B}",
  Dot: "\xA8",
  DotDot: "\u20DC",
  DotEqual: "\u2250",
  DoubleContourIntegral: "\u222F",
  DoubleDot: "\xA8",
  DoubleDownArrow: "\u21D3",
  DoubleLeftArrow: "\u21D0",
  DoubleLeftRightArrow: "\u21D4",
  DoubleLeftTee: "\u2AE4",
  DoubleLongLeftArrow: "\u27F8",
  DoubleLongLeftRightArrow: "\u27FA",
  DoubleLongRightArrow: "\u27F9",
  DoubleRightArrow: "\u21D2",
  DoubleRightTee: "\u22A8",
  DoubleUpArrow: "\u21D1",
  DoubleUpDownArrow: "\u21D5",
  DoubleVerticalBar: "\u2225",
  DownArrow: "\u2193",
  DownArrowBar: "\u2913",
  DownArrowUpArrow: "\u21F5",
  DownBreve: "\u0311",
  DownLeftRightVector: "\u2950",
  DownLeftTeeVector: "\u295E",
  DownLeftVector: "\u21BD",
  DownLeftVectorBar: "\u2956",
  DownRightTeeVector: "\u295F",
  DownRightVector: "\u21C1",
  DownRightVectorBar: "\u2957",
  DownTee: "\u22A4",
  DownTeeArrow: "\u21A7",
  Downarrow: "\u21D3",
  Dscr: "\u{1D49F}",
  Dstrok: "\u0110",
  ENG: "\u014A",
  ETH: "\xD0",
  Eacute: "\xC9",
  Ecaron: "\u011A",
  Ecirc: "\xCA",
  Ecy: "\u042D",
  Edot: "\u0116",
  Efr: "\u{1D508}",
  Egrave: "\xC8",
  Element: "\u2208",
  Emacr: "\u0112",
  EmptySmallSquare: "\u25FB",
  EmptyVerySmallSquare: "\u25AB",
  Eogon: "\u0118",
  Eopf: "\u{1D53C}",
  Epsilon: "\u0395",
  Equal: "\u2A75",
  EqualTilde: "\u2242",
  Equilibrium: "\u21CC",
  Escr: "\u2130",
  Esim: "\u2A73",
  Eta: "\u0397",
  Euml: "\xCB",
  Exists: "\u2203",
  ExponentialE: "\u2147",
  Fcy: "\u0424",
  Ffr: "\u{1D509}",
  FilledSmallSquare: "\u25FC",
  FilledVerySmallSquare: "\u25AA",
  Fopf: "\u{1D53D}",
  ForAll: "\u2200",
  Fouriertrf: "\u2131",
  Fscr: "\u2131",
  GJcy: "\u0403",
  GT: ">",
  Gamma: "\u0393",
  Gammad: "\u03DC",
  Gbreve: "\u011E",
  Gcedil: "\u0122",
  Gcirc: "\u011C",
  Gcy: "\u0413",
  Gdot: "\u0120",
  Gfr: "\u{1D50A}",
  Gg: "\u22D9",
  Gopf: "\u{1D53E}",
  GreaterEqual: "\u2265",
  GreaterEqualLess: "\u22DB",
  GreaterFullEqual: "\u2267",
  GreaterGreater: "\u2AA2",
  GreaterLess: "\u2277",
  GreaterSlantEqual: "\u2A7E",
  GreaterTilde: "\u2273",
  Gscr: "\u{1D4A2}",
  Gt: "\u226B",
  HARDcy: "\u042A",
  Hacek: "\u02C7",
  Hat: "^",
  Hcirc: "\u0124",
  Hfr: "\u210C",
  HilbertSpace: "\u210B",
  Hopf: "\u210D",
  HorizontalLine: "\u2500",
  Hscr: "\u210B",
  Hstrok: "\u0126",
  HumpDownHump: "\u224E",
  HumpEqual: "\u224F",
  IEcy: "\u0415",
  IJlig: "\u0132",
  IOcy: "\u0401",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Icy: "\u0418",
  Idot: "\u0130",
  Ifr: "\u2111",
  Igrave: "\xCC",
  Im: "\u2111",
  Imacr: "\u012A",
  ImaginaryI: "\u2148",
  Implies: "\u21D2",
  Int: "\u222C",
  Integral: "\u222B",
  Intersection: "\u22C2",
  InvisibleComma: "\u2063",
  InvisibleTimes: "\u2062",
  Iogon: "\u012E",
  Iopf: "\u{1D540}",
  Iota: "\u0399",
  Iscr: "\u2110",
  Itilde: "\u0128",
  Iukcy: "\u0406",
  Iuml: "\xCF",
  Jcirc: "\u0134",
  Jcy: "\u0419",
  Jfr: "\u{1D50D}",
  Jopf: "\u{1D541}",
  Jscr: "\u{1D4A5}",
  Jsercy: "\u0408",
  Jukcy: "\u0404",
  KHcy: "\u0425",
  KJcy: "\u040C",
  Kappa: "\u039A",
  Kcedil: "\u0136",
  Kcy: "\u041A",
  Kfr: "\u{1D50E}",
  Kopf: "\u{1D542}",
  Kscr: "\u{1D4A6}",
  LJcy: "\u0409",
  LT: "<",
  Lacute: "\u0139",
  Lambda: "\u039B",
  Lang: "\u27EA",
  Laplacetrf: "\u2112",
  Larr: "\u219E",
  Lcaron: "\u013D",
  Lcedil: "\u013B",
  Lcy: "\u041B",
  LeftAngleBracket: "\u27E8",
  LeftArrow: "\u2190",
  LeftArrowBar: "\u21E4",
  LeftArrowRightArrow: "\u21C6",
  LeftCeiling: "\u2308",
  LeftDoubleBracket: "\u27E6",
  LeftDownTeeVector: "\u2961",
  LeftDownVector: "\u21C3",
  LeftDownVectorBar: "\u2959",
  LeftFloor: "\u230A",
  LeftRightArrow: "\u2194",
  LeftRightVector: "\u294E",
  LeftTee: "\u22A3",
  LeftTeeArrow: "\u21A4",
  LeftTeeVector: "\u295A",
  LeftTriangle: "\u22B2",
  LeftTriangleBar: "\u29CF",
  LeftTriangleEqual: "\u22B4",
  LeftUpDownVector: "\u2951",
  LeftUpTeeVector: "\u2960",
  LeftUpVector: "\u21BF",
  LeftUpVectorBar: "\u2958",
  LeftVector: "\u21BC",
  LeftVectorBar: "\u2952",
  Leftarrow: "\u21D0",
  Leftrightarrow: "\u21D4",
  LessEqualGreater: "\u22DA",
  LessFullEqual: "\u2266",
  LessGreater: "\u2276",
  LessLess: "\u2AA1",
  LessSlantEqual: "\u2A7D",
  LessTilde: "\u2272",
  Lfr: "\u{1D50F}",
  Ll: "\u22D8",
  Lleftarrow: "\u21DA",
  Lmidot: "\u013F",
  LongLeftArrow: "\u27F5",
  LongLeftRightArrow: "\u27F7",
  LongRightArrow: "\u27F6",
  Longleftarrow: "\u27F8",
  Longleftrightarrow: "\u27FA",
  Longrightarrow: "\u27F9",
  Lopf: "\u{1D543}",
  LowerLeftArrow: "\u2199",
  LowerRightArrow: "\u2198",
  Lscr: "\u2112",
  Lsh: "\u21B0",
  Lstrok: "\u0141",
  Lt: "\u226A",
  Map: "\u2905",
  Mcy: "\u041C",
  MediumSpace: "\u205F",
  Mellintrf: "\u2133",
  Mfr: "\u{1D510}",
  MinusPlus: "\u2213",
  Mopf: "\u{1D544}",
  Mscr: "\u2133",
  Mu: "\u039C",
  NJcy: "\u040A",
  Nacute: "\u0143",
  Ncaron: "\u0147",
  Ncedil: "\u0145",
  Ncy: "\u041D",
  NegativeMediumSpace: "\u200B",
  NegativeThickSpace: "\u200B",
  NegativeThinSpace: "\u200B",
  NegativeVeryThinSpace: "\u200B",
  NestedGreaterGreater: "\u226B",
  NestedLessLess: "\u226A",
  NewLine: `
`,
  Nfr: "\u{1D511}",
  NoBreak: "\u2060",
  NonBreakingSpace: "\xA0",
  Nopf: "\u2115",
  Not: "\u2AEC",
  NotCongruent: "\u2262",
  NotCupCap: "\u226D",
  NotDoubleVerticalBar: "\u2226",
  NotElement: "\u2209",
  NotEqual: "\u2260",
  NotEqualTilde: "\u2242\u0338",
  NotExists: "\u2204",
  NotGreater: "\u226F",
  NotGreaterEqual: "\u2271",
  NotGreaterFullEqual: "\u2267\u0338",
  NotGreaterGreater: "\u226B\u0338",
  NotGreaterLess: "\u2279",
  NotGreaterSlantEqual: "\u2A7E\u0338",
  NotGreaterTilde: "\u2275",
  NotHumpDownHump: "\u224E\u0338",
  NotHumpEqual: "\u224F\u0338",
  NotLeftTriangle: "\u22EA",
  NotLeftTriangleBar: "\u29CF\u0338",
  NotLeftTriangleEqual: "\u22EC",
  NotLess: "\u226E",
  NotLessEqual: "\u2270",
  NotLessGreater: "\u2278",
  NotLessLess: "\u226A\u0338",
  NotLessSlantEqual: "\u2A7D\u0338",
  NotLessTilde: "\u2274",
  NotNestedGreaterGreater: "\u2AA2\u0338",
  NotNestedLessLess: "\u2AA1\u0338",
  NotPrecedes: "\u2280",
  NotPrecedesEqual: "\u2AAF\u0338",
  NotPrecedesSlantEqual: "\u22E0",
  NotReverseElement: "\u220C",
  NotRightTriangle: "\u22EB",
  NotRightTriangleBar: "\u29D0\u0338",
  NotRightTriangleEqual: "\u22ED",
  NotSquareSubset: "\u228F\u0338",
  NotSquareSubsetEqual: "\u22E2",
  NotSquareSuperset: "\u2290\u0338",
  NotSquareSupersetEqual: "\u22E3",
  NotSubset: "\u2282\u20D2",
  NotSubsetEqual: "\u2288",
  NotSucceeds: "\u2281",
  NotSucceedsEqual: "\u2AB0\u0338",
  NotSucceedsSlantEqual: "\u22E1",
  NotSucceedsTilde: "\u227F\u0338",
  NotSuperset: "\u2283\u20D2",
  NotSupersetEqual: "\u2289",
  NotTilde: "\u2241",
  NotTildeEqual: "\u2244",
  NotTildeFullEqual: "\u2247",
  NotTildeTilde: "\u2249",
  NotVerticalBar: "\u2224",
  Nscr: "\u{1D4A9}",
  Ntilde: "\xD1",
  Nu: "\u039D",
  OElig: "\u0152",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Ocy: "\u041E",
  Odblac: "\u0150",
  Ofr: "\u{1D512}",
  Ograve: "\xD2",
  Omacr: "\u014C",
  Omega: "\u03A9",
  Omicron: "\u039F",
  Oopf: "\u{1D546}",
  OpenCurlyDoubleQuote: "\u201C",
  OpenCurlyQuote: "\u2018",
  Or: "\u2A54",
  Oscr: "\u{1D4AA}",
  Oslash: "\xD8",
  Otilde: "\xD5",
  Otimes: "\u2A37",
  Ouml: "\xD6",
  OverBar: "\u203E",
  OverBrace: "\u23DE",
  OverBracket: "\u23B4",
  OverParenthesis: "\u23DC",
  PartialD: "\u2202",
  Pcy: "\u041F",
  Pfr: "\u{1D513}",
  Phi: "\u03A6",
  Pi: "\u03A0",
  PlusMinus: "\xB1",
  Poincareplane: "\u210C",
  Popf: "\u2119",
  Pr: "\u2ABB",
  Precedes: "\u227A",
  PrecedesEqual: "\u2AAF",
  PrecedesSlantEqual: "\u227C",
  PrecedesTilde: "\u227E",
  Prime: "\u2033",
  Product: "\u220F",
  Proportion: "\u2237",
  Proportional: "\u221D",
  Pscr: "\u{1D4AB}",
  Psi: "\u03A8",
  QUOT: '"',
  Qfr: "\u{1D514}",
  Qopf: "\u211A",
  Qscr: "\u{1D4AC}",
  RBarr: "\u2910",
  REG: "\xAE",
  Racute: "\u0154",
  Rang: "\u27EB",
  Rarr: "\u21A0",
  Rarrtl: "\u2916",
  Rcaron: "\u0158",
  Rcedil: "\u0156",
  Rcy: "\u0420",
  Re: "\u211C",
  ReverseElement: "\u220B",
  ReverseEquilibrium: "\u21CB",
  ReverseUpEquilibrium: "\u296F",
  Rfr: "\u211C",
  Rho: "\u03A1",
  RightAngleBracket: "\u27E9",
  RightArrow: "\u2192",
  RightArrowBar: "\u21E5",
  RightArrowLeftArrow: "\u21C4",
  RightCeiling: "\u2309",
  RightDoubleBracket: "\u27E7",
  RightDownTeeVector: "\u295D",
  RightDownVector: "\u21C2",
  RightDownVectorBar: "\u2955",
  RightFloor: "\u230B",
  RightTee: "\u22A2",
  RightTeeArrow: "\u21A6",
  RightTeeVector: "\u295B",
  RightTriangle: "\u22B3",
  RightTriangleBar: "\u29D0",
  RightTriangleEqual: "\u22B5",
  RightUpDownVector: "\u294F",
  RightUpTeeVector: "\u295C",
  RightUpVector: "\u21BE",
  RightUpVectorBar: "\u2954",
  RightVector: "\u21C0",
  RightVectorBar: "\u2953",
  Rightarrow: "\u21D2",
  Ropf: "\u211D",
  RoundImplies: "\u2970",
  Rrightarrow: "\u21DB",
  Rscr: "\u211B",
  Rsh: "\u21B1",
  RuleDelayed: "\u29F4",
  SHCHcy: "\u0429",
  SHcy: "\u0428",
  SOFTcy: "\u042C",
  Sacute: "\u015A",
  Sc: "\u2ABC",
  Scaron: "\u0160",
  Scedil: "\u015E",
  Scirc: "\u015C",
  Scy: "\u0421",
  Sfr: "\u{1D516}",
  ShortDownArrow: "\u2193",
  ShortLeftArrow: "\u2190",
  ShortRightArrow: "\u2192",
  ShortUpArrow: "\u2191",
  Sigma: "\u03A3",
  SmallCircle: "\u2218",
  Sopf: "\u{1D54A}",
  Sqrt: "\u221A",
  Square: "\u25A1",
  SquareIntersection: "\u2293",
  SquareSubset: "\u228F",
  SquareSubsetEqual: "\u2291",
  SquareSuperset: "\u2290",
  SquareSupersetEqual: "\u2292",
  SquareUnion: "\u2294",
  Sscr: "\u{1D4AE}",
  Star: "\u22C6",
  Sub: "\u22D0",
  Subset: "\u22D0",
  SubsetEqual: "\u2286",
  Succeeds: "\u227B",
  SucceedsEqual: "\u2AB0",
  SucceedsSlantEqual: "\u227D",
  SucceedsTilde: "\u227F",
  SuchThat: "\u220B",
  Sum: "\u2211",
  Sup: "\u22D1",
  Superset: "\u2283",
  SupersetEqual: "\u2287",
  Supset: "\u22D1",
  THORN: "\xDE",
  TRADE: "\u2122",
  TSHcy: "\u040B",
  TScy: "\u0426",
  Tab: "	",
  Tau: "\u03A4",
  Tcaron: "\u0164",
  Tcedil: "\u0162",
  Tcy: "\u0422",
  Tfr: "\u{1D517}",
  Therefore: "\u2234",
  Theta: "\u0398",
  ThickSpace: "\u205F\u200A",
  ThinSpace: "\u2009",
  Tilde: "\u223C",
  TildeEqual: "\u2243",
  TildeFullEqual: "\u2245",
  TildeTilde: "\u2248",
  Topf: "\u{1D54B}",
  TripleDot: "\u20DB",
  Tscr: "\u{1D4AF}",
  Tstrok: "\u0166",
  Uacute: "\xDA",
  Uarr: "\u219F",
  Uarrocir: "\u2949",
  Ubrcy: "\u040E",
  Ubreve: "\u016C",
  Ucirc: "\xDB",
  Ucy: "\u0423",
  Udblac: "\u0170",
  Ufr: "\u{1D518}",
  Ugrave: "\xD9",
  Umacr: "\u016A",
  UnderBar: "_",
  UnderBrace: "\u23DF",
  UnderBracket: "\u23B5",
  UnderParenthesis: "\u23DD",
  Union: "\u22C3",
  UnionPlus: "\u228E",
  Uogon: "\u0172",
  Uopf: "\u{1D54C}",
  UpArrow: "\u2191",
  UpArrowBar: "\u2912",
  UpArrowDownArrow: "\u21C5",
  UpDownArrow: "\u2195",
  UpEquilibrium: "\u296E",
  UpTee: "\u22A5",
  UpTeeArrow: "\u21A5",
  Uparrow: "\u21D1",
  Updownarrow: "\u21D5",
  UpperLeftArrow: "\u2196",
  UpperRightArrow: "\u2197",
  Upsi: "\u03D2",
  Upsilon: "\u03A5",
  Uring: "\u016E",
  Uscr: "\u{1D4B0}",
  Utilde: "\u0168",
  Uuml: "\xDC",
  VDash: "\u22AB",
  Vbar: "\u2AEB",
  Vcy: "\u0412",
  Vdash: "\u22A9",
  Vdashl: "\u2AE6",
  Vee: "\u22C1",
  Verbar: "\u2016",
  Vert: "\u2016",
  VerticalBar: "\u2223",
  VerticalLine: "|",
  VerticalSeparator: "\u2758",
  VerticalTilde: "\u2240",
  VeryThinSpace: "\u200A",
  Vfr: "\u{1D519}",
  Vopf: "\u{1D54D}",
  Vscr: "\u{1D4B1}",
  Vvdash: "\u22AA",
  Wcirc: "\u0174",
  Wedge: "\u22C0",
  Wfr: "\u{1D51A}",
  Wopf: "\u{1D54E}",
  Wscr: "\u{1D4B2}",
  Xfr: "\u{1D51B}",
  Xi: "\u039E",
  Xopf: "\u{1D54F}",
  Xscr: "\u{1D4B3}",
  YAcy: "\u042F",
  YIcy: "\u0407",
  YUcy: "\u042E",
  Yacute: "\xDD",
  Ycirc: "\u0176",
  Ycy: "\u042B",
  Yfr: "\u{1D51C}",
  Yopf: "\u{1D550}",
  Yscr: "\u{1D4B4}",
  Yuml: "\u0178",
  ZHcy: "\u0416",
  Zacute: "\u0179",
  Zcaron: "\u017D",
  Zcy: "\u0417",
  Zdot: "\u017B",
  ZeroWidthSpace: "\u200B",
  Zeta: "\u0396",
  Zfr: "\u2128",
  Zopf: "\u2124",
  Zscr: "\u{1D4B5}",
  aacute: "\xE1",
  abreve: "\u0103",
  ac: "\u223E",
  acE: "\u223E\u0333",
  acd: "\u223F",
  acirc: "\xE2",
  acute: "\xB4",
  acy: "\u0430",
  aelig: "\xE6",
  af: "\u2061",
  afr: "\u{1D51E}",
  agrave: "\xE0",
  alefsym: "\u2135",
  aleph: "\u2135",
  alpha: "\u03B1",
  amacr: "\u0101",
  amalg: "\u2A3F",
  amp: "&",
  and: "\u2227",
  andand: "\u2A55",
  andd: "\u2A5C",
  andslope: "\u2A58",
  andv: "\u2A5A",
  ang: "\u2220",
  ange: "\u29A4",
  angle: "\u2220",
  angmsd: "\u2221",
  angmsdaa: "\u29A8",
  angmsdab: "\u29A9",
  angmsdac: "\u29AA",
  angmsdad: "\u29AB",
  angmsdae: "\u29AC",
  angmsdaf: "\u29AD",
  angmsdag: "\u29AE",
  angmsdah: "\u29AF",
  angrt: "\u221F",
  angrtvb: "\u22BE",
  angrtvbd: "\u299D",
  angsph: "\u2222",
  angst: "\xC5",
  angzarr: "\u237C",
  aogon: "\u0105",
  aopf: "\u{1D552}",
  ap: "\u2248",
  apE: "\u2A70",
  apacir: "\u2A6F",
  ape: "\u224A",
  apid: "\u224B",
  apos: "'",
  approx: "\u2248",
  approxeq: "\u224A",
  aring: "\xE5",
  ascr: "\u{1D4B6}",
  ast: "*",
  asymp: "\u2248",
  asympeq: "\u224D",
  atilde: "\xE3",
  auml: "\xE4",
  awconint: "\u2233",
  awint: "\u2A11",
  bNot: "\u2AED",
  backcong: "\u224C",
  backepsilon: "\u03F6",
  backprime: "\u2035",
  backsim: "\u223D",
  backsimeq: "\u22CD",
  barvee: "\u22BD",
  barwed: "\u2305",
  barwedge: "\u2305",
  bbrk: "\u23B5",
  bbrktbrk: "\u23B6",
  bcong: "\u224C",
  bcy: "\u0431",
  bdquo: "\u201E",
  becaus: "\u2235",
  because: "\u2235",
  bemptyv: "\u29B0",
  bepsi: "\u03F6",
  bernou: "\u212C",
  beta: "\u03B2",
  beth: "\u2136",
  between: "\u226C",
  bfr: "\u{1D51F}",
  bigcap: "\u22C2",
  bigcirc: "\u25EF",
  bigcup: "\u22C3",
  bigodot: "\u2A00",
  bigoplus: "\u2A01",
  bigotimes: "\u2A02",
  bigsqcup: "\u2A06",
  bigstar: "\u2605",
  bigtriangledown: "\u25BD",
  bigtriangleup: "\u25B3",
  biguplus: "\u2A04",
  bigvee: "\u22C1",
  bigwedge: "\u22C0",
  bkarow: "\u290D",
  blacklozenge: "\u29EB",
  blacksquare: "\u25AA",
  blacktriangle: "\u25B4",
  blacktriangledown: "\u25BE",
  blacktriangleleft: "\u25C2",
  blacktriangleright: "\u25B8",
  blank: "\u2423",
  blk12: "\u2592",
  blk14: "\u2591",
  blk34: "\u2593",
  block: "\u2588",
  bne: "=\u20E5",
  bnequiv: "\u2261\u20E5",
  bnot: "\u2310",
  bopf: "\u{1D553}",
  bot: "\u22A5",
  bottom: "\u22A5",
  bowtie: "\u22C8",
  boxDL: "\u2557",
  boxDR: "\u2554",
  boxDl: "\u2556",
  boxDr: "\u2553",
  boxH: "\u2550",
  boxHD: "\u2566",
  boxHU: "\u2569",
  boxHd: "\u2564",
  boxHu: "\u2567",
  boxUL: "\u255D",
  boxUR: "\u255A",
  boxUl: "\u255C",
  boxUr: "\u2559",
  boxV: "\u2551",
  boxVH: "\u256C",
  boxVL: "\u2563",
  boxVR: "\u2560",
  boxVh: "\u256B",
  boxVl: "\u2562",
  boxVr: "\u255F",
  boxbox: "\u29C9",
  boxdL: "\u2555",
  boxdR: "\u2552",
  boxdl: "\u2510",
  boxdr: "\u250C",
  boxh: "\u2500",
  boxhD: "\u2565",
  boxhU: "\u2568",
  boxhd: "\u252C",
  boxhu: "\u2534",
  boxminus: "\u229F",
  boxplus: "\u229E",
  boxtimes: "\u22A0",
  boxuL: "\u255B",
  boxuR: "\u2558",
  boxul: "\u2518",
  boxur: "\u2514",
  boxv: "\u2502",
  boxvH: "\u256A",
  boxvL: "\u2561",
  boxvR: "\u255E",
  boxvh: "\u253C",
  boxvl: "\u2524",
  boxvr: "\u251C",
  bprime: "\u2035",
  breve: "\u02D8",
  brvbar: "\xA6",
  bscr: "\u{1D4B7}",
  bsemi: "\u204F",
  bsim: "\u223D",
  bsime: "\u22CD",
  bsol: "\\",
  bsolb: "\u29C5",
  bsolhsub: "\u27C8",
  bull: "\u2022",
  bullet: "\u2022",
  bump: "\u224E",
  bumpE: "\u2AAE",
  bumpe: "\u224F",
  bumpeq: "\u224F",
  cacute: "\u0107",
  cap: "\u2229",
  capand: "\u2A44",
  capbrcup: "\u2A49",
  capcap: "\u2A4B",
  capcup: "\u2A47",
  capdot: "\u2A40",
  caps: "\u2229\uFE00",
  caret: "\u2041",
  caron: "\u02C7",
  ccaps: "\u2A4D",
  ccaron: "\u010D",
  ccedil: "\xE7",
  ccirc: "\u0109",
  ccups: "\u2A4C",
  ccupssm: "\u2A50",
  cdot: "\u010B",
  cedil: "\xB8",
  cemptyv: "\u29B2",
  cent: "\xA2",
  centerdot: "\xB7",
  cfr: "\u{1D520}",
  chcy: "\u0447",
  check: "\u2713",
  checkmark: "\u2713",
  chi: "\u03C7",
  cir: "\u25CB",
  cirE: "\u29C3",
  circ: "\u02C6",
  circeq: "\u2257",
  circlearrowleft: "\u21BA",
  circlearrowright: "\u21BB",
  circledR: "\xAE",
  circledS: "\u24C8",
  circledast: "\u229B",
  circledcirc: "\u229A",
  circleddash: "\u229D",
  cire: "\u2257",
  cirfnint: "\u2A10",
  cirmid: "\u2AEF",
  cirscir: "\u29C2",
  clubs: "\u2663",
  clubsuit: "\u2663",
  colon: ":",
  colone: "\u2254",
  coloneq: "\u2254",
  comma: ",",
  commat: "@",
  comp: "\u2201",
  compfn: "\u2218",
  complement: "\u2201",
  complexes: "\u2102",
  cong: "\u2245",
  congdot: "\u2A6D",
  conint: "\u222E",
  copf: "\u{1D554}",
  coprod: "\u2210",
  copy: "\xA9",
  copysr: "\u2117",
  crarr: "\u21B5",
  cross: "\u2717",
  cscr: "\u{1D4B8}",
  csub: "\u2ACF",
  csube: "\u2AD1",
  csup: "\u2AD0",
  csupe: "\u2AD2",
  ctdot: "\u22EF",
  cudarrl: "\u2938",
  cudarrr: "\u2935",
  cuepr: "\u22DE",
  cuesc: "\u22DF",
  cularr: "\u21B6",
  cularrp: "\u293D",
  cup: "\u222A",
  cupbrcap: "\u2A48",
  cupcap: "\u2A46",
  cupcup: "\u2A4A",
  cupdot: "\u228D",
  cupor: "\u2A45",
  cups: "\u222A\uFE00",
  curarr: "\u21B7",
  curarrm: "\u293C",
  curlyeqprec: "\u22DE",
  curlyeqsucc: "\u22DF",
  curlyvee: "\u22CE",
  curlywedge: "\u22CF",
  curren: "\xA4",
  curvearrowleft: "\u21B6",
  curvearrowright: "\u21B7",
  cuvee: "\u22CE",
  cuwed: "\u22CF",
  cwconint: "\u2232",
  cwint: "\u2231",
  cylcty: "\u232D",
  dArr: "\u21D3",
  dHar: "\u2965",
  dagger: "\u2020",
  daleth: "\u2138",
  darr: "\u2193",
  dash: "\u2010",
  dashv: "\u22A3",
  dbkarow: "\u290F",
  dblac: "\u02DD",
  dcaron: "\u010F",
  dcy: "\u0434",
  dd: "\u2146",
  ddagger: "\u2021",
  ddarr: "\u21CA",
  ddotseq: "\u2A77",
  deg: "\xB0",
  delta: "\u03B4",
  demptyv: "\u29B1",
  dfisht: "\u297F",
  dfr: "\u{1D521}",
  dharl: "\u21C3",
  dharr: "\u21C2",
  diam: "\u22C4",
  diamond: "\u22C4",
  diamondsuit: "\u2666",
  diams: "\u2666",
  die: "\xA8",
  digamma: "\u03DD",
  disin: "\u22F2",
  div: "\xF7",
  divide: "\xF7",
  divideontimes: "\u22C7",
  divonx: "\u22C7",
  djcy: "\u0452",
  dlcorn: "\u231E",
  dlcrop: "\u230D",
  dollar: "$",
  dopf: "\u{1D555}",
  dot: "\u02D9",
  doteq: "\u2250",
  doteqdot: "\u2251",
  dotminus: "\u2238",
  dotplus: "\u2214",
  dotsquare: "\u22A1",
  doublebarwedge: "\u2306",
  downarrow: "\u2193",
  downdownarrows: "\u21CA",
  downharpoonleft: "\u21C3",
  downharpoonright: "\u21C2",
  drbkarow: "\u2910",
  drcorn: "\u231F",
  drcrop: "\u230C",
  dscr: "\u{1D4B9}",
  dscy: "\u0455",
  dsol: "\u29F6",
  dstrok: "\u0111",
  dtdot: "\u22F1",
  dtri: "\u25BF",
  dtrif: "\u25BE",
  duarr: "\u21F5",
  duhar: "\u296F",
  dwangle: "\u29A6",
  dzcy: "\u045F",
  dzigrarr: "\u27FF",
  eDDot: "\u2A77",
  eDot: "\u2251",
  eacute: "\xE9",
  easter: "\u2A6E",
  ecaron: "\u011B",
  ecir: "\u2256",
  ecirc: "\xEA",
  ecolon: "\u2255",
  ecy: "\u044D",
  edot: "\u0117",
  ee: "\u2147",
  efDot: "\u2252",
  efr: "\u{1D522}",
  eg: "\u2A9A",
  egrave: "\xE8",
  egs: "\u2A96",
  egsdot: "\u2A98",
  el: "\u2A99",
  elinters: "\u23E7",
  ell: "\u2113",
  els: "\u2A95",
  elsdot: "\u2A97",
  emacr: "\u0113",
  empty: "\u2205",
  emptyset: "\u2205",
  emptyv: "\u2205",
  emsp13: "\u2004",
  emsp14: "\u2005",
  emsp: "\u2003",
  eng: "\u014B",
  ensp: "\u2002",
  eogon: "\u0119",
  eopf: "\u{1D556}",
  epar: "\u22D5",
  eparsl: "\u29E3",
  eplus: "\u2A71",
  epsi: "\u03B5",
  epsilon: "\u03B5",
  epsiv: "\u03F5",
  eqcirc: "\u2256",
  eqcolon: "\u2255",
  eqsim: "\u2242",
  eqslantgtr: "\u2A96",
  eqslantless: "\u2A95",
  equals: "=",
  equest: "\u225F",
  equiv: "\u2261",
  equivDD: "\u2A78",
  eqvparsl: "\u29E5",
  erDot: "\u2253",
  erarr: "\u2971",
  escr: "\u212F",
  esdot: "\u2250",
  esim: "\u2242",
  eta: "\u03B7",
  eth: "\xF0",
  euml: "\xEB",
  euro: "\u20AC",
  excl: "!",
  exist: "\u2203",
  expectation: "\u2130",
  exponentiale: "\u2147",
  fallingdotseq: "\u2252",
  fcy: "\u0444",
  female: "\u2640",
  ffilig: "\uFB03",
  fflig: "\uFB00",
  ffllig: "\uFB04",
  ffr: "\u{1D523}",
  filig: "\uFB01",
  fjlig: "fj",
  flat: "\u266D",
  fllig: "\uFB02",
  fltns: "\u25B1",
  fnof: "\u0192",
  fopf: "\u{1D557}",
  forall: "\u2200",
  fork: "\u22D4",
  forkv: "\u2AD9",
  fpartint: "\u2A0D",
  frac12: "\xBD",
  frac13: "\u2153",
  frac14: "\xBC",
  frac15: "\u2155",
  frac16: "\u2159",
  frac18: "\u215B",
  frac23: "\u2154",
  frac25: "\u2156",
  frac34: "\xBE",
  frac35: "\u2157",
  frac38: "\u215C",
  frac45: "\u2158",
  frac56: "\u215A",
  frac58: "\u215D",
  frac78: "\u215E",
  frasl: "\u2044",
  frown: "\u2322",
  fscr: "\u{1D4BB}",
  gE: "\u2267",
  gEl: "\u2A8C",
  gacute: "\u01F5",
  gamma: "\u03B3",
  gammad: "\u03DD",
  gap: "\u2A86",
  gbreve: "\u011F",
  gcirc: "\u011D",
  gcy: "\u0433",
  gdot: "\u0121",
  ge: "\u2265",
  gel: "\u22DB",
  geq: "\u2265",
  geqq: "\u2267",
  geqslant: "\u2A7E",
  ges: "\u2A7E",
  gescc: "\u2AA9",
  gesdot: "\u2A80",
  gesdoto: "\u2A82",
  gesdotol: "\u2A84",
  gesl: "\u22DB\uFE00",
  gesles: "\u2A94",
  gfr: "\u{1D524}",
  gg: "\u226B",
  ggg: "\u22D9",
  gimel: "\u2137",
  gjcy: "\u0453",
  gl: "\u2277",
  glE: "\u2A92",
  gla: "\u2AA5",
  glj: "\u2AA4",
  gnE: "\u2269",
  gnap: "\u2A8A",
  gnapprox: "\u2A8A",
  gne: "\u2A88",
  gneq: "\u2A88",
  gneqq: "\u2269",
  gnsim: "\u22E7",
  gopf: "\u{1D558}",
  grave: "`",
  gscr: "\u210A",
  gsim: "\u2273",
  gsime: "\u2A8E",
  gsiml: "\u2A90",
  gt: ">",
  gtcc: "\u2AA7",
  gtcir: "\u2A7A",
  gtdot: "\u22D7",
  gtlPar: "\u2995",
  gtquest: "\u2A7C",
  gtrapprox: "\u2A86",
  gtrarr: "\u2978",
  gtrdot: "\u22D7",
  gtreqless: "\u22DB",
  gtreqqless: "\u2A8C",
  gtrless: "\u2277",
  gtrsim: "\u2273",
  gvertneqq: "\u2269\uFE00",
  gvnE: "\u2269\uFE00",
  hArr: "\u21D4",
  hairsp: "\u200A",
  half: "\xBD",
  hamilt: "\u210B",
  hardcy: "\u044A",
  harr: "\u2194",
  harrcir: "\u2948",
  harrw: "\u21AD",
  hbar: "\u210F",
  hcirc: "\u0125",
  hearts: "\u2665",
  heartsuit: "\u2665",
  hellip: "\u2026",
  hercon: "\u22B9",
  hfr: "\u{1D525}",
  hksearow: "\u2925",
  hkswarow: "\u2926",
  hoarr: "\u21FF",
  homtht: "\u223B",
  hookleftarrow: "\u21A9",
  hookrightarrow: "\u21AA",
  hopf: "\u{1D559}",
  horbar: "\u2015",
  hscr: "\u{1D4BD}",
  hslash: "\u210F",
  hstrok: "\u0127",
  hybull: "\u2043",
  hyphen: "\u2010",
  iacute: "\xED",
  ic: "\u2063",
  icirc: "\xEE",
  icy: "\u0438",
  iecy: "\u0435",
  iexcl: "\xA1",
  iff: "\u21D4",
  ifr: "\u{1D526}",
  igrave: "\xEC",
  ii: "\u2148",
  iiiint: "\u2A0C",
  iiint: "\u222D",
  iinfin: "\u29DC",
  iiota: "\u2129",
  ijlig: "\u0133",
  imacr: "\u012B",
  image: "\u2111",
  imagline: "\u2110",
  imagpart: "\u2111",
  imath: "\u0131",
  imof: "\u22B7",
  imped: "\u01B5",
  in: "\u2208",
  incare: "\u2105",
  infin: "\u221E",
  infintie: "\u29DD",
  inodot: "\u0131",
  int: "\u222B",
  intcal: "\u22BA",
  integers: "\u2124",
  intercal: "\u22BA",
  intlarhk: "\u2A17",
  intprod: "\u2A3C",
  iocy: "\u0451",
  iogon: "\u012F",
  iopf: "\u{1D55A}",
  iota: "\u03B9",
  iprod: "\u2A3C",
  iquest: "\xBF",
  iscr: "\u{1D4BE}",
  isin: "\u2208",
  isinE: "\u22F9",
  isindot: "\u22F5",
  isins: "\u22F4",
  isinsv: "\u22F3",
  isinv: "\u2208",
  it: "\u2062",
  itilde: "\u0129",
  iukcy: "\u0456",
  iuml: "\xEF",
  jcirc: "\u0135",
  jcy: "\u0439",
  jfr: "\u{1D527}",
  jmath: "\u0237",
  jopf: "\u{1D55B}",
  jscr: "\u{1D4BF}",
  jsercy: "\u0458",
  jukcy: "\u0454",
  kappa: "\u03BA",
  kappav: "\u03F0",
  kcedil: "\u0137",
  kcy: "\u043A",
  kfr: "\u{1D528}",
  kgreen: "\u0138",
  khcy: "\u0445",
  kjcy: "\u045C",
  kopf: "\u{1D55C}",
  kscr: "\u{1D4C0}",
  lAarr: "\u21DA",
  lArr: "\u21D0",
  lAtail: "\u291B",
  lBarr: "\u290E",
  lE: "\u2266",
  lEg: "\u2A8B",
  lHar: "\u2962",
  lacute: "\u013A",
  laemptyv: "\u29B4",
  lagran: "\u2112",
  lambda: "\u03BB",
  lang: "\u27E8",
  langd: "\u2991",
  langle: "\u27E8",
  lap: "\u2A85",
  laquo: "\xAB",
  larr: "\u2190",
  larrb: "\u21E4",
  larrbfs: "\u291F",
  larrfs: "\u291D",
  larrhk: "\u21A9",
  larrlp: "\u21AB",
  larrpl: "\u2939",
  larrsim: "\u2973",
  larrtl: "\u21A2",
  lat: "\u2AAB",
  latail: "\u2919",
  late: "\u2AAD",
  lates: "\u2AAD\uFE00",
  lbarr: "\u290C",
  lbbrk: "\u2772",
  lbrace: "{",
  lbrack: "[",
  lbrke: "\u298B",
  lbrksld: "\u298F",
  lbrkslu: "\u298D",
  lcaron: "\u013E",
  lcedil: "\u013C",
  lceil: "\u2308",
  lcub: "{",
  lcy: "\u043B",
  ldca: "\u2936",
  ldquo: "\u201C",
  ldquor: "\u201E",
  ldrdhar: "\u2967",
  ldrushar: "\u294B",
  ldsh: "\u21B2",
  le: "\u2264",
  leftarrow: "\u2190",
  leftarrowtail: "\u21A2",
  leftharpoondown: "\u21BD",
  leftharpoonup: "\u21BC",
  leftleftarrows: "\u21C7",
  leftrightarrow: "\u2194",
  leftrightarrows: "\u21C6",
  leftrightharpoons: "\u21CB",
  leftrightsquigarrow: "\u21AD",
  leftthreetimes: "\u22CB",
  leg: "\u22DA",
  leq: "\u2264",
  leqq: "\u2266",
  leqslant: "\u2A7D",
  les: "\u2A7D",
  lescc: "\u2AA8",
  lesdot: "\u2A7F",
  lesdoto: "\u2A81",
  lesdotor: "\u2A83",
  lesg: "\u22DA\uFE00",
  lesges: "\u2A93",
  lessapprox: "\u2A85",
  lessdot: "\u22D6",
  lesseqgtr: "\u22DA",
  lesseqqgtr: "\u2A8B",
  lessgtr: "\u2276",
  lesssim: "\u2272",
  lfisht: "\u297C",
  lfloor: "\u230A",
  lfr: "\u{1D529}",
  lg: "\u2276",
  lgE: "\u2A91",
  lhard: "\u21BD",
  lharu: "\u21BC",
  lharul: "\u296A",
  lhblk: "\u2584",
  ljcy: "\u0459",
  ll: "\u226A",
  llarr: "\u21C7",
  llcorner: "\u231E",
  llhard: "\u296B",
  lltri: "\u25FA",
  lmidot: "\u0140",
  lmoust: "\u23B0",
  lmoustache: "\u23B0",
  lnE: "\u2268",
  lnap: "\u2A89",
  lnapprox: "\u2A89",
  lne: "\u2A87",
  lneq: "\u2A87",
  lneqq: "\u2268",
  lnsim: "\u22E6",
  loang: "\u27EC",
  loarr: "\u21FD",
  lobrk: "\u27E6",
  longleftarrow: "\u27F5",
  longleftrightarrow: "\u27F7",
  longmapsto: "\u27FC",
  longrightarrow: "\u27F6",
  looparrowleft: "\u21AB",
  looparrowright: "\u21AC",
  lopar: "\u2985",
  lopf: "\u{1D55D}",
  loplus: "\u2A2D",
  lotimes: "\u2A34",
  lowast: "\u2217",
  lowbar: "_",
  loz: "\u25CA",
  lozenge: "\u25CA",
  lozf: "\u29EB",
  lpar: "(",
  lparlt: "\u2993",
  lrarr: "\u21C6",
  lrcorner: "\u231F",
  lrhar: "\u21CB",
  lrhard: "\u296D",
  lrm: "\u200E",
  lrtri: "\u22BF",
  lsaquo: "\u2039",
  lscr: "\u{1D4C1}",
  lsh: "\u21B0",
  lsim: "\u2272",
  lsime: "\u2A8D",
  lsimg: "\u2A8F",
  lsqb: "[",
  lsquo: "\u2018",
  lsquor: "\u201A",
  lstrok: "\u0142",
  lt: "<",
  ltcc: "\u2AA6",
  ltcir: "\u2A79",
  ltdot: "\u22D6",
  lthree: "\u22CB",
  ltimes: "\u22C9",
  ltlarr: "\u2976",
  ltquest: "\u2A7B",
  ltrPar: "\u2996",
  ltri: "\u25C3",
  ltrie: "\u22B4",
  ltrif: "\u25C2",
  lurdshar: "\u294A",
  luruhar: "\u2966",
  lvertneqq: "\u2268\uFE00",
  lvnE: "\u2268\uFE00",
  mDDot: "\u223A",
  macr: "\xAF",
  male: "\u2642",
  malt: "\u2720",
  maltese: "\u2720",
  map: "\u21A6",
  mapsto: "\u21A6",
  mapstodown: "\u21A7",
  mapstoleft: "\u21A4",
  mapstoup: "\u21A5",
  marker: "\u25AE",
  mcomma: "\u2A29",
  mcy: "\u043C",
  mdash: "\u2014",
  measuredangle: "\u2221",
  mfr: "\u{1D52A}",
  mho: "\u2127",
  micro: "\xB5",
  mid: "\u2223",
  midast: "*",
  midcir: "\u2AF0",
  middot: "\xB7",
  minus: "\u2212",
  minusb: "\u229F",
  minusd: "\u2238",
  minusdu: "\u2A2A",
  mlcp: "\u2ADB",
  mldr: "\u2026",
  mnplus: "\u2213",
  models: "\u22A7",
  mopf: "\u{1D55E}",
  mp: "\u2213",
  mscr: "\u{1D4C2}",
  mstpos: "\u223E",
  mu: "\u03BC",
  multimap: "\u22B8",
  mumap: "\u22B8",
  nGg: "\u22D9\u0338",
  nGt: "\u226B\u20D2",
  nGtv: "\u226B\u0338",
  nLeftarrow: "\u21CD",
  nLeftrightarrow: "\u21CE",
  nLl: "\u22D8\u0338",
  nLt: "\u226A\u20D2",
  nLtv: "\u226A\u0338",
  nRightarrow: "\u21CF",
  nVDash: "\u22AF",
  nVdash: "\u22AE",
  nabla: "\u2207",
  nacute: "\u0144",
  nang: "\u2220\u20D2",
  nap: "\u2249",
  napE: "\u2A70\u0338",
  napid: "\u224B\u0338",
  napos: "\u0149",
  napprox: "\u2249",
  natur: "\u266E",
  natural: "\u266E",
  naturals: "\u2115",
  nbsp: "\xA0",
  nbump: "\u224E\u0338",
  nbumpe: "\u224F\u0338",
  ncap: "\u2A43",
  ncaron: "\u0148",
  ncedil: "\u0146",
  ncong: "\u2247",
  ncongdot: "\u2A6D\u0338",
  ncup: "\u2A42",
  ncy: "\u043D",
  ndash: "\u2013",
  ne: "\u2260",
  neArr: "\u21D7",
  nearhk: "\u2924",
  nearr: "\u2197",
  nearrow: "\u2197",
  nedot: "\u2250\u0338",
  nequiv: "\u2262",
  nesear: "\u2928",
  nesim: "\u2242\u0338",
  nexist: "\u2204",
  nexists: "\u2204",
  nfr: "\u{1D52B}",
  ngE: "\u2267\u0338",
  nge: "\u2271",
  ngeq: "\u2271",
  ngeqq: "\u2267\u0338",
  ngeqslant: "\u2A7E\u0338",
  nges: "\u2A7E\u0338",
  ngsim: "\u2275",
  ngt: "\u226F",
  ngtr: "\u226F",
  nhArr: "\u21CE",
  nharr: "\u21AE",
  nhpar: "\u2AF2",
  ni: "\u220B",
  nis: "\u22FC",
  nisd: "\u22FA",
  niv: "\u220B",
  njcy: "\u045A",
  nlArr: "\u21CD",
  nlE: "\u2266\u0338",
  nlarr: "\u219A",
  nldr: "\u2025",
  nle: "\u2270",
  nleftarrow: "\u219A",
  nleftrightarrow: "\u21AE",
  nleq: "\u2270",
  nleqq: "\u2266\u0338",
  nleqslant: "\u2A7D\u0338",
  nles: "\u2A7D\u0338",
  nless: "\u226E",
  nlsim: "\u2274",
  nlt: "\u226E",
  nltri: "\u22EA",
  nltrie: "\u22EC",
  nmid: "\u2224",
  nopf: "\u{1D55F}",
  not: "\xAC",
  notin: "\u2209",
  notinE: "\u22F9\u0338",
  notindot: "\u22F5\u0338",
  notinva: "\u2209",
  notinvb: "\u22F7",
  notinvc: "\u22F6",
  notni: "\u220C",
  notniva: "\u220C",
  notnivb: "\u22FE",
  notnivc: "\u22FD",
  npar: "\u2226",
  nparallel: "\u2226",
  nparsl: "\u2AFD\u20E5",
  npart: "\u2202\u0338",
  npolint: "\u2A14",
  npr: "\u2280",
  nprcue: "\u22E0",
  npre: "\u2AAF\u0338",
  nprec: "\u2280",
  npreceq: "\u2AAF\u0338",
  nrArr: "\u21CF",
  nrarr: "\u219B",
  nrarrc: "\u2933\u0338",
  nrarrw: "\u219D\u0338",
  nrightarrow: "\u219B",
  nrtri: "\u22EB",
  nrtrie: "\u22ED",
  nsc: "\u2281",
  nsccue: "\u22E1",
  nsce: "\u2AB0\u0338",
  nscr: "\u{1D4C3}",
  nshortmid: "\u2224",
  nshortparallel: "\u2226",
  nsim: "\u2241",
  nsime: "\u2244",
  nsimeq: "\u2244",
  nsmid: "\u2224",
  nspar: "\u2226",
  nsqsube: "\u22E2",
  nsqsupe: "\u22E3",
  nsub: "\u2284",
  nsubE: "\u2AC5\u0338",
  nsube: "\u2288",
  nsubset: "\u2282\u20D2",
  nsubseteq: "\u2288",
  nsubseteqq: "\u2AC5\u0338",
  nsucc: "\u2281",
  nsucceq: "\u2AB0\u0338",
  nsup: "\u2285",
  nsupE: "\u2AC6\u0338",
  nsupe: "\u2289",
  nsupset: "\u2283\u20D2",
  nsupseteq: "\u2289",
  nsupseteqq: "\u2AC6\u0338",
  ntgl: "\u2279",
  ntilde: "\xF1",
  ntlg: "\u2278",
  ntriangleleft: "\u22EA",
  ntrianglelefteq: "\u22EC",
  ntriangleright: "\u22EB",
  ntrianglerighteq: "\u22ED",
  nu: "\u03BD",
  num: "#",
  numero: "\u2116",
  numsp: "\u2007",
  nvDash: "\u22AD",
  nvHarr: "\u2904",
  nvap: "\u224D\u20D2",
  nvdash: "\u22AC",
  nvge: "\u2265\u20D2",
  nvgt: ">\u20D2",
  nvinfin: "\u29DE",
  nvlArr: "\u2902",
  nvle: "\u2264\u20D2",
  nvlt: "<\u20D2",
  nvltrie: "\u22B4\u20D2",
  nvrArr: "\u2903",
  nvrtrie: "\u22B5\u20D2",
  nvsim: "\u223C\u20D2",
  nwArr: "\u21D6",
  nwarhk: "\u2923",
  nwarr: "\u2196",
  nwarrow: "\u2196",
  nwnear: "\u2927",
  oS: "\u24C8",
  oacute: "\xF3",
  oast: "\u229B",
  ocir: "\u229A",
  ocirc: "\xF4",
  ocy: "\u043E",
  odash: "\u229D",
  odblac: "\u0151",
  odiv: "\u2A38",
  odot: "\u2299",
  odsold: "\u29BC",
  oelig: "\u0153",
  ofcir: "\u29BF",
  ofr: "\u{1D52C}",
  ogon: "\u02DB",
  ograve: "\xF2",
  ogt: "\u29C1",
  ohbar: "\u29B5",
  ohm: "\u03A9",
  oint: "\u222E",
  olarr: "\u21BA",
  olcir: "\u29BE",
  olcross: "\u29BB",
  oline: "\u203E",
  olt: "\u29C0",
  omacr: "\u014D",
  omega: "\u03C9",
  omicron: "\u03BF",
  omid: "\u29B6",
  ominus: "\u2296",
  oopf: "\u{1D560}",
  opar: "\u29B7",
  operp: "\u29B9",
  oplus: "\u2295",
  or: "\u2228",
  orarr: "\u21BB",
  ord: "\u2A5D",
  order: "\u2134",
  orderof: "\u2134",
  ordf: "\xAA",
  ordm: "\xBA",
  origof: "\u22B6",
  oror: "\u2A56",
  orslope: "\u2A57",
  orv: "\u2A5B",
  oscr: "\u2134",
  oslash: "\xF8",
  osol: "\u2298",
  otilde: "\xF5",
  otimes: "\u2297",
  otimesas: "\u2A36",
  ouml: "\xF6",
  ovbar: "\u233D",
  par: "\u2225",
  para: "\xB6",
  parallel: "\u2225",
  parsim: "\u2AF3",
  parsl: "\u2AFD",
  part: "\u2202",
  pcy: "\u043F",
  percnt: "%",
  period: ".",
  permil: "\u2030",
  perp: "\u22A5",
  pertenk: "\u2031",
  pfr: "\u{1D52D}",
  phi: "\u03C6",
  phiv: "\u03D5",
  phmmat: "\u2133",
  phone: "\u260E",
  pi: "\u03C0",
  pitchfork: "\u22D4",
  piv: "\u03D6",
  planck: "\u210F",
  planckh: "\u210E",
  plankv: "\u210F",
  plus: "+",
  plusacir: "\u2A23",
  plusb: "\u229E",
  pluscir: "\u2A22",
  plusdo: "\u2214",
  plusdu: "\u2A25",
  pluse: "\u2A72",
  plusmn: "\xB1",
  plussim: "\u2A26",
  plustwo: "\u2A27",
  pm: "\xB1",
  pointint: "\u2A15",
  popf: "\u{1D561}",
  pound: "\xA3",
  pr: "\u227A",
  prE: "\u2AB3",
  prap: "\u2AB7",
  prcue: "\u227C",
  pre: "\u2AAF",
  prec: "\u227A",
  precapprox: "\u2AB7",
  preccurlyeq: "\u227C",
  preceq: "\u2AAF",
  precnapprox: "\u2AB9",
  precneqq: "\u2AB5",
  precnsim: "\u22E8",
  precsim: "\u227E",
  prime: "\u2032",
  primes: "\u2119",
  prnE: "\u2AB5",
  prnap: "\u2AB9",
  prnsim: "\u22E8",
  prod: "\u220F",
  profalar: "\u232E",
  profline: "\u2312",
  profsurf: "\u2313",
  prop: "\u221D",
  propto: "\u221D",
  prsim: "\u227E",
  prurel: "\u22B0",
  pscr: "\u{1D4C5}",
  psi: "\u03C8",
  puncsp: "\u2008",
  qfr: "\u{1D52E}",
  qint: "\u2A0C",
  qopf: "\u{1D562}",
  qprime: "\u2057",
  qscr: "\u{1D4C6}",
  quaternions: "\u210D",
  quatint: "\u2A16",
  quest: "?",
  questeq: "\u225F",
  quot: '"',
  rAarr: "\u21DB",
  rArr: "\u21D2",
  rAtail: "\u291C",
  rBarr: "\u290F",
  rHar: "\u2964",
  race: "\u223D\u0331",
  racute: "\u0155",
  radic: "\u221A",
  raemptyv: "\u29B3",
  rang: "\u27E9",
  rangd: "\u2992",
  range: "\u29A5",
  rangle: "\u27E9",
  raquo: "\xBB",
  rarr: "\u2192",
  rarrap: "\u2975",
  rarrb: "\u21E5",
  rarrbfs: "\u2920",
  rarrc: "\u2933",
  rarrfs: "\u291E",
  rarrhk: "\u21AA",
  rarrlp: "\u21AC",
  rarrpl: "\u2945",
  rarrsim: "\u2974",
  rarrtl: "\u21A3",
  rarrw: "\u219D",
  ratail: "\u291A",
  ratio: "\u2236",
  rationals: "\u211A",
  rbarr: "\u290D",
  rbbrk: "\u2773",
  rbrace: "}",
  rbrack: "]",
  rbrke: "\u298C",
  rbrksld: "\u298E",
  rbrkslu: "\u2990",
  rcaron: "\u0159",
  rcedil: "\u0157",
  rceil: "\u2309",
  rcub: "}",
  rcy: "\u0440",
  rdca: "\u2937",
  rdldhar: "\u2969",
  rdquo: "\u201D",
  rdquor: "\u201D",
  rdsh: "\u21B3",
  real: "\u211C",
  realine: "\u211B",
  realpart: "\u211C",
  reals: "\u211D",
  rect: "\u25AD",
  reg: "\xAE",
  rfisht: "\u297D",
  rfloor: "\u230B",
  rfr: "\u{1D52F}",
  rhard: "\u21C1",
  rharu: "\u21C0",
  rharul: "\u296C",
  rho: "\u03C1",
  rhov: "\u03F1",
  rightarrow: "\u2192",
  rightarrowtail: "\u21A3",
  rightharpoondown: "\u21C1",
  rightharpoonup: "\u21C0",
  rightleftarrows: "\u21C4",
  rightleftharpoons: "\u21CC",
  rightrightarrows: "\u21C9",
  rightsquigarrow: "\u219D",
  rightthreetimes: "\u22CC",
  ring: "\u02DA",
  risingdotseq: "\u2253",
  rlarr: "\u21C4",
  rlhar: "\u21CC",
  rlm: "\u200F",
  rmoust: "\u23B1",
  rmoustache: "\u23B1",
  rnmid: "\u2AEE",
  roang: "\u27ED",
  roarr: "\u21FE",
  robrk: "\u27E7",
  ropar: "\u2986",
  ropf: "\u{1D563}",
  roplus: "\u2A2E",
  rotimes: "\u2A35",
  rpar: ")",
  rpargt: "\u2994",
  rppolint: "\u2A12",
  rrarr: "\u21C9",
  rsaquo: "\u203A",
  rscr: "\u{1D4C7}",
  rsh: "\u21B1",
  rsqb: "]",
  rsquo: "\u2019",
  rsquor: "\u2019",
  rthree: "\u22CC",
  rtimes: "\u22CA",
  rtri: "\u25B9",
  rtrie: "\u22B5",
  rtrif: "\u25B8",
  rtriltri: "\u29CE",
  ruluhar: "\u2968",
  rx: "\u211E",
  sacute: "\u015B",
  sbquo: "\u201A",
  sc: "\u227B",
  scE: "\u2AB4",
  scap: "\u2AB8",
  scaron: "\u0161",
  sccue: "\u227D",
  sce: "\u2AB0",
  scedil: "\u015F",
  scirc: "\u015D",
  scnE: "\u2AB6",
  scnap: "\u2ABA",
  scnsim: "\u22E9",
  scpolint: "\u2A13",
  scsim: "\u227F",
  scy: "\u0441",
  sdot: "\u22C5",
  sdotb: "\u22A1",
  sdote: "\u2A66",
  seArr: "\u21D8",
  searhk: "\u2925",
  searr: "\u2198",
  searrow: "\u2198",
  sect: "\xA7",
  semi: ";",
  seswar: "\u2929",
  setminus: "\u2216",
  setmn: "\u2216",
  sext: "\u2736",
  sfr: "\u{1D530}",
  sfrown: "\u2322",
  sharp: "\u266F",
  shchcy: "\u0449",
  shcy: "\u0448",
  shortmid: "\u2223",
  shortparallel: "\u2225",
  shy: "\xAD",
  sigma: "\u03C3",
  sigmaf: "\u03C2",
  sigmav: "\u03C2",
  sim: "\u223C",
  simdot: "\u2A6A",
  sime: "\u2243",
  simeq: "\u2243",
  simg: "\u2A9E",
  simgE: "\u2AA0",
  siml: "\u2A9D",
  simlE: "\u2A9F",
  simne: "\u2246",
  simplus: "\u2A24",
  simrarr: "\u2972",
  slarr: "\u2190",
  smallsetminus: "\u2216",
  smashp: "\u2A33",
  smeparsl: "\u29E4",
  smid: "\u2223",
  smile: "\u2323",
  smt: "\u2AAA",
  smte: "\u2AAC",
  smtes: "\u2AAC\uFE00",
  softcy: "\u044C",
  sol: "/",
  solb: "\u29C4",
  solbar: "\u233F",
  sopf: "\u{1D564}",
  spades: "\u2660",
  spadesuit: "\u2660",
  spar: "\u2225",
  sqcap: "\u2293",
  sqcaps: "\u2293\uFE00",
  sqcup: "\u2294",
  sqcups: "\u2294\uFE00",
  sqsub: "\u228F",
  sqsube: "\u2291",
  sqsubset: "\u228F",
  sqsubseteq: "\u2291",
  sqsup: "\u2290",
  sqsupe: "\u2292",
  sqsupset: "\u2290",
  sqsupseteq: "\u2292",
  squ: "\u25A1",
  square: "\u25A1",
  squarf: "\u25AA",
  squf: "\u25AA",
  srarr: "\u2192",
  sscr: "\u{1D4C8}",
  ssetmn: "\u2216",
  ssmile: "\u2323",
  sstarf: "\u22C6",
  star: "\u2606",
  starf: "\u2605",
  straightepsilon: "\u03F5",
  straightphi: "\u03D5",
  strns: "\xAF",
  sub: "\u2282",
  subE: "\u2AC5",
  subdot: "\u2ABD",
  sube: "\u2286",
  subedot: "\u2AC3",
  submult: "\u2AC1",
  subnE: "\u2ACB",
  subne: "\u228A",
  subplus: "\u2ABF",
  subrarr: "\u2979",
  subset: "\u2282",
  subseteq: "\u2286",
  subseteqq: "\u2AC5",
  subsetneq: "\u228A",
  subsetneqq: "\u2ACB",
  subsim: "\u2AC7",
  subsub: "\u2AD5",
  subsup: "\u2AD3",
  succ: "\u227B",
  succapprox: "\u2AB8",
  succcurlyeq: "\u227D",
  succeq: "\u2AB0",
  succnapprox: "\u2ABA",
  succneqq: "\u2AB6",
  succnsim: "\u22E9",
  succsim: "\u227F",
  sum: "\u2211",
  sung: "\u266A",
  sup1: "\xB9",
  sup2: "\xB2",
  sup3: "\xB3",
  sup: "\u2283",
  supE: "\u2AC6",
  supdot: "\u2ABE",
  supdsub: "\u2AD8",
  supe: "\u2287",
  supedot: "\u2AC4",
  suphsol: "\u27C9",
  suphsub: "\u2AD7",
  suplarr: "\u297B",
  supmult: "\u2AC2",
  supnE: "\u2ACC",
  supne: "\u228B",
  supplus: "\u2AC0",
  supset: "\u2283",
  supseteq: "\u2287",
  supseteqq: "\u2AC6",
  supsetneq: "\u228B",
  supsetneqq: "\u2ACC",
  supsim: "\u2AC8",
  supsub: "\u2AD4",
  supsup: "\u2AD6",
  swArr: "\u21D9",
  swarhk: "\u2926",
  swarr: "\u2199",
  swarrow: "\u2199",
  swnwar: "\u292A",
  szlig: "\xDF",
  target: "\u2316",
  tau: "\u03C4",
  tbrk: "\u23B4",
  tcaron: "\u0165",
  tcedil: "\u0163",
  tcy: "\u0442",
  tdot: "\u20DB",
  telrec: "\u2315",
  tfr: "\u{1D531}",
  there4: "\u2234",
  therefore: "\u2234",
  theta: "\u03B8",
  thetasym: "\u03D1",
  thetav: "\u03D1",
  thickapprox: "\u2248",
  thicksim: "\u223C",
  thinsp: "\u2009",
  thkap: "\u2248",
  thksim: "\u223C",
  thorn: "\xFE",
  tilde: "\u02DC",
  times: "\xD7",
  timesb: "\u22A0",
  timesbar: "\u2A31",
  timesd: "\u2A30",
  tint: "\u222D",
  toea: "\u2928",
  top: "\u22A4",
  topbot: "\u2336",
  topcir: "\u2AF1",
  topf: "\u{1D565}",
  topfork: "\u2ADA",
  tosa: "\u2929",
  tprime: "\u2034",
  trade: "\u2122",
  triangle: "\u25B5",
  triangledown: "\u25BF",
  triangleleft: "\u25C3",
  trianglelefteq: "\u22B4",
  triangleq: "\u225C",
  triangleright: "\u25B9",
  trianglerighteq: "\u22B5",
  tridot: "\u25EC",
  trie: "\u225C",
  triminus: "\u2A3A",
  triplus: "\u2A39",
  trisb: "\u29CD",
  tritime: "\u2A3B",
  trpezium: "\u23E2",
  tscr: "\u{1D4C9}",
  tscy: "\u0446",
  tshcy: "\u045B",
  tstrok: "\u0167",
  twixt: "\u226C",
  twoheadleftarrow: "\u219E",
  twoheadrightarrow: "\u21A0",
  uArr: "\u21D1",
  uHar: "\u2963",
  uacute: "\xFA",
  uarr: "\u2191",
  ubrcy: "\u045E",
  ubreve: "\u016D",
  ucirc: "\xFB",
  ucy: "\u0443",
  udarr: "\u21C5",
  udblac: "\u0171",
  udhar: "\u296E",
  ufisht: "\u297E",
  ufr: "\u{1D532}",
  ugrave: "\xF9",
  uharl: "\u21BF",
  uharr: "\u21BE",
  uhblk: "\u2580",
  ulcorn: "\u231C",
  ulcorner: "\u231C",
  ulcrop: "\u230F",
  ultri: "\u25F8",
  umacr: "\u016B",
  uml: "\xA8",
  uogon: "\u0173",
  uopf: "\u{1D566}",
  uparrow: "\u2191",
  updownarrow: "\u2195",
  upharpoonleft: "\u21BF",
  upharpoonright: "\u21BE",
  uplus: "\u228E",
  upsi: "\u03C5",
  upsih: "\u03D2",
  upsilon: "\u03C5",
  upuparrows: "\u21C8",
  urcorn: "\u231D",
  urcorner: "\u231D",
  urcrop: "\u230E",
  uring: "\u016F",
  urtri: "\u25F9",
  uscr: "\u{1D4CA}",
  utdot: "\u22F0",
  utilde: "\u0169",
  utri: "\u25B5",
  utrif: "\u25B4",
  uuarr: "\u21C8",
  uuml: "\xFC",
  uwangle: "\u29A7",
  vArr: "\u21D5",
  vBar: "\u2AE8",
  vBarv: "\u2AE9",
  vDash: "\u22A8",
  vangrt: "\u299C",
  varepsilon: "\u03F5",
  varkappa: "\u03F0",
  varnothing: "\u2205",
  varphi: "\u03D5",
  varpi: "\u03D6",
  varpropto: "\u221D",
  varr: "\u2195",
  varrho: "\u03F1",
  varsigma: "\u03C2",
  varsubsetneq: "\u228A\uFE00",
  varsubsetneqq: "\u2ACB\uFE00",
  varsupsetneq: "\u228B\uFE00",
  varsupsetneqq: "\u2ACC\uFE00",
  vartheta: "\u03D1",
  vartriangleleft: "\u22B2",
  vartriangleright: "\u22B3",
  vcy: "\u0432",
  vdash: "\u22A2",
  vee: "\u2228",
  veebar: "\u22BB",
  veeeq: "\u225A",
  vellip: "\u22EE",
  verbar: "|",
  vert: "|",
  vfr: "\u{1D533}",
  vltri: "\u22B2",
  vnsub: "\u2282\u20D2",
  vnsup: "\u2283\u20D2",
  vopf: "\u{1D567}",
  vprop: "\u221D",
  vrtri: "\u22B3",
  vscr: "\u{1D4CB}",
  vsubnE: "\u2ACB\uFE00",
  vsubne: "\u228A\uFE00",
  vsupnE: "\u2ACC\uFE00",
  vsupne: "\u228B\uFE00",
  vzigzag: "\u299A",
  wcirc: "\u0175",
  wedbar: "\u2A5F",
  wedge: "\u2227",
  wedgeq: "\u2259",
  weierp: "\u2118",
  wfr: "\u{1D534}",
  wopf: "\u{1D568}",
  wp: "\u2118",
  wr: "\u2240",
  wreath: "\u2240",
  wscr: "\u{1D4CC}",
  xcap: "\u22C2",
  xcirc: "\u25EF",
  xcup: "\u22C3",
  xdtri: "\u25BD",
  xfr: "\u{1D535}",
  xhArr: "\u27FA",
  xharr: "\u27F7",
  xi: "\u03BE",
  xlArr: "\u27F8",
  xlarr: "\u27F5",
  xmap: "\u27FC",
  xnis: "\u22FB",
  xodot: "\u2A00",
  xopf: "\u{1D569}",
  xoplus: "\u2A01",
  xotime: "\u2A02",
  xrArr: "\u27F9",
  xrarr: "\u27F6",
  xscr: "\u{1D4CD}",
  xsqcup: "\u2A06",
  xuplus: "\u2A04",
  xutri: "\u25B3",
  xvee: "\u22C1",
  xwedge: "\u22C0",
  yacute: "\xFD",
  yacy: "\u044F",
  ycirc: "\u0177",
  ycy: "\u044B",
  yen: "\xA5",
  yfr: "\u{1D536}",
  yicy: "\u0457",
  yopf: "\u{1D56A}",
  yscr: "\u{1D4CE}",
  yucy: "\u044E",
  yuml: "\xFF",
  zacute: "\u017A",
  zcaron: "\u017E",
  zcy: "\u0437",
  zdot: "\u017C",
  zeetrf: "\u2128",
  zeta: "\u03B6",
  zfr: "\u{1D537}",
  zhcy: "\u0436",
  zigrarr: "\u21DD",
  zopf: "\u{1D56B}",
  zscr: "\u{1D4CF}",
  zwj: "\u200D",
  zwnj: "\u200C"
};

// node_modules/.pnpm/decode-named-character-reference@1.0.2/node_modules/decode-named-character-reference/index.js
var own2 = {}.hasOwnProperty;
function decodeNamedCharacterReference(value) {
  return own2.call(characterEntities, value) ? characterEntities[value] : !1;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/character-reference.js
var characterReference = {
  name: "characterReference",
  tokenize: tokenizeCharacterReference
};
function tokenizeCharacterReference(effects, ok2, nok) {
  let self = this, size = 0, max, test;
  return start;
  function start(code3) {
    return effects.enter("characterReference"), effects.enter("characterReferenceMarker"), effects.consume(code3), effects.exit("characterReferenceMarker"), open;
  }
  function open(code3) {
    return code3 === 35 ? (effects.enter("characterReferenceMarkerNumeric"), effects.consume(code3), effects.exit("characterReferenceMarkerNumeric"), numeric) : (effects.enter("characterReferenceValue"), max = 31, test = asciiAlphanumeric, value(code3));
  }
  function numeric(code3) {
    return code3 === 88 || code3 === 120 ? (effects.enter("characterReferenceMarkerHexadecimal"), effects.consume(code3), effects.exit("characterReferenceMarkerHexadecimal"), effects.enter("characterReferenceValue"), max = 6, test = asciiHexDigit, value) : (effects.enter("characterReferenceValue"), max = 7, test = asciiDigit, value(code3));
  }
  function value(code3) {
    let token;
    return code3 === 59 && size ? (token = effects.exit("characterReferenceValue"), test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token)) ? nok(code3) : (effects.enter("characterReferenceMarker"), effects.consume(code3), effects.exit("characterReferenceMarker"), effects.exit("characterReference"), ok2)) : test(code3) && size++ < max ? (effects.consume(code3), value) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-fenced.js
var codeFenced = {
  name: "codeFenced",
  tokenize: tokenizeCodeFenced,
  concrete: !0
};
function tokenizeCodeFenced(effects, ok2, nok) {
  let self = this, closingFenceConstruct = {
    tokenize: tokenizeClosingFence,
    partial: !0
  }, nonLazyLine = {
    tokenize: tokenizeNonLazyLine,
    partial: !0
  }, tail = this.events[this.events.length - 1], initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], !0).length : 0, sizeOpen = 0, marker;
  return start;
  function start(code3) {
    return effects.enter("codeFenced"), effects.enter("codeFencedFence"), effects.enter("codeFencedFenceSequence"), marker = code3, sequenceOpen(code3);
  }
  function sequenceOpen(code3) {
    return code3 === marker ? (effects.consume(code3), sizeOpen++, sequenceOpen) : (effects.exit("codeFencedFenceSequence"), sizeOpen < 3 ? nok(code3) : factorySpace(effects, infoOpen, "whitespace")(code3));
  }
  function infoOpen(code3) {
    return code3 === null || markdownLineEnding(code3) ? openAfter(code3) : (effects.enter("codeFencedFenceInfo"), effects.enter("chunkString", {
      contentType: "string"
    }), info(code3));
  }
  function info(code3) {
    return code3 === null || markdownLineEndingOrSpace(code3) ? (effects.exit("chunkString"), effects.exit("codeFencedFenceInfo"), factorySpace(effects, infoAfter, "whitespace")(code3)) : code3 === 96 && code3 === marker ? nok(code3) : (effects.consume(code3), info);
  }
  function infoAfter(code3) {
    return code3 === null || markdownLineEnding(code3) ? openAfter(code3) : (effects.enter("codeFencedFenceMeta"), effects.enter("chunkString", {
      contentType: "string"
    }), meta2(code3));
  }
  function meta2(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("chunkString"), effects.exit("codeFencedFenceMeta"), openAfter(code3)) : code3 === 96 && code3 === marker ? nok(code3) : (effects.consume(code3), meta2);
  }
  function openAfter(code3) {
    return effects.exit("codeFencedFence"), self.interrupt ? ok2(code3) : contentStart(code3);
  }
  function contentStart(code3) {
    return code3 === null ? after(code3) : markdownLineEnding(code3) ? effects.attempt(
      nonLazyLine,
      effects.attempt(
        closingFenceConstruct,
        after,
        initialPrefix ? factorySpace(
          effects,
          contentStart,
          "linePrefix",
          initialPrefix + 1
        ) : contentStart
      ),
      after
    )(code3) : (effects.enter("codeFlowValue"), contentContinue(code3));
  }
  function contentContinue(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("codeFlowValue"), contentStart(code3)) : (effects.consume(code3), contentContinue);
  }
  function after(code3) {
    return effects.exit("codeFenced"), ok2(code3);
  }
  function tokenizeNonLazyLine(effects2, ok3, nok2) {
    let self2 = this;
    return start2;
    function start2(code3) {
      return effects2.enter("lineEnding"), effects2.consume(code3), effects2.exit("lineEnding"), lineStart;
    }
    function lineStart(code3) {
      return self2.parser.lazy[self2.now().line] ? nok2(code3) : ok3(code3);
    }
  }
  function tokenizeClosingFence(effects2, ok3, nok2) {
    let size = 0;
    return factorySpace(
      effects2,
      closingSequenceStart,
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
    function closingSequenceStart(code3) {
      return effects2.enter("codeFencedFence"), effects2.enter("codeFencedFenceSequence"), closingSequence(code3);
    }
    function closingSequence(code3) {
      return code3 === marker ? (effects2.consume(code3), size++, closingSequence) : size < sizeOpen ? nok2(code3) : (effects2.exit("codeFencedFenceSequence"), factorySpace(effects2, closingSequenceEnd, "whitespace")(code3));
    }
    function closingSequenceEnd(code3) {
      return code3 === null || markdownLineEnding(code3) ? (effects2.exit("codeFencedFence"), ok3(code3)) : nok2(code3);
    }
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-indented.js
var codeIndented = {
  name: "codeIndented",
  tokenize: tokenizeCodeIndented
}, indentedContent = {
  tokenize: tokenizeIndentedContent,
  partial: !0
};
function tokenizeCodeIndented(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return effects.enter("codeIndented"), factorySpace(effects, afterStartPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterStartPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? afterPrefix(code3) : nok(code3);
  }
  function afterPrefix(code3) {
    return code3 === null ? after(code3) : markdownLineEnding(code3) ? effects.attempt(indentedContent, afterPrefix, after)(code3) : (effects.enter("codeFlowValue"), content3(code3));
  }
  function content3(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("codeFlowValue"), afterPrefix(code3)) : (effects.consume(code3), content3);
  }
  function after(code3) {
    return effects.exit("codeIndented"), ok2(code3);
  }
}
function tokenizeIndentedContent(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return self.parser.lazy[self.now().line] ? nok(code3) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), start) : factorySpace(effects, afterPrefix, "linePrefix", 4 + 1)(code3);
  }
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? ok2(code3) : markdownLineEnding(code3) ? start(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/code-text.js
var codeText = {
  name: "codeText",
  tokenize: tokenizeCodeText,
  resolve: resolveCodeText,
  previous
};
function resolveCodeText(events) {
  let tailExitIndex = events.length - 4, headEnterIndex = 3, index2, enter;
  if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
    for (index2 = headEnterIndex; ++index2 < tailExitIndex; )
      if (events[index2][1].type === "codeTextData") {
        events[headEnterIndex][1].type = "codeTextPadding", events[tailExitIndex][1].type = "codeTextPadding", headEnterIndex += 2, tailExitIndex -= 2;
        break;
      }
  }
  for (index2 = headEnterIndex - 1, tailExitIndex++; ++index2 <= tailExitIndex; )
    enter === void 0 ? index2 !== tailExitIndex && events[index2][1].type !== "lineEnding" && (enter = index2) : (index2 === tailExitIndex || events[index2][1].type === "lineEnding") && (events[enter][1].type = "codeTextData", index2 !== enter + 2 && (events[enter][1].end = events[index2 - 1][1].end, events.splice(enter + 2, index2 - enter - 2), tailExitIndex -= index2 - enter - 2, index2 = enter + 2), enter = void 0);
  return events;
}
function previous(code3) {
  return code3 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function tokenizeCodeText(effects, ok2, nok) {
  let self = this, sizeOpen = 0, size, token;
  return start;
  function start(code3) {
    return effects.enter("codeText"), effects.enter("codeTextSequence"), openingSequence(code3);
  }
  function openingSequence(code3) {
    return code3 === 96 ? (effects.consume(code3), sizeOpen++, openingSequence) : (effects.exit("codeTextSequence"), gap(code3));
  }
  function gap(code3) {
    return code3 === null ? nok(code3) : code3 === 96 ? (token = effects.enter("codeTextSequence"), size = 0, closingSequence(code3)) : code3 === 32 ? (effects.enter("space"), effects.consume(code3), effects.exit("space"), gap) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), gap) : (effects.enter("codeTextData"), data(code3));
  }
  function data(code3) {
    return code3 === null || code3 === 32 || code3 === 96 || markdownLineEnding(code3) ? (effects.exit("codeTextData"), gap(code3)) : (effects.consume(code3), data);
  }
  function closingSequence(code3) {
    return code3 === 96 ? (effects.consume(code3), size++, closingSequence) : size === sizeOpen ? (effects.exit("codeTextSequence"), effects.exit("codeText"), ok2(code3)) : (token.type = "codeTextData", data(code3));
  }
}

// node_modules/.pnpm/micromark-util-subtokenize@1.0.2/node_modules/micromark-util-subtokenize/index.js
function subtokenize(events) {
  let jumps = {}, index2 = -1, event, lineIndex, otherIndex, otherEvent, parameters, subevents, more;
  for (; ++index2 < events.length; ) {
    for (; index2 in jumps; )
      index2 = jumps[index2];
    if (event = events[index2], index2 && event[1].type === "chunkFlow" && events[index2 - 1][1].type === "listItemPrefix" && (subevents = event[1]._tokenizer.events, otherIndex = 0, otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank" && (otherIndex += 2), otherIndex < subevents.length && subevents[otherIndex][1].type === "content"))
      for (; ++otherIndex < subevents.length && subevents[otherIndex][1].type !== "content"; )
        subevents[otherIndex][1].type === "chunkText" && (subevents[otherIndex][1]._isInFirstContentOfListItem = !0, otherIndex++);
    if (event[0] === "enter")
      event[1].contentType && (Object.assign(jumps, subcontent(events, index2)), index2 = jumps[index2], more = !0);
    else if (event[1]._container) {
      for (otherIndex = index2, lineIndex = void 0; otherIndex-- && (otherEvent = events[otherIndex], otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank"); )
        otherEvent[0] === "enter" && (lineIndex && (events[lineIndex][1].type = "lineEndingBlank"), otherEvent[1].type = "lineEnding", lineIndex = otherIndex);
      lineIndex && (event[1].end = Object.assign({}, events[lineIndex][1].start), parameters = events.slice(lineIndex, index2), parameters.unshift(event), splice(events, lineIndex, index2 - lineIndex + 1, parameters));
    }
  }
  return !more;
}
function subcontent(events, eventIndex) {
  let token = events[eventIndex][1], context = events[eventIndex][2], startPosition = eventIndex - 1, startPositions = [], tokenizer = token._tokenizer || context.parser[token.contentType](token.start), childEvents = tokenizer.events, jumps = [], gaps = {}, stream, previous3, index2 = -1, current = token, adjust = 0, start = 0, breaks = [start];
  for (; current; ) {
    for (; events[++startPosition][1] !== current; )
      ;
    startPositions.push(startPosition), current._tokenizer || (stream = context.sliceStream(current), current.next || stream.push(null), previous3 && tokenizer.defineSkip(current.start), current._isInFirstContentOfListItem && (tokenizer._gfmTasklistFirstContentOfListItem = !0), tokenizer.write(stream), current._isInFirstContentOfListItem && (tokenizer._gfmTasklistFirstContentOfListItem = void 0)), previous3 = current, current = current.next;
  }
  for (current = token; ++index2 < childEvents.length; )
    childEvents[index2][0] === "exit" && childEvents[index2 - 1][0] === "enter" && childEvents[index2][1].type === childEvents[index2 - 1][1].type && childEvents[index2][1].start.line !== childEvents[index2][1].end.line && (start = index2 + 1, breaks.push(start), current._tokenizer = void 0, current.previous = void 0, current = current.next);
  for (tokenizer.events = [], current ? (current._tokenizer = void 0, current.previous = void 0) : breaks.pop(), index2 = breaks.length; index2--; ) {
    let slice = childEvents.slice(breaks[index2], breaks[index2 + 1]), start2 = startPositions.pop();
    jumps.unshift([start2, start2 + slice.length - 1]), splice(events, start2, 2, slice);
  }
  for (index2 = -1; ++index2 < jumps.length; )
    gaps[adjust + jumps[index2][0]] = adjust + jumps[index2][1], adjust += jumps[index2][1] - jumps[index2][0] - 1;
  return gaps;
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/content.js
var content2 = {
  tokenize: tokenizeContent,
  resolve: resolveContent
}, continuationConstruct = {
  tokenize: tokenizeContinuation,
  partial: !0
};
function resolveContent(events) {
  return subtokenize(events), events;
}
function tokenizeContent(effects, ok2) {
  let previous3;
  return start;
  function start(code3) {
    return effects.enter("content"), previous3 = effects.enter("chunkContent", {
      contentType: "content"
    }), data(code3);
  }
  function data(code3) {
    return code3 === null ? contentEnd(code3) : markdownLineEnding(code3) ? effects.check(
      continuationConstruct,
      contentContinue,
      contentEnd
    )(code3) : (effects.consume(code3), data);
  }
  function contentEnd(code3) {
    return effects.exit("chunkContent"), effects.exit("content"), ok2(code3);
  }
  function contentContinue(code3) {
    return effects.consume(code3), effects.exit("chunkContent"), previous3.next = effects.enter("chunkContent", {
      contentType: "content",
      previous: previous3
    }), previous3 = previous3.next, data;
  }
}
function tokenizeContinuation(effects, ok2, nok) {
  let self = this;
  return startLookahead;
  function startLookahead(code3) {
    return effects.exit("chunkContent"), effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, prefixed, "linePrefix");
  }
  function prefixed(code3) {
    if (code3 === null || markdownLineEnding(code3))
      return nok(code3);
    let tail = self.events[self.events.length - 1];
    return !self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? ok2(code3) : effects.interrupt(self.parser.constructs.flow, nok, ok2)(code3);
  }
}

// node_modules/.pnpm/micromark-factory-destination@1.0.0/node_modules/micromark-factory-destination/index.js
function factoryDestination(effects, ok2, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
  let limit = max || Number.POSITIVE_INFINITY, balance = 0;
  return start;
  function start(code3) {
    return code3 === 60 ? (effects.enter(type), effects.enter(literalType), effects.enter(literalMarkerType), effects.consume(code3), effects.exit(literalMarkerType), destinationEnclosedBefore) : code3 === null || code3 === 41 || asciiControl(code3) ? nok(code3) : (effects.enter(type), effects.enter(rawType), effects.enter(stringType), effects.enter("chunkString", {
      contentType: "string"
    }), destinationRaw(code3));
  }
  function destinationEnclosedBefore(code3) {
    return code3 === 62 ? (effects.enter(literalMarkerType), effects.consume(code3), effects.exit(literalMarkerType), effects.exit(literalType), effects.exit(type), ok2) : (effects.enter(stringType), effects.enter("chunkString", {
      contentType: "string"
    }), destinationEnclosed(code3));
  }
  function destinationEnclosed(code3) {
    return code3 === 62 ? (effects.exit("chunkString"), effects.exit(stringType), destinationEnclosedBefore(code3)) : code3 === null || code3 === 60 || markdownLineEnding(code3) ? nok(code3) : (effects.consume(code3), code3 === 92 ? destinationEnclosedEscape : destinationEnclosed);
  }
  function destinationEnclosedEscape(code3) {
    return code3 === 60 || code3 === 62 || code3 === 92 ? (effects.consume(code3), destinationEnclosed) : destinationEnclosed(code3);
  }
  function destinationRaw(code3) {
    return code3 === 40 ? ++balance > limit ? nok(code3) : (effects.consume(code3), destinationRaw) : code3 === 41 ? balance-- ? (effects.consume(code3), destinationRaw) : (effects.exit("chunkString"), effects.exit(stringType), effects.exit(rawType), effects.exit(type), ok2(code3)) : code3 === null || markdownLineEndingOrSpace(code3) ? balance ? nok(code3) : (effects.exit("chunkString"), effects.exit(stringType), effects.exit(rawType), effects.exit(type), ok2(code3)) : asciiControl(code3) ? nok(code3) : (effects.consume(code3), code3 === 92 ? destinationRawEscape : destinationRaw);
  }
  function destinationRawEscape(code3) {
    return code3 === 40 || code3 === 41 || code3 === 92 ? (effects.consume(code3), destinationRaw) : destinationRaw(code3);
  }
}

// node_modules/.pnpm/micromark-factory-label@1.0.2/node_modules/micromark-factory-label/index.js
function factoryLabel(effects, ok2, nok, type, markerType, stringType) {
  let self = this, size = 0, data;
  return start;
  function start(code3) {
    return effects.enter(type), effects.enter(markerType), effects.consume(code3), effects.exit(markerType), effects.enter(stringType), atBreak;
  }
  function atBreak(code3) {
    return code3 === null || code3 === 91 || code3 === 93 && !data || code3 === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999 ? nok(code3) : code3 === 93 ? (effects.exit(stringType), effects.enter(markerType), effects.consume(code3), effects.exit(markerType), effects.exit(type), ok2) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), atBreak) : (effects.enter("chunkString", {
      contentType: "string"
    }), label(code3));
  }
  function label(code3) {
    return code3 === null || code3 === 91 || code3 === 93 || markdownLineEnding(code3) || size++ > 999 ? (effects.exit("chunkString"), atBreak(code3)) : (effects.consume(code3), data = data || !markdownSpace(code3), code3 === 92 ? labelEscape : label);
  }
  function labelEscape(code3) {
    return code3 === 91 || code3 === 92 || code3 === 93 ? (effects.consume(code3), size++, label) : label(code3);
  }
}

// node_modules/.pnpm/micromark-factory-title@1.0.2/node_modules/micromark-factory-title/index.js
function factoryTitle(effects, ok2, nok, type, markerType, stringType) {
  let marker;
  return start;
  function start(code3) {
    return effects.enter(type), effects.enter(markerType), effects.consume(code3), effects.exit(markerType), marker = code3 === 40 ? 41 : code3, atFirstTitleBreak;
  }
  function atFirstTitleBreak(code3) {
    return code3 === marker ? (effects.enter(markerType), effects.consume(code3), effects.exit(markerType), effects.exit(type), ok2) : (effects.enter(stringType), atTitleBreak(code3));
  }
  function atTitleBreak(code3) {
    return code3 === marker ? (effects.exit(stringType), atFirstTitleBreak(marker)) : code3 === null ? nok(code3) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, atTitleBreak, "linePrefix")) : (effects.enter("chunkString", {
      contentType: "string"
    }), title(code3));
  }
  function title(code3) {
    return code3 === marker || code3 === null || markdownLineEnding(code3) ? (effects.exit("chunkString"), atTitleBreak(code3)) : (effects.consume(code3), code3 === 92 ? titleEscape : title);
  }
  function titleEscape(code3) {
    return code3 === marker || code3 === 92 ? (effects.consume(code3), title) : title(code3);
  }
}

// node_modules/.pnpm/micromark-factory-whitespace@1.0.0/node_modules/micromark-factory-whitespace/index.js
function factoryWhitespace(effects, ok2) {
  let seen;
  return start;
  function start(code3) {
    return markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), seen = !0, start) : markdownSpace(code3) ? factorySpace(
      effects,
      start,
      seen ? "linePrefix" : "lineSuffix"
    )(code3) : ok2(code3);
  }
}

// node_modules/.pnpm/micromark-util-normalize-identifier@1.0.0/node_modules/micromark-util-normalize-identifier/index.js
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/definition.js
var definition = {
  name: "definition",
  tokenize: tokenizeDefinition
}, titleConstruct = {
  tokenize: tokenizeTitle,
  partial: !0
};
function tokenizeDefinition(effects, ok2, nok) {
  let self = this, identifier;
  return start;
  function start(code3) {
    return effects.enter("definition"), factoryLabel.call(
      self,
      effects,
      labelAfter,
      nok,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(code3);
  }
  function labelAfter(code3) {
    return identifier = normalizeIdentifier(
      self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
    ), code3 === 58 ? (effects.enter("definitionMarker"), effects.consume(code3), effects.exit("definitionMarker"), factoryWhitespace(
      effects,
      factoryDestination(
        effects,
        effects.attempt(
          titleConstruct,
          factorySpace(effects, after, "whitespace"),
          factorySpace(effects, after, "whitespace")
        ),
        nok,
        "definitionDestination",
        "definitionDestinationLiteral",
        "definitionDestinationLiteralMarker",
        "definitionDestinationRaw",
        "definitionDestinationString"
      )
    )) : nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("definition"), self.parser.defined.includes(identifier) || self.parser.defined.push(identifier), ok2(code3)) : nok(code3);
  }
}
function tokenizeTitle(effects, ok2, nok) {
  return start;
  function start(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, before)(code3) : nok(code3);
  }
  function before(code3) {
    return code3 === 34 || code3 === 39 || code3 === 40 ? factoryTitle(
      effects,
      factorySpace(effects, after, "whitespace"),
      nok,
      "definitionTitle",
      "definitionTitleMarker",
      "definitionTitleString"
    )(code3) : nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var hardBreakEscape = {
  name: "hardBreakEscape",
  tokenize: tokenizeHardBreakEscape
};
function tokenizeHardBreakEscape(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("hardBreakEscape"), effects.enter("escapeMarker"), effects.consume(code3), open;
  }
  function open(code3) {
    return markdownLineEnding(code3) ? (effects.exit("escapeMarker"), effects.exit("hardBreakEscape"), ok2(code3)) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/heading-atx.js
var headingAtx = {
  name: "headingAtx",
  tokenize: tokenizeHeadingAtx,
  resolve: resolveHeadingAtx
};
function resolveHeadingAtx(events, context) {
  let contentEnd = events.length - 2, contentStart = 3, content3, text8;
  return events[contentStart][1].type === "whitespace" && (contentStart += 2), contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace" && (contentEnd -= 2), events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace") && (contentEnd -= contentStart + 1 === contentEnd ? 2 : 4), contentEnd > contentStart && (content3 = {
    type: "atxHeadingText",
    start: events[contentStart][1].start,
    end: events[contentEnd][1].end
  }, text8 = {
    type: "chunkText",
    start: events[contentStart][1].start,
    end: events[contentEnd][1].end,
    contentType: "text"
  }, splice(events, contentStart, contentEnd - contentStart + 1, [
    ["enter", content3, context],
    ["enter", text8, context],
    ["exit", text8, context],
    ["exit", content3, context]
  ])), events;
}
function tokenizeHeadingAtx(effects, ok2, nok) {
  let self = this, size = 0;
  return start;
  function start(code3) {
    return effects.enter("atxHeading"), effects.enter("atxHeadingSequence"), fenceOpenInside(code3);
  }
  function fenceOpenInside(code3) {
    return code3 === 35 && size++ < 6 ? (effects.consume(code3), fenceOpenInside) : code3 === null || markdownLineEndingOrSpace(code3) ? (effects.exit("atxHeadingSequence"), self.interrupt ? ok2(code3) : headingBreak(code3)) : nok(code3);
  }
  function headingBreak(code3) {
    return code3 === 35 ? (effects.enter("atxHeadingSequence"), sequence(code3)) : code3 === null || markdownLineEnding(code3) ? (effects.exit("atxHeading"), ok2(code3)) : markdownSpace(code3) ? factorySpace(effects, headingBreak, "whitespace")(code3) : (effects.enter("atxHeadingText"), data(code3));
  }
  function sequence(code3) {
    return code3 === 35 ? (effects.consume(code3), sequence) : (effects.exit("atxHeadingSequence"), headingBreak(code3));
  }
  function data(code3) {
    return code3 === null || code3 === 35 || markdownLineEndingOrSpace(code3) ? (effects.exit("atxHeadingText"), headingBreak(code3)) : (effects.consume(code3), data);
  }
}

// node_modules/.pnpm/micromark-util-html-tag-name@1.1.0/node_modules/micromark-util-html-tag-name/index.js
var htmlBlockNames = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], htmlRawNames = ["pre", "script", "style", "textarea"];

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-flow.js
var htmlFlow = {
  name: "htmlFlow",
  tokenize: tokenizeHtmlFlow,
  resolveTo: resolveToHtmlFlow,
  concrete: !0
}, nextBlankConstruct = {
  tokenize: tokenizeNextBlank,
  partial: !0
};
function resolveToHtmlFlow(events) {
  let index2 = events.length;
  for (; index2-- && !(events[index2][0] === "enter" && events[index2][1].type === "htmlFlow"); )
    ;
  return index2 > 1 && events[index2 - 2][1].type === "linePrefix" && (events[index2][1].start = events[index2 - 2][1].start, events[index2 + 1][1].start = events[index2 - 2][1].start, events.splice(index2 - 2, 2)), events;
}
function tokenizeHtmlFlow(effects, ok2, nok) {
  let self = this, kind, startTag2, buffer2, index2, marker;
  return start;
  function start(code3) {
    return effects.enter("htmlFlow"), effects.enter("htmlFlowData"), effects.consume(code3), open;
  }
  function open(code3) {
    return code3 === 33 ? (effects.consume(code3), declarationStart) : code3 === 47 ? (effects.consume(code3), tagCloseStart) : code3 === 63 ? (effects.consume(code3), kind = 3, self.interrupt ? ok2 : continuationDeclarationInside) : asciiAlpha(code3) ? (effects.consume(code3), buffer2 = String.fromCharCode(code3), startTag2 = !0, tagName) : nok(code3);
  }
  function declarationStart(code3) {
    return code3 === 45 ? (effects.consume(code3), kind = 2, commentOpenInside) : code3 === 91 ? (effects.consume(code3), kind = 5, buffer2 = "CDATA[", index2 = 0, cdataOpenInside) : asciiAlpha(code3) ? (effects.consume(code3), kind = 4, self.interrupt ? ok2 : continuationDeclarationInside) : nok(code3);
  }
  function commentOpenInside(code3) {
    return code3 === 45 ? (effects.consume(code3), self.interrupt ? ok2 : continuationDeclarationInside) : nok(code3);
  }
  function cdataOpenInside(code3) {
    return code3 === buffer2.charCodeAt(index2++) ? (effects.consume(code3), index2 === buffer2.length ? self.interrupt ? ok2 : continuation : cdataOpenInside) : nok(code3);
  }
  function tagCloseStart(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), buffer2 = String.fromCharCode(code3), tagName) : nok(code3);
  }
  function tagName(code3) {
    return code3 === null || code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3) ? code3 !== 47 && startTag2 && htmlRawNames.includes(buffer2.toLowerCase()) ? (kind = 1, self.interrupt ? ok2(code3) : continuation(code3)) : htmlBlockNames.includes(buffer2.toLowerCase()) ? (kind = 6, code3 === 47 ? (effects.consume(code3), basicSelfClosing) : self.interrupt ? ok2(code3) : continuation(code3)) : (kind = 7, self.interrupt && !self.parser.lazy[self.now().line] ? nok(code3) : startTag2 ? completeAttributeNameBefore(code3) : completeClosingTagAfter(code3)) : code3 === 45 || asciiAlphanumeric(code3) ? (effects.consume(code3), buffer2 += String.fromCharCode(code3), tagName) : nok(code3);
  }
  function basicSelfClosing(code3) {
    return code3 === 62 ? (effects.consume(code3), self.interrupt ? ok2 : continuation) : nok(code3);
  }
  function completeClosingTagAfter(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), completeClosingTagAfter) : completeEnd(code3);
  }
  function completeAttributeNameBefore(code3) {
    return code3 === 47 ? (effects.consume(code3), completeEnd) : code3 === 58 || code3 === 95 || asciiAlpha(code3) ? (effects.consume(code3), completeAttributeName) : markdownSpace(code3) ? (effects.consume(code3), completeAttributeNameBefore) : completeEnd(code3);
  }
  function completeAttributeName(code3) {
    return code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3) ? (effects.consume(code3), completeAttributeName) : completeAttributeNameAfter(code3);
  }
  function completeAttributeNameAfter(code3) {
    return code3 === 61 ? (effects.consume(code3), completeAttributeValueBefore) : markdownSpace(code3) ? (effects.consume(code3), completeAttributeNameAfter) : completeAttributeNameBefore(code3);
  }
  function completeAttributeValueBefore(code3) {
    return code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 ? nok(code3) : code3 === 34 || code3 === 39 ? (effects.consume(code3), marker = code3, completeAttributeValueQuoted) : markdownSpace(code3) ? (effects.consume(code3), completeAttributeValueBefore) : (marker = null, completeAttributeValueUnquoted(code3));
  }
  function completeAttributeValueQuoted(code3) {
    return code3 === null || markdownLineEnding(code3) ? nok(code3) : code3 === marker ? (effects.consume(code3), completeAttributeValueQuotedAfter) : (effects.consume(code3), completeAttributeValueQuoted);
  }
  function completeAttributeValueUnquoted(code3) {
    return code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 || markdownLineEndingOrSpace(code3) ? completeAttributeNameAfter(code3) : (effects.consume(code3), completeAttributeValueUnquoted);
  }
  function completeAttributeValueQuotedAfter(code3) {
    return code3 === 47 || code3 === 62 || markdownSpace(code3) ? completeAttributeNameBefore(code3) : nok(code3);
  }
  function completeEnd(code3) {
    return code3 === 62 ? (effects.consume(code3), completeAfter) : nok(code3);
  }
  function completeAfter(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), completeAfter) : code3 === null || markdownLineEnding(code3) ? continuation(code3) : nok(code3);
  }
  function continuation(code3) {
    return code3 === 45 && kind === 2 ? (effects.consume(code3), continuationCommentInside) : code3 === 60 && kind === 1 ? (effects.consume(code3), continuationRawTagOpen) : code3 === 62 && kind === 4 ? (effects.consume(code3), continuationClose) : code3 === 63 && kind === 3 ? (effects.consume(code3), continuationDeclarationInside) : code3 === 93 && kind === 5 ? (effects.consume(code3), continuationCharacterDataInside) : markdownLineEnding(code3) && (kind === 6 || kind === 7) ? effects.check(
      nextBlankConstruct,
      continuationClose,
      continuationAtLineEnding
    )(code3) : code3 === null || markdownLineEnding(code3) ? continuationAtLineEnding(code3) : (effects.consume(code3), continuation);
  }
  function continuationAtLineEnding(code3) {
    return effects.exit("htmlFlowData"), htmlContinueStart(code3);
  }
  function htmlContinueStart(code3) {
    return code3 === null ? done(code3) : markdownLineEnding(code3) ? effects.attempt(
      {
        tokenize: htmlLineEnd,
        partial: !0
      },
      htmlContinueStart,
      done
    )(code3) : (effects.enter("htmlFlowData"), continuation(code3));
  }
  function htmlLineEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code3) {
      return effects2.enter("lineEnding"), effects2.consume(code3), effects2.exit("lineEnding"), lineStart;
    }
    function lineStart(code3) {
      return self.parser.lazy[self.now().line] ? nok2(code3) : ok3(code3);
    }
  }
  function continuationCommentInside(code3) {
    return code3 === 45 ? (effects.consume(code3), continuationDeclarationInside) : continuation(code3);
  }
  function continuationRawTagOpen(code3) {
    return code3 === 47 ? (effects.consume(code3), buffer2 = "", continuationRawEndTag) : continuation(code3);
  }
  function continuationRawEndTag(code3) {
    return code3 === 62 && htmlRawNames.includes(buffer2.toLowerCase()) ? (effects.consume(code3), continuationClose) : asciiAlpha(code3) && buffer2.length < 8 ? (effects.consume(code3), buffer2 += String.fromCharCode(code3), continuationRawEndTag) : continuation(code3);
  }
  function continuationCharacterDataInside(code3) {
    return code3 === 93 ? (effects.consume(code3), continuationDeclarationInside) : continuation(code3);
  }
  function continuationDeclarationInside(code3) {
    return code3 === 62 ? (effects.consume(code3), continuationClose) : code3 === 45 && kind === 2 ? (effects.consume(code3), continuationDeclarationInside) : continuation(code3);
  }
  function continuationClose(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("htmlFlowData"), done(code3)) : (effects.consume(code3), continuationClose);
  }
  function done(code3) {
    return effects.exit("htmlFlow"), ok2(code3);
  }
}
function tokenizeNextBlank(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.exit("htmlFlowData"), effects.enter("lineEndingBlank"), effects.consume(code3), effects.exit("lineEndingBlank"), effects.attempt(blankLine, ok2, nok);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/html-text.js
var htmlText = {
  name: "htmlText",
  tokenize: tokenizeHtmlText
};
function tokenizeHtmlText(effects, ok2, nok) {
  let self = this, marker, buffer2, index2, returnState;
  return start;
  function start(code3) {
    return effects.enter("htmlText"), effects.enter("htmlTextData"), effects.consume(code3), open;
  }
  function open(code3) {
    return code3 === 33 ? (effects.consume(code3), declarationOpen) : code3 === 47 ? (effects.consume(code3), tagCloseStart) : code3 === 63 ? (effects.consume(code3), instruction) : asciiAlpha(code3) ? (effects.consume(code3), tagOpen) : nok(code3);
  }
  function declarationOpen(code3) {
    return code3 === 45 ? (effects.consume(code3), commentOpen) : code3 === 91 ? (effects.consume(code3), buffer2 = "CDATA[", index2 = 0, cdataOpen) : asciiAlpha(code3) ? (effects.consume(code3), declaration) : nok(code3);
  }
  function commentOpen(code3) {
    return code3 === 45 ? (effects.consume(code3), commentStart) : nok(code3);
  }
  function commentStart(code3) {
    return code3 === null || code3 === 62 ? nok(code3) : code3 === 45 ? (effects.consume(code3), commentStartDash) : comment3(code3);
  }
  function commentStartDash(code3) {
    return code3 === null || code3 === 62 ? nok(code3) : comment3(code3);
  }
  function comment3(code3) {
    return code3 === null ? nok(code3) : code3 === 45 ? (effects.consume(code3), commentClose) : markdownLineEnding(code3) ? (returnState = comment3, atLineEnding(code3)) : (effects.consume(code3), comment3);
  }
  function commentClose(code3) {
    return code3 === 45 ? (effects.consume(code3), end) : comment3(code3);
  }
  function cdataOpen(code3) {
    return code3 === buffer2.charCodeAt(index2++) ? (effects.consume(code3), index2 === buffer2.length ? cdata : cdataOpen) : nok(code3);
  }
  function cdata(code3) {
    return code3 === null ? nok(code3) : code3 === 93 ? (effects.consume(code3), cdataClose) : markdownLineEnding(code3) ? (returnState = cdata, atLineEnding(code3)) : (effects.consume(code3), cdata);
  }
  function cdataClose(code3) {
    return code3 === 93 ? (effects.consume(code3), cdataEnd) : cdata(code3);
  }
  function cdataEnd(code3) {
    return code3 === 62 ? end(code3) : code3 === 93 ? (effects.consume(code3), cdataEnd) : cdata(code3);
  }
  function declaration(code3) {
    return code3 === null || code3 === 62 ? end(code3) : markdownLineEnding(code3) ? (returnState = declaration, atLineEnding(code3)) : (effects.consume(code3), declaration);
  }
  function instruction(code3) {
    return code3 === null ? nok(code3) : code3 === 63 ? (effects.consume(code3), instructionClose) : markdownLineEnding(code3) ? (returnState = instruction, atLineEnding(code3)) : (effects.consume(code3), instruction);
  }
  function instructionClose(code3) {
    return code3 === 62 ? end(code3) : instruction(code3);
  }
  function tagCloseStart(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), tagClose) : nok(code3);
  }
  function tagClose(code3) {
    return code3 === 45 || asciiAlphanumeric(code3) ? (effects.consume(code3), tagClose) : tagCloseBetween(code3);
  }
  function tagCloseBetween(code3) {
    return markdownLineEnding(code3) ? (returnState = tagCloseBetween, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagCloseBetween) : end(code3);
  }
  function tagOpen(code3) {
    return code3 === 45 || asciiAlphanumeric(code3) ? (effects.consume(code3), tagOpen) : code3 === 47 || code3 === 62 || markdownLineEndingOrSpace(code3) ? tagOpenBetween(code3) : nok(code3);
  }
  function tagOpenBetween(code3) {
    return code3 === 47 ? (effects.consume(code3), end) : code3 === 58 || code3 === 95 || asciiAlpha(code3) ? (effects.consume(code3), tagOpenAttributeName) : markdownLineEnding(code3) ? (returnState = tagOpenBetween, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagOpenBetween) : end(code3);
  }
  function tagOpenAttributeName(code3) {
    return code3 === 45 || code3 === 46 || code3 === 58 || code3 === 95 || asciiAlphanumeric(code3) ? (effects.consume(code3), tagOpenAttributeName) : tagOpenAttributeNameAfter(code3);
  }
  function tagOpenAttributeNameAfter(code3) {
    return code3 === 61 ? (effects.consume(code3), tagOpenAttributeValueBefore) : markdownLineEnding(code3) ? (returnState = tagOpenAttributeNameAfter, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagOpenAttributeNameAfter) : tagOpenBetween(code3);
  }
  function tagOpenAttributeValueBefore(code3) {
    return code3 === null || code3 === 60 || code3 === 61 || code3 === 62 || code3 === 96 ? nok(code3) : code3 === 34 || code3 === 39 ? (effects.consume(code3), marker = code3, tagOpenAttributeValueQuoted) : markdownLineEnding(code3) ? (returnState = tagOpenAttributeValueBefore, atLineEnding(code3)) : markdownSpace(code3) ? (effects.consume(code3), tagOpenAttributeValueBefore) : (effects.consume(code3), marker = void 0, tagOpenAttributeValueUnquoted);
  }
  function tagOpenAttributeValueQuoted(code3) {
    return code3 === marker ? (effects.consume(code3), tagOpenAttributeValueQuotedAfter) : code3 === null ? nok(code3) : markdownLineEnding(code3) ? (returnState = tagOpenAttributeValueQuoted, atLineEnding(code3)) : (effects.consume(code3), tagOpenAttributeValueQuoted);
  }
  function tagOpenAttributeValueQuotedAfter(code3) {
    return code3 === 62 || code3 === 47 || markdownLineEndingOrSpace(code3) ? tagOpenBetween(code3) : nok(code3);
  }
  function tagOpenAttributeValueUnquoted(code3) {
    return code3 === null || code3 === 34 || code3 === 39 || code3 === 60 || code3 === 61 || code3 === 96 ? nok(code3) : code3 === 62 || markdownLineEndingOrSpace(code3) ? tagOpenBetween(code3) : (effects.consume(code3), tagOpenAttributeValueUnquoted);
  }
  function atLineEnding(code3) {
    return effects.exit("htmlTextData"), effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(
      effects,
      afterPrefix,
      "linePrefix",
      self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function afterPrefix(code3) {
    return effects.enter("htmlTextData"), returnState(code3);
  }
  function end(code3) {
    return code3 === 62 ? (effects.consume(code3), effects.exit("htmlTextData"), effects.exit("htmlText"), ok2) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-end.js
var labelEnd = {
  name: "labelEnd",
  tokenize: tokenizeLabelEnd,
  resolveTo: resolveToLabelEnd,
  resolveAll: resolveAllLabelEnd
}, resourceConstruct = {
  tokenize: tokenizeResource
}, fullReferenceConstruct = {
  tokenize: tokenizeFullReference
}, collapsedReferenceConstruct = {
  tokenize: tokenizeCollapsedReference
};
function resolveAllLabelEnd(events) {
  let index2 = -1, token;
  for (; ++index2 < events.length; )
    token = events[index2][1], (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") && (events.splice(index2 + 1, token.type === "labelImage" ? 4 : 2), token.type = "data", index2++);
  return events;
}
function resolveToLabelEnd(events, context) {
  let index2 = events.length, offset = 0, token, open, close, media;
  for (; index2--; )
    if (token = events[index2][1], open) {
      if (token.type === "link" || token.type === "labelLink" && token._inactive)
        break;
      events[index2][0] === "enter" && token.type === "labelLink" && (token._inactive = !0);
    } else if (close) {
      if (events[index2][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced && (open = index2, token.type !== "labelLink")) {
        offset = 2;
        break;
      }
    } else
      token.type === "labelEnd" && (close = index2);
  let group = {
    type: events[open][1].type === "labelLink" ? "link" : "image",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }, label = {
    type: "label",
    start: Object.assign({}, events[open][1].start),
    end: Object.assign({}, events[close][1].end)
  }, text8 = {
    type: "labelText",
    start: Object.assign({}, events[open + offset + 2][1].end),
    end: Object.assign({}, events[close - 2][1].start)
  };
  return media = [
    ["enter", group, context],
    ["enter", label, context]
  ], media = push(media, events.slice(open + 1, open + offset + 3)), media = push(media, [["enter", text8, context]]), media = push(
    media,
    resolveAll(
      context.parser.constructs.insideSpan.null,
      events.slice(open + offset + 4, close - 3),
      context
    )
  ), media = push(media, [
    ["exit", text8, context],
    events[close - 2],
    events[close - 1],
    ["exit", label, context]
  ]), media = push(media, events.slice(close + 1)), media = push(media, [["exit", group, context]]), splice(events, open, events.length, media), events;
}
function tokenizeLabelEnd(effects, ok2, nok) {
  let self = this, index2 = self.events.length, labelStart, defined;
  for (; index2--; )
    if ((self.events[index2][1].type === "labelImage" || self.events[index2][1].type === "labelLink") && !self.events[index2][1]._balanced) {
      labelStart = self.events[index2][1];
      break;
    }
  return start;
  function start(code3) {
    return labelStart ? labelStart._inactive ? balanced(code3) : (defined = self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize({
          start: labelStart.end,
          end: self.now()
        })
      )
    ), effects.enter("labelEnd"), effects.enter("labelMarker"), effects.consume(code3), effects.exit("labelMarker"), effects.exit("labelEnd"), afterLabelEnd) : nok(code3);
  }
  function afterLabelEnd(code3) {
    return code3 === 40 ? effects.attempt(
      resourceConstruct,
      ok2,
      defined ? ok2 : balanced
    )(code3) : code3 === 91 ? effects.attempt(
      fullReferenceConstruct,
      ok2,
      defined ? effects.attempt(collapsedReferenceConstruct, ok2, balanced) : balanced
    )(code3) : defined ? ok2(code3) : balanced(code3);
  }
  function balanced(code3) {
    return labelStart._balanced = !0, nok(code3);
  }
}
function tokenizeResource(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("resource"), effects.enter("resourceMarker"), effects.consume(code3), effects.exit("resourceMarker"), factoryWhitespace(effects, open);
  }
  function open(code3) {
    return code3 === 41 ? end(code3) : factoryDestination(
      effects,
      destinationAfter,
      nok,
      "resourceDestination",
      "resourceDestinationLiteral",
      "resourceDestinationLiteralMarker",
      "resourceDestinationRaw",
      "resourceDestinationString",
      32
    )(code3);
  }
  function destinationAfter(code3) {
    return markdownLineEndingOrSpace(code3) ? factoryWhitespace(effects, between)(code3) : end(code3);
  }
  function between(code3) {
    return code3 === 34 || code3 === 39 || code3 === 40 ? factoryTitle(
      effects,
      factoryWhitespace(effects, end),
      nok,
      "resourceTitle",
      "resourceTitleMarker",
      "resourceTitleString"
    )(code3) : end(code3);
  }
  function end(code3) {
    return code3 === 41 ? (effects.enter("resourceMarker"), effects.consume(code3), effects.exit("resourceMarker"), effects.exit("resource"), ok2) : nok(code3);
  }
}
function tokenizeFullReference(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return factoryLabel.call(
      self,
      effects,
      afterLabel,
      nok,
      "reference",
      "referenceMarker",
      "referenceString"
    )(code3);
  }
  function afterLabel(code3) {
    return self.parser.defined.includes(
      normalizeIdentifier(
        self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1)
      )
    ) ? ok2(code3) : nok(code3);
  }
}
function tokenizeCollapsedReference(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.enter("reference"), effects.enter("referenceMarker"), effects.consume(code3), effects.exit("referenceMarker"), open;
  }
  function open(code3) {
    return code3 === 93 ? (effects.enter("referenceMarker"), effects.consume(code3), effects.exit("referenceMarker"), effects.exit("reference"), ok2) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-image.js
var labelStartImage = {
  name: "labelStartImage",
  tokenize: tokenizeLabelStartImage,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartImage(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return effects.enter("labelImage"), effects.enter("labelImageMarker"), effects.consume(code3), effects.exit("labelImageMarker"), open;
  }
  function open(code3) {
    return code3 === 91 ? (effects.enter("labelMarker"), effects.consume(code3), effects.exit("labelMarker"), effects.exit("labelImage"), after) : nok(code3);
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/label-start-link.js
var labelStartLink = {
  name: "labelStartLink",
  tokenize: tokenizeLabelStartLink,
  resolveAll: labelEnd.resolveAll
};
function tokenizeLabelStartLink(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return effects.enter("labelLink"), effects.enter("labelMarker"), effects.consume(code3), effects.exit("labelMarker"), effects.exit("labelLink"), after;
  }
  function after(code3) {
    return code3 === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code3) : ok2(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/line-ending.js
var lineEnding = {
  name: "lineEnding",
  tokenize: tokenizeLineEnding
};
function tokenizeLineEnding(effects, ok2) {
  return start;
  function start(code3) {
    return effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), factorySpace(effects, ok2, "linePrefix");
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/thematic-break.js
var thematicBreak = {
  name: "thematicBreak",
  tokenize: tokenizeThematicBreak
};
function tokenizeThematicBreak(effects, ok2, nok) {
  let size = 0, marker;
  return start;
  function start(code3) {
    return effects.enter("thematicBreak"), marker = code3, atBreak(code3);
  }
  function atBreak(code3) {
    return code3 === marker ? (effects.enter("thematicBreakSequence"), sequence(code3)) : markdownSpace(code3) ? factorySpace(effects, atBreak, "whitespace")(code3) : size < 3 || code3 !== null && !markdownLineEnding(code3) ? nok(code3) : (effects.exit("thematicBreak"), ok2(code3));
  }
  function sequence(code3) {
    return code3 === marker ? (effects.consume(code3), size++, sequence) : (effects.exit("thematicBreakSequence"), atBreak(code3));
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/list.js
var list = {
  name: "list",
  tokenize: tokenizeListStart,
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd
}, listItemPrefixWhitespaceConstruct = {
  tokenize: tokenizeListItemPrefixWhitespace,
  partial: !0
}, indentConstruct = {
  tokenize: tokenizeIndent,
  partial: !0
};
function tokenizeListStart(effects, ok2, nok) {
  let self = this, tail = self.events[self.events.length - 1], initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], !0).length : 0, size = 0;
  return start;
  function start(code3) {
    let kind = self.containerState.type || (code3 === 42 || code3 === 43 || code3 === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code3 === self.containerState.marker : asciiDigit(code3)) {
      if (self.containerState.type || (self.containerState.type = kind, effects.enter(kind, {
        _container: !0
      })), kind === "listUnordered")
        return effects.enter("listItemPrefix"), code3 === 42 || code3 === 45 ? effects.check(thematicBreak, nok, atMarker)(code3) : atMarker(code3);
      if (!self.interrupt || code3 === 49)
        return effects.enter("listItemPrefix"), effects.enter("listItemValue"), inside(code3);
    }
    return nok(code3);
  }
  function inside(code3) {
    return asciiDigit(code3) && ++size < 10 ? (effects.consume(code3), inside) : (!self.interrupt || size < 2) && (self.containerState.marker ? code3 === self.containerState.marker : code3 === 41 || code3 === 46) ? (effects.exit("listItemValue"), atMarker(code3)) : nok(code3);
  }
  function atMarker(code3) {
    return effects.enter("listItemMarker"), effects.consume(code3), effects.exit("listItemMarker"), self.containerState.marker = self.containerState.marker || code3, effects.check(
      blankLine,
      self.interrupt ? nok : onBlank,
      effects.attempt(
        listItemPrefixWhitespaceConstruct,
        endOfPrefix,
        otherPrefix
      )
    );
  }
  function onBlank(code3) {
    return self.containerState.initialBlankLine = !0, initialSize++, endOfPrefix(code3);
  }
  function otherPrefix(code3) {
    return markdownSpace(code3) ? (effects.enter("listItemPrefixWhitespace"), effects.consume(code3), effects.exit("listItemPrefixWhitespace"), endOfPrefix) : nok(code3);
  }
  function endOfPrefix(code3) {
    return self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), !0).length, ok2(code3);
  }
}
function tokenizeListContinuation(effects, ok2, nok) {
  let self = this;
  return self.containerState._closeFlow = void 0, effects.check(blankLine, onBlank, notBlank);
  function onBlank(code3) {
    return self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine, factorySpace(
      effects,
      ok2,
      "listItemIndent",
      self.containerState.size + 1
    )(code3);
  }
  function notBlank(code3) {
    return self.containerState.furtherBlankLines || !markdownSpace(code3) ? (self.containerState.furtherBlankLines = void 0, self.containerState.initialBlankLine = void 0, notInCurrentItem(code3)) : (self.containerState.furtherBlankLines = void 0, self.containerState.initialBlankLine = void 0, effects.attempt(indentConstruct, ok2, notInCurrentItem)(code3));
  }
  function notInCurrentItem(code3) {
    return self.containerState._closeFlow = !0, self.interrupt = void 0, factorySpace(
      effects,
      effects.attempt(list, ok2, nok),
      "linePrefix",
      self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    )(code3);
  }
}
function tokenizeIndent(effects, ok2, nok) {
  let self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "listItemIndent",
    self.containerState.size + 1
  );
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], !0).length === self.containerState.size ? ok2(code3) : nok(code3);
  }
}
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}
function tokenizeListItemPrefixWhitespace(effects, ok2, nok) {
  let self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "listItemPrefixWhitespace",
    self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
  );
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return !markdownSpace(code3) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-core-commonmark@1.0.6/node_modules/micromark-core-commonmark/lib/setext-underline.js
var setextUnderline = {
  name: "setextUnderline",
  tokenize: tokenizeSetextUnderline,
  resolveTo: resolveToSetextUnderline
};
function resolveToSetextUnderline(events, context) {
  let index2 = events.length, content3, text8, definition2;
  for (; index2--; )
    if (events[index2][0] === "enter") {
      if (events[index2][1].type === "content") {
        content3 = index2;
        break;
      }
      events[index2][1].type === "paragraph" && (text8 = index2);
    } else
      events[index2][1].type === "content" && events.splice(index2, 1), !definition2 && events[index2][1].type === "definition" && (definition2 = index2);
  let heading2 = {
    type: "setextHeading",
    start: Object.assign({}, events[text8][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  return events[text8][1].type = "setextHeadingText", definition2 ? (events.splice(text8, 0, ["enter", heading2, context]), events.splice(definition2 + 1, 0, ["exit", events[content3][1], context]), events[content3][1].end = Object.assign({}, events[definition2][1].end)) : events[content3][1] = heading2, events.push(["exit", heading2, context]), events;
}
function tokenizeSetextUnderline(effects, ok2, nok) {
  let self = this, index2 = self.events.length, marker, paragraph2;
  for (; index2--; )
    if (self.events[index2][1].type !== "lineEnding" && self.events[index2][1].type !== "linePrefix" && self.events[index2][1].type !== "content") {
      paragraph2 = self.events[index2][1].type === "paragraph";
      break;
    }
  return start;
  function start(code3) {
    return !self.parser.lazy[self.now().line] && (self.interrupt || paragraph2) ? (effects.enter("setextHeadingLine"), effects.enter("setextHeadingLineSequence"), marker = code3, closingSequence(code3)) : nok(code3);
  }
  function closingSequence(code3) {
    return code3 === marker ? (effects.consume(code3), closingSequence) : (effects.exit("setextHeadingLineSequence"), factorySpace(effects, closingSequenceEnd, "lineSuffix")(code3));
  }
  function closingSequenceEnd(code3) {
    return code3 === null || markdownLineEnding(code3) ? (effects.exit("setextHeadingLine"), ok2(code3)) : nok(code3);
  }
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/flow.js
var flow = {
  tokenize: initializeFlow
};
function initializeFlow(effects) {
  let self = this, initial = effects.attempt(
    blankLine,
    atBlankEnding,
    effects.attempt(
      this.parser.constructs.flowInitial,
      afterConstruct,
      factorySpace(
        effects,
        effects.attempt(
          this.parser.constructs.flow,
          afterConstruct,
          effects.attempt(content2, afterConstruct)
        ),
        "linePrefix"
      )
    )
  );
  return initial;
  function atBlankEnding(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    return effects.enter("lineEndingBlank"), effects.consume(code3), effects.exit("lineEndingBlank"), self.currentConstruct = void 0, initial;
  }
  function afterConstruct(code3) {
    if (code3 === null) {
      effects.consume(code3);
      return;
    }
    return effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), self.currentConstruct = void 0, initial;
  }
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/initialize/text.js
var resolver = {
  resolveAll: createResolver()
}, string = initializeFactory("string"), text = initializeFactory("text");
function initializeFactory(field) {
  return {
    tokenize: initializeText,
    resolveAll: createResolver(
      field === "text" ? resolveAllLineSuffixes : void 0
    )
  };
  function initializeText(effects) {
    let self = this, constructs2 = this.parser.constructs[field], text8 = effects.attempt(constructs2, start, notText);
    return start;
    function start(code3) {
      return atBreak(code3) ? text8(code3) : notText(code3);
    }
    function notText(code3) {
      if (code3 === null) {
        effects.consume(code3);
        return;
      }
      return effects.enter("data"), effects.consume(code3), data;
    }
    function data(code3) {
      return atBreak(code3) ? (effects.exit("data"), text8(code3)) : (effects.consume(code3), data);
    }
    function atBreak(code3) {
      if (code3 === null)
        return !0;
      let list3 = constructs2[code3], index2 = -1;
      if (list3)
        for (; ++index2 < list3.length; ) {
          let item = list3[index2];
          if (!item.previous || item.previous.call(self, self.previous))
            return !0;
        }
      return !1;
    }
  }
}
function createResolver(extraResolver) {
  return resolveAllText;
  function resolveAllText(events, context) {
    let index2 = -1, enter;
    for (; ++index2 <= events.length; )
      enter === void 0 ? events[index2] && events[index2][1].type === "data" && (enter = index2, index2++) : (!events[index2] || events[index2][1].type !== "data") && (index2 !== enter + 2 && (events[enter][1].end = events[index2 - 1][1].end, events.splice(enter + 2, index2 - enter - 2), index2 = enter + 2), enter = void 0);
    return extraResolver ? extraResolver(events, context) : events;
  }
}
function resolveAllLineSuffixes(events, context) {
  let eventIndex = 0;
  for (; ++eventIndex <= events.length; )
    if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
      let data = events[eventIndex - 1][1], chunks = context.sliceStream(data), index2 = chunks.length, bufferIndex = -1, size = 0, tabs;
      for (; index2--; ) {
        let chunk = chunks[index2];
        if (typeof chunk == "string") {
          for (bufferIndex = chunk.length; chunk.charCodeAt(bufferIndex - 1) === 32; )
            size++, bufferIndex--;
          if (bufferIndex)
            break;
          bufferIndex = -1;
        } else if (chunk === -2)
          tabs = !0, size++;
        else if (chunk !== -1) {
          index2++;
          break;
        }
      }
      if (size) {
        let token = {
          type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            line: data.end.line,
            column: data.end.column - size,
            offset: data.end.offset - size,
            _index: data.start._index + index2,
            _bufferIndex: index2 ? bufferIndex : data.start._bufferIndex + bufferIndex
          },
          end: Object.assign({}, data.end)
        };
        data.end = Object.assign({}, token.start), data.start.offset === data.end.offset ? Object.assign(data, token) : (events.splice(
          eventIndex,
          0,
          ["enter", token, context],
          ["exit", token, context]
        ), eventIndex += 2);
      }
      eventIndex++;
    }
  return events;
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/create-tokenizer.js
function createTokenizer(parser, initialize, from) {
  let point4 = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  ), columnStart = {}, resolveAllConstructs = [], chunks = [], stack = [], consumed = !0, effects = {
    consume,
    enter,
    exit: exit3,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: !0
    })
  }, context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  }, state = initialize.tokenize.call(context, effects), expectedCode;
  return initialize.resolveAll && resolveAllConstructs.push(initialize), context;
  function write(slice) {
    return chunks = push(chunks, slice), main(), chunks[chunks.length - 1] !== null ? [] : (addResult(initialize, 0), context.events = resolveAll(resolveAllConstructs, context.events, context), context.events);
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point4);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column, accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    for (; point4._index < chunks.length; ) {
      let chunk = chunks[point4._index];
      if (typeof chunk == "string")
        for (chunkIndex = point4._index, point4._bufferIndex < 0 && (point4._bufferIndex = 0); point4._index === chunkIndex && point4._bufferIndex < chunk.length; )
          go(chunk.charCodeAt(point4._bufferIndex));
      else
        go(chunk);
    }
  }
  function go(code3) {
    consumed = void 0, expectedCode = code3, state = state(code3);
  }
  function consume(code3) {
    markdownLineEnding(code3) ? (point4.line++, point4.column = 1, point4.offset += code3 === -3 ? 2 : 1, accountForPotentialSkip()) : code3 !== -1 && (point4.column++, point4.offset++), point4._bufferIndex < 0 ? point4._index++ : (point4._bufferIndex++, point4._bufferIndex === chunks[point4._index].length && (point4._bufferIndex = -1, point4._index++)), context.previous = code3, consumed = !0;
  }
  function enter(type, fields) {
    let token = fields || {};
    return token.type = type, token.start = now(), context.events.push(["enter", token, context]), stack.push(token), token;
  }
  function exit3(type) {
    let token = stack.pop();
    return token.end = now(), context.events.push(["exit", token, context]), token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs2, returnState, bogusState) {
      let listOfConstructs, constructIndex, currentConstruct, info;
      return Array.isArray(constructs2) ? handleListOfConstructs(constructs2) : "tokenize" in constructs2 ? handleListOfConstructs([constructs2]) : handleMapOfConstructs(constructs2);
      function handleMapOfConstructs(map2) {
        return start;
        function start(code3) {
          let def = code3 !== null && map2[code3], all4 = code3 !== null && map2.null, list3 = [
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all4) ? all4 : all4 ? [all4] : []
          ];
          return handleListOfConstructs(list3)(code3);
        }
      }
      function handleListOfConstructs(list3) {
        return listOfConstructs = list3, constructIndex = 0, list3.length === 0 ? bogusState : handleConstruct(list3[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code3) {
          return info = store(), currentConstruct = construct, construct.partial || (context.currentConstruct = construct), construct.name && context.parser.constructs.disable.null.includes(construct.name) ? nok(code3) : construct.tokenize.call(
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok2,
            nok
          )(code3);
        }
      }
      function ok2(code3) {
        return consumed = !0, onreturn(currentConstruct, info), returnState;
      }
      function nok(code3) {
        return consumed = !0, info.restore(), ++constructIndex < listOfConstructs.length ? handleConstruct(listOfConstructs[constructIndex]) : bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    construct.resolveAll && !resolveAllConstructs.includes(construct) && resolveAllConstructs.push(construct), construct.resolve && splice(
      context.events,
      from2,
      context.events.length - from2,
      construct.resolve(context.events.slice(from2), context)
    ), construct.resolveTo && (context.events = construct.resolveTo(context.events, context));
  }
  function store() {
    let startPoint = now(), startPrevious = context.previous, startCurrentConstruct = context.currentConstruct, startEventsIndex = context.events.length, startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point4 = startPoint, context.previous = startPrevious, context.currentConstruct = startCurrentConstruct, context.events.length = startEventsIndex, stack = startStack, accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    point4.line in columnStart && point4.column < 2 && (point4.column = columnStart[point4.line], point4.offset += columnStart[point4.line] - 1);
  }
}
function sliceChunks(chunks, token) {
  let startIndex = token.start._index, startBufferIndex = token.start._bufferIndex, endIndex = token.end._index, endBufferIndex = token.end._bufferIndex, view;
  return startIndex === endIndex ? view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)] : (view = chunks.slice(startIndex, endIndex), startBufferIndex > -1 && (view[0] = view[0].slice(startBufferIndex)), endBufferIndex > 0 && view.push(chunks[endIndex].slice(0, endBufferIndex))), view;
}
function serializeChunks(chunks, expandTabs) {
  let index2 = -1, result = [], atTab;
  for (; ++index2 < chunks.length; ) {
    let chunk = chunks[index2], value;
    if (typeof chunk == "string")
      value = chunk;
    else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = `
`;
          break;
        }
        case -3: {
          value = `\r
`;
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default:
          value = String.fromCharCode(chunk);
      }
    atTab = chunk === -2, result.push(value);
  }
  return result.join("");
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/constructs.js
var constructs_exports = {};
__export(constructs_exports, {
  attentionMarkers: () => attentionMarkers,
  contentInitial: () => contentInitial,
  disable: () => disable,
  document: () => document3,
  flow: () => flow2,
  flowInitial: () => flowInitial,
  insideSpan: () => insideSpan,
  string: () => string2,
  text: () => text2
});
var document3 = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
}, contentInitial = {
  [91]: definition
}, flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
}, flow2 = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
}, string2 = {
  [38]: characterReference,
  [92]: characterEscape
}, text2 = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
}, insideSpan = {
  null: [attention, resolver]
}, attentionMarkers = {
  null: [42, 95]
}, disable = {
  null: []
};

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/parse.js
function parse(options = {}) {
  let constructs2 = combineExtensions(
    [constructs_exports].concat(options.extensions || [])
  ), parser = {
    defined: [],
    lazy: {},
    constructs: constructs2,
    content: create2(content),
    document: create2(document2),
    flow: create2(flow),
    string: create2(string),
    text: create2(text)
  };
  return parser;
  function create2(initial) {
    return creator;
    function creator(from) {
      return createTokenizer(parser, initial, from);
    }
  }
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/preprocess.js
var search = /[\0\t\n\r]/g;
function preprocess() {
  let column = 1, buffer2 = "", start = !0, atCarriageReturn;
  return preprocessor;
  function preprocessor(value, encoding, end) {
    let chunks = [], match, next, startPosition, endPosition, code3;
    for (value = buffer2 + value.toString(encoding), startPosition = 0, buffer2 = "", start && (value.charCodeAt(0) === 65279 && startPosition++, start = void 0); startPosition < value.length; ) {
      if (search.lastIndex = startPosition, match = search.exec(value), endPosition = match && match.index !== void 0 ? match.index : value.length, code3 = value.charCodeAt(endPosition), !match) {
        buffer2 = value.slice(startPosition);
        break;
      }
      if (code3 === 10 && startPosition === endPosition && atCarriageReturn)
        chunks.push(-3), atCarriageReturn = void 0;
      else
        switch (atCarriageReturn && (chunks.push(-5), atCarriageReturn = void 0), startPosition < endPosition && (chunks.push(value.slice(startPosition, endPosition)), column += endPosition - startPosition), code3) {
          case 0: {
            chunks.push(65533), column++;
            break;
          }
          case 9: {
            for (next = Math.ceil(column / 4) * 4, chunks.push(-2); column++ < next; )
              chunks.push(-1);
            break;
          }
          case 10: {
            chunks.push(-4), column = 1;
            break;
          }
          default:
            atCarriageReturn = !0, column = 1;
        }
      startPosition = endPosition + 1;
    }
    return end && (atCarriageReturn && chunks.push(-5), buffer2 && chunks.push(buffer2), chunks.push(null)), chunks;
  }
}

// node_modules/.pnpm/micromark@3.1.0/node_modules/micromark/lib/postprocess.js
function postprocess(events) {
  for (; !subtokenize(events); )
    ;
  return events;
}

// node_modules/.pnpm/micromark-util-decode-numeric-character-reference@1.0.0/node_modules/micromark-util-decode-numeric-character-reference/index.js
function decodeNumericCharacterReference(value, base2) {
  let code3 = Number.parseInt(value, base2);
  return code3 < 9 || code3 === 11 || code3 > 13 && code3 < 32 || code3 > 126 && code3 < 160 || code3 > 55295 && code3 < 57344 || code3 > 64975 && code3 < 65008 || (code3 & 65535) === 65535 || (code3 & 65535) === 65534 || code3 > 1114111 ? "\uFFFD" : String.fromCharCode(code3);
}

// node_modules/.pnpm/micromark-util-decode-string@1.0.2/node_modules/micromark-util-decode-string/index.js
var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function decodeString(value) {
  return value.replace(characterEscapeOrReference, decode);
}
function decode($0, $1, $2) {
  if ($1)
    return $1;
  if ($2.charCodeAt(0) === 35) {
    let head2 = $2.charCodeAt(1), hex = head2 === 120 || head2 === 88;
    return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
  }
  return decodeNamedCharacterReference($2) || $0;
}

// node_modules/.pnpm/mdast-util-from-markdown@1.2.0/node_modules/mdast-util-from-markdown/lib/index.js
var own3 = {}.hasOwnProperty, fromMarkdown = function(value, encoding, options) {
  return typeof encoding != "string" && (options = encoding, encoding = void 0), compiler(options)(
    postprocess(
      parse(options).document().write(preprocess()(value, encoding, !0))
    )
  );
};
function compiler(options = {}) {
  let config2 = configure(
    {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: opener(link2),
        autolinkProtocol: onenterdata,
        autolinkEmail: onenterdata,
        atxHeading: opener(heading2),
        blockQuote: opener(blockQuote2),
        characterEscape: onenterdata,
        characterReference: onenterdata,
        codeFenced: opener(codeFlow),
        codeFencedFenceInfo: buffer2,
        codeFencedFenceMeta: buffer2,
        codeIndented: opener(codeFlow, buffer2),
        codeText: opener(codeText2, buffer2),
        codeTextData: onenterdata,
        data: onenterdata,
        codeFlowValue: onenterdata,
        definition: opener(definition2),
        definitionDestinationString: buffer2,
        definitionLabelString: buffer2,
        definitionTitleString: buffer2,
        emphasis: opener(emphasis2),
        hardBreakEscape: opener(hardBreak2),
        hardBreakTrailing: opener(hardBreak2),
        htmlFlow: opener(html4, buffer2),
        htmlFlowData: onenterdata,
        htmlText: opener(html4, buffer2),
        htmlTextData: onenterdata,
        image: opener(image2),
        label: buffer2,
        link: opener(link2),
        listItem: opener(listItem3),
        listItemValue: onenterlistitemvalue,
        listOrdered: opener(list3, onenterlistordered),
        listUnordered: opener(list3),
        paragraph: opener(paragraph2),
        reference: onenterreference,
        referenceString: buffer2,
        resourceDestinationString: buffer2,
        resourceTitleString: buffer2,
        setextHeading: opener(heading2),
        strong: opener(strong2),
        thematicBreak: opener(thematicBreak3)
      },
      exit: {
        atxHeading: closer(),
        atxHeadingSequence: onexitatxheadingsequence,
        autolink: closer(),
        autolinkEmail: onexitautolinkemail,
        autolinkProtocol: onexitautolinkprotocol,
        blockQuote: closer(),
        characterEscapeValue: onexitdata,
        characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
        characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
        characterReferenceValue: onexitcharacterreferencevalue,
        codeFenced: closer(onexitcodefenced),
        codeFencedFence: onexitcodefencedfence,
        codeFencedFenceInfo: onexitcodefencedfenceinfo,
        codeFencedFenceMeta: onexitcodefencedfencemeta,
        codeFlowValue: onexitdata,
        codeIndented: closer(onexitcodeindented),
        codeText: closer(onexitcodetext),
        codeTextData: onexitdata,
        data: onexitdata,
        definition: closer(),
        definitionDestinationString: onexitdefinitiondestinationstring,
        definitionLabelString: onexitdefinitionlabelstring,
        definitionTitleString: onexitdefinitiontitlestring,
        emphasis: closer(),
        hardBreakEscape: closer(onexithardbreak),
        hardBreakTrailing: closer(onexithardbreak),
        htmlFlow: closer(onexithtmlflow),
        htmlFlowData: onexitdata,
        htmlText: closer(onexithtmltext),
        htmlTextData: onexitdata,
        image: closer(onexitimage),
        label: onexitlabel,
        labelText: onexitlabeltext,
        lineEnding: onexitlineending,
        link: closer(onexitlink),
        listItem: closer(),
        listOrdered: closer(),
        listUnordered: closer(),
        paragraph: closer(),
        referenceString: onexitreferencestring,
        resourceDestinationString: onexitresourcedestinationstring,
        resourceTitleString: onexitresourcetitlestring,
        resource: onexitresource,
        setextHeading: closer(onexitsetextheading),
        setextHeadingLineSequence: onexitsetextheadinglinesequence,
        setextHeadingText: onexitsetextheadingtext,
        strong: closer(),
        thematicBreak: closer()
      }
    },
    options.mdastExtensions || []
  ), data = {};
  return compile;
  function compile(events) {
    let tree = {
      type: "root",
      children: []
    }, stack = [tree], tokenStack = [], listStack = [], context = {
      stack,
      tokenStack,
      config: config2,
      enter,
      exit: exit3,
      buffer: buffer2,
      resume,
      setData,
      getData
    }, index2 = -1;
    for (; ++index2 < events.length; )
      if (events[index2][1].type === "listOrdered" || events[index2][1].type === "listUnordered")
        if (events[index2][0] === "enter")
          listStack.push(index2);
        else {
          let tail = listStack.pop();
          index2 = prepareList(events, tail, index2);
        }
    for (index2 = -1; ++index2 < events.length; ) {
      let handler = config2[events[index2][0]];
      own3.call(handler, events[index2][1].type) && handler[events[index2][1].type].call(
        Object.assign(
          {
            sliceSerialize: events[index2][2].sliceSerialize
          },
          context
        ),
        events[index2][1]
      );
    }
    if (tokenStack.length > 0) {
      let tail = tokenStack[tokenStack.length - 1];
      (tail[1] || defaultOnError).call(context, void 0, tail[0]);
    }
    for (tree.position = {
      start: point4(
        events.length > 0 ? events[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }
      ),
      end: point4(
        events.length > 0 ? events[events.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        }
      )
    }, index2 = -1; ++index2 < config2.transforms.length; )
      tree = config2.transforms[index2](tree) || tree;
    return tree;
  }
  function prepareList(events, start, length) {
    let index2 = start - 1, containerBalance = -1, listSpread = !1, listItem4, lineIndex, firstBlankLineIndex, atMarker;
    for (; ++index2 <= length; ) {
      let event = events[index2];
      if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote" ? (event[0] === "enter" ? containerBalance++ : containerBalance--, atMarker = void 0) : event[1].type === "lineEndingBlank" ? event[0] === "enter" && (listItem4 && !atMarker && !containerBalance && !firstBlankLineIndex && (firstBlankLineIndex = index2), atMarker = void 0) : event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace" || (atMarker = void 0), !containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
        if (listItem4) {
          let tailIndex = index2;
          for (lineIndex = void 0; tailIndex--; ) {
            let tailEvent = events[tailIndex];
            if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
              if (tailEvent[0] === "exit")
                continue;
              lineIndex && (events[lineIndex][1].type = "lineEndingBlank", listSpread = !0), tailEvent[1].type = "lineEnding", lineIndex = tailIndex;
            } else if (!(tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent"))
              break;
          }
          firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex) && (listItem4._spread = !0), listItem4.end = Object.assign(
            {},
            lineIndex ? events[lineIndex][1].start : event[1].end
          ), events.splice(lineIndex || index2, 0, ["exit", listItem4, event[2]]), index2++, length++;
        }
        event[1].type === "listItemPrefix" && (listItem4 = {
          type: "listItem",
          _spread: !1,
          start: Object.assign({}, event[1].start)
        }, events.splice(index2, 0, ["enter", listItem4, event[2]]), index2++, length++, firstBlankLineIndex = void 0, atMarker = !0);
      }
    }
    return events[start][1]._spread = listSpread, length;
  }
  function setData(key, value) {
    data[key] = value;
  }
  function getData(key) {
    return data[key];
  }
  function point4(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create2, and) {
    return open;
    function open(token) {
      enter.call(this, create2(token), token), and && and.call(this, token);
    }
  }
  function buffer2() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function enter(node, token, errorHandler) {
    return this.stack[this.stack.length - 1].children.push(node), this.stack.push(node), this.tokenStack.push([token, errorHandler]), node.position = {
      start: point4(token.start)
    }, node;
  }
  function closer(and) {
    return close;
    function close(token) {
      and && and.call(this, token), exit3.call(this, token);
    }
  }
  function exit3(token, onExitError) {
    let node = this.stack.pop(), open = this.tokenStack.pop();
    if (open)
      open[0].type !== token.type && (onExitError ? onExitError.call(this, token, open[0]) : (open[1] || defaultOnError).call(this, token, open[0]));
    else
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    return node.position.end = point4(token.end), node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterlistordered() {
    setData("expectingFirstListItemValue", !0);
  }
  function onenterlistitemvalue(token) {
    if (getData("expectingFirstListItemValue")) {
      let ancestor = this.stack[this.stack.length - 2];
      ancestor.start = Number.parseInt(this.sliceSerialize(token), 10), setData("expectingFirstListItemValue");
    }
  }
  function onexitcodefencedfenceinfo() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.lang = data2;
  }
  function onexitcodefencedfencemeta() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.meta = data2;
  }
  function onexitcodefencedfence() {
    getData("flowCodeInside") || (this.buffer(), setData("flowCodeInside", !0));
  }
  function onexitcodefenced() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), setData("flowCodeInside");
  }
  function onexitcodeindented() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2.replace(/(\r?\n|\r)$/g, "");
  }
  function onexitdefinitionlabelstring(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function onexitdefinitiontitlestring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitdefinitiondestinationstring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitatxheadingsequence(token) {
    let node = this.stack[this.stack.length - 1];
    if (!node.depth) {
      let depth = this.sliceSerialize(token).length;
      node.depth = depth;
    }
  }
  function onexitsetextheadingtext() {
    setData("setextHeadingSlurpLineEnding", !0);
  }
  function onexitsetextheadinglinesequence(token) {
    let node = this.stack[this.stack.length - 1];
    node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
  }
  function onexitsetextheading() {
    setData("setextHeadingSlurpLineEnding");
  }
  function onenterdata(token) {
    let parent = this.stack[this.stack.length - 1], tail = parent.children[parent.children.length - 1];
    (!tail || tail.type !== "text") && (tail = text8(), tail.position = {
      start: point4(token.start)
    }, parent.children.push(tail)), this.stack.push(tail);
  }
  function onexitdata(token) {
    let tail = this.stack.pop();
    tail.value += this.sliceSerialize(token), tail.position.end = point4(token.end);
  }
  function onexitlineending(token) {
    let context = this.stack[this.stack.length - 1];
    if (getData("atHardBreak")) {
      let tail = context.children[context.children.length - 1];
      tail.position.end = point4(token.end), setData("atHardBreak");
      return;
    }
    !getData("setextHeadingSlurpLineEnding") && config2.canContainEols.includes(context.type) && (onenterdata.call(this, token), onexitdata.call(this, token));
  }
  function onexithardbreak() {
    setData("atHardBreak", !0);
  }
  function onexithtmlflow() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexithtmltext() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitcodetext() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.value = data2;
  }
  function onexitlink() {
    let context = this.stack[this.stack.length - 1];
    getData("inReference") ? (context.type += "Reference", context.referenceType = getData("referenceType") || "shortcut", delete context.url, delete context.title) : (delete context.identifier, delete context.label), setData("referenceType");
  }
  function onexitimage() {
    let context = this.stack[this.stack.length - 1];
    getData("inReference") ? (context.type += "Reference", context.referenceType = getData("referenceType") || "shortcut", delete context.url, delete context.title) : (delete context.identifier, delete context.label), setData("referenceType");
  }
  function onexitlabeltext(token) {
    let ancestor = this.stack[this.stack.length - 2], string3 = this.sliceSerialize(token);
    ancestor.label = decodeString(string3), ancestor.identifier = normalizeIdentifier(string3).toLowerCase();
  }
  function onexitlabel() {
    let fragment2 = this.stack[this.stack.length - 1], value = this.resume(), node = this.stack[this.stack.length - 1];
    setData("inReference", !0), node.type === "link" ? node.children = fragment2.children : node.alt = value;
  }
  function onexitresourcedestinationstring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.url = data2;
  }
  function onexitresourcetitlestring() {
    let data2 = this.resume(), node = this.stack[this.stack.length - 1];
    node.title = data2;
  }
  function onexitresource() {
    setData("inReference");
  }
  function onenterreference() {
    setData("referenceType", "collapsed");
  }
  function onexitreferencestring(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase(), setData("referenceType", "full");
  }
  function onexitcharacterreferencemarker(token) {
    setData("characterReferenceType", token.type);
  }
  function onexitcharacterreferencevalue(token) {
    let data2 = this.sliceSerialize(token), type = getData("characterReferenceType"), value;
    type ? (value = decodeNumericCharacterReference(
      data2,
      type === "characterReferenceMarkerNumeric" ? 10 : 16
    ), setData("characterReferenceType")) : value = decodeNamedCharacterReference(data2);
    let tail = this.stack.pop();
    tail.value += value, tail.position.end = point4(token.end);
  }
  function onexitautolinkprotocol(token) {
    onexitdata.call(this, token);
    let node = this.stack[this.stack.length - 1];
    node.url = this.sliceSerialize(token);
  }
  function onexitautolinkemail(token) {
    onexitdata.call(this, token);
    let node = this.stack[this.stack.length - 1];
    node.url = "mailto:" + this.sliceSerialize(token);
  }
  function blockQuote2() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function codeFlow() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function codeText2() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function definition2() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function emphasis2() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function heading2() {
    return {
      type: "heading",
      depth: void 0,
      children: []
    };
  }
  function hardBreak2() {
    return {
      type: "break"
    };
  }
  function html4() {
    return {
      type: "html",
      value: ""
    };
  }
  function image2() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function link2() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function list3(token) {
    return {
      type: "list",
      ordered: token.type === "listOrdered",
      start: null,
      spread: token._spread,
      children: []
    };
  }
  function listItem3(token) {
    return {
      type: "listItem",
      spread: token._spread,
      checked: null,
      children: []
    };
  }
  function paragraph2() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function strong2() {
    return {
      type: "strong",
      children: []
    };
  }
  function text8() {
    return {
      type: "text",
      value: ""
    };
  }
  function thematicBreak3() {
    return {
      type: "thematicBreak"
    };
  }
}
function configure(combined, extensions) {
  let index2 = -1;
  for (; ++index2 < extensions.length; ) {
    let value = extensions[index2];
    Array.isArray(value) ? configure(combined, value) : extension(combined, value);
  }
  return combined;
}
function extension(combined, extension2) {
  let key;
  for (key in extension2)
    if (own3.call(extension2, key)) {
      let list3 = key === "canContainEols" || key === "transforms", left = (own3.call(combined, key) ? combined[key] : void 0) || (combined[key] = list3 ? [] : {}), right = extension2[key];
      right && (list3 ? combined[key] = [...left, ...right] : Object.assign(left, right));
    }
}
function defaultOnError(left, right) {
  throw left ? new Error(
    "Cannot close `" + left.type + "` (" + stringifyPosition({
      start: left.start,
      end: left.end
    }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is open"
  ) : new Error(
    "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
      start: right.start,
      end: right.end
    }) + ") is still open"
  );
}

// node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/lib/index.js
function remarkParse(options) {
  Object.assign(this, { Parser: (doc) => {
    let settings = this.data("settings");
    return fromMarkdown(
      doc,
      Object.assign({}, settings, options, {
        extensions: this.data("micromarkExtensions") || [],
        mdastExtensions: this.data("fromMarkdownExtensions") || []
      })
    );
  } });
}

// node_modules/.pnpm/remark-parse@10.0.1/node_modules/remark-parse/index.js
var remark_parse_default = remarkParse;

// node_modules/.pnpm/unist-builder@3.0.0/node_modules/unist-builder/index.js
var u = function(type, props, value) {
  var node = { type: String(type) };
  return value == null && (typeof props == "string" || Array.isArray(props)) ? value = props : Object.assign(node, props), Array.isArray(value) ? node.children = value : value != null && (node.value = String(value)), node;
};

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/traverse.js
var own4 = {}.hasOwnProperty;
function unknown(h2, node) {
  let data = node.data || {};
  return "value" in node && !(own4.call(data, "hName") || own4.call(data, "hProperties") || own4.call(data, "hChildren")) ? h2.augment(node, u("text", node.value)) : h2(node, "div", all2(h2, node));
}
function one2(h2, node, parent) {
  let type = node && node.type, fn;
  if (!type)
    throw new Error("Expected node, got `" + node + "`");
  return own4.call(h2.handlers, type) ? fn = h2.handlers[type] : h2.passThrough && h2.passThrough.includes(type) ? fn = returnNode : fn = h2.unknownHandler, (typeof fn == "function" ? fn : unknown)(h2, node, parent);
}
function returnNode(h2, node) {
  return "children" in node ? { ...node, children: all2(h2, node) } : node;
}
function all2(h2, parent) {
  let values = [];
  if ("children" in parent) {
    let nodes2 = parent.children, index2 = -1;
    for (; ++index2 < nodes2.length; ) {
      let result = one2(h2, nodes2[index2], parent);
      if (result) {
        if (index2 && nodes2[index2 - 1].type === "break" && (!Array.isArray(result) && result.type === "text" && (result.value = result.value.replace(/^\s+/, "")), !Array.isArray(result) && result.type === "element")) {
          let head = result.children[0];
          head && head.type === "text" && (head.value = head.value.replace(/^\s+/, ""));
        }
        Array.isArray(result) ? values.push(...result) : values.push(result);
      }
    }
  }
  return values;
}

// node_modules/.pnpm/unist-util-is@5.1.1/node_modules/unist-util-is/index.js
var convert = function(test) {
  if (test == null)
    return ok;
  if (typeof test == "string")
    return typeFactory(test);
  if (typeof test == "object")
    return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
  if (typeof test == "function")
    return castFactory(test);
  throw new Error("Expected function, string, or object as test");
};
function anyFactory(tests) {
  let checks2 = [], index2 = -1;
  for (; ++index2 < tests.length; )
    checks2[index2] = convert(tests[index2]);
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    for (; ++index3 < checks2.length; )
      if (checks2[index3].call(this, ...parameters))
        return !0;
    return !1;
  }
}
function propsFactory(check) {
  return castFactory(all4);
  function all4(node) {
    let key;
    for (key in check)
      if (node[key] !== check[key])
        return !1;
    return !0;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(...parameters) {
    return Boolean(check.call(this, ...parameters));
  }
}
function ok() {
  return !0;
}

// node_modules/.pnpm/unist-util-visit-parents@5.1.1/node_modules/unist-util-visit-parents/color.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/.pnpm/unist-util-visit-parents@5.1.1/node_modules/unist-util-visit-parents/index.js
var CONTINUE = !0, SKIP = "skip", EXIT = !1, visitParents = function(tree, test, visitor, reverse) {
  typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null);
  let is = convert(test), step = reverse ? -1 : 1;
  factory2(tree, null, [])();
  function factory2(node, index2, parents) {
    let value = typeof node == "object" && node !== null ? node : {}, name;
    return typeof value.type == "string" && (name = typeof value.tagName == "string" ? value.tagName : typeof value.name == "string" ? value.name : void 0, Object.defineProperty(visit2, "name", {
      value: "node (" + color(value.type + (name ? "<" + name + ">" : "")) + ")"
    })), visit2;
    function visit2() {
      let result = [], subresult, offset, grandparents;
      if ((!test || is(node, index2, parents[parents.length - 1] || null)) && (result = toResult(visitor(node, parents)), result[0] === EXIT))
        return result;
      if (node.children && result[0] !== SKIP)
        for (offset = (reverse ? node.children.length : -1) + step, grandparents = parents.concat(node); offset > -1 && offset < node.children.length; ) {
          if (subresult = factory2(node.children[offset], offset, grandparents)(), subresult[0] === EXIT)
            return subresult;
          offset = typeof subresult[1] == "number" ? subresult[1] : offset + step;
        }
      return result;
    }
  }
};
function toResult(value) {
  return Array.isArray(value) ? value : typeof value == "number" ? [CONTINUE, value] : [value];
}

// node_modules/.pnpm/unist-util-visit@4.1.1/node_modules/unist-util-visit/index.js
var visit = function(tree, test, visitor, reverse) {
  typeof test == "function" && typeof visitor != "function" && (reverse = visitor, visitor = test, test = null), visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    let parent = parents[parents.length - 1];
    return visitor(
      node,
      parent ? parent.children.indexOf(node) : null,
      parent
    );
  }
};

// node_modules/.pnpm/unist-util-position@4.0.3/node_modules/unist-util-position/index.js
var pointStart = point2("start"), pointEnd = point2("end");
function point2(type) {
  return point4;
  function point4(node) {
    let point5 = node && node.position && node.position[type] || {};
    return {
      line: point5.line || null,
      column: point5.column || null,
      offset: point5.offset > -1 ? point5.offset : null
    };
  }
}

// node_modules/.pnpm/unist-util-generated@2.0.0/node_modules/unist-util-generated/index.js
function generated(node) {
  return !node || !node.position || !node.position.start || !node.position.start.line || !node.position.start.column || !node.position.end || !node.position.end.line || !node.position.end.column;
}

// node_modules/.pnpm/mdast-util-definitions@5.1.1/node_modules/mdast-util-definitions/index.js
var own5 = {}.hasOwnProperty;
function definitions(node) {
  let cache2 = /* @__PURE__ */ Object.create(null);
  if (!node || !node.type)
    throw new Error("mdast-util-definitions expected node");
  return visit(node, "definition", (definition3) => {
    let id = clean(definition3.identifier);
    id && !own5.call(cache2, id) && (cache2[id] = definition3);
  }), definition2;
  function definition2(identifier) {
    let id = clean(identifier);
    return id && own5.call(cache2, id) ? cache2[id] : null;
  }
}
function clean(value) {
  return String(value || "").toUpperCase();
}

// node_modules/.pnpm/micromark-util-sanitize-uri@1.1.0/node_modules/micromark-util-sanitize-uri/index.js
function normalizeUri(value) {
  let result = [], index2 = -1, start = 0, skip = 0;
  for (; ++index2 < value.length; ) {
    let code3 = value.charCodeAt(index2), replace2 = "";
    if (code3 === 37 && asciiAlphanumeric(value.charCodeAt(index2 + 1)) && asciiAlphanumeric(value.charCodeAt(index2 + 2)))
      skip = 2;
    else if (code3 < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code3)) || (replace2 = String.fromCharCode(code3));
    else if (code3 > 55295 && code3 < 57344) {
      let next = value.charCodeAt(index2 + 1);
      code3 < 56320 && next > 56319 && next < 57344 ? (replace2 = String.fromCharCode(code3, next), skip = 1) : replace2 = "\uFFFD";
    } else
      replace2 = String.fromCharCode(code3);
    replace2 && (result.push(value.slice(start, index2), encodeURIComponent(replace2)), start = index2 + skip + 1, replace2 = ""), skip && (index2 += skip, skip = 0);
  }
  return result.join("") + value.slice(start);
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/wrap.js
function wrap2(nodes2, loose) {
  let result = [], index2 = -1;
  for (loose && result.push(u("text", `
`)); ++index2 < nodes2.length; )
    index2 && result.push(u("text", `
`)), result.push(nodes2[index2]);
  return loose && nodes2.length > 0 && result.push(u("text", `
`)), result;
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/footer.js
function footer(h2) {
  let index2 = -1, listItems = [];
  for (; ++index2 < h2.footnoteOrder.length; ) {
    let def = h2.footnoteById[h2.footnoteOrder[index2].toUpperCase()];
    if (!def)
      continue;
    let content3 = all2(h2, def), id = String(def.identifier), safeId = normalizeUri(id.toLowerCase()), referenceIndex = 0, backReferences = [];
    for (; ++referenceIndex <= h2.footnoteCounts[id]; ) {
      let backReference = {
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + h2.clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : ""),
          dataFootnoteBackref: !0,
          className: ["data-footnote-backref"],
          ariaLabel: h2.footnoteBackLabel
        },
        children: [{ type: "text", value: "\u21A9" }]
      };
      referenceIndex > 1 && backReference.children.push({
        type: "element",
        tagName: "sup",
        children: [{ type: "text", value: String(referenceIndex) }]
      }), backReferences.length > 0 && backReferences.push({ type: "text", value: " " }), backReferences.push(backReference);
    }
    let tail = content3[content3.length - 1];
    if (tail && tail.type === "element" && tail.tagName === "p") {
      let tailTail = tail.children[tail.children.length - 1];
      tailTail && tailTail.type === "text" ? tailTail.value += " " : tail.children.push({ type: "text", value: " " }), tail.children.push(...backReferences);
    } else
      content3.push(...backReferences);
    let listItem3 = {
      type: "element",
      tagName: "li",
      properties: { id: h2.clobberPrefix + "fn-" + safeId },
      children: wrap2(content3, !0)
    };
    def.position && (listItem3.position = def.position), listItems.push(listItem3);
  }
  return listItems.length === 0 ? null : {
    type: "element",
    tagName: "section",
    properties: { dataFootnotes: !0, className: ["footnotes"] },
    children: [
      {
        type: "element",
        tagName: h2.footnoteLabelTagName,
        properties: {
          ...JSON.parse(JSON.stringify(h2.footnoteLabelProperties)),
          id: "footnote-label"
        },
        children: [u("text", h2.footnoteLabel)]
      },
      { type: "text", value: `
` },
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: wrap2(listItems, !0)
      },
      { type: "text", value: `
` }
    ]
  };
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function blockquote(h2, node) {
  return h2(node, "blockquote", wrap2(all2(h2, node), !0));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/break.js
function hardBreak(h2, node) {
  return [h2(node, "br"), u("text", `
`)];
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/code.js
function code(h2, node) {
  let value = node.value ? node.value + `
` : "", lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/), props = {};
  lang && (props.className = ["language-" + lang]);
  let code3 = h2(node, "code", props, [u("text", value)]);
  return node.meta && (code3.data = { meta: node.meta }), h2(node.position, "pre", [code3]);
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/delete.js
function strikethrough(h2, node) {
  return h2(node, "del", all2(h2, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function emphasis(h2, node) {
  return h2(node, "em", all2(h2, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function footnoteReference(h2, node) {
  let id = String(node.identifier), safeId = normalizeUri(id.toLowerCase()), index2 = h2.footnoteOrder.indexOf(id), counter;
  index2 === -1 ? (h2.footnoteOrder.push(id), h2.footnoteCounts[id] = 1, counter = h2.footnoteOrder.length) : (h2.footnoteCounts[id]++, counter = index2 + 1);
  let reuseCounter = h2.footnoteCounts[id];
  return h2(node, "sup", [
    h2(
      node.position,
      "a",
      {
        href: "#" + h2.clobberPrefix + "fn-" + safeId,
        id: h2.clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : ""),
        dataFootnoteRef: !0,
        ariaDescribedBy: "footnote-label"
      },
      [u("text", String(counter))]
    )
  ]);
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/footnote.js
function footnote(h2, node) {
  let footnoteById = h2.footnoteById, no = 1;
  for (; no in footnoteById; )
    no++;
  let identifier = String(no);
  return footnoteById[identifier] = {
    type: "footnoteDefinition",
    identifier,
    children: [{ type: "paragraph", children: node.children }],
    position: node.position
  }, footnoteReference(h2, {
    type: "footnoteReference",
    identifier,
    position: node.position
  });
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/heading.js
function heading(h2, node) {
  return h2(node, "h" + node.depth, all2(h2, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/html.js
function html(h2, node) {
  return h2.dangerous ? h2.augment(node, u("raw", node.value)) : null;
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/revert.js
function revert(h2, node) {
  let subtype = node.referenceType, suffix = "]";
  if (subtype === "collapsed" ? suffix += "[]" : subtype === "full" && (suffix += "[" + (node.label || node.identifier) + "]"), node.type === "imageReference")
    return u("text", "![" + node.alt + suffix);
  let contents = all2(h2, node), head = contents[0];
  head && head.type === "text" ? head.value = "[" + head.value : contents.unshift(u("text", "["));
  let tail = contents[contents.length - 1];
  return tail && tail.type === "text" ? tail.value += suffix : contents.push(u("text", suffix)), contents;
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function imageReference(h2, node) {
  let def = h2.definition(node.identifier);
  if (!def)
    return revert(h2, node);
  let props = { src: normalizeUri(def.url || ""), alt: node.alt };
  return def.title !== null && def.title !== void 0 && (props.title = def.title), h2(node, "img", props);
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/image.js
function image(h2, node) {
  let props = { src: normalizeUri(node.url), alt: node.alt };
  return node.title !== null && node.title !== void 0 && (props.title = node.title), h2(node, "img", props);
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function inlineCode(h2, node) {
  return h2(node, "code", [u("text", node.value.replace(/\r?\n|\r/g, " "))]);
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function linkReference(h2, node) {
  let def = h2.definition(node.identifier);
  if (!def)
    return revert(h2, node);
  let props = { href: normalizeUri(def.url || "") };
  return def.title !== null && def.title !== void 0 && (props.title = def.title), h2(node, "a", props, all2(h2, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/link.js
function link(h2, node) {
  let props = { href: normalizeUri(node.url) };
  return node.title !== null && node.title !== void 0 && (props.title = node.title), h2(node, "a", props, all2(h2, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function listItem(h2, node, parent) {
  let result = all2(h2, node), loose = parent ? listLoose(parent) : listItemLoose(node), props = {}, wrapped = [];
  if (typeof node.checked == "boolean") {
    let paragraph2;
    result[0] && result[0].type === "element" && result[0].tagName === "p" ? paragraph2 = result[0] : (paragraph2 = h2(null, "p", []), result.unshift(paragraph2)), paragraph2.children.length > 0 && paragraph2.children.unshift(u("text", " ")), paragraph2.children.unshift(
      h2(null, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: !0
      })
    ), props.className = ["task-list-item"];
  }
  let index2 = -1;
  for (; ++index2 < result.length; ) {
    let child = result[index2];
    (loose || index2 !== 0 || child.type !== "element" || child.tagName !== "p") && wrapped.push(u("text", `
`)), child.type === "element" && child.tagName === "p" && !loose ? wrapped.push(...child.children) : wrapped.push(child);
  }
  let tail = result[result.length - 1];
  return tail && (loose || !("tagName" in tail) || tail.tagName !== "p") && wrapped.push(u("text", `
`)), h2(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread, children = node.children, index2 = -1;
  for (; !loose && ++index2 < children.length; )
    loose = listItemLoose(children[index2]);
  return Boolean(loose);
}
function listItemLoose(node) {
  let spread = node.spread;
  return spread ?? node.children.length > 1;
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/list.js
function list2(h2, node) {
  let props = {}, name = node.ordered ? "ol" : "ul", items = all2(h2, node), index2 = -1;
  for (typeof node.start == "number" && node.start !== 1 && (props.start = node.start); ++index2 < items.length; ) {
    let item = items[index2];
    if (item.type === "element" && item.tagName === "li" && item.properties && Array.isArray(item.properties.className) && item.properties.className.includes("task-list-item")) {
      props.className = ["contains-task-list"];
      break;
    }
  }
  return h2(node, name, props, wrap2(items, !0));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function paragraph(h2, node) {
  return h2(node, "p", all2(h2, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/root.js
function root(h2, node) {
  return h2.augment(node, u("root", wrap2(all2(h2, node))));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/strong.js
function strong(h2, node) {
  return h2(node, "strong", all2(h2, node));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/table.js
function table(h2, node) {
  let rows = node.children, index2 = -1, align = node.align || [], result = [];
  for (; ++index2 < rows.length; ) {
    let row = rows[index2].children, name = index2 === 0 ? "th" : "td", out = [], cellIndex = -1, length = node.align ? align.length : row.length;
    for (; ++cellIndex < length; ) {
      let cell = row[cellIndex];
      out.push(
        h2(cell, name, { align: align[cellIndex] }, cell ? all2(h2, cell) : [])
      );
    }
    result[index2] = h2(rows[index2], "tr", wrap2(out, !0));
  }
  return h2(
    node,
    "table",
    wrap2(
      [h2(result[0].position, "thead", wrap2([result[0]], !0))].concat(
        result[1] ? h2(
          {
            start: pointStart(result[1]),
            end: pointEnd(result[result.length - 1])
          },
          "tbody",
          wrap2(result.slice(1), !0)
        ) : []
      ),
      !0
    )
  );
}

// node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js
function trimLines(value) {
  let source = String(value), search3 = /\r?\n|\r/g, match = search3.exec(source), last = 0, lines = [];
  for (; match; )
    lines.push(
      trimLine(source.slice(last, match.index), last > 0, !0),
      match[0]
    ), last = match.index + match[0].length, match = search3.exec(source);
  return lines.push(trimLine(source.slice(last), last > 0, !1)), lines.join("");
}
function trimLine(value, start, end) {
  let startIndex = 0, endIndex = value.length;
  if (start) {
    let code3 = value.codePointAt(startIndex);
    for (; code3 === 9 || code3 === 32; )
      startIndex++, code3 = value.codePointAt(startIndex);
  }
  if (end) {
    let code3 = value.codePointAt(endIndex - 1);
    for (; code3 === 9 || code3 === 32; )
      endIndex--, code3 = value.codePointAt(endIndex - 1);
  }
  return endIndex > startIndex ? value.slice(startIndex, endIndex) : "";
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/text.js
function text3(h2, node) {
  return h2.augment(node, u("text", trimLines(String(node.value))));
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function thematicBreak2(h2, node) {
  return h2(node, "hr");
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/handlers/index.js
var handlers = {
  blockquote,
  break: hardBreak,
  code,
  delete: strikethrough,
  emphasis,
  footnoteReference,
  footnote,
  heading,
  html,
  imageReference,
  image,
  inlineCode,
  linkReference,
  link,
  listItem,
  list: list2,
  paragraph,
  root,
  strong,
  table,
  text: text3,
  thematicBreak: thematicBreak2,
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
};
function ignore() {
  return null;
}

// node_modules/.pnpm/mdast-util-to-hast@12.2.4/node_modules/mdast-util-to-hast/lib/index.js
var own6 = {}.hasOwnProperty;
function factory(tree, options) {
  let settings = options || {}, dangerous = settings.allowDangerousHtml || !1, footnoteById = {};
  return h2.dangerous = dangerous, h2.clobberPrefix = settings.clobberPrefix === void 0 || settings.clobberPrefix === null ? "user-content-" : settings.clobberPrefix, h2.footnoteLabel = settings.footnoteLabel || "Footnotes", h2.footnoteLabelTagName = settings.footnoteLabelTagName || "h2", h2.footnoteLabelProperties = settings.footnoteLabelProperties || {
    className: ["sr-only"]
  }, h2.footnoteBackLabel = settings.footnoteBackLabel || "Back to content", h2.definition = definitions(tree), h2.footnoteById = footnoteById, h2.footnoteOrder = [], h2.footnoteCounts = {}, h2.augment = augment, h2.handlers = { ...handlers, ...settings.handlers }, h2.unknownHandler = settings.unknownHandler, h2.passThrough = settings.passThrough, visit(tree, "footnoteDefinition", (definition2) => {
    let id = String(definition2.identifier).toUpperCase();
    own6.call(footnoteById, id) || (footnoteById[id] = definition2);
  }), h2;
  function augment(left, right) {
    if (left && "data" in left && left.data) {
      let data = left.data;
      data.hName && (right.type !== "element" && (right = {
        type: "element",
        tagName: "",
        properties: {},
        children: []
      }), right.tagName = data.hName), right.type === "element" && data.hProperties && (right.properties = { ...right.properties, ...data.hProperties }), "children" in right && right.children && data.hChildren && (right.children = data.hChildren);
    }
    if (left) {
      let ctx = "type" in left ? left : { position: left };
      generated(ctx) || (right.position = { start: pointStart(ctx), end: pointEnd(ctx) });
    }
    return right;
  }
  function h2(node, tagName, props, children) {
    return Array.isArray(props) && (children = props, props = {}), augment(node, {
      type: "element",
      tagName,
      properties: props || {},
      children: children || []
    });
  }
}
function toHast(tree, options) {
  let h2 = factory(tree, options), node = one2(h2, tree, null), foot = footer(h2);
  return foot && node.children.push(u("text", `
`), foot), Array.isArray(node) ? { type: "root", children: node } : node;
}

// node_modules/.pnpm/remark-rehype@10.1.0/node_modules/remark-rehype/lib/index.js
var remarkRehype = function(destination, options) {
  return destination && "run" in destination ? bridge(destination, options) : mutate(destination || options);
}, lib_default = remarkRehype;
function bridge(destination, options) {
  return (node, file, next) => {
    destination.run(toHast(node, options), file, (error) => {
      next(error);
    });
  };
}
function mutate(options) {
  return (node) => toHast(node, options);
}

// node_modules/.pnpm/react-markdown@8.0.3_q5o373oqrklnndq2vhekyuzhxi/node_modules/react-markdown/lib/react-markdown.js
var import_prop_types = __toESM(require("prop-types"), 1);

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/schema.js
var Schema = class {
  constructor(property, normal, space) {
    this.property = property, this.normal = normal, space && (this.space = space);
  }
};
Schema.prototype.property = {};
Schema.prototype.normal = {};
Schema.prototype.space = null;

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/merge.js
function merge(definitions2, space) {
  let property = {}, normal = {}, index2 = -1;
  for (; ++index2 < definitions2.length; )
    Object.assign(property, definitions2[index2].property), Object.assign(normal, definitions2[index2].normal);
  return new Schema(property, normal, space);
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/normalize.js
function normalize(value) {
  return value.toLowerCase();
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/info.js
var Info = class {
  constructor(property, attribute) {
    this.property = property, this.attribute = attribute;
  }
};
Info.prototype.space = null;
Info.prototype.boolean = !1;
Info.prototype.booleanish = !1;
Info.prototype.overloadedBoolean = !1;
Info.prototype.number = !1;
Info.prototype.commaSeparated = !1;
Info.prototype.spaceSeparated = !1;
Info.prototype.commaOrSpaceSeparated = !1;
Info.prototype.mustUseProperty = !1;
Info.prototype.defined = !1;

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/types.js
var types_exports = {};
__export(types_exports, {
  boolean: () => boolean,
  booleanish: () => booleanish,
  commaOrSpaceSeparated: () => commaOrSpaceSeparated,
  commaSeparated: () => commaSeparated,
  number: () => number,
  overloadedBoolean: () => overloadedBoolean,
  spaceSeparated: () => spaceSeparated
});
var powers = 0, boolean = increment(), booleanish = increment(), overloadedBoolean = increment(), number = increment(), spaceSeparated = increment(), commaSeparated = increment(), commaOrSpaceSeparated = increment();
function increment() {
  return 2 ** ++powers;
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/defined-info.js
var checks = Object.keys(types_exports), DefinedInfo = class extends Info {
  constructor(property, attribute, mask, space) {
    let index2 = -1;
    if (super(property, attribute), mark(this, "space", space), typeof mask == "number")
      for (; ++index2 < checks.length; ) {
        let check = checks[index2];
        mark(this, checks[index2], (mask & types_exports[check]) === types_exports[check]);
      }
  }
};
DefinedInfo.prototype.defined = !0;
function mark(values, key, value) {
  value && (values[key] = value);
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/create.js
var own7 = {}.hasOwnProperty;
function create(definition2) {
  let property = {}, normal = {}, prop;
  for (prop in definition2.properties)
    if (own7.call(definition2.properties, prop)) {
      let value = definition2.properties[prop], info = new DefinedInfo(
        prop,
        definition2.transform(definition2.attributes || {}, prop),
        value,
        definition2.space
      );
      definition2.mustUseProperty && definition2.mustUseProperty.includes(prop) && (info.mustUseProperty = !0), property[prop] = info, normal[normalize(prop)] = prop, normal[normalize(info.attribute)] = prop;
    }
  return new Schema(property, normal, definition2.space);
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xlink.js
var xlink = create({
  space: "xlink",
  transform(_, prop) {
    return "xlink:" + prop.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xml.js
var xml = create({
  space: "xml",
  transform(_, prop) {
    return "xml:" + prop.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/case-sensitive-transform.js
function caseSensitiveTransform(attributes2, attribute) {
  return attribute in attributes2 ? attributes2[attribute] : attribute;
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/util/case-insensitive-transform.js
function caseInsensitiveTransform(attributes2, property) {
  return caseSensitiveTransform(attributes2, property.toLowerCase());
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/xmlns.js
var xmlns = create({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: caseInsensitiveTransform,
  properties: { xmlns: null, xmlnsXLink: null }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/aria.js
var aria = create({
  transform(_, prop) {
    return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/html.js
var html2 = create({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated,
    axis: null,
    background: null,
    bgColor: null,
    border: number,
    borderColor: null,
    bottomMargin: number,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean,
    declare: boolean,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number,
    leftMargin: number,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number,
    marginWidth: number,
    noResize: boolean,
    noHref: boolean,
    noShade: boolean,
    noWrap: boolean,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/svg.js
var svg = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/find.js
var valid = /^data[-\w.:]+$/i, dash = /-[a-z]/g, cap = /[A-Z]/g;
function find(schema, value) {
  let normal = normalize(value), prop = value, Type = Info;
  if (normal in schema.normal)
    return schema.property[schema.normal[normal]];
  if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
    if (value.charAt(4) === "-") {
      let rest = value.slice(5).replace(dash, camelcase);
      prop = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
    } else {
      let rest = value.slice(4);
      if (!dash.test(rest)) {
        let dashes = rest.replace(cap, kebab);
        dashes.charAt(0) !== "-" && (dashes = "-" + dashes), value = "data" + dashes;
      }
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/lib/hast-to-react.js
var hastToReact = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
};

// node_modules/.pnpm/property-information@6.1.1/node_modules/property-information/index.js
var html3 = merge([xml, xlink, xmlns, aria, html2], "html"), svg2 = merge([xml, xlink, xmlns, aria, svg], "svg");

// node_modules/.pnpm/react-markdown@8.0.3_q5o373oqrklnndq2vhekyuzhxi/node_modules/react-markdown/lib/rehype-filter.js
function rehypeFilter(options) {
  if (options.allowedElements && options.disallowedElements)
    throw new TypeError(
      "Only one of `allowedElements` and `disallowedElements` should be defined"
    );
  if (options.allowedElements || options.disallowedElements || options.allowElement)
    return (tree) => {
      visit(tree, "element", (node, index2, parent_) => {
        let parent = parent_, remove;
        if (options.allowedElements ? remove = !options.allowedElements.includes(node.tagName) : options.disallowedElements && (remove = options.disallowedElements.includes(node.tagName)), !remove && options.allowElement && typeof index2 == "number" && (remove = !options.allowElement(node, index2, parent)), remove && typeof index2 == "number")
          return options.unwrapDisallowed && node.children ? parent.children.splice(index2, 1, ...node.children) : parent.children.splice(index2, 1), index2;
      });
    };
}

// node_modules/.pnpm/react-markdown@8.0.3_q5o373oqrklnndq2vhekyuzhxi/node_modules/react-markdown/lib/ast-to-react.js
var import_react13 = __toESM(require("react"), 1), import_react_is = __toESM(require("react-is"), 1);

// node_modules/.pnpm/hast-util-whitespace@2.0.0/node_modules/hast-util-whitespace/index.js
function whitespace(thing) {
  var value = thing && typeof thing == "object" && thing.type === "text" ? thing.value || "" : thing;
  return typeof value == "string" && value.replace(/[ \t\n\f\r]/g, "") === "";
}

// node_modules/.pnpm/space-separated-tokens@2.0.1/node_modules/space-separated-tokens/index.js
function parse2(value) {
  let input = String(value || "").trim();
  return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
function stringify(values) {
  return values.join(" ").trim();
}

// node_modules/.pnpm/comma-separated-tokens@2.0.2/node_modules/comma-separated-tokens/index.js
function parse3(value) {
  for (var tokens = [], input = String(value || ""), index2 = input.indexOf(","), start = 0, end, token; !end; )
    index2 === -1 && (index2 = input.length, end = !0), token = input.slice(start, index2).trim(), (token || !end) && tokens.push(token), start = index2 + 1, index2 = input.indexOf(",", start);
  return tokens;
}
function stringify2(values, options) {
  var settings = options || {};
  return values[values.length - 1] === "" && (values = values.concat("")), values.join(
    (settings.padRight ? " " : "") + "," + (settings.padLeft === !1 ? "" : " ")
  ).trim();
}

// node_modules/.pnpm/react-markdown@8.0.3_q5o373oqrklnndq2vhekyuzhxi/node_modules/react-markdown/lib/ast-to-react.js
var import_style_to_object = __toESM(require("style-to-object"), 1), own8 = {}.hasOwnProperty, tableElements = /* @__PURE__ */ new Set(["table", "thead", "tbody", "tfoot", "tr"]);
function childrenToReact(context, node) {
  let children = [], childIndex = -1, child;
  for (; ++childIndex < node.children.length; )
    child = node.children[childIndex], child.type === "element" ? children.push(toReact(context, child, childIndex, node)) : child.type === "text" ? (node.type !== "element" || !tableElements.has(node.tagName) || !whitespace(child)) && children.push(child.value) : child.type === "raw" && !context.options.skipHtml && children.push(child.value);
  return children;
}
function toReact(context, node, index2, parent) {
  let options = context.options, parentSchema = context.schema, name = node.tagName, properties = {}, schema = parentSchema, property;
  if (parentSchema.space === "html" && name === "svg" && (schema = svg2, context.schema = schema), node.properties)
    for (property in node.properties)
      own8.call(node.properties, property) && addProperty(properties, property, node.properties[property], context);
  (name === "ol" || name === "ul") && context.listDepth++;
  let children = childrenToReact(context, node);
  (name === "ol" || name === "ul") && context.listDepth--, context.schema = parentSchema;
  let position3 = node.position || {
    start: { line: null, column: null, offset: null },
    end: { line: null, column: null, offset: null }
  }, component = options.components && own8.call(options.components, name) ? options.components[name] : name, basic = typeof component == "string" || component === import_react13.default.Fragment;
  if (!import_react_is.default.isValidElementType(component))
    throw new TypeError(
      `Component for name \`${name}\` not defined or is not renderable`
    );
  if (properties.key = [
    name,
    position3.start.line,
    position3.start.column,
    index2
  ].join("-"), name === "a" && options.linkTarget && (properties.target = typeof options.linkTarget == "function" ? options.linkTarget(
    String(properties.href || ""),
    node.children,
    typeof properties.title == "string" ? properties.title : null
  ) : options.linkTarget), name === "a" && options.transformLinkUri && (properties.href = options.transformLinkUri(
    String(properties.href || ""),
    node.children,
    typeof properties.title == "string" ? properties.title : null
  )), !basic && name === "code" && parent.type === "element" && parent.tagName !== "pre" && (properties.inline = !0), !basic && (name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6") && (properties.level = Number.parseInt(name.charAt(1), 10)), name === "img" && options.transformImageUri && (properties.src = options.transformImageUri(
    String(properties.src || ""),
    String(properties.alt || ""),
    typeof properties.title == "string" ? properties.title : null
  )), !basic && name === "li" && parent.type === "element") {
    let input = getInputElement(node);
    properties.checked = input && input.properties ? Boolean(input.properties.checked) : null, properties.index = getElementsBeforeCount(parent, node), properties.ordered = parent.tagName === "ol";
  }
  return !basic && (name === "ol" || name === "ul") && (properties.ordered = name === "ol", properties.depth = context.listDepth), (name === "td" || name === "th") && (properties.align && (properties.style || (properties.style = {}), properties.style.textAlign = properties.align, delete properties.align), basic || (properties.isHeader = name === "th")), !basic && name === "tr" && parent.type === "element" && (properties.isHeader = Boolean(parent.tagName === "thead")), options.sourcePos && (properties["data-sourcepos"] = flattenPosition(position3)), !basic && options.rawSourcePos && (properties.sourcePosition = node.position), !basic && options.includeElementIndex && (properties.index = getElementsBeforeCount(parent, node), properties.siblingCount = getElementsBeforeCount(parent)), basic || (properties.node = node), children.length > 0 ? import_react13.default.createElement(component, properties, children) : import_react13.default.createElement(component, properties);
}
function getInputElement(node) {
  let index2 = -1;
  for (; ++index2 < node.children.length; ) {
    let child = node.children[index2];
    if (child.type === "element" && child.tagName === "input")
      return child;
  }
  return null;
}
function getElementsBeforeCount(parent, node) {
  let index2 = -1, count = 0;
  for (; ++index2 < parent.children.length && parent.children[index2] !== node; )
    parent.children[index2].type === "element" && count++;
  return count;
}
function addProperty(props, prop, value, ctx) {
  let info = find(ctx.schema, prop), result = value;
  result == null || result !== result || (Array.isArray(result) && (result = info.commaSeparated ? stringify2(result) : stringify(result)), info.property === "style" && typeof result == "string" && (result = parseStyle(result)), info.space && info.property ? props[own8.call(hastToReact, info.property) ? hastToReact[info.property] : info.property] = result : info.attribute && (props[info.attribute] = result));
}
function parseStyle(value) {
  let result = {};
  try {
    (0, import_style_to_object.default)(value, iterator);
  } catch {
  }
  return result;
  function iterator(name, v) {
    let k = name.slice(0, 4) === "-ms-" ? `ms-${name.slice(4)}` : name;
    result[k.replace(/-([a-z])/g, styleReplacer)] = v;
  }
}
function styleReplacer(_, $1) {
  return $1.toUpperCase();
}
function flattenPosition(pos) {
  return [
    pos.start.line,
    ":",
    pos.start.column,
    "-",
    pos.end.line,
    ":",
    pos.end.column
  ].map((d) => String(d)).join("");
}

// node_modules/.pnpm/react-markdown@8.0.3_q5o373oqrklnndq2vhekyuzhxi/node_modules/react-markdown/lib/react-markdown.js
var own9 = {}.hasOwnProperty, changelog = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", deprecated = {
  plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
  renderers: { to: "components", id: "change-renderers-to-components" },
  astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
  allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
  escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
  source: { to: "children", id: "change-source-to-children" },
  allowNode: {
    to: "allowElement",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  allowedTypes: {
    to: "allowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  disallowedTypes: {
    to: "disallowedElements",
    id: "replace-allownode-allowedtypes-and-disallowedtypes"
  },
  includeNodeIndex: {
    to: "includeElementIndex",
    id: "change-includenodeindex-to-includeelementindex"
  }
};
function ReactMarkdown(options) {
  for (let key in deprecated)
    if (own9.call(deprecated, key) && own9.call(options, key)) {
      let deprecation = deprecated[key];
      console.warn(
        `[react-markdown] Warning: please ${deprecation.to ? `use \`${deprecation.to}\` instead of` : "remove"} \`${key}\` (see <${changelog}#${deprecation.id}> for more info)`
      ), delete deprecated[key];
    }
  let processor = unified().use(remark_parse_default).use(options.remarkPlugins || []).use(lib_default, {
    ...options.remarkRehypeOptions,
    allowDangerousHtml: !0
  }).use(options.rehypePlugins || []).use(rehypeFilter, options), file = new VFile();
  typeof options.children == "string" ? file.value = options.children : options.children !== void 0 && options.children !== null && console.warn(
    `[react-markdown] Warning: please pass a string as \`children\` (not: \`${options.children}\`)`
  );
  let hastNode = processor.runSync(processor.parse(file), file);
  if (hastNode.type !== "root")
    throw new TypeError("Expected a `root` node");
  let result = import_react14.default.createElement(
    import_react14.default.Fragment,
    {},
    childrenToReact({ options, schema: html3, listDepth: 0 }, hastNode)
  );
  return options.className && (result = import_react14.default.createElement("div", { className: options.className }, result)), result;
}
ReactMarkdown.defaultProps = { transformLinkUri: uriTransformer };
ReactMarkdown.propTypes = {
  children: import_prop_types.default.string,
  className: import_prop_types.default.string,
  allowElement: import_prop_types.default.func,
  allowedElements: import_prop_types.default.arrayOf(import_prop_types.default.string),
  disallowedElements: import_prop_types.default.arrayOf(import_prop_types.default.string),
  unwrapDisallowed: import_prop_types.default.bool,
  remarkPlugins: import_prop_types.default.arrayOf(
    import_prop_types.default.oneOfType([
      import_prop_types.default.object,
      import_prop_types.default.func,
      import_prop_types.default.arrayOf(
        import_prop_types.default.oneOfType([
          import_prop_types.default.bool,
          import_prop_types.default.string,
          import_prop_types.default.object,
          import_prop_types.default.func,
          import_prop_types.default.arrayOf(
            import_prop_types.default.any
          )
        ])
      )
    ])
  ),
  rehypePlugins: import_prop_types.default.arrayOf(
    import_prop_types.default.oneOfType([
      import_prop_types.default.object,
      import_prop_types.default.func,
      import_prop_types.default.arrayOf(
        import_prop_types.default.oneOfType([
          import_prop_types.default.bool,
          import_prop_types.default.string,
          import_prop_types.default.object,
          import_prop_types.default.func,
          import_prop_types.default.arrayOf(
            import_prop_types.default.any
          )
        ])
      )
    ])
  ),
  sourcePos: import_prop_types.default.bool,
  rawSourcePos: import_prop_types.default.bool,
  skipHtml: import_prop_types.default.bool,
  includeElementIndex: import_prop_types.default.bool,
  transformLinkUri: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.bool]),
  linkTarget: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.string]),
  transformImageUri: import_prop_types.default.func,
  components: import_prop_types.default.object
};

// node_modules/.pnpm/micromark-extension-gfm-autolink-literal@1.0.3/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var www = {
  tokenize: tokenizeWww,
  partial: !0
}, domain = {
  tokenize: tokenizeDomain,
  partial: !0
}, path = {
  tokenize: tokenizePath,
  partial: !0
}, punctuation = {
  tokenize: tokenizePunctuation,
  partial: !0
}, namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: !0
}, wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
}, httpAutolink = {
  tokenize: tokenizeHttpAutolink,
  previous: previousHttp
}, emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
}, text4 = {}, gfmAutolinkLiteral = {
  text: text4
}, code2 = 48;
for (; code2 < 123; )
  text4[code2] = emailAutolink, code2++, code2 === 58 ? code2 = 65 : code2 === 91 && (code2 = 97);
text4[43] = emailAutolink;
text4[45] = emailAutolink;
text4[46] = emailAutolink;
text4[95] = emailAutolink;
text4[72] = [emailAutolink, httpAutolink];
text4[104] = [emailAutolink, httpAutolink];
text4[87] = [emailAutolink, wwwAutolink];
text4[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok2, nok) {
  let self = this, hasDot, hasDigitInLastSegment;
  return start;
  function start(code3) {
    return !gfmAtext(code3) || !previousEmail(self.previous) || previousUnbalanced(self.events) ? nok(code3) : (effects.enter("literalAutolink"), effects.enter("literalAutolinkEmail"), atext(code3));
  }
  function atext(code3) {
    return gfmAtext(code3) ? (effects.consume(code3), atext) : code3 === 64 ? (effects.consume(code3), label) : nok(code3);
  }
  function label(code3) {
    return code3 === 46 ? effects.check(punctuation, done, dotContinuation)(code3) : code3 === 45 || code3 === 95 ? effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code3) : asciiAlphanumeric(code3) ? (!hasDigitInLastSegment && asciiDigit(code3) && (hasDigitInLastSegment = !0), effects.consume(code3), label) : done(code3);
  }
  function dotContinuation(code3) {
    return effects.consume(code3), hasDot = !0, hasDigitInLastSegment = void 0, label;
  }
  function dashOrUnderscoreContinuation(code3) {
    return effects.consume(code3), afterDashOrUnderscore;
  }
  function afterDashOrUnderscore(code3) {
    return code3 === 46 ? effects.check(punctuation, nok, dotContinuation)(code3) : label(code3);
  }
  function done(code3) {
    return hasDot && !hasDigitInLastSegment ? (effects.exit("literalAutolinkEmail"), effects.exit("literalAutolink"), ok2(code3)) : nok(code3);
  }
}
function tokenizeWwwAutolink(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return code3 !== 87 && code3 !== 119 || !previousWww(self.previous) || previousUnbalanced(self.events) ? nok(code3) : (effects.enter("literalAutolink"), effects.enter("literalAutolinkWww"), effects.check(
      www,
      effects.attempt(domain, effects.attempt(path, done), nok),
      nok
    )(code3));
  }
  function done(code3) {
    return effects.exit("literalAutolinkWww"), effects.exit("literalAutolink"), ok2(code3);
  }
}
function tokenizeHttpAutolink(effects, ok2, nok) {
  let self = this;
  return start;
  function start(code3) {
    return code3 !== 72 && code3 !== 104 || !previousHttp(self.previous) || previousUnbalanced(self.events) ? nok(code3) : (effects.enter("literalAutolink"), effects.enter("literalAutolinkHttp"), effects.consume(code3), t1);
  }
  function t1(code3) {
    return code3 === 84 || code3 === 116 ? (effects.consume(code3), t2) : nok(code3);
  }
  function t2(code3) {
    return code3 === 84 || code3 === 116 ? (effects.consume(code3), p) : nok(code3);
  }
  function p(code3) {
    return code3 === 80 || code3 === 112 ? (effects.consume(code3), s2) : nok(code3);
  }
  function s2(code3) {
    return code3 === 83 || code3 === 115 ? (effects.consume(code3), colon) : colon(code3);
  }
  function colon(code3) {
    return code3 === 58 ? (effects.consume(code3), slash1) : nok(code3);
  }
  function slash1(code3) {
    return code3 === 47 ? (effects.consume(code3), slash2) : nok(code3);
  }
  function slash2(code3) {
    return code3 === 47 ? (effects.consume(code3), after) : nok(code3);
  }
  function after(code3) {
    return code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || unicodePunctuation(code3) ? nok(code3) : effects.attempt(domain, effects.attempt(path, done), nok)(code3);
  }
  function done(code3) {
    return effects.exit("literalAutolinkHttp"), effects.exit("literalAutolink"), ok2(code3);
  }
}
function tokenizeWww(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.consume(code3), w2;
  }
  function w2(code3) {
    return code3 === 87 || code3 === 119 ? (effects.consume(code3), w3) : nok(code3);
  }
  function w3(code3) {
    return code3 === 87 || code3 === 119 ? (effects.consume(code3), dot) : nok(code3);
  }
  function dot(code3) {
    return code3 === 46 ? (effects.consume(code3), after) : nok(code3);
  }
  function after(code3) {
    return code3 === null || markdownLineEnding(code3) ? nok(code3) : ok2(code3);
  }
}
function tokenizeDomain(effects, ok2, nok) {
  let hasUnderscoreInLastSegment, hasUnderscoreInLastLastSegment;
  return domain2;
  function domain2(code3) {
    return code3 === 38 ? effects.check(
      namedCharacterReference,
      done,
      punctuationContinuation
    )(code3) : code3 === 46 || code3 === 95 ? effects.check(punctuation, done, punctuationContinuation)(code3) : code3 === null || asciiControl(code3) || unicodeWhitespace(code3) || code3 !== 45 && unicodePunctuation(code3) ? done(code3) : (effects.consume(code3), domain2);
  }
  function punctuationContinuation(code3) {
    return code3 === 46 ? (hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment, hasUnderscoreInLastSegment = void 0, effects.consume(code3), domain2) : (code3 === 95 && (hasUnderscoreInLastSegment = !0), effects.consume(code3), domain2);
  }
  function done(code3) {
    return !hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment ? ok2(code3) : nok(code3);
  }
}
function tokenizePath(effects, ok2) {
  let balance = 0;
  return inPath;
  function inPath(code3) {
    return code3 === 38 ? effects.check(
      namedCharacterReference,
      ok2,
      continuedPunctuation
    )(code3) : (code3 === 40 && balance++, code3 === 41 ? effects.check(
      punctuation,
      parenAtPathEnd,
      continuedPunctuation
    )(code3) : pathEnd(code3) ? ok2(code3) : trailingPunctuation(code3) ? effects.check(punctuation, ok2, continuedPunctuation)(code3) : (effects.consume(code3), inPath));
  }
  function continuedPunctuation(code3) {
    return effects.consume(code3), inPath;
  }
  function parenAtPathEnd(code3) {
    return balance--, balance < 0 ? ok2(code3) : continuedPunctuation(code3);
  }
}
function tokenizeNamedCharacterReference(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.consume(code3), inside;
  }
  function inside(code3) {
    return asciiAlpha(code3) ? (effects.consume(code3), inside) : code3 === 59 ? (effects.consume(code3), after) : nok(code3);
  }
  function after(code3) {
    return pathEnd(code3) ? ok2(code3) : nok(code3);
  }
}
function tokenizePunctuation(effects, ok2, nok) {
  return start;
  function start(code3) {
    return effects.consume(code3), after;
  }
  function after(code3) {
    return trailingPunctuation(code3) ? (effects.consume(code3), after) : pathEnd(code3) ? ok2(code3) : nok(code3);
  }
}
function trailingPunctuation(code3) {
  return code3 === 33 || code3 === 34 || code3 === 39 || code3 === 41 || code3 === 42 || code3 === 44 || code3 === 46 || code3 === 58 || code3 === 59 || code3 === 60 || code3 === 63 || code3 === 95 || code3 === 126;
}
function pathEnd(code3) {
  return code3 === null || code3 === 60 || markdownLineEndingOrSpace(code3);
}
function gfmAtext(code3) {
  return code3 === 43 || code3 === 45 || code3 === 46 || code3 === 95 || asciiAlphanumeric(code3);
}
function previousWww(code3) {
  return code3 === null || code3 === 40 || code3 === 42 || code3 === 95 || code3 === 126 || markdownLineEndingOrSpace(code3);
}
function previousHttp(code3) {
  return code3 === null || !asciiAlpha(code3);
}
function previousEmail(code3) {
  return code3 !== 47 && previousHttp(code3);
}
function previousUnbalanced(events) {
  let index2 = events.length, result = !1;
  for (; index2--; ) {
    let token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = !0;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = !1;
      break;
    }
  }
  return events.length > 0 && !result && (events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), result;
}

// node_modules/.pnpm/micromark-extension-gfm-footnote@1.0.4/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var indent = {
  tokenize: tokenizeIndent2,
  partial: !0
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok2, nok) {
  let self = this, index2 = self.events.length, defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []), labelStart;
  for (; index2--; ) {
    let token = self.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link")
      break;
  }
  return start;
  function start(code3) {
    if (!labelStart || !labelStart._balanced)
      return nok(code3);
    let id = normalizeIdentifier(
      self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      })
    );
    return id.charCodeAt(0) !== 94 || !defined.includes(id.slice(1)) ? nok(code3) : (effects.enter("gfmFootnoteCallLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallLabelMarker"), ok2(code3));
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length, labelStart;
  for (; index2--; )
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      labelStart = events[index2][1];
      break;
    }
  events[index2 + 1][1].type = "data", events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  let call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  }, marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++, marker.end.offset++, marker.end._bufferIndex++;
  let string3 = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  }, chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string3.start),
    end: Object.assign({}, string3.end)
  }, replacement = [
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    events[index2 + 3],
    events[index2 + 4],
    ["enter", marker, context],
    ["exit", marker, context],
    ["enter", string3, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string3, context],
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  return events.splice(index2, events.length - index2 + 1, ...replacement), events;
}
function tokenizeGfmFootnoteCall(effects, ok2, nok) {
  let self = this, defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []), size = 0, data;
  return start;
  function start(code3) {
    return effects.enter("gfmFootnoteCall"), effects.enter("gfmFootnoteCallLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallLabelMarker"), callStart;
  }
  function callStart(code3) {
    return code3 !== 94 ? nok(code3) : (effects.enter("gfmFootnoteCallMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallMarker"), effects.enter("gfmFootnoteCallString"), effects.enter("chunkString").contentType = "string", callData);
  }
  function callData(code3) {
    let token;
    return code3 === null || code3 === 91 || size++ > 999 ? nok(code3) : code3 === 93 ? data ? (effects.exit("chunkString"), token = effects.exit("gfmFootnoteCallString"), defined.includes(normalizeIdentifier(self.sliceSerialize(token))) ? end(code3) : nok(code3)) : nok(code3) : (effects.consume(code3), markdownLineEndingOrSpace(code3) || (data = !0), code3 === 92 ? callEscape : callData);
  }
  function callEscape(code3) {
    return code3 === 91 || code3 === 92 || code3 === 93 ? (effects.consume(code3), size++, callData) : callData(code3);
  }
  function end(code3) {
    return effects.enter("gfmFootnoteCallLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteCallLabelMarker"), effects.exit("gfmFootnoteCall"), ok2;
  }
}
function tokenizeDefinitionStart(effects, ok2, nok) {
  let self = this, defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []), identifier, size = 0, data;
  return start;
  function start(code3) {
    return effects.enter("gfmFootnoteDefinition")._container = !0, effects.enter("gfmFootnoteDefinitionLabel"), effects.enter("gfmFootnoteDefinitionLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteDefinitionLabelMarker"), labelStart;
  }
  function labelStart(code3) {
    return code3 === 94 ? (effects.enter("gfmFootnoteDefinitionMarker"), effects.consume(code3), effects.exit("gfmFootnoteDefinitionMarker"), effects.enter("gfmFootnoteDefinitionLabelString"), atBreak) : nok(code3);
  }
  function atBreak(code3) {
    let token;
    return code3 === null || code3 === 91 || size > 999 ? nok(code3) : code3 === 93 ? data ? (token = effects.exit("gfmFootnoteDefinitionLabelString"), identifier = normalizeIdentifier(self.sliceSerialize(token)), effects.enter("gfmFootnoteDefinitionLabelMarker"), effects.consume(code3), effects.exit("gfmFootnoteDefinitionLabelMarker"), effects.exit("gfmFootnoteDefinitionLabel"), labelAfter) : nok(code3) : markdownLineEnding(code3) ? (effects.enter("lineEnding"), effects.consume(code3), effects.exit("lineEnding"), size++, atBreak) : (effects.enter("chunkString").contentType = "string", label(code3));
  }
  function label(code3) {
    return code3 === null || markdownLineEnding(code3) || code3 === 91 || code3 === 93 || size > 999 ? (effects.exit("chunkString"), atBreak(code3)) : (markdownLineEndingOrSpace(code3) || (data = !0), size++, effects.consume(code3), code3 === 92 ? labelEscape : label);
  }
  function labelEscape(code3) {
    return code3 === 91 || code3 === 92 || code3 === 93 ? (effects.consume(code3), size++, label) : label(code3);
  }
  function labelAfter(code3) {
    return code3 === 58 ? (effects.enter("definitionMarker"), effects.consume(code3), effects.exit("definitionMarker"), factorySpace(effects, done, "gfmFootnoteDefinitionWhitespace")) : nok(code3);
  }
  function done(code3) {
    return defined.includes(identifier) || defined.push(identifier), ok2(code3);
  }
}
function tokenizeDefinitionContinuation(effects, ok2, nok) {
  return effects.check(blankLine, ok2, effects.attempt(indent, ok2, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent2(effects, ok2, nok) {
  let self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "gfmFootnoteDefinitionIndent",
    4 + 1
  );
  function afterPrefix(code3) {
    let tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], !0).length === 4 ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-extension-gfm-strikethrough@1.0.4/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function gfmStrikethrough(options = {}) {
  let single = options.singleTilde, tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  return single == null && (single = !0), {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    for (; ++index2 < events.length; )
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        for (; open--; )
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence", events[open][1].type = "strikethroughSequence";
            let strikethrough2 = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            }, text8 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            }, nextEvents = [
              ["enter", strikethrough2, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text8, context]
            ];
            splice(
              nextEvents,
              nextEvents.length,
              0,
              resolveAll(
                context.parser.constructs.insideSpan.null,
                events.slice(open + 1, index2),
                context
              )
            ), splice(nextEvents, nextEvents.length, 0, [
              ["exit", text8, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough2, context]
            ]), splice(events, open - 1, index2 - open + 3, nextEvents), index2 = open + nextEvents.length - 2;
            break;
          }
      }
    for (index2 = -1; ++index2 < events.length; )
      events[index2][1].type === "strikethroughSequenceTemporary" && (events[index2][1].type = "data");
    return events;
  }
  function tokenizeStrikethrough(effects, ok2, nok) {
    let previous3 = this.previous, events = this.events, size = 0;
    return start;
    function start(code3) {
      return previous3 === 126 && events[events.length - 1][1].type !== "characterEscape" ? nok(code3) : (effects.enter("strikethroughSequenceTemporary"), more(code3));
    }
    function more(code3) {
      let before = classifyCharacter(previous3);
      if (code3 === 126)
        return size > 1 ? nok(code3) : (effects.consume(code3), size++, more);
      if (size < 2 && !single)
        return nok(code3);
      let token = effects.exit("strikethroughSequenceTemporary"), after = classifyCharacter(code3);
      return token._open = !after || after === 2 && Boolean(before), token._close = !before || before === 2 && Boolean(after), ok2(code3);
    }
  }
}

// node_modules/.pnpm/micromark-extension-gfm-table@1.0.5/node_modules/micromark-extension-gfm-table/lib/syntax.js
var gfmTable = {
  flow: {
    null: {
      tokenize: tokenizeTable,
      resolve: resolveTable
    }
  }
}, nextPrefixedOrBlank = {
  tokenize: tokenizeNextPrefixedOrBlank,
  partial: !0
};
function resolveTable(events, context) {
  let index2 = -1, inHead, inDelimiterRow, inRow, contentStart, contentEnd, cellStart, seenCellInRow;
  for (; ++index2 < events.length; ) {
    let token = events[index2][1];
    if (inRow && (token.type === "temporaryTableCellContent" && (contentStart = contentStart || index2, contentEnd = index2), (token.type === "tableCellDivider" || token.type === "tableRow") && contentEnd)) {
      let content3 = {
        type: "tableContent",
        start: events[contentStart][1].start,
        end: events[contentEnd][1].end
      }, text8 = {
        type: "chunkText",
        start: content3.start,
        end: content3.end,
        contentType: "text"
      };
      events.splice(
        contentStart,
        contentEnd - contentStart + 1,
        ["enter", content3, context],
        ["enter", text8, context],
        ["exit", text8, context],
        ["exit", content3, context]
      ), index2 -= contentEnd - contentStart - 3, contentStart = void 0, contentEnd = void 0;
    }
    if (events[index2][0] === "exit" && cellStart !== void 0 && cellStart + (seenCellInRow ? 0 : 1) < index2 && (token.type === "tableCellDivider" || token.type === "tableRow" && (cellStart + 3 < index2 || events[cellStart][1].type !== "whitespace"))) {
      let cell = {
        type: inDelimiterRow ? "tableDelimiter" : inHead ? "tableHeader" : "tableData",
        start: events[cellStart][1].start,
        end: events[index2][1].end
      };
      events.splice(index2 + (token.type === "tableCellDivider" ? 1 : 0), 0, [
        "exit",
        cell,
        context
      ]), events.splice(cellStart, 0, ["enter", cell, context]), index2 += 2, cellStart = index2 + 1, seenCellInRow = !0;
    }
    token.type === "tableRow" && (inRow = events[index2][0] === "enter", inRow && (cellStart = index2 + 1, seenCellInRow = !1)), token.type === "tableDelimiterRow" && (inDelimiterRow = events[index2][0] === "enter", inDelimiterRow && (cellStart = index2 + 1, seenCellInRow = !1)), token.type === "tableHead" && (inHead = events[index2][0] === "enter");
  }
  return events;
}
function tokenizeTable(effects, ok2, nok) {
  let self = this, align = [], tableHeaderCount = 0, seenDelimiter, hasDash;
  return start;
  function start(code3) {
    return effects.enter("table")._align = align, effects.enter("tableHead"), effects.enter("tableRow"), code3 === 124 ? cellDividerHead(code3) : (tableHeaderCount++, effects.enter("temporaryTableCellContent"), inCellContentHead(code3));
  }
  function cellDividerHead(code3) {
    return effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), seenDelimiter = !0, cellBreakHead;
  }
  function cellBreakHead(code3) {
    return code3 === null || markdownLineEnding(code3) ? atRowEndHead(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceHead) : (seenDelimiter && (seenDelimiter = void 0, tableHeaderCount++), code3 === 124 ? cellDividerHead(code3) : (effects.enter("temporaryTableCellContent"), inCellContentHead(code3)));
  }
  function inWhitespaceHead(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), inWhitespaceHead) : (effects.exit("whitespace"), cellBreakHead(code3));
  }
  function inCellContentHead(code3) {
    return code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3) ? (effects.exit("temporaryTableCellContent"), cellBreakHead(code3)) : (effects.consume(code3), code3 === 92 ? inCellContentEscapeHead : inCellContentHead);
  }
  function inCellContentEscapeHead(code3) {
    return code3 === 92 || code3 === 124 ? (effects.consume(code3), inCellContentHead) : inCellContentHead(code3);
  }
  function atRowEndHead(code3) {
    if (code3 === null)
      return nok(code3);
    effects.exit("tableRow"), effects.exit("tableHead");
    let originalInterrupt = self.interrupt;
    return self.interrupt = !0, effects.attempt(
      {
        tokenize: tokenizeRowEnd,
        partial: !0
      },
      function(code4) {
        return self.interrupt = originalInterrupt, effects.enter("tableDelimiterRow"), atDelimiterRowBreak(code4);
      },
      function(code4) {
        return self.interrupt = originalInterrupt, nok(code4);
      }
    )(code3);
  }
  function atDelimiterRowBreak(code3) {
    return code3 === null || markdownLineEnding(code3) ? rowEndDelimiter(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceDelimiter) : code3 === 45 ? (effects.enter("tableDelimiterFiller"), effects.consume(code3), hasDash = !0, align.push("none"), inFillerDelimiter) : code3 === 58 ? (effects.enter("tableDelimiterAlignment"), effects.consume(code3), effects.exit("tableDelimiterAlignment"), align.push("left"), afterLeftAlignment) : code3 === 124 ? (effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), atDelimiterRowBreak) : nok(code3);
  }
  function inWhitespaceDelimiter(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), inWhitespaceDelimiter) : (effects.exit("whitespace"), atDelimiterRowBreak(code3));
  }
  function inFillerDelimiter(code3) {
    return code3 === 45 ? (effects.consume(code3), inFillerDelimiter) : (effects.exit("tableDelimiterFiller"), code3 === 58 ? (effects.enter("tableDelimiterAlignment"), effects.consume(code3), effects.exit("tableDelimiterAlignment"), align[align.length - 1] = align[align.length - 1] === "left" ? "center" : "right", afterRightAlignment) : atDelimiterRowBreak(code3));
  }
  function afterLeftAlignment(code3) {
    return code3 === 45 ? (effects.enter("tableDelimiterFiller"), effects.consume(code3), hasDash = !0, inFillerDelimiter) : nok(code3);
  }
  function afterRightAlignment(code3) {
    return code3 === null || markdownLineEnding(code3) ? rowEndDelimiter(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceDelimiter) : code3 === 124 ? (effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), atDelimiterRowBreak) : nok(code3);
  }
  function rowEndDelimiter(code3) {
    return effects.exit("tableDelimiterRow"), !hasDash || tableHeaderCount !== align.length ? nok(code3) : code3 === null ? tableClose(code3) : effects.check(
      nextPrefixedOrBlank,
      tableClose,
      effects.attempt(
        {
          tokenize: tokenizeRowEnd,
          partial: !0
        },
        factorySpace(effects, bodyStart, "linePrefix", 4),
        tableClose
      )
    )(code3);
  }
  function tableClose(code3) {
    return effects.exit("table"), ok2(code3);
  }
  function bodyStart(code3) {
    return effects.enter("tableBody"), rowStartBody(code3);
  }
  function rowStartBody(code3) {
    return effects.enter("tableRow"), code3 === 124 ? cellDividerBody(code3) : (effects.enter("temporaryTableCellContent"), inCellContentBody(code3));
  }
  function cellDividerBody(code3) {
    return effects.enter("tableCellDivider"), effects.consume(code3), effects.exit("tableCellDivider"), cellBreakBody;
  }
  function cellBreakBody(code3) {
    return code3 === null || markdownLineEnding(code3) ? atRowEndBody(code3) : markdownSpace(code3) ? (effects.enter("whitespace"), effects.consume(code3), inWhitespaceBody) : code3 === 124 ? cellDividerBody(code3) : (effects.enter("temporaryTableCellContent"), inCellContentBody(code3));
  }
  function inWhitespaceBody(code3) {
    return markdownSpace(code3) ? (effects.consume(code3), inWhitespaceBody) : (effects.exit("whitespace"), cellBreakBody(code3));
  }
  function inCellContentBody(code3) {
    return code3 === null || code3 === 124 || markdownLineEndingOrSpace(code3) ? (effects.exit("temporaryTableCellContent"), cellBreakBody(code3)) : (effects.consume(code3), code3 === 92 ? inCellContentEscapeBody : inCellContentBody);
  }
  function inCellContentEscapeBody(code3) {
    return code3 === 92 || code3 === 124 ? (effects.consume(code3), inCellContentBody) : inCellContentBody(code3);
  }
  function atRowEndBody(code3) {
    return effects.exit("tableRow"), code3 === null ? tableBodyClose(code3) : effects.check(
      nextPrefixedOrBlank,
      tableBodyClose,
      effects.attempt(
        {
          tokenize: tokenizeRowEnd,
          partial: !0
        },
        factorySpace(effects, rowStartBody, "linePrefix", 4),
        tableBodyClose
      )
    )(code3);
  }
  function tableBodyClose(code3) {
    return effects.exit("tableBody"), tableClose(code3);
  }
  function tokenizeRowEnd(effects2, ok3, nok2) {
    return start2;
    function start2(code3) {
      return effects2.enter("lineEnding"), effects2.consume(code3), effects2.exit("lineEnding"), factorySpace(effects2, prefixed, "linePrefix");
    }
    function prefixed(code3) {
      if (self.parser.lazy[self.now().line] || code3 === null || markdownLineEnding(code3))
        return nok2(code3);
      let tail = self.events[self.events.length - 1];
      return !self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], !0).length >= 4 ? nok2(code3) : (self._gfmTableDynamicInterruptHack = !0, effects2.check(
        self.parser.constructs.flow,
        function(code4) {
          return self._gfmTableDynamicInterruptHack = !1, nok2(code4);
        },
        function(code4) {
          return self._gfmTableDynamicInterruptHack = !1, ok3(code4);
        }
      )(code3));
    }
  }
}
function tokenizeNextPrefixedOrBlank(effects, ok2, nok) {
  let size = 0;
  return start;
  function start(code3) {
    return effects.enter("check"), effects.consume(code3), whitespace2;
  }
  function whitespace2(code3) {
    return code3 === -1 || code3 === 32 ? (effects.consume(code3), size++, size === 4 ? ok2 : whitespace2) : code3 === null || markdownLineEndingOrSpace(code3) ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-extension-gfm-task-list-item@1.0.3/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var tasklistCheck = {
  tokenize: tokenizeTasklistCheck
}, gfmTaskListItem = {
  text: {
    [91]: tasklistCheck
  }
};
function tokenizeTasklistCheck(effects, ok2, nok) {
  let self = this;
  return open;
  function open(code3) {
    return self.previous !== null || !self._gfmTasklistFirstContentOfListItem ? nok(code3) : (effects.enter("taskListCheck"), effects.enter("taskListCheckMarker"), effects.consume(code3), effects.exit("taskListCheckMarker"), inside);
  }
  function inside(code3) {
    return markdownLineEndingOrSpace(code3) ? (effects.enter("taskListCheckValueUnchecked"), effects.consume(code3), effects.exit("taskListCheckValueUnchecked"), close) : code3 === 88 || code3 === 120 ? (effects.enter("taskListCheckValueChecked"), effects.consume(code3), effects.exit("taskListCheckValueChecked"), close) : nok(code3);
  }
  function close(code3) {
    return code3 === 93 ? (effects.enter("taskListCheckMarker"), effects.consume(code3), effects.exit("taskListCheckMarker"), effects.exit("taskListCheck"), effects.check(
      {
        tokenize: spaceThenNonSpace
      },
      ok2,
      nok
    )) : nok(code3);
  }
}
function spaceThenNonSpace(effects, ok2, nok) {
  let self = this;
  return factorySpace(effects, after, "whitespace");
  function after(code3) {
    let tail = self.events[self.events.length - 1];
    return (tail && tail[1].type === "whitespace" || markdownLineEnding(code3)) && code3 !== null ? ok2(code3) : nok(code3);
  }
}

// node_modules/.pnpm/micromark-extension-gfm@2.0.1/node_modules/micromark-extension-gfm/index.js
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral,
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable,
    gfmTaskListItem
  ]);
}

// node_modules/.pnpm/ccount@2.0.1/node_modules/ccount/index.js
function ccount(value, character) {
  let source = String(value);
  if (typeof character != "string")
    throw new TypeError("Expected character");
  let count = 0, index2 = source.indexOf(character);
  for (; index2 !== -1; )
    count++, index2 = source.indexOf(character, index2 + character.length);
  return count;
}

// node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string3) {
  if (typeof string3 != "string")
    throw new TypeError("Expected a string");
  return string3.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// node_modules/.pnpm/mdast-util-find-and-replace@2.2.1/node_modules/mdast-util-find-and-replace/lib/index.js
var own10 = {}.hasOwnProperty, findAndReplace = function(tree, find3, replace2, options) {
  let settings, schema;
  typeof find3 == "string" || find3 instanceof RegExp ? (schema = [[find3, replace2]], settings = options) : (schema = find3, settings = replace2), settings || (settings = {});
  let ignored = convert(settings.ignore || []), pairs = toPairs(schema), pairIndex = -1;
  for (; ++pairIndex < pairs.length; )
    visitParents(tree, "text", visitor);
  return tree;
  function visitor(node, parents) {
    let index2 = -1, grandparent;
    for (; ++index2 < parents.length; ) {
      let parent = parents[index2];
      if (ignored(
        parent,
        grandparent ? grandparent.children.indexOf(parent) : void 0,
        grandparent
      ))
        return;
      grandparent = parent;
    }
    if (grandparent)
      return handler(node, parents);
  }
  function handler(node, parents) {
    let parent = parents[parents.length - 1], find4 = pairs[pairIndex][0], replace3 = pairs[pairIndex][1], start = 0, index2 = parent.children.indexOf(node), change = !1, nodes2 = [], position3;
    find4.lastIndex = 0;
    let match = find4.exec(node.value);
    for (; match; ) {
      position3 = match.index;
      let matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node]
      }, value = replace3(...match, matchObject);
      if (typeof value == "string" && (value = value.length > 0 ? { type: "text", value } : void 0), value !== !1 && (start !== position3 && nodes2.push({
        type: "text",
        value: node.value.slice(start, position3)
      }), Array.isArray(value) ? nodes2.push(...value) : value && nodes2.push(value), start = position3 + match[0].length, change = !0), !find4.global)
        break;
      match = find4.exec(node.value);
    }
    return change ? (start < node.value.length && nodes2.push({ type: "text", value: node.value.slice(start) }), parent.children.splice(index2, 1, ...nodes2)) : nodes2 = [node], index2 + nodes2.length;
  }
};
function toPairs(schema) {
  let result = [];
  if (typeof schema != "object")
    throw new TypeError("Expected array or object as schema");
  if (Array.isArray(schema)) {
    let index2 = -1;
    for (; ++index2 < schema.length; )
      result.push([
        toExpression(schema[index2][0]),
        toFunction(schema[index2][1])
      ]);
  } else {
    let key;
    for (key in schema)
      own10.call(schema, key) && result.push([toExpression(key), toFunction(schema[key])]);
  }
  return result;
}
function toExpression(find3) {
  return typeof find3 == "string" ? new RegExp(escapeStringRegexp(find3), "g") : find3;
}
function toFunction(replace2) {
  return typeof replace2 == "function" ? replace2 : () => replace2;
}

// node_modules/.pnpm/mdast-util-gfm-autolink-literal@1.0.2/node_modules/mdast-util-gfm-autolink-literal/index.js
var inConstruct = "phrasing", notInConstruct = ["autolink", "link", "image", "label"], gfmAutolinkLiteralFromMarkdown = {
  transforms: [transformGfmAutolinkLiterals],
  enter: {
    literalAutolink: enterLiteralAutolink,
    literalAutolinkEmail: enterLiteralAutolinkValue,
    literalAutolinkHttp: enterLiteralAutolinkValue,
    literalAutolinkWww: enterLiteralAutolinkValue
  },
  exit: {
    literalAutolink: exitLiteralAutolink,
    literalAutolinkEmail: exitLiteralAutolinkEmail,
    literalAutolinkHttp: exitLiteralAutolinkHttp,
    literalAutolinkWww: exitLiteralAutolinkWww
  }
}, gfmAutolinkLiteralToMarkdown = {
  unsafe: [
    {
      character: "@",
      before: "[+\\-.\\w]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    {
      character: ".",
      before: "[Ww]",
      after: "[\\-.\\w]",
      inConstruct,
      notInConstruct
    },
    { character: ":", before: "[ps]", after: "\\/", inConstruct, notInConstruct }
  ]
};
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  let node = this.stack[this.stack.length - 1];
  node.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function findUrl(_, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous2(match) || (/^w/i.test(protocol) && (domain2 = protocol + domain2, protocol = "", prefix = "http://"), !isCorrectDomain(domain2)))
    return !1;
  let parts = splitUrl(domain2 + path2);
  if (!parts[0])
    return !1;
  let result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  return parts[1] ? [result, { type: "text", value: parts[1] }] : result;
}
function findEmail(_, atext, label, match) {
  return !previous2(match, !0) || /[_-\d]$/.test(label) ? !1 : {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label,
    children: [{ type: "text", value: atext + "@" + label }]
  };
}
function isCorrectDomain(domain2) {
  let parts = domain2.split(".");
  return !(parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2])));
}
function splitUrl(url) {
  let trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url), closingParenIndex, openingParens, closingParens, trail;
  if (trailExec)
    for (url = url.slice(0, trailExec.index), trail = trailExec[0], closingParenIndex = trail.indexOf(")"), openingParens = ccount(url, "("), closingParens = ccount(url, ")"); closingParenIndex !== -1 && openingParens > closingParens; )
      url += trail.slice(0, closingParenIndex + 1), trail = trail.slice(closingParenIndex + 1), closingParenIndex = trail.indexOf(")"), closingParens++;
  return [url, trail];
}
function previous2(match, email) {
  let code3 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code3) || unicodePunctuation(code3)) && (!email || code3 !== 47);
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/association.js
function association(node) {
  return node.label || !node.identifier ? node.label || "" : decodeString(node.identifier);
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/track.js
function track(options_) {
  let options = options_ || {}, now = options.now || {}, lineShift = options.lineShift || 0, line = now.line || 1, column = now.column || 1;
  return { move, current, shift };
  function current() {
    return { now: { line, column }, lineShift };
  }
  function shift(value) {
    lineShift += value;
  }
  function move(value = "") {
    let chunks = value.split(/\r?\n|\r/g), tail = chunks[chunks.length - 1];
    return line += chunks.length - 1, column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift, value;
  }
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/container-flow.js
function containerFlow(parent, context, safeOptions) {
  let indexStack = context.indexStack, children = parent.children || [], tracker = track(safeOptions), results = [], index2 = -1;
  for (indexStack.push(-1); ++index2 < children.length; ) {
    let child = children[index2];
    indexStack[indexStack.length - 1] = index2, results.push(
      tracker.move(
        context.handle(child, parent, context, {
          before: `
`,
          after: `
`,
          ...tracker.current()
        })
      )
    ), child.type !== "list" && (context.bulletLastUsed = void 0), index2 < children.length - 1 && results.push(tracker.move(between(child, children[index2 + 1])));
  }
  return indexStack.pop(), results.join("");
  function between(left, right) {
    let index3 = context.join.length;
    for (; index3--; ) {
      let result = context.join[index3](left, right, parent, context);
      if (result === !0 || result === 1)
        break;
      if (typeof result == "number")
        return `
`.repeat(1 + result);
      if (result === !1)
        return `

<!---->

`;
    }
    return `

`;
  }
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/indent-lines.js
var eol = /\r?\n|\r/g;
function indentLines(value, map2) {
  let result = [], start = 0, line = 0, match;
  for (; match = eol.exec(value); )
    one4(value.slice(start, match.index)), result.push(match[0]), start = match.index + match[0].length, line++;
  return one4(value.slice(start)), result.join("");
  function one4(value2) {
    result.push(map2(value2, line, !value2));
  }
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js
function patternCompile(pattern) {
  if (!pattern._compiled) {
    let before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
    pattern._compiled = new RegExp(
      (before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""),
      "g"
    );
  }
  return pattern._compiled;
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, !0) && !listInScope(stack, pattern.notInConstruct, !1);
}
function listInScope(stack, list3, none) {
  if (!list3)
    return none;
  typeof list3 == "string" && (list3 = [list3]);
  let index2 = -1;
  for (; ++index2 < list3.length; )
    if (stack.includes(list3[index2]))
      return !0;
  return !1;
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/safe.js
function safe(context, input, config2) {
  let value = (config2.before || "") + (input || "") + (config2.after || ""), positions = [], result = [], infos = {}, index2 = -1;
  for (; ++index2 < context.unsafe.length; ) {
    let pattern = context.unsafe[index2];
    if (!patternInScope(context.stack, pattern))
      continue;
    let expression = patternCompile(pattern), match;
    for (; match = expression.exec(value); ) {
      let before = "before" in pattern || Boolean(pattern.atBreak), after = "after" in pattern, position3 = match.index + (before ? match[1].length : 0);
      positions.includes(position3) ? (infos[position3].before && !before && (infos[position3].before = !1), infos[position3].after && !after && (infos[position3].after = !1)) : (positions.push(position3), infos[position3] = { before, after });
    }
  }
  positions.sort(numerical);
  let start = config2.before ? config2.before.length : 0, end = value.length - (config2.after ? config2.after.length : 0);
  for (index2 = -1; ++index2 < positions.length; ) {
    let position3 = positions[index2];
    position3 < start || position3 >= end || position3 + 1 < end && positions[index2 + 1] === position3 + 1 && infos[position3].after && !infos[position3 + 1].before && !infos[position3 + 1].after || positions[index2 - 1] === position3 - 1 && infos[position3].before && !infos[position3 - 1].before && !infos[position3 - 1].after || (start !== position3 && result.push(escapeBackslashes(value.slice(start, position3), "\\")), start = position3, /[!-/:-@[-`{-~]/.test(value.charAt(position3)) && (!config2.encode || !config2.encode.includes(value.charAt(position3))) ? result.push("\\") : (result.push(
      "&#x" + value.charCodeAt(position3).toString(16).toUpperCase() + ";"
    ), start++));
  }
  return result.push(escapeBackslashes(value.slice(start, end), config2.after)), result.join("");
}
function numerical(a, b) {
  return a - b;
}
function escapeBackslashes(value, after) {
  let expression = /\\(?=[!-/:-@[-`{-~])/g, positions = [], results = [], whole = value + after, index2 = -1, start = 0, match;
  for (; match = expression.exec(whole); )
    positions.push(match.index);
  for (; ++index2 < positions.length; )
    start !== positions[index2] && results.push(value.slice(start, positions[index2])), results.push("\\"), start = positions[index2];
  return results.push(value.slice(start)), results.join("");
}

// node_modules/.pnpm/mdast-util-gfm-footnote@1.0.1/node_modules/mdast-util-gfm-footnote/index.js
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
  function enterFootnoteDefinition(token) {
    this.enter(
      { type: "footnoteDefinition", identifier: "", label: "", children: [] },
      token
    );
  }
  function enterFootnoteDefinitionLabelString() {
    this.buffer();
  }
  function exitFootnoteDefinitionLabelString(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function exitFootnoteDefinition(token) {
    this.exit(token);
  }
  function enterFootnoteCall(token) {
    this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
  }
  function enterFootnoteCallString() {
    this.buffer();
  }
  function exitFootnoteCallString(token) {
    let label = this.resume(), node = this.stack[this.stack.length - 1];
    node.label = label, node.identifier = normalizeIdentifier(
      this.sliceSerialize(token)
    ).toLowerCase();
  }
  function exitFootnoteCall(token) {
    this.exit(token);
  }
}
function gfmFootnoteToMarkdown() {
  return footnoteReference2.peek = footnoteReferencePeek, {
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference: footnoteReference2 }
  };
  function footnoteReference2(node, _, context, safeOptions) {
    let tracker = track(safeOptions), value = tracker.move("[^"), exit3 = context.enter("footnoteReference"), subexit = context.enter("reference");
    return value += tracker.move(
      safe(context, association(node), {
        ...tracker.current(),
        before: value,
        after: "]"
      })
    ), subexit(), exit3(), value += tracker.move("]"), value;
  }
  function footnoteReferencePeek() {
    return "[";
  }
  function footnoteDefinition(node, _, context, safeOptions) {
    let tracker = track(safeOptions), value = tracker.move("[^"), exit3 = context.enter("footnoteDefinition"), subexit = context.enter("label");
    return value += tracker.move(
      safe(context, association(node), {
        ...tracker.current(),
        before: value,
        after: "]"
      })
    ), subexit(), value += tracker.move(
      "]:" + (node.children && node.children.length > 0 ? " " : "")
    ), tracker.shift(4), value += tracker.move(
      indentLines(containerFlow(node, context, tracker.current()), map2)
    ), exit3(), value;
    function map2(line, index2, blank) {
      return index2 ? (blank ? "" : "    ") + line : line;
    }
  }
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js
function containerPhrasing(parent, context, safeOptions) {
  let indexStack = context.indexStack, children = parent.children || [], results = [], index2 = -1, before = safeOptions.before;
  indexStack.push(-1);
  let tracker = track(safeOptions);
  for (; ++index2 < children.length; ) {
    let child = children[index2], after;
    if (indexStack[indexStack.length - 1] = index2, index2 + 1 < children.length) {
      let handle = context.handle.handlers[children[index2 + 1].type];
      handle && handle.peek && (handle = handle.peek), after = handle ? handle(children[index2 + 1], parent, context, {
        before: "",
        after: "",
        ...tracker.current()
      }).charAt(0) : "";
    } else
      after = safeOptions.after;
    results.length > 0 && (before === "\r" || before === `
`) && child.type === "html" && (results[results.length - 1] = results[results.length - 1].replace(
      /(\r?\n|\r)$/,
      " "
    ), before = " ", tracker = track(safeOptions), tracker.move(results.join(""))), results.push(
      tracker.move(
        context.handle(child, parent, context, {
          ...tracker.current(),
          before,
          after
        })
      )
    ), before = results[results.length - 1].slice(-1);
  }
  return indexStack.pop(), results.join("");
}

// node_modules/.pnpm/mdast-util-gfm-strikethrough@1.0.1/node_modules/mdast-util-gfm-strikethrough/index.js
var gfmStrikethroughFromMarkdown = {
  canContainEols: ["delete"],
  enter: { strikethrough: enterStrikethrough },
  exit: { strikethrough: exitStrikethrough }
}, gfmStrikethroughToMarkdown = {
  unsafe: [{ character: "~", inConstruct: "phrasing" }],
  handlers: { delete: handleDelete }
};
handleDelete.peek = peekDelete;
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node, _, context, safeOptions) {
  let tracker = track(safeOptions), exit3 = context.enter("emphasis"), value = tracker.move("~~");
  return value += containerPhrasing(node, context, {
    ...tracker.current(),
    before: value,
    after: "~"
  }), value += tracker.move("~~"), exit3(), value;
}
function peekDelete() {
  return "~";
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
inlineCode2.peek = inlineCodePeek;
function inlineCode2(node, _, context) {
  let value = node.value || "", sequence = "`", index2 = -1;
  for (; new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value); )
    sequence += "`";
  for (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value)) && (value = " " + value + " "); ++index2 < context.unsafe.length; ) {
    let pattern = context.unsafe[index2], expression = patternCompile(pattern), match;
    if (!!pattern.atBreak)
      for (; match = expression.exec(value); ) {
        let position3 = match.index;
        value.charCodeAt(position3) === 10 && value.charCodeAt(position3 - 1) === 13 && position3--, value = value.slice(0, position3) + " " + value.slice(match.index + 1);
      }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}

// node_modules/.pnpm/markdown-table@3.0.2/node_modules/markdown-table/index.js
function markdownTable(table2, options = {}) {
  let align = (options.align || []).concat(), stringLength = options.stringLength || defaultStringLength, alignments = [], cellMatrix = [], sizeMatrix = [], longestCellByColumn = [], mostCellsPerRow = 0, rowIndex = -1;
  for (; ++rowIndex < table2.length; ) {
    let row2 = [], sizes2 = [], columnIndex2 = -1;
    for (table2[rowIndex].length > mostCellsPerRow && (mostCellsPerRow = table2[rowIndex].length); ++columnIndex2 < table2[rowIndex].length; ) {
      let cell = serialize(table2[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== !1) {
        let size = stringLength(cell);
        sizes2[columnIndex2] = size, (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) && (longestCellByColumn[columnIndex2] = size);
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2, sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align == "object" && "length" in align)
    for (; ++columnIndex < mostCellsPerRow; )
      alignments[columnIndex] = toAlignment(align[columnIndex]);
  else {
    let code3 = toAlignment(align);
    for (; ++columnIndex < mostCellsPerRow; )
      alignments[columnIndex] = code3;
  }
  columnIndex = -1;
  let row = [], sizes = [];
  for (; ++columnIndex < mostCellsPerRow; ) {
    let code3 = alignments[columnIndex], before = "", after = "";
    code3 === 99 ? (before = ":", after = ":") : code3 === 108 ? before = ":" : code3 === 114 && (after = ":");
    let size = options.alignDelimiters === !1 ? 1 : Math.max(
      1,
      longestCellByColumn[columnIndex] - before.length - after.length
    ), cell = before + "-".repeat(size) + after;
    options.alignDelimiters !== !1 && (size = before.length + size + after.length, size > longestCellByColumn[columnIndex] && (longestCellByColumn[columnIndex] = size), sizes[columnIndex] = size), row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row), sizeMatrix.splice(1, 0, sizes), rowIndex = -1;
  let lines = [];
  for (; ++rowIndex < cellMatrix.length; ) {
    let row2 = cellMatrix[rowIndex], sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    let line = [];
    for (; ++columnIndex < mostCellsPerRow; ) {
      let cell = row2[columnIndex] || "", before = "", after = "";
      if (options.alignDelimiters !== !1) {
        let size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0), code3 = alignments[columnIndex];
        code3 === 114 ? before = " ".repeat(size) : code3 === 99 ? size % 2 ? (before = " ".repeat(size / 2 + 0.5), after = " ".repeat(size / 2 - 0.5)) : (before = " ".repeat(size / 2), after = before) : after = " ".repeat(size);
      }
      options.delimiterStart !== !1 && !columnIndex && line.push("|"), options.padding !== !1 && !(options.alignDelimiters === !1 && cell === "") && (options.delimiterStart !== !1 || columnIndex) && line.push(" "), options.alignDelimiters !== !1 && line.push(before), line.push(cell), options.alignDelimiters !== !1 && line.push(after), options.padding !== !1 && line.push(" "), (options.delimiterEnd !== !1 || columnIndex !== mostCellsPerRow - 1) && line.push("|");
    }
    lines.push(
      options.delimiterEnd === !1 ? line.join("").replace(/ +$/, "") : line.join("")
    );
  }
  return lines.join(`
`);
}
function serialize(value) {
  return value == null ? "" : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  let code3 = typeof value == "string" ? value.codePointAt(0) : 0;
  return code3 === 67 || code3 === 99 ? 99 : code3 === 76 || code3 === 108 ? 108 : code3 === 82 || code3 === 114 ? 114 : 0;
}

// node_modules/.pnpm/mdast-util-gfm-table@1.0.6/node_modules/mdast-util-gfm-table/lib/index.js
var gfmTableFromMarkdown = {
  enter: {
    table: enterTable,
    tableData: enterCell,
    tableHeader: enterCell,
    tableRow: enterRow
  },
  exit: {
    codeText: exitCodeText,
    table: exitTable,
    tableData: exit2,
    tableHeader: exit2,
    tableRow: exit2
  }
};
function enterTable(token) {
  let align = token._align;
  this.enter(
    {
      type: "table",
      align: align.map((d) => d === "none" ? null : d),
      children: []
    },
    token
  ), this.setData("inTable", !0);
}
function exitTable(token) {
  this.exit(token), this.setData("inTable");
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit2(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  this.getData("inTable") && (value = value.replace(/\\([\\|])/g, replace));
  let node = this.stack[this.stack.length - 1];
  node.value = value, this.exit(token);
}
function replace($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  let settings = options || {}, padding = settings.tableCellPadding, alignDelimiters = settings.tablePipeAlign, stringLength = settings.stringLength, around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      { atBreak: !0, character: "|", after: "[	 :-]" },
      { character: "|", inConstruct: "tableCell" },
      { atBreak: !0, character: ":", after: "-" },
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  };
  function handleTable(node, _, context, safeOptions) {
    return serializeData(
      handleTableAsData(node, context, safeOptions),
      node.align
    );
  }
  function handleTableRow(node, _, context, safeOptions) {
    let row = handleTableRowAsData(node, context, safeOptions), value = serializeData([row]);
    return value.slice(0, value.indexOf(`
`));
  }
  function handleTableCell(node, _, context, safeOptions) {
    let exit3 = context.enter("tableCell"), subexit = context.enter("phrasing"), value = containerPhrasing(node, context, {
      ...safeOptions,
      before: around,
      after: around
    });
    return subexit(), exit3(), value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      alignDelimiters,
      padding,
      stringLength
    });
  }
  function handleTableAsData(node, context, safeOptions) {
    let children = node.children, index2 = -1, result = [], subexit = context.enter("table");
    for (; ++index2 < children.length; )
      result[index2] = handleTableRowAsData(
        children[index2],
        context,
        safeOptions
      );
    return subexit(), result;
  }
  function handleTableRowAsData(node, context, safeOptions) {
    let children = node.children, index2 = -1, result = [], subexit = context.enter("tableRow");
    for (; ++index2 < children.length; )
      result[index2] = handleTableCell(
        children[index2],
        node,
        context,
        safeOptions
      );
    return subexit(), result;
  }
  function inlineCodeWithTable(node, parent, context) {
    let value = inlineCode2(node, parent, context);
    return context.stack.includes("tableCell") && (value = value.replace(/\|/g, "\\$&")), value;
  }
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function checkBullet(context) {
  let marker = context.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-")
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return marker;
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function checkListItemIndent(context) {
  let style4 = context.options.listItemIndent || "tab";
  if (style4 === 1 || style4 === "1")
    return "one";
  if (style4 !== "tab" && style4 !== "one" && style4 !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + style4 + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return style4;
}

// node_modules/.pnpm/mdast-util-to-markdown@1.3.0/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function listItem2(node, parent, context, safeOptions) {
  let listItemIndent = checkListItemIndent(context), bullet = context.bulletCurrent || checkBullet(context);
  parent && parent.type === "list" && parent.ordered && (bullet = (typeof parent.start == "number" && parent.start > -1 ? parent.start : 1) + (context.options.incrementListMarker === !1 ? 0 : parent.children.indexOf(node)) + bullet);
  let size = bullet.length + 1;
  (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) && (size = Math.ceil(size / 4) * 4);
  let tracker = track(safeOptions);
  tracker.move(bullet + " ".repeat(size - bullet.length)), tracker.shift(size);
  let exit3 = context.enter("listItem"), value = indentLines(
    containerFlow(node, context, tracker.current()),
    map2
  );
  return exit3(), value;
  function map2(line, index2, blank) {
    return index2 ? (blank ? "" : " ".repeat(size)) + line : (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}

// node_modules/.pnpm/mdast-util-gfm-task-list-item@1.0.1/node_modules/mdast-util-gfm-task-list-item/index.js
var gfmTaskListItemFromMarkdown = {
  exit: {
    taskListCheckValueChecked: exitCheck,
    taskListCheckValueUnchecked: exitCheck,
    paragraph: exitParagraphWithTaskListItem
  }
}, gfmTaskListItemToMarkdown = {
  unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
  handlers: { listItem: listItemWithTaskListItem }
};
function exitCheck(token) {
  let node = this.stack[this.stack.length - 2];
  node.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  let parent = this.stack[this.stack.length - 2], node = this.stack[this.stack.length - 1], siblings = parent.children, head = node.children[0], index2 = -1, firstParaghraph;
  if (parent && parent.type === "listItem" && typeof parent.checked == "boolean" && head && head.type === "text") {
    for (; ++index2 < siblings.length; ) {
      let sibling = siblings[index2];
      if (sibling.type === "paragraph") {
        firstParaghraph = sibling;
        break;
      }
    }
    firstParaghraph === node && (head.value = head.value.slice(1), head.value.length === 0 ? node.children.shift() : node.position && head.position && typeof head.position.start.offset == "number" && (head.position.start.column++, head.position.start.offset++, node.position.start = Object.assign({}, head.position.start)));
  }
  this.exit(token);
}
function listItemWithTaskListItem(node, parent, context, safeOptions) {
  let head = node.children[0], checkable = typeof node.checked == "boolean" && head && head.type === "paragraph", checkbox = "[" + (node.checked ? "x" : " ") + "] ", tracker = track(safeOptions);
  checkable && tracker.move(checkbox);
  let value = listItem2(node, parent, context, {
    ...safeOptions,
    ...tracker.current()
  });
  return checkable && (value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check)), value;
  function check($0) {
    return $0 + checkbox;
  }
}

// node_modules/.pnpm/mdast-util-gfm@2.0.1/node_modules/mdast-util-gfm/lib/index.js
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown,
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown,
    gfmTableFromMarkdown,
    gfmTaskListItemFromMarkdown
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown,
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown,
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown
    ]
  };
}

// node_modules/.pnpm/remark-gfm@3.0.1/node_modules/remark-gfm/index.js
function remarkGfm(options = {}) {
  let data = this.data();
  add("micromarkExtensions", gfm(options)), add("fromMarkdownExtensions", gfmFromMarkdown()), add("toMarkdownExtensions", gfmToMarkdown(options));
  function add(field, value) {
    (data[field] ? data[field] : data[field] = []).push(value);
  }
}

// app/routes/repository.$repoName.tsx
var import_react_syntax_highlighter = require("react-syntax-highlighter"), import_prism = require("react-syntax-highlighter/dist/cjs/styles/prism");

// node_modules/.pnpm/hast-util-raw@7.2.2/node_modules/hast-util-raw/lib/index.js
var import_parser = __toESM(require("parse5/lib/parser/index.js"), 1);

// node_modules/.pnpm/hast-util-parse-selector@3.1.0/node_modules/hast-util-parse-selector/index.js
var search2 = /[#.]/g, parseSelector = function(selector, defaultTagName = "div") {
  for (var value = selector || "", props = {}, start = 0, subvalue, previous3, match; start < value.length; )
    search2.lastIndex = start, match = search2.exec(value), subvalue = value.slice(start, match ? match.index : value.length), subvalue && (previous3 ? previous3 === "#" ? props.id = subvalue : Array.isArray(props.className) ? props.className.push(subvalue) : props.className = [subvalue] : defaultTagName = subvalue, start += subvalue.length), match && (previous3 = match[0], start++);
  return {
    type: "element",
    tagName: defaultTagName,
    properties: props,
    children: []
  };
};

// node_modules/.pnpm/hastscript@7.1.0/node_modules/hastscript/lib/core.js
var buttonTypes = /* @__PURE__ */ new Set(["menu", "submit", "reset", "button"]), own11 = {}.hasOwnProperty;
function core(schema, defaultTagName, caseSensitive) {
  let adjust = caseSensitive && createAdjustMap(caseSensitive);
  return function(selector, properties, ...children) {
    let index2 = -1, node;
    if (selector == null)
      node = { type: "root", children: [] }, children.unshift(properties);
    else if (node = parseSelector(selector, defaultTagName), node.tagName = node.tagName.toLowerCase(), adjust && own11.call(adjust, node.tagName) && (node.tagName = adjust[node.tagName]), isProperties(properties, node.tagName)) {
      let key;
      for (key in properties)
        own11.call(properties, key) && addProperty2(schema, node.properties, key, properties[key]);
    } else
      children.unshift(properties);
    for (; ++index2 < children.length; )
      addChild(node.children, children[index2]);
    return node.type === "element" && node.tagName === "template" && (node.content = { type: "root", children: node.children }, node.children = []), node;
  };
}
function isProperties(value, name) {
  return value == null || typeof value != "object" || Array.isArray(value) ? !1 : name === "input" || !value.type || typeof value.type != "string" ? !0 : "children" in value && Array.isArray(value.children) ? !1 : name === "button" ? buttonTypes.has(value.type.toLowerCase()) : !("value" in value);
}
function addProperty2(schema, properties, key, value) {
  let info = find(schema, key), index2 = -1, result;
  if (value != null) {
    if (typeof value == "number") {
      if (Number.isNaN(value))
        return;
      result = value;
    } else
      typeof value == "boolean" ? result = value : typeof value == "string" ? info.spaceSeparated ? result = parse2(value) : info.commaSeparated ? result = parse3(value) : info.commaOrSpaceSeparated ? result = parse2(parse3(value).join(" ")) : result = parsePrimitive(info, info.property, value) : Array.isArray(value) ? result = value.concat() : result = info.property === "style" ? style2(value) : String(value);
    if (Array.isArray(result)) {
      let finalResult = [];
      for (; ++index2 < result.length; )
        finalResult[index2] = parsePrimitive(info, info.property, result[index2]);
      result = finalResult;
    }
    info.property === "className" && Array.isArray(properties.className) && (result = properties.className.concat(result)), properties[info.property] = result;
  }
}
function addChild(nodes2, value) {
  let index2 = -1;
  if (value != null)
    if (typeof value == "string" || typeof value == "number")
      nodes2.push({ type: "text", value: String(value) });
    else if (Array.isArray(value))
      for (; ++index2 < value.length; )
        addChild(nodes2, value[index2]);
    else if (typeof value == "object" && "type" in value)
      value.type === "root" ? addChild(nodes2, value.children) : nodes2.push(value);
    else
      throw new Error("Expected node, nodes, or string, got `" + value + "`");
}
function parsePrimitive(info, name, value) {
  if (typeof value == "string") {
    if (info.number && value && !Number.isNaN(Number(value)))
      return Number(value);
    if ((info.boolean || info.overloadedBoolean) && (value === "" || normalize(value) === normalize(name)))
      return !0;
  }
  return value;
}
function style2(value) {
  let result = [], key;
  for (key in value)
    own11.call(value, key) && result.push([key, value[key]].join(": "));
  return result.join("; ");
}
function createAdjustMap(values) {
  let result = {}, index2 = -1;
  for (; ++index2 < values.length; )
    result[values[index2].toLowerCase()] = values[index2];
  return result;
}

// node_modules/.pnpm/hastscript@7.1.0/node_modules/hastscript/lib/html.js
var h = core(html3, "div");

// node_modules/.pnpm/hastscript@7.1.0/node_modules/hastscript/lib/svg-case-sensitive-tag-names.js
var svgCaseSensitiveTagNames = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
];

// node_modules/.pnpm/hastscript@7.1.0/node_modules/hastscript/lib/svg.js
var s = core(svg2, "g", svgCaseSensitiveTagNames);

// node_modules/.pnpm/vfile-location@4.0.1/node_modules/vfile-location/index.js
function location(file) {
  for (var value = String(file), indices = [], search3 = /\r?\n|\r/g; search3.test(value); )
    indices.push(search3.lastIndex);
  return indices.push(value.length + 1), { toPoint, toOffset };
  function toPoint(offset) {
    var index2 = -1;
    if (offset > -1 && offset < indices[indices.length - 1]) {
      for (; ++index2 < indices.length; )
        if (indices[index2] > offset)
          return {
            line: index2 + 1,
            column: offset - (indices[index2 - 1] || 0) + 1,
            offset
          };
    }
    return { line: void 0, column: void 0, offset: void 0 };
  }
  function toOffset(point4) {
    var line = point4 && point4.line, column = point4 && point4.column, offset;
    return typeof line == "number" && typeof column == "number" && !Number.isNaN(line) && !Number.isNaN(column) && line - 1 in indices && (offset = (indices[line - 2] || 0) + column - 1 || 0), offset > -1 && offset < indices[indices.length - 1] ? offset : -1;
  }
}

// node_modules/.pnpm/web-namespaces@2.0.1/node_modules/web-namespaces/index.js
var webNamespaces = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

// node_modules/.pnpm/hast-util-from-parse5@7.1.0/node_modules/hast-util-from-parse5/lib/index.js
var own12 = {}.hasOwnProperty, map = {
  "#document": root2,
  "#document-fragment": root2,
  "#text": text5,
  "#comment": comment,
  "#documentType": doctype
};
function fromParse5(ast, options = {}) {
  let settings, file;
  return isFile(options) ? (file = options, settings = {}) : (file = options.file, settings = options), transform(
    {
      schema: settings.space === "svg" ? svg2 : html3,
      file,
      verbose: settings.verbose,
      location: !1
    },
    ast
  );
}
function transform(ctx, ast) {
  let schema = ctx.schema, fn = own12.call(map, ast.nodeName) ? map[ast.nodeName] : element, children;
  "tagName" in ast && (ctx.schema = ast.namespaceURI === webNamespaces.svg ? svg2 : html3), "childNodes" in ast && (children = nodes(ctx, ast.childNodes));
  let result = fn(ctx, ast, children);
  if ("sourceCodeLocation" in ast && ast.sourceCodeLocation && ctx.file) {
    let position3 = createLocation(ctx, result, ast.sourceCodeLocation);
    position3 && (ctx.location = !0, result.position = position3);
  }
  return ctx.schema = schema, result;
}
function nodes(ctx, children) {
  let index2 = -1, result = [];
  for (; ++index2 < children.length; )
    result[index2] = transform(ctx, children[index2]);
  return result;
}
function root2(ctx, ast, children) {
  let result = {
    type: "root",
    children,
    data: { quirksMode: ast.mode === "quirks" || ast.mode === "limited-quirks" }
  };
  if (ctx.file && ctx.location) {
    let doc = String(ctx.file), loc = location(doc);
    result.position = {
      start: loc.toPoint(0),
      end: loc.toPoint(doc.length)
    };
  }
  return result;
}
function doctype() {
  return { type: "doctype" };
}
function text5(_, ast) {
  return { type: "text", value: ast.value };
}
function comment(_, ast) {
  return { type: "comment", value: ast.data };
}
function element(ctx, ast, children) {
  let fn = ctx.schema.space === "svg" ? s : h, index2 = -1, props = {};
  for (; ++index2 < ast.attrs.length; ) {
    let attribute = ast.attrs[index2];
    props[(attribute.prefix ? attribute.prefix + ":" : "") + attribute.name] = attribute.value;
  }
  let result = fn(ast.tagName, props, children);
  if (result.tagName === "template" && "content" in ast) {
    let pos = ast.sourceCodeLocation, startTag2 = pos && pos.startTag && position2(pos.startTag), endTag2 = pos && pos.endTag && position2(pos.endTag), content3 = transform(ctx, ast.content);
    startTag2 && endTag2 && ctx.file && (content3.position = { start: startTag2.end, end: endTag2.start }), result.content = content3;
  }
  return result;
}
function createLocation(ctx, node, location2) {
  let result = position2(location2);
  if (node.type === "element") {
    let tail = node.children[node.children.length - 1];
    if (result && !location2.endTag && tail && tail.position && tail.position.end && (result.end = Object.assign({}, tail.position.end)), ctx.verbose) {
      let props = {}, key;
      for (key in location2.attrs)
        own12.call(location2.attrs, key) && (props[find(ctx.schema, key).property] = position2(location2.attrs[key]));
      node.data = {
        position: {
          opening: position2(location2.startTag),
          closing: location2.endTag ? position2(location2.endTag) : null,
          properties: props
        }
      };
    }
  }
  return result;
}
function position2(loc) {
  let start = point3({
    line: loc.startLine,
    column: loc.startCol,
    offset: loc.startOffset
  }), end = point3({
    line: loc.endLine,
    column: loc.endCol,
    offset: loc.endOffset
  });
  return start || end ? { start, end } : null;
}
function point3(point4) {
  return point4.line && point4.column ? point4 : null;
}
function isFile(value) {
  return "messages" in value;
}

// node_modules/.pnpm/hast-to-hyperscript@10.0.1/node_modules/hast-to-hyperscript/index.js
var import_style_to_object2 = __toESM(require("style-to-object"), 1);
var ns = webNamespaces, toReact2 = hastToReact, own13 = {}.hasOwnProperty, root3 = convert("root"), element2 = convert("element"), text6 = convert("text");
function toH(h2, tree, options) {
  if (typeof h2 != "function")
    throw new TypeError("h is not a function");
  let r = react(h2), v = vue(h2), vd = vdom(h2), prefix, node;
  if (typeof options == "string" || typeof options == "boolean" ? (prefix = options, options = {}) : (options || (options = {}), prefix = options.prefix), root3(tree))
    node = tree.children.length === 1 && element2(tree.children[0]) ? tree.children[0] : {
      type: "element",
      tagName: "div",
      properties: {},
      children: tree.children
    };
  else if (element2(tree))
    node = tree;
  else
    throw new Error(
      "Expected root or element, not `" + (tree && tree.type || tree) + "`"
    );
  return transform2(h2, node, {
    schema: options.space === "svg" ? svg2 : html3,
    prefix: prefix == null ? r || v || vd ? "h-" : null : typeof prefix == "string" ? prefix : prefix ? "h-" : null,
    key: 0,
    react: r,
    vue: v,
    vdom: vd,
    hyperscript: hyperscript(h2)
  });
}
function transform2(h2, node, ctx) {
  let parentSchema = ctx.schema, schema = parentSchema, name = node.tagName, attributes2 = {}, nodes2 = [], index2 = -1, key;
  parentSchema.space === "html" && name.toLowerCase() === "svg" && (schema = svg2, ctx.schema = schema);
  for (key in node.properties)
    node.properties && own13.call(node.properties, key) && addAttribute(attributes2, key, node.properties[key], ctx, name);
  if (ctx.vdom && (schema.space === "html" ? name = name.toUpperCase() : schema.space && (attributes2.namespace = ns[schema.space])), ctx.prefix && (ctx.key++, attributes2.key = ctx.prefix + ctx.key), node.children)
    for (; ++index2 < node.children.length; ) {
      let value = node.children[index2];
      element2(value) ? nodes2.push(transform2(h2, value, ctx)) : text6(value) && nodes2.push(value.value);
    }
  return ctx.schema = parentSchema, nodes2.length > 0 ? h2.call(node, name, attributes2, nodes2) : h2.call(node, name, attributes2);
}
function addAttribute(props, prop, value, ctx, name) {
  let info = find(ctx.schema, prop), subprop;
  value == null || typeof value == "number" && Number.isNaN(value) || value === !1 && (ctx.vue || ctx.vdom || ctx.hyperscript) || !value && info.boolean && (ctx.vue || ctx.vdom || ctx.hyperscript) || (Array.isArray(value) && (value = info.commaSeparated ? stringify2(value) : stringify(value)), info.boolean && ctx.hyperscript && (value = ""), info.property === "style" && typeof value == "string" && (ctx.react || ctx.vue || ctx.vdom) && (value = parseStyle2(value, name)), ctx.vue ? info.property !== "style" && (subprop = "attrs") : info.mustUseProperty || (ctx.vdom ? info.property !== "style" && (subprop = "attributes") : ctx.hyperscript && (subprop = "attrs")), subprop ? props[subprop] = Object.assign(props[subprop] || {}, {
    [info.attribute]: value
  }) : info.space && ctx.react ? props[toReact2[info.property] || info.property] = value : props[info.attribute] = value);
}
function react(h2) {
  let node = h2("div", {});
  return Boolean(
    node && ("_owner" in node || "_store" in node) && (node.key === void 0 || node.key === null)
  );
}
function hyperscript(h2) {
  return "context" in h2 && "cleanup" in h2;
}
function vdom(h2) {
  return h2("div", {}).type === "VirtualNode";
}
function vue(h2) {
  let node = h2("div", {});
  return Boolean(node && node.context && node.context._isVue);
}
function parseStyle2(value, tagName) {
  let result = {};
  try {
    (0, import_style_to_object2.default)(value, (name, value2) => {
      name.slice(0, 4) === "-ms-" && (name = "ms-" + name.slice(4)), result[name.replace(
        /-([a-z])/g,
        (_, $1) => $1.toUpperCase()
      )] = value2;
    });
  } catch (error) {
    throw error.message = tagName + "[style]" + error.message.slice(9), error;
  }
  return result;
}

// node_modules/.pnpm/zwitch@2.0.2/node_modules/zwitch/index.js
var own14 = {}.hasOwnProperty;
function zwitch(key, options) {
  var settings = options || {};
  function one4(value) {
    var fn = one4.invalid, handlers2 = one4.handlers;
    if (value && own14.call(value, key) && (fn = own14.call(handlers2, value[key]) ? handlers2[value[key]] : one4.unknown), fn)
      return fn.apply(this, arguments);
  }
  return one4.handlers = settings.handlers || {}, one4.invalid = settings.invalid, one4.unknown = settings.unknown, one4;
}

// node_modules/.pnpm/hast-util-to-parse5@7.0.0/node_modules/hast-util-to-parse5/lib/index.js
var own15 = {}.hasOwnProperty, one3 = zwitch("type", { handlers: { root: root4, element: element3, text: text7, comment: comment2, doctype: doctype2 } });
function toParse5(tree, space) {
  return one3(tree, space === "svg" ? svg2 : html3);
}
function root4(node, schema) {
  var p5 = {
    nodeName: "#document",
    mode: (node.data || {}).quirksMode ? "quirks" : "no-quirks",
    childNodes: []
  };
  return p5.childNodes = all3(node.children, p5, schema), patch(node, p5);
}
function fragment(node, schema) {
  var p5 = { nodeName: "#document-fragment", childNodes: [] };
  return p5.childNodes = all3(node.children, p5, schema), patch(node, p5);
}
function doctype2(node) {
  return patch(node, {
    nodeName: "#documentType",
    name: "html",
    publicId: "",
    systemId: "",
    parentNode: void 0
  });
}
function text7(node) {
  return patch(node, {
    nodeName: "#text",
    value: node.value,
    parentNode: void 0
  });
}
function comment2(node) {
  return patch(node, {
    nodeName: "#comment",
    data: node.value,
    parentNode: void 0
  });
}
function element3(node, schema) {
  var space = schema.space;
  return toH(h2, Object.assign({}, node, { children: [] }), { space });
  function h2(name, attrs) {
    var values = [], info, value, key, index2, p5;
    for (key in attrs)
      !own15.call(attrs, key) || attrs[key] === !1 || (info = find(schema, key), !(info.boolean && !attrs[key]) && (value = { name: key, value: attrs[key] === !0 ? "" : String(attrs[key]) }, info.space && info.space !== "html" && info.space !== "svg" && (index2 = key.indexOf(":"), index2 < 0 ? value.prefix = "" : (value.name = key.slice(index2 + 1), value.prefix = key.slice(0, index2)), value.namespace = webNamespaces[info.space]), values.push(value)));
    return schema.space === "html" && node.tagName === "svg" && (schema = svg2), p5 = patch(node, {
      nodeName: name,
      tagName: name,
      attrs: values,
      namespaceURI: webNamespaces[schema.space],
      childNodes: [],
      parentNode: void 0
    }), p5.childNodes = all3(node.children, p5, schema), name === "template" && (p5.content = fragment(node.content, schema)), p5;
  }
}
function all3(children, p5, schema) {
  var index2 = -1, result = [], child;
  if (children)
    for (; ++index2 < children.length; )
      child = one3(children[index2], schema), child.parentNode = p5, result.push(child);
  return result;
}
function patch(node, p5) {
  var position3 = node.position;
  return position3 && position3.start && position3.end && (p5.sourceCodeLocation = {
    startLine: position3.start.line,
    startCol: position3.start.column,
    startOffset: position3.start.offset,
    endLine: position3.end.line,
    endCol: position3.end.column,
    endOffset: position3.end.offset
  }), p5;
}

// node_modules/.pnpm/html-void-elements@2.0.1/node_modules/html-void-elements/index.js
var htmlVoidElements = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "menuitem",
  "meta",
  "nextid",
  "param",
  "source",
  "track",
  "wbr"
];

// node_modules/.pnpm/hast-util-raw@7.2.2/node_modules/hast-util-raw/lib/index.js
var inTemplateMode = "IN_TEMPLATE_MODE", dataState = "DATA_STATE", characterToken = "CHARACTER_TOKEN", startTagToken = "START_TAG_TOKEN", endTagToken = "END_TAG_TOKEN", commentToken = "COMMENT_TOKEN", doctypeToken = "DOCTYPE_TOKEN", parseOptions = { sourceCodeLocationInfo: !0, scriptingEnabled: !1 }, raw = function(tree, file, options) {
  let index2 = -1, parser = new import_parser.default(parseOptions), one4 = zwitch("type", {
    handlers: { root: root5, element: element4, text: text8, comment: comment3, doctype: doctype3, raw: handleRaw },
    unknown: unknown2
  }), stitches, tokenizer, preprocessor, posTracker, locationTracker;
  if (isOptions(file) && (options = file, file = void 0), options && options.passThrough)
    for (; ++index2 < options.passThrough.length; )
      one4.handlers[options.passThrough[index2]] = stitch;
  let result = fromParse5(
    documentMode(tree) ? document4() : fragment2(),
    file
  );
  if (stitches && visit(result, "comment", (node, index3, parent) => {
    let stitch2 = node;
    if (stitch2.value.stitch && parent !== null && index3 !== null)
      return parent.children[index3] = stitch2.value.stitch, index3;
  }), tree.type !== "root" && result.type === "root" && result.children.length === 1)
    return result.children[0];
  return result;
  function fragment2() {
    let context = {
      nodeName: "template",
      tagName: "template",
      attrs: [],
      namespaceURI: webNamespaces.html,
      childNodes: []
    }, mock = {
      nodeName: "documentmock",
      tagName: "documentmock",
      attrs: [],
      namespaceURI: webNamespaces.html,
      childNodes: []
    }, doc = { nodeName: "#document-fragment", childNodes: [] };
    if (parser._bootstrap(mock, context), parser._pushTmplInsertionMode(inTemplateMode), parser._initTokenizerForFragmentParsing(), parser._insertFakeRootElement(), parser._resetInsertionMode(), parser._findFormInFragmentContext(), tokenizer = parser.tokenizer, !tokenizer)
      throw new Error("Expected `tokenizer`");
    return preprocessor = tokenizer.preprocessor, locationTracker = tokenizer.__mixins[0], posTracker = locationTracker.posTracker, one4(tree), resetTokenizer(), parser._adoptNodes(mock.childNodes[0], doc), doc;
  }
  function document4() {
    let doc = parser.treeAdapter.createDocument();
    if (parser._bootstrap(doc, void 0), tokenizer = parser.tokenizer, !tokenizer)
      throw new Error("Expected `tokenizer`");
    return preprocessor = tokenizer.preprocessor, locationTracker = tokenizer.__mixins[0], posTracker = locationTracker.posTracker, one4(tree), resetTokenizer(), doc;
  }
  function all4(nodes2) {
    let index3 = -1;
    if (nodes2)
      for (; ++index3 < nodes2.length; )
        one4(nodes2[index3]);
  }
  function root5(node) {
    all4(node.children);
  }
  function element4(node) {
    resetTokenizer(), parser._processToken(startTag(node), webNamespaces.html), all4(node.children), htmlVoidElements.includes(node.tagName) || (resetTokenizer(), parser._processToken(endTag(node)));
  }
  function text8(node) {
    resetTokenizer(), parser._processToken({
      type: characterToken,
      chars: node.value,
      location: createParse5Location(node)
    });
  }
  function doctype3(node) {
    resetTokenizer(), parser._processToken({
      type: doctypeToken,
      name: "html",
      forceQuirks: !1,
      publicId: "",
      systemId: "",
      location: createParse5Location(node)
    });
  }
  function comment3(node) {
    resetTokenizer(), parser._processToken({
      type: commentToken,
      data: node.value,
      location: createParse5Location(node)
    });
  }
  function handleRaw(node) {
    let start = pointStart(node), line = start.line || 1, column = start.column || 1, offset = start.offset || 0;
    if (!preprocessor)
      throw new Error("Expected `preprocessor`");
    if (!tokenizer)
      throw new Error("Expected `tokenizer`");
    if (!posTracker)
      throw new Error("Expected `posTracker`");
    if (!locationTracker)
      throw new Error("Expected `locationTracker`");
    preprocessor.html = void 0, preprocessor.pos = -1, preprocessor.lastGapPos = -1, preprocessor.lastCharPos = -1, preprocessor.gapStack = [], preprocessor.skipNextNewLine = !1, preprocessor.lastChunkWritten = !1, preprocessor.endOfChunkHit = !1, posTracker.isEol = !1, posTracker.lineStartPos = -column + 1, posTracker.droppedBufferSize = offset, posTracker.offset = 0, posTracker.col = 1, posTracker.line = line, locationTracker.currentAttrLocation = void 0, locationTracker.ctLoc = createParse5Location(node), tokenizer.write(node.value), parser._runParsingLoop(null), (tokenizer.state === "NAMED_CHARACTER_REFERENCE_STATE" || tokenizer.state === "NUMERIC_CHARACTER_REFERENCE_END_STATE") && (preprocessor.lastChunkWritten = !0, tokenizer[tokenizer.state](tokenizer._consume()));
  }
  function stitch(node) {
    stitches = !0;
    let clone;
    "children" in node ? clone = {
      ...node,
      children: raw(
        { type: "root", children: node.children },
        file,
        options
      ).children
    } : clone = { ...node }, comment3({ type: "comment", value: { stitch: clone } });
  }
  function resetTokenizer() {
    if (!tokenizer)
      throw new Error("Expected `tokenizer`");
    if (!posTracker)
      throw new Error("Expected `posTracker`");
    let token = tokenizer.currentCharacterToken;
    token && (token.location.endLine = posTracker.line, token.location.endCol = posTracker.col + 1, token.location.endOffset = posTracker.offset + 1, parser._processToken(token)), tokenizer.tokenQueue = [], tokenizer.state = dataState, tokenizer.returnState = "", tokenizer.charRefCode = -1, tokenizer.tempBuff = [], tokenizer.lastStartTagName = "", tokenizer.consumedAfterSnapshot = -1, tokenizer.active = !1, tokenizer.currentCharacterToken = void 0, tokenizer.currentToken = void 0, tokenizer.currentAttr = void 0;
  }
};
function startTag(node) {
  let location2 = Object.assign(createParse5Location(node));
  return location2.startTag = Object.assign({}, location2), {
    type: startTagToken,
    tagName: node.tagName,
    selfClosing: !1,
    attrs: attributes(node),
    location: location2
  };
}
function attributes(node) {
  return toParse5({
    tagName: node.tagName,
    type: "element",
    properties: node.properties,
    children: []
  }).attrs;
}
function endTag(node) {
  let location2 = Object.assign(createParse5Location(node));
  return location2.startTag = Object.assign({}, location2), {
    type: endTagToken,
    tagName: node.tagName,
    attrs: [],
    location: location2
  };
}
function unknown2(node) {
  throw new Error("Cannot compile `" + node.type + "` node");
}
function documentMode(node) {
  let head = node.type === "root" ? node.children[0] : node;
  return Boolean(
    head && (head.type === "doctype" || head.type === "element" && head.tagName === "html")
  );
}
function createParse5Location(node) {
  let start = pointStart(node), end = pointEnd(node);
  return {
    startLine: start.line,
    startCol: start.column,
    startOffset: start.offset,
    endLine: end.line,
    endCol: end.column,
    endOffset: end.offset
  };
}
function isOptions(value) {
  return Boolean(value && !("message" in value && "messages" in value));
}

// node_modules/.pnpm/rehype-raw@6.1.1/node_modules/rehype-raw/index.js
function rehypeRaw(options = {}) {
  return (tree, file) => raw(tree, file, options);
}

// node_modules/.pnpm/gemoji@7.1.0/node_modules/gemoji/index.js
var nameToEmoji = {
  100: "\u{1F4AF}",
  1234: "\u{1F522}",
  grinning: "\u{1F600}",
  smiley: "\u{1F603}",
  smile: "\u{1F604}",
  grin: "\u{1F601}",
  laughing: "\u{1F606}",
  satisfied: "\u{1F606}",
  sweat_smile: "\u{1F605}",
  rofl: "\u{1F923}",
  joy: "\u{1F602}",
  slightly_smiling_face: "\u{1F642}",
  upside_down_face: "\u{1F643}",
  wink: "\u{1F609}",
  blush: "\u{1F60A}",
  innocent: "\u{1F607}",
  smiling_face_with_three_hearts: "\u{1F970}",
  heart_eyes: "\u{1F60D}",
  star_struck: "\u{1F929}",
  kissing_heart: "\u{1F618}",
  kissing: "\u{1F617}",
  relaxed: "\u263A\uFE0F",
  kissing_closed_eyes: "\u{1F61A}",
  kissing_smiling_eyes: "\u{1F619}",
  smiling_face_with_tear: "\u{1F972}",
  yum: "\u{1F60B}",
  stuck_out_tongue: "\u{1F61B}",
  stuck_out_tongue_winking_eye: "\u{1F61C}",
  zany_face: "\u{1F92A}",
  stuck_out_tongue_closed_eyes: "\u{1F61D}",
  money_mouth_face: "\u{1F911}",
  hugs: "\u{1F917}",
  hand_over_mouth: "\u{1F92D}",
  shushing_face: "\u{1F92B}",
  thinking: "\u{1F914}",
  zipper_mouth_face: "\u{1F910}",
  raised_eyebrow: "\u{1F928}",
  neutral_face: "\u{1F610}",
  expressionless: "\u{1F611}",
  no_mouth: "\u{1F636}",
  face_in_clouds: "\u{1F636}\u200D\u{1F32B}\uFE0F",
  smirk: "\u{1F60F}",
  unamused: "\u{1F612}",
  roll_eyes: "\u{1F644}",
  grimacing: "\u{1F62C}",
  face_exhaling: "\u{1F62E}\u200D\u{1F4A8}",
  lying_face: "\u{1F925}",
  relieved: "\u{1F60C}",
  pensive: "\u{1F614}",
  sleepy: "\u{1F62A}",
  drooling_face: "\u{1F924}",
  sleeping: "\u{1F634}",
  mask: "\u{1F637}",
  face_with_thermometer: "\u{1F912}",
  face_with_head_bandage: "\u{1F915}",
  nauseated_face: "\u{1F922}",
  vomiting_face: "\u{1F92E}",
  sneezing_face: "\u{1F927}",
  hot_face: "\u{1F975}",
  cold_face: "\u{1F976}",
  woozy_face: "\u{1F974}",
  dizzy_face: "\u{1F635}",
  face_with_spiral_eyes: "\u{1F635}\u200D\u{1F4AB}",
  exploding_head: "\u{1F92F}",
  cowboy_hat_face: "\u{1F920}",
  partying_face: "\u{1F973}",
  disguised_face: "\u{1F978}",
  sunglasses: "\u{1F60E}",
  nerd_face: "\u{1F913}",
  monocle_face: "\u{1F9D0}",
  confused: "\u{1F615}",
  worried: "\u{1F61F}",
  slightly_frowning_face: "\u{1F641}",
  frowning_face: "\u2639\uFE0F",
  open_mouth: "\u{1F62E}",
  hushed: "\u{1F62F}",
  astonished: "\u{1F632}",
  flushed: "\u{1F633}",
  pleading_face: "\u{1F97A}",
  frowning: "\u{1F626}",
  anguished: "\u{1F627}",
  fearful: "\u{1F628}",
  cold_sweat: "\u{1F630}",
  disappointed_relieved: "\u{1F625}",
  cry: "\u{1F622}",
  sob: "\u{1F62D}",
  scream: "\u{1F631}",
  confounded: "\u{1F616}",
  persevere: "\u{1F623}",
  disappointed: "\u{1F61E}",
  sweat: "\u{1F613}",
  weary: "\u{1F629}",
  tired_face: "\u{1F62B}",
  yawning_face: "\u{1F971}",
  triumph: "\u{1F624}",
  rage: "\u{1F621}",
  pout: "\u{1F621}",
  angry: "\u{1F620}",
  cursing_face: "\u{1F92C}",
  smiling_imp: "\u{1F608}",
  imp: "\u{1F47F}",
  skull: "\u{1F480}",
  skull_and_crossbones: "\u2620\uFE0F",
  hankey: "\u{1F4A9}",
  poop: "\u{1F4A9}",
  shit: "\u{1F4A9}",
  clown_face: "\u{1F921}",
  japanese_ogre: "\u{1F479}",
  japanese_goblin: "\u{1F47A}",
  ghost: "\u{1F47B}",
  alien: "\u{1F47D}",
  space_invader: "\u{1F47E}",
  robot: "\u{1F916}",
  smiley_cat: "\u{1F63A}",
  smile_cat: "\u{1F638}",
  joy_cat: "\u{1F639}",
  heart_eyes_cat: "\u{1F63B}",
  smirk_cat: "\u{1F63C}",
  kissing_cat: "\u{1F63D}",
  scream_cat: "\u{1F640}",
  crying_cat_face: "\u{1F63F}",
  pouting_cat: "\u{1F63E}",
  see_no_evil: "\u{1F648}",
  hear_no_evil: "\u{1F649}",
  speak_no_evil: "\u{1F64A}",
  kiss: "\u{1F48B}",
  love_letter: "\u{1F48C}",
  cupid: "\u{1F498}",
  gift_heart: "\u{1F49D}",
  sparkling_heart: "\u{1F496}",
  heartpulse: "\u{1F497}",
  heartbeat: "\u{1F493}",
  revolving_hearts: "\u{1F49E}",
  two_hearts: "\u{1F495}",
  heart_decoration: "\u{1F49F}",
  heavy_heart_exclamation: "\u2763\uFE0F",
  broken_heart: "\u{1F494}",
  heart_on_fire: "\u2764\uFE0F\u200D\u{1F525}",
  mending_heart: "\u2764\uFE0F\u200D\u{1FA79}",
  heart: "\u2764\uFE0F",
  orange_heart: "\u{1F9E1}",
  yellow_heart: "\u{1F49B}",
  green_heart: "\u{1F49A}",
  blue_heart: "\u{1F499}",
  purple_heart: "\u{1F49C}",
  brown_heart: "\u{1F90E}",
  black_heart: "\u{1F5A4}",
  white_heart: "\u{1F90D}",
  anger: "\u{1F4A2}",
  boom: "\u{1F4A5}",
  collision: "\u{1F4A5}",
  dizzy: "\u{1F4AB}",
  sweat_drops: "\u{1F4A6}",
  dash: "\u{1F4A8}",
  hole: "\u{1F573}\uFE0F",
  bomb: "\u{1F4A3}",
  speech_balloon: "\u{1F4AC}",
  eye_speech_bubble: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F",
  left_speech_bubble: "\u{1F5E8}\uFE0F",
  right_anger_bubble: "\u{1F5EF}\uFE0F",
  thought_balloon: "\u{1F4AD}",
  zzz: "\u{1F4A4}",
  wave: "\u{1F44B}",
  raised_back_of_hand: "\u{1F91A}",
  raised_hand_with_fingers_splayed: "\u{1F590}\uFE0F",
  hand: "\u270B",
  raised_hand: "\u270B",
  vulcan_salute: "\u{1F596}",
  ok_hand: "\u{1F44C}",
  pinched_fingers: "\u{1F90C}",
  pinching_hand: "\u{1F90F}",
  v: "\u270C\uFE0F",
  crossed_fingers: "\u{1F91E}",
  love_you_gesture: "\u{1F91F}",
  metal: "\u{1F918}",
  call_me_hand: "\u{1F919}",
  point_left: "\u{1F448}",
  point_right: "\u{1F449}",
  point_up_2: "\u{1F446}",
  middle_finger: "\u{1F595}",
  fu: "\u{1F595}",
  point_down: "\u{1F447}",
  point_up: "\u261D\uFE0F",
  "+1": "\u{1F44D}",
  thumbsup: "\u{1F44D}",
  "-1": "\u{1F44E}",
  thumbsdown: "\u{1F44E}",
  fist_raised: "\u270A",
  fist: "\u270A",
  fist_oncoming: "\u{1F44A}",
  facepunch: "\u{1F44A}",
  punch: "\u{1F44A}",
  fist_left: "\u{1F91B}",
  fist_right: "\u{1F91C}",
  clap: "\u{1F44F}",
  raised_hands: "\u{1F64C}",
  open_hands: "\u{1F450}",
  palms_up_together: "\u{1F932}",
  handshake: "\u{1F91D}",
  pray: "\u{1F64F}",
  writing_hand: "\u270D\uFE0F",
  nail_care: "\u{1F485}",
  selfie: "\u{1F933}",
  muscle: "\u{1F4AA}",
  mechanical_arm: "\u{1F9BE}",
  mechanical_leg: "\u{1F9BF}",
  leg: "\u{1F9B5}",
  foot: "\u{1F9B6}",
  ear: "\u{1F442}",
  ear_with_hearing_aid: "\u{1F9BB}",
  nose: "\u{1F443}",
  brain: "\u{1F9E0}",
  anatomical_heart: "\u{1FAC0}",
  lungs: "\u{1FAC1}",
  tooth: "\u{1F9B7}",
  bone: "\u{1F9B4}",
  eyes: "\u{1F440}",
  eye: "\u{1F441}\uFE0F",
  tongue: "\u{1F445}",
  lips: "\u{1F444}",
  baby: "\u{1F476}",
  child: "\u{1F9D2}",
  boy: "\u{1F466}",
  girl: "\u{1F467}",
  adult: "\u{1F9D1}",
  blond_haired_person: "\u{1F471}",
  man: "\u{1F468}",
  bearded_person: "\u{1F9D4}",
  man_beard: "\u{1F9D4}\u200D\u2642\uFE0F",
  woman_beard: "\u{1F9D4}\u200D\u2640\uFE0F",
  red_haired_man: "\u{1F468}\u200D\u{1F9B0}",
  curly_haired_man: "\u{1F468}\u200D\u{1F9B1}",
  white_haired_man: "\u{1F468}\u200D\u{1F9B3}",
  bald_man: "\u{1F468}\u200D\u{1F9B2}",
  woman: "\u{1F469}",
  red_haired_woman: "\u{1F469}\u200D\u{1F9B0}",
  person_red_hair: "\u{1F9D1}\u200D\u{1F9B0}",
  curly_haired_woman: "\u{1F469}\u200D\u{1F9B1}",
  person_curly_hair: "\u{1F9D1}\u200D\u{1F9B1}",
  white_haired_woman: "\u{1F469}\u200D\u{1F9B3}",
  person_white_hair: "\u{1F9D1}\u200D\u{1F9B3}",
  bald_woman: "\u{1F469}\u200D\u{1F9B2}",
  person_bald: "\u{1F9D1}\u200D\u{1F9B2}",
  blond_haired_woman: "\u{1F471}\u200D\u2640\uFE0F",
  blonde_woman: "\u{1F471}\u200D\u2640\uFE0F",
  blond_haired_man: "\u{1F471}\u200D\u2642\uFE0F",
  older_adult: "\u{1F9D3}",
  older_man: "\u{1F474}",
  older_woman: "\u{1F475}",
  frowning_person: "\u{1F64D}",
  frowning_man: "\u{1F64D}\u200D\u2642\uFE0F",
  frowning_woman: "\u{1F64D}\u200D\u2640\uFE0F",
  pouting_face: "\u{1F64E}",
  pouting_man: "\u{1F64E}\u200D\u2642\uFE0F",
  pouting_woman: "\u{1F64E}\u200D\u2640\uFE0F",
  no_good: "\u{1F645}",
  no_good_man: "\u{1F645}\u200D\u2642\uFE0F",
  ng_man: "\u{1F645}\u200D\u2642\uFE0F",
  no_good_woman: "\u{1F645}\u200D\u2640\uFE0F",
  ng_woman: "\u{1F645}\u200D\u2640\uFE0F",
  ok_person: "\u{1F646}",
  ok_man: "\u{1F646}\u200D\u2642\uFE0F",
  ok_woman: "\u{1F646}\u200D\u2640\uFE0F",
  tipping_hand_person: "\u{1F481}",
  information_desk_person: "\u{1F481}",
  tipping_hand_man: "\u{1F481}\u200D\u2642\uFE0F",
  sassy_man: "\u{1F481}\u200D\u2642\uFE0F",
  tipping_hand_woman: "\u{1F481}\u200D\u2640\uFE0F",
  sassy_woman: "\u{1F481}\u200D\u2640\uFE0F",
  raising_hand: "\u{1F64B}",
  raising_hand_man: "\u{1F64B}\u200D\u2642\uFE0F",
  raising_hand_woman: "\u{1F64B}\u200D\u2640\uFE0F",
  deaf_person: "\u{1F9CF}",
  deaf_man: "\u{1F9CF}\u200D\u2642\uFE0F",
  deaf_woman: "\u{1F9CF}\u200D\u2640\uFE0F",
  bow: "\u{1F647}",
  bowing_man: "\u{1F647}\u200D\u2642\uFE0F",
  bowing_woman: "\u{1F647}\u200D\u2640\uFE0F",
  facepalm: "\u{1F926}",
  man_facepalming: "\u{1F926}\u200D\u2642\uFE0F",
  woman_facepalming: "\u{1F926}\u200D\u2640\uFE0F",
  shrug: "\u{1F937}",
  man_shrugging: "\u{1F937}\u200D\u2642\uFE0F",
  woman_shrugging: "\u{1F937}\u200D\u2640\uFE0F",
  health_worker: "\u{1F9D1}\u200D\u2695\uFE0F",
  man_health_worker: "\u{1F468}\u200D\u2695\uFE0F",
  woman_health_worker: "\u{1F469}\u200D\u2695\uFE0F",
  student: "\u{1F9D1}\u200D\u{1F393}",
  man_student: "\u{1F468}\u200D\u{1F393}",
  woman_student: "\u{1F469}\u200D\u{1F393}",
  teacher: "\u{1F9D1}\u200D\u{1F3EB}",
  man_teacher: "\u{1F468}\u200D\u{1F3EB}",
  woman_teacher: "\u{1F469}\u200D\u{1F3EB}",
  judge: "\u{1F9D1}\u200D\u2696\uFE0F",
  man_judge: "\u{1F468}\u200D\u2696\uFE0F",
  woman_judge: "\u{1F469}\u200D\u2696\uFE0F",
  farmer: "\u{1F9D1}\u200D\u{1F33E}",
  man_farmer: "\u{1F468}\u200D\u{1F33E}",
  woman_farmer: "\u{1F469}\u200D\u{1F33E}",
  cook: "\u{1F9D1}\u200D\u{1F373}",
  man_cook: "\u{1F468}\u200D\u{1F373}",
  woman_cook: "\u{1F469}\u200D\u{1F373}",
  mechanic: "\u{1F9D1}\u200D\u{1F527}",
  man_mechanic: "\u{1F468}\u200D\u{1F527}",
  woman_mechanic: "\u{1F469}\u200D\u{1F527}",
  factory_worker: "\u{1F9D1}\u200D\u{1F3ED}",
  man_factory_worker: "\u{1F468}\u200D\u{1F3ED}",
  woman_factory_worker: "\u{1F469}\u200D\u{1F3ED}",
  office_worker: "\u{1F9D1}\u200D\u{1F4BC}",
  man_office_worker: "\u{1F468}\u200D\u{1F4BC}",
  woman_office_worker: "\u{1F469}\u200D\u{1F4BC}",
  scientist: "\u{1F9D1}\u200D\u{1F52C}",
  man_scientist: "\u{1F468}\u200D\u{1F52C}",
  woman_scientist: "\u{1F469}\u200D\u{1F52C}",
  technologist: "\u{1F9D1}\u200D\u{1F4BB}",
  man_technologist: "\u{1F468}\u200D\u{1F4BB}",
  woman_technologist: "\u{1F469}\u200D\u{1F4BB}",
  singer: "\u{1F9D1}\u200D\u{1F3A4}",
  man_singer: "\u{1F468}\u200D\u{1F3A4}",
  woman_singer: "\u{1F469}\u200D\u{1F3A4}",
  artist: "\u{1F9D1}\u200D\u{1F3A8}",
  man_artist: "\u{1F468}\u200D\u{1F3A8}",
  woman_artist: "\u{1F469}\u200D\u{1F3A8}",
  pilot: "\u{1F9D1}\u200D\u2708\uFE0F",
  man_pilot: "\u{1F468}\u200D\u2708\uFE0F",
  woman_pilot: "\u{1F469}\u200D\u2708\uFE0F",
  astronaut: "\u{1F9D1}\u200D\u{1F680}",
  man_astronaut: "\u{1F468}\u200D\u{1F680}",
  woman_astronaut: "\u{1F469}\u200D\u{1F680}",
  firefighter: "\u{1F9D1}\u200D\u{1F692}",
  man_firefighter: "\u{1F468}\u200D\u{1F692}",
  woman_firefighter: "\u{1F469}\u200D\u{1F692}",
  police_officer: "\u{1F46E}",
  cop: "\u{1F46E}",
  policeman: "\u{1F46E}\u200D\u2642\uFE0F",
  policewoman: "\u{1F46E}\u200D\u2640\uFE0F",
  detective: "\u{1F575}\uFE0F",
  male_detective: "\u{1F575}\uFE0F\u200D\u2642\uFE0F",
  female_detective: "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
  guard: "\u{1F482}",
  guardsman: "\u{1F482}\u200D\u2642\uFE0F",
  guardswoman: "\u{1F482}\u200D\u2640\uFE0F",
  ninja: "\u{1F977}",
  construction_worker: "\u{1F477}",
  construction_worker_man: "\u{1F477}\u200D\u2642\uFE0F",
  construction_worker_woman: "\u{1F477}\u200D\u2640\uFE0F",
  prince: "\u{1F934}",
  princess: "\u{1F478}",
  person_with_turban: "\u{1F473}",
  man_with_turban: "\u{1F473}\u200D\u2642\uFE0F",
  woman_with_turban: "\u{1F473}\u200D\u2640\uFE0F",
  man_with_gua_pi_mao: "\u{1F472}",
  woman_with_headscarf: "\u{1F9D5}",
  person_in_tuxedo: "\u{1F935}",
  man_in_tuxedo: "\u{1F935}\u200D\u2642\uFE0F",
  woman_in_tuxedo: "\u{1F935}\u200D\u2640\uFE0F",
  person_with_veil: "\u{1F470}",
  man_with_veil: "\u{1F470}\u200D\u2642\uFE0F",
  woman_with_veil: "\u{1F470}\u200D\u2640\uFE0F",
  bride_with_veil: "\u{1F470}\u200D\u2640\uFE0F",
  pregnant_woman: "\u{1F930}",
  breast_feeding: "\u{1F931}",
  woman_feeding_baby: "\u{1F469}\u200D\u{1F37C}",
  man_feeding_baby: "\u{1F468}\u200D\u{1F37C}",
  person_feeding_baby: "\u{1F9D1}\u200D\u{1F37C}",
  angel: "\u{1F47C}",
  santa: "\u{1F385}",
  mrs_claus: "\u{1F936}",
  mx_claus: "\u{1F9D1}\u200D\u{1F384}",
  superhero: "\u{1F9B8}",
  superhero_man: "\u{1F9B8}\u200D\u2642\uFE0F",
  superhero_woman: "\u{1F9B8}\u200D\u2640\uFE0F",
  supervillain: "\u{1F9B9}",
  supervillain_man: "\u{1F9B9}\u200D\u2642\uFE0F",
  supervillain_woman: "\u{1F9B9}\u200D\u2640\uFE0F",
  mage: "\u{1F9D9}",
  mage_man: "\u{1F9D9}\u200D\u2642\uFE0F",
  mage_woman: "\u{1F9D9}\u200D\u2640\uFE0F",
  fairy: "\u{1F9DA}",
  fairy_man: "\u{1F9DA}\u200D\u2642\uFE0F",
  fairy_woman: "\u{1F9DA}\u200D\u2640\uFE0F",
  vampire: "\u{1F9DB}",
  vampire_man: "\u{1F9DB}\u200D\u2642\uFE0F",
  vampire_woman: "\u{1F9DB}\u200D\u2640\uFE0F",
  merperson: "\u{1F9DC}",
  merman: "\u{1F9DC}\u200D\u2642\uFE0F",
  mermaid: "\u{1F9DC}\u200D\u2640\uFE0F",
  elf: "\u{1F9DD}",
  elf_man: "\u{1F9DD}\u200D\u2642\uFE0F",
  elf_woman: "\u{1F9DD}\u200D\u2640\uFE0F",
  genie: "\u{1F9DE}",
  genie_man: "\u{1F9DE}\u200D\u2642\uFE0F",
  genie_woman: "\u{1F9DE}\u200D\u2640\uFE0F",
  zombie: "\u{1F9DF}",
  zombie_man: "\u{1F9DF}\u200D\u2642\uFE0F",
  zombie_woman: "\u{1F9DF}\u200D\u2640\uFE0F",
  massage: "\u{1F486}",
  massage_man: "\u{1F486}\u200D\u2642\uFE0F",
  massage_woman: "\u{1F486}\u200D\u2640\uFE0F",
  haircut: "\u{1F487}",
  haircut_man: "\u{1F487}\u200D\u2642\uFE0F",
  haircut_woman: "\u{1F487}\u200D\u2640\uFE0F",
  walking: "\u{1F6B6}",
  walking_man: "\u{1F6B6}\u200D\u2642\uFE0F",
  walking_woman: "\u{1F6B6}\u200D\u2640\uFE0F",
  standing_person: "\u{1F9CD}",
  standing_man: "\u{1F9CD}\u200D\u2642\uFE0F",
  standing_woman: "\u{1F9CD}\u200D\u2640\uFE0F",
  kneeling_person: "\u{1F9CE}",
  kneeling_man: "\u{1F9CE}\u200D\u2642\uFE0F",
  kneeling_woman: "\u{1F9CE}\u200D\u2640\uFE0F",
  person_with_probing_cane: "\u{1F9D1}\u200D\u{1F9AF}",
  man_with_probing_cane: "\u{1F468}\u200D\u{1F9AF}",
  woman_with_probing_cane: "\u{1F469}\u200D\u{1F9AF}",
  person_in_motorized_wheelchair: "\u{1F9D1}\u200D\u{1F9BC}",
  man_in_motorized_wheelchair: "\u{1F468}\u200D\u{1F9BC}",
  woman_in_motorized_wheelchair: "\u{1F469}\u200D\u{1F9BC}",
  person_in_manual_wheelchair: "\u{1F9D1}\u200D\u{1F9BD}",
  man_in_manual_wheelchair: "\u{1F468}\u200D\u{1F9BD}",
  woman_in_manual_wheelchair: "\u{1F469}\u200D\u{1F9BD}",
  runner: "\u{1F3C3}",
  running: "\u{1F3C3}",
  running_man: "\u{1F3C3}\u200D\u2642\uFE0F",
  running_woman: "\u{1F3C3}\u200D\u2640\uFE0F",
  woman_dancing: "\u{1F483}",
  dancer: "\u{1F483}",
  man_dancing: "\u{1F57A}",
  business_suit_levitating: "\u{1F574}\uFE0F",
  dancers: "\u{1F46F}",
  dancing_men: "\u{1F46F}\u200D\u2642\uFE0F",
  dancing_women: "\u{1F46F}\u200D\u2640\uFE0F",
  sauna_person: "\u{1F9D6}",
  sauna_man: "\u{1F9D6}\u200D\u2642\uFE0F",
  sauna_woman: "\u{1F9D6}\u200D\u2640\uFE0F",
  climbing: "\u{1F9D7}",
  climbing_man: "\u{1F9D7}\u200D\u2642\uFE0F",
  climbing_woman: "\u{1F9D7}\u200D\u2640\uFE0F",
  person_fencing: "\u{1F93A}",
  horse_racing: "\u{1F3C7}",
  skier: "\u26F7\uFE0F",
  snowboarder: "\u{1F3C2}",
  golfing: "\u{1F3CC}\uFE0F",
  golfing_man: "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F",
  golfing_woman: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
  surfer: "\u{1F3C4}",
  surfing_man: "\u{1F3C4}\u200D\u2642\uFE0F",
  surfing_woman: "\u{1F3C4}\u200D\u2640\uFE0F",
  rowboat: "\u{1F6A3}",
  rowing_man: "\u{1F6A3}\u200D\u2642\uFE0F",
  rowing_woman: "\u{1F6A3}\u200D\u2640\uFE0F",
  swimmer: "\u{1F3CA}",
  swimming_man: "\u{1F3CA}\u200D\u2642\uFE0F",
  swimming_woman: "\u{1F3CA}\u200D\u2640\uFE0F",
  bouncing_ball_person: "\u26F9\uFE0F",
  bouncing_ball_man: "\u26F9\uFE0F\u200D\u2642\uFE0F",
  basketball_man: "\u26F9\uFE0F\u200D\u2642\uFE0F",
  bouncing_ball_woman: "\u26F9\uFE0F\u200D\u2640\uFE0F",
  basketball_woman: "\u26F9\uFE0F\u200D\u2640\uFE0F",
  weight_lifting: "\u{1F3CB}\uFE0F",
  weight_lifting_man: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
  weight_lifting_woman: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
  bicyclist: "\u{1F6B4}",
  biking_man: "\u{1F6B4}\u200D\u2642\uFE0F",
  biking_woman: "\u{1F6B4}\u200D\u2640\uFE0F",
  mountain_bicyclist: "\u{1F6B5}",
  mountain_biking_man: "\u{1F6B5}\u200D\u2642\uFE0F",
  mountain_biking_woman: "\u{1F6B5}\u200D\u2640\uFE0F",
  cartwheeling: "\u{1F938}",
  man_cartwheeling: "\u{1F938}\u200D\u2642\uFE0F",
  woman_cartwheeling: "\u{1F938}\u200D\u2640\uFE0F",
  wrestling: "\u{1F93C}",
  men_wrestling: "\u{1F93C}\u200D\u2642\uFE0F",
  women_wrestling: "\u{1F93C}\u200D\u2640\uFE0F",
  water_polo: "\u{1F93D}",
  man_playing_water_polo: "\u{1F93D}\u200D\u2642\uFE0F",
  woman_playing_water_polo: "\u{1F93D}\u200D\u2640\uFE0F",
  handball_person: "\u{1F93E}",
  man_playing_handball: "\u{1F93E}\u200D\u2642\uFE0F",
  woman_playing_handball: "\u{1F93E}\u200D\u2640\uFE0F",
  juggling_person: "\u{1F939}",
  man_juggling: "\u{1F939}\u200D\u2642\uFE0F",
  woman_juggling: "\u{1F939}\u200D\u2640\uFE0F",
  lotus_position: "\u{1F9D8}",
  lotus_position_man: "\u{1F9D8}\u200D\u2642\uFE0F",
  lotus_position_woman: "\u{1F9D8}\u200D\u2640\uFE0F",
  bath: "\u{1F6C0}",
  sleeping_bed: "\u{1F6CC}",
  people_holding_hands: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
  two_women_holding_hands: "\u{1F46D}",
  couple: "\u{1F46B}",
  two_men_holding_hands: "\u{1F46C}",
  couplekiss: "\u{1F48F}",
  couplekiss_man_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
  couplekiss_man_man: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
  couplekiss_woman_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}",
  couple_with_heart: "\u{1F491}",
  couple_with_heart_woman_man: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}",
  couple_with_heart_man_man: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}",
  couple_with_heart_woman_woman: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
  family: "\u{1F46A}",
  family_man_woman_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}",
  family_man_woman_girl: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
  family_man_woman_girl_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
  family_man_woman_boy_boy: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
  family_man_woman_girl_girl: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
  family_man_man_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}",
  family_man_man_girl: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}",
  family_man_man_girl_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
  family_man_man_boy_boy: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
  family_man_man_girl_girl: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
  family_woman_woman_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}",
  family_woman_woman_girl: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}",
  family_woman_woman_girl_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
  family_woman_woman_boy_boy: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
  family_woman_woman_girl_girl: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
  family_man_boy: "\u{1F468}\u200D\u{1F466}",
  family_man_boy_boy: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
  family_man_girl: "\u{1F468}\u200D\u{1F467}",
  family_man_girl_boy: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
  family_man_girl_girl: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
  family_woman_boy: "\u{1F469}\u200D\u{1F466}",
  family_woman_boy_boy: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
  family_woman_girl: "\u{1F469}\u200D\u{1F467}",
  family_woman_girl_boy: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
  family_woman_girl_girl: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
  speaking_head: "\u{1F5E3}\uFE0F",
  bust_in_silhouette: "\u{1F464}",
  busts_in_silhouette: "\u{1F465}",
  people_hugging: "\u{1FAC2}",
  footprints: "\u{1F463}",
  monkey_face: "\u{1F435}",
  monkey: "\u{1F412}",
  gorilla: "\u{1F98D}",
  orangutan: "\u{1F9A7}",
  dog: "\u{1F436}",
  dog2: "\u{1F415}",
  guide_dog: "\u{1F9AE}",
  service_dog: "\u{1F415}\u200D\u{1F9BA}",
  poodle: "\u{1F429}",
  wolf: "\u{1F43A}",
  fox_face: "\u{1F98A}",
  raccoon: "\u{1F99D}",
  cat: "\u{1F431}",
  cat2: "\u{1F408}",
  black_cat: "\u{1F408}\u200D\u2B1B",
  lion: "\u{1F981}",
  tiger: "\u{1F42F}",
  tiger2: "\u{1F405}",
  leopard: "\u{1F406}",
  horse: "\u{1F434}",
  racehorse: "\u{1F40E}",
  unicorn: "\u{1F984}",
  zebra: "\u{1F993}",
  deer: "\u{1F98C}",
  bison: "\u{1F9AC}",
  cow: "\u{1F42E}",
  ox: "\u{1F402}",
  water_buffalo: "\u{1F403}",
  cow2: "\u{1F404}",
  pig: "\u{1F437}",
  pig2: "\u{1F416}",
  boar: "\u{1F417}",
  pig_nose: "\u{1F43D}",
  ram: "\u{1F40F}",
  sheep: "\u{1F411}",
  goat: "\u{1F410}",
  dromedary_camel: "\u{1F42A}",
  camel: "\u{1F42B}",
  llama: "\u{1F999}",
  giraffe: "\u{1F992}",
  elephant: "\u{1F418}",
  mammoth: "\u{1F9A3}",
  rhinoceros: "\u{1F98F}",
  hippopotamus: "\u{1F99B}",
  mouse: "\u{1F42D}",
  mouse2: "\u{1F401}",
  rat: "\u{1F400}",
  hamster: "\u{1F439}",
  rabbit: "\u{1F430}",
  rabbit2: "\u{1F407}",
  chipmunk: "\u{1F43F}\uFE0F",
  beaver: "\u{1F9AB}",
  hedgehog: "\u{1F994}",
  bat: "\u{1F987}",
  bear: "\u{1F43B}",
  polar_bear: "\u{1F43B}\u200D\u2744\uFE0F",
  koala: "\u{1F428}",
  panda_face: "\u{1F43C}",
  sloth: "\u{1F9A5}",
  otter: "\u{1F9A6}",
  skunk: "\u{1F9A8}",
  kangaroo: "\u{1F998}",
  badger: "\u{1F9A1}",
  feet: "\u{1F43E}",
  paw_prints: "\u{1F43E}",
  turkey: "\u{1F983}",
  chicken: "\u{1F414}",
  rooster: "\u{1F413}",
  hatching_chick: "\u{1F423}",
  baby_chick: "\u{1F424}",
  hatched_chick: "\u{1F425}",
  bird: "\u{1F426}",
  penguin: "\u{1F427}",
  dove: "\u{1F54A}\uFE0F",
  eagle: "\u{1F985}",
  duck: "\u{1F986}",
  swan: "\u{1F9A2}",
  owl: "\u{1F989}",
  dodo: "\u{1F9A4}",
  feather: "\u{1FAB6}",
  flamingo: "\u{1F9A9}",
  peacock: "\u{1F99A}",
  parrot: "\u{1F99C}",
  frog: "\u{1F438}",
  crocodile: "\u{1F40A}",
  turtle: "\u{1F422}",
  lizard: "\u{1F98E}",
  snake: "\u{1F40D}",
  dragon_face: "\u{1F432}",
  dragon: "\u{1F409}",
  sauropod: "\u{1F995}",
  "t-rex": "\u{1F996}",
  whale: "\u{1F433}",
  whale2: "\u{1F40B}",
  dolphin: "\u{1F42C}",
  flipper: "\u{1F42C}",
  seal: "\u{1F9AD}",
  fish: "\u{1F41F}",
  tropical_fish: "\u{1F420}",
  blowfish: "\u{1F421}",
  shark: "\u{1F988}",
  octopus: "\u{1F419}",
  shell: "\u{1F41A}",
  snail: "\u{1F40C}",
  butterfly: "\u{1F98B}",
  bug: "\u{1F41B}",
  ant: "\u{1F41C}",
  bee: "\u{1F41D}",
  honeybee: "\u{1F41D}",
  beetle: "\u{1FAB2}",
  lady_beetle: "\u{1F41E}",
  cricket: "\u{1F997}",
  cockroach: "\u{1FAB3}",
  spider: "\u{1F577}\uFE0F",
  spider_web: "\u{1F578}\uFE0F",
  scorpion: "\u{1F982}",
  mosquito: "\u{1F99F}",
  fly: "\u{1FAB0}",
  worm: "\u{1FAB1}",
  microbe: "\u{1F9A0}",
  bouquet: "\u{1F490}",
  cherry_blossom: "\u{1F338}",
  white_flower: "\u{1F4AE}",
  rosette: "\u{1F3F5}\uFE0F",
  rose: "\u{1F339}",
  wilted_flower: "\u{1F940}",
  hibiscus: "\u{1F33A}",
  sunflower: "\u{1F33B}",
  blossom: "\u{1F33C}",
  tulip: "\u{1F337}",
  seedling: "\u{1F331}",
  potted_plant: "\u{1FAB4}",
  evergreen_tree: "\u{1F332}",
  deciduous_tree: "\u{1F333}",
  palm_tree: "\u{1F334}",
  cactus: "\u{1F335}",
  ear_of_rice: "\u{1F33E}",
  herb: "\u{1F33F}",
  shamrock: "\u2618\uFE0F",
  four_leaf_clover: "\u{1F340}",
  maple_leaf: "\u{1F341}",
  fallen_leaf: "\u{1F342}",
  leaves: "\u{1F343}",
  grapes: "\u{1F347}",
  melon: "\u{1F348}",
  watermelon: "\u{1F349}",
  tangerine: "\u{1F34A}",
  orange: "\u{1F34A}",
  mandarin: "\u{1F34A}",
  lemon: "\u{1F34B}",
  banana: "\u{1F34C}",
  pineapple: "\u{1F34D}",
  mango: "\u{1F96D}",
  apple: "\u{1F34E}",
  green_apple: "\u{1F34F}",
  pear: "\u{1F350}",
  peach: "\u{1F351}",
  cherries: "\u{1F352}",
  strawberry: "\u{1F353}",
  blueberries: "\u{1FAD0}",
  kiwi_fruit: "\u{1F95D}",
  tomato: "\u{1F345}",
  olive: "\u{1FAD2}",
  coconut: "\u{1F965}",
  avocado: "\u{1F951}",
  eggplant: "\u{1F346}",
  potato: "\u{1F954}",
  carrot: "\u{1F955}",
  corn: "\u{1F33D}",
  hot_pepper: "\u{1F336}\uFE0F",
  bell_pepper: "\u{1FAD1}",
  cucumber: "\u{1F952}",
  leafy_green: "\u{1F96C}",
  broccoli: "\u{1F966}",
  garlic: "\u{1F9C4}",
  onion: "\u{1F9C5}",
  mushroom: "\u{1F344}",
  peanuts: "\u{1F95C}",
  chestnut: "\u{1F330}",
  bread: "\u{1F35E}",
  croissant: "\u{1F950}",
  baguette_bread: "\u{1F956}",
  flatbread: "\u{1FAD3}",
  pretzel: "\u{1F968}",
  bagel: "\u{1F96F}",
  pancakes: "\u{1F95E}",
  waffle: "\u{1F9C7}",
  cheese: "\u{1F9C0}",
  meat_on_bone: "\u{1F356}",
  poultry_leg: "\u{1F357}",
  cut_of_meat: "\u{1F969}",
  bacon: "\u{1F953}",
  hamburger: "\u{1F354}",
  fries: "\u{1F35F}",
  pizza: "\u{1F355}",
  hotdog: "\u{1F32D}",
  sandwich: "\u{1F96A}",
  taco: "\u{1F32E}",
  burrito: "\u{1F32F}",
  tamale: "\u{1FAD4}",
  stuffed_flatbread: "\u{1F959}",
  falafel: "\u{1F9C6}",
  egg: "\u{1F95A}",
  fried_egg: "\u{1F373}",
  shallow_pan_of_food: "\u{1F958}",
  stew: "\u{1F372}",
  fondue: "\u{1FAD5}",
  bowl_with_spoon: "\u{1F963}",
  green_salad: "\u{1F957}",
  popcorn: "\u{1F37F}",
  butter: "\u{1F9C8}",
  salt: "\u{1F9C2}",
  canned_food: "\u{1F96B}",
  bento: "\u{1F371}",
  rice_cracker: "\u{1F358}",
  rice_ball: "\u{1F359}",
  rice: "\u{1F35A}",
  curry: "\u{1F35B}",
  ramen: "\u{1F35C}",
  spaghetti: "\u{1F35D}",
  sweet_potato: "\u{1F360}",
  oden: "\u{1F362}",
  sushi: "\u{1F363}",
  fried_shrimp: "\u{1F364}",
  fish_cake: "\u{1F365}",
  moon_cake: "\u{1F96E}",
  dango: "\u{1F361}",
  dumpling: "\u{1F95F}",
  fortune_cookie: "\u{1F960}",
  takeout_box: "\u{1F961}",
  crab: "\u{1F980}",
  lobster: "\u{1F99E}",
  shrimp: "\u{1F990}",
  squid: "\u{1F991}",
  oyster: "\u{1F9AA}",
  icecream: "\u{1F366}",
  shaved_ice: "\u{1F367}",
  ice_cream: "\u{1F368}",
  doughnut: "\u{1F369}",
  cookie: "\u{1F36A}",
  birthday: "\u{1F382}",
  cake: "\u{1F370}",
  cupcake: "\u{1F9C1}",
  pie: "\u{1F967}",
  chocolate_bar: "\u{1F36B}",
  candy: "\u{1F36C}",
  lollipop: "\u{1F36D}",
  custard: "\u{1F36E}",
  honey_pot: "\u{1F36F}",
  baby_bottle: "\u{1F37C}",
  milk_glass: "\u{1F95B}",
  coffee: "\u2615",
  teapot: "\u{1FAD6}",
  tea: "\u{1F375}",
  sake: "\u{1F376}",
  champagne: "\u{1F37E}",
  wine_glass: "\u{1F377}",
  cocktail: "\u{1F378}",
  tropical_drink: "\u{1F379}",
  beer: "\u{1F37A}",
  beers: "\u{1F37B}",
  clinking_glasses: "\u{1F942}",
  tumbler_glass: "\u{1F943}",
  cup_with_straw: "\u{1F964}",
  bubble_tea: "\u{1F9CB}",
  beverage_box: "\u{1F9C3}",
  mate: "\u{1F9C9}",
  ice_cube: "\u{1F9CA}",
  chopsticks: "\u{1F962}",
  plate_with_cutlery: "\u{1F37D}\uFE0F",
  fork_and_knife: "\u{1F374}",
  spoon: "\u{1F944}",
  hocho: "\u{1F52A}",
  knife: "\u{1F52A}",
  amphora: "\u{1F3FA}",
  earth_africa: "\u{1F30D}",
  earth_americas: "\u{1F30E}",
  earth_asia: "\u{1F30F}",
  globe_with_meridians: "\u{1F310}",
  world_map: "\u{1F5FA}\uFE0F",
  japan: "\u{1F5FE}",
  compass: "\u{1F9ED}",
  mountain_snow: "\u{1F3D4}\uFE0F",
  mountain: "\u26F0\uFE0F",
  volcano: "\u{1F30B}",
  mount_fuji: "\u{1F5FB}",
  camping: "\u{1F3D5}\uFE0F",
  beach_umbrella: "\u{1F3D6}\uFE0F",
  desert: "\u{1F3DC}\uFE0F",
  desert_island: "\u{1F3DD}\uFE0F",
  national_park: "\u{1F3DE}\uFE0F",
  stadium: "\u{1F3DF}\uFE0F",
  classical_building: "\u{1F3DB}\uFE0F",
  building_construction: "\u{1F3D7}\uFE0F",
  bricks: "\u{1F9F1}",
  rock: "\u{1FAA8}",
  wood: "\u{1FAB5}",
  hut: "\u{1F6D6}",
  houses: "\u{1F3D8}\uFE0F",
  derelict_house: "\u{1F3DA}\uFE0F",
  house: "\u{1F3E0}",
  house_with_garden: "\u{1F3E1}",
  office: "\u{1F3E2}",
  post_office: "\u{1F3E3}",
  european_post_office: "\u{1F3E4}",
  hospital: "\u{1F3E5}",
  bank: "\u{1F3E6}",
  hotel: "\u{1F3E8}",
  love_hotel: "\u{1F3E9}",
  convenience_store: "\u{1F3EA}",
  school: "\u{1F3EB}",
  department_store: "\u{1F3EC}",
  factory: "\u{1F3ED}",
  japanese_castle: "\u{1F3EF}",
  european_castle: "\u{1F3F0}",
  wedding: "\u{1F492}",
  tokyo_tower: "\u{1F5FC}",
  statue_of_liberty: "\u{1F5FD}",
  church: "\u26EA",
  mosque: "\u{1F54C}",
  hindu_temple: "\u{1F6D5}",
  synagogue: "\u{1F54D}",
  shinto_shrine: "\u26E9\uFE0F",
  kaaba: "\u{1F54B}",
  fountain: "\u26F2",
  tent: "\u26FA",
  foggy: "\u{1F301}",
  night_with_stars: "\u{1F303}",
  cityscape: "\u{1F3D9}\uFE0F",
  sunrise_over_mountains: "\u{1F304}",
  sunrise: "\u{1F305}",
  city_sunset: "\u{1F306}",
  city_sunrise: "\u{1F307}",
  bridge_at_night: "\u{1F309}",
  hotsprings: "\u2668\uFE0F",
  carousel_horse: "\u{1F3A0}",
  ferris_wheel: "\u{1F3A1}",
  roller_coaster: "\u{1F3A2}",
  barber: "\u{1F488}",
  circus_tent: "\u{1F3AA}",
  steam_locomotive: "\u{1F682}",
  railway_car: "\u{1F683}",
  bullettrain_side: "\u{1F684}",
  bullettrain_front: "\u{1F685}",
  train2: "\u{1F686}",
  metro: "\u{1F687}",
  light_rail: "\u{1F688}",
  station: "\u{1F689}",
  tram: "\u{1F68A}",
  monorail: "\u{1F69D}",
  mountain_railway: "\u{1F69E}",
  train: "\u{1F68B}",
  bus: "\u{1F68C}",
  oncoming_bus: "\u{1F68D}",
  trolleybus: "\u{1F68E}",
  minibus: "\u{1F690}",
  ambulance: "\u{1F691}",
  fire_engine: "\u{1F692}",
  police_car: "\u{1F693}",
  oncoming_police_car: "\u{1F694}",
  taxi: "\u{1F695}",
  oncoming_taxi: "\u{1F696}",
  car: "\u{1F697}",
  red_car: "\u{1F697}",
  oncoming_automobile: "\u{1F698}",
  blue_car: "\u{1F699}",
  pickup_truck: "\u{1F6FB}",
  truck: "\u{1F69A}",
  articulated_lorry: "\u{1F69B}",
  tractor: "\u{1F69C}",
  racing_car: "\u{1F3CE}\uFE0F",
  motorcycle: "\u{1F3CD}\uFE0F",
  motor_scooter: "\u{1F6F5}",
  manual_wheelchair: "\u{1F9BD}",
  motorized_wheelchair: "\u{1F9BC}",
  auto_rickshaw: "\u{1F6FA}",
  bike: "\u{1F6B2}",
  kick_scooter: "\u{1F6F4}",
  skateboard: "\u{1F6F9}",
  roller_skate: "\u{1F6FC}",
  busstop: "\u{1F68F}",
  motorway: "\u{1F6E3}\uFE0F",
  railway_track: "\u{1F6E4}\uFE0F",
  oil_drum: "\u{1F6E2}\uFE0F",
  fuelpump: "\u26FD",
  rotating_light: "\u{1F6A8}",
  traffic_light: "\u{1F6A5}",
  vertical_traffic_light: "\u{1F6A6}",
  stop_sign: "\u{1F6D1}",
  construction: "\u{1F6A7}",
  anchor: "\u2693",
  boat: "\u26F5",
  sailboat: "\u26F5",
  canoe: "\u{1F6F6}",
  speedboat: "\u{1F6A4}",
  passenger_ship: "\u{1F6F3}\uFE0F",
  ferry: "\u26F4\uFE0F",
  motor_boat: "\u{1F6E5}\uFE0F",
  ship: "\u{1F6A2}",
  airplane: "\u2708\uFE0F",
  small_airplane: "\u{1F6E9}\uFE0F",
  flight_departure: "\u{1F6EB}",
  flight_arrival: "\u{1F6EC}",
  parachute: "\u{1FA82}",
  seat: "\u{1F4BA}",
  helicopter: "\u{1F681}",
  suspension_railway: "\u{1F69F}",
  mountain_cableway: "\u{1F6A0}",
  aerial_tramway: "\u{1F6A1}",
  artificial_satellite: "\u{1F6F0}\uFE0F",
  rocket: "\u{1F680}",
  flying_saucer: "\u{1F6F8}",
  bellhop_bell: "\u{1F6CE}\uFE0F",
  luggage: "\u{1F9F3}",
  hourglass: "\u231B",
  hourglass_flowing_sand: "\u23F3",
  watch: "\u231A",
  alarm_clock: "\u23F0",
  stopwatch: "\u23F1\uFE0F",
  timer_clock: "\u23F2\uFE0F",
  mantelpiece_clock: "\u{1F570}\uFE0F",
  clock12: "\u{1F55B}",
  clock1230: "\u{1F567}",
  clock1: "\u{1F550}",
  clock130: "\u{1F55C}",
  clock2: "\u{1F551}",
  clock230: "\u{1F55D}",
  clock3: "\u{1F552}",
  clock330: "\u{1F55E}",
  clock4: "\u{1F553}",
  clock430: "\u{1F55F}",
  clock5: "\u{1F554}",
  clock530: "\u{1F560}",
  clock6: "\u{1F555}",
  clock630: "\u{1F561}",
  clock7: "\u{1F556}",
  clock730: "\u{1F562}",
  clock8: "\u{1F557}",
  clock830: "\u{1F563}",
  clock9: "\u{1F558}",
  clock930: "\u{1F564}",
  clock10: "\u{1F559}",
  clock1030: "\u{1F565}",
  clock11: "\u{1F55A}",
  clock1130: "\u{1F566}",
  new_moon: "\u{1F311}",
  waxing_crescent_moon: "\u{1F312}",
  first_quarter_moon: "\u{1F313}",
  moon: "\u{1F314}",
  waxing_gibbous_moon: "\u{1F314}",
  full_moon: "\u{1F315}",
  waning_gibbous_moon: "\u{1F316}",
  last_quarter_moon: "\u{1F317}",
  waning_crescent_moon: "\u{1F318}",
  crescent_moon: "\u{1F319}",
  new_moon_with_face: "\u{1F31A}",
  first_quarter_moon_with_face: "\u{1F31B}",
  last_quarter_moon_with_face: "\u{1F31C}",
  thermometer: "\u{1F321}\uFE0F",
  sunny: "\u2600\uFE0F",
  full_moon_with_face: "\u{1F31D}",
  sun_with_face: "\u{1F31E}",
  ringed_planet: "\u{1FA90}",
  star: "\u2B50",
  star2: "\u{1F31F}",
  stars: "\u{1F320}",
  milky_way: "\u{1F30C}",
  cloud: "\u2601\uFE0F",
  partly_sunny: "\u26C5",
  cloud_with_lightning_and_rain: "\u26C8\uFE0F",
  sun_behind_small_cloud: "\u{1F324}\uFE0F",
  sun_behind_large_cloud: "\u{1F325}\uFE0F",
  sun_behind_rain_cloud: "\u{1F326}\uFE0F",
  cloud_with_rain: "\u{1F327}\uFE0F",
  cloud_with_snow: "\u{1F328}\uFE0F",
  cloud_with_lightning: "\u{1F329}\uFE0F",
  tornado: "\u{1F32A}\uFE0F",
  fog: "\u{1F32B}\uFE0F",
  wind_face: "\u{1F32C}\uFE0F",
  cyclone: "\u{1F300}",
  rainbow: "\u{1F308}",
  closed_umbrella: "\u{1F302}",
  open_umbrella: "\u2602\uFE0F",
  umbrella: "\u2614",
  parasol_on_ground: "\u26F1\uFE0F",
  zap: "\u26A1",
  snowflake: "\u2744\uFE0F",
  snowman_with_snow: "\u2603\uFE0F",
  snowman: "\u26C4",
  comet: "\u2604\uFE0F",
  fire: "\u{1F525}",
  droplet: "\u{1F4A7}",
  ocean: "\u{1F30A}",
  jack_o_lantern: "\u{1F383}",
  christmas_tree: "\u{1F384}",
  fireworks: "\u{1F386}",
  sparkler: "\u{1F387}",
  firecracker: "\u{1F9E8}",
  sparkles: "\u2728",
  balloon: "\u{1F388}",
  tada: "\u{1F389}",
  confetti_ball: "\u{1F38A}",
  tanabata_tree: "\u{1F38B}",
  bamboo: "\u{1F38D}",
  dolls: "\u{1F38E}",
  flags: "\u{1F38F}",
  wind_chime: "\u{1F390}",
  rice_scene: "\u{1F391}",
  red_envelope: "\u{1F9E7}",
  ribbon: "\u{1F380}",
  gift: "\u{1F381}",
  reminder_ribbon: "\u{1F397}\uFE0F",
  tickets: "\u{1F39F}\uFE0F",
  ticket: "\u{1F3AB}",
  medal_military: "\u{1F396}\uFE0F",
  trophy: "\u{1F3C6}",
  medal_sports: "\u{1F3C5}",
  "1st_place_medal": "\u{1F947}",
  "2nd_place_medal": "\u{1F948}",
  "3rd_place_medal": "\u{1F949}",
  soccer: "\u26BD",
  baseball: "\u26BE",
  softball: "\u{1F94E}",
  basketball: "\u{1F3C0}",
  volleyball: "\u{1F3D0}",
  football: "\u{1F3C8}",
  rugby_football: "\u{1F3C9}",
  tennis: "\u{1F3BE}",
  flying_disc: "\u{1F94F}",
  bowling: "\u{1F3B3}",
  cricket_game: "\u{1F3CF}",
  field_hockey: "\u{1F3D1}",
  ice_hockey: "\u{1F3D2}",
  lacrosse: "\u{1F94D}",
  ping_pong: "\u{1F3D3}",
  badminton: "\u{1F3F8}",
  boxing_glove: "\u{1F94A}",
  martial_arts_uniform: "\u{1F94B}",
  goal_net: "\u{1F945}",
  golf: "\u26F3",
  ice_skate: "\u26F8\uFE0F",
  fishing_pole_and_fish: "\u{1F3A3}",
  diving_mask: "\u{1F93F}",
  running_shirt_with_sash: "\u{1F3BD}",
  ski: "\u{1F3BF}",
  sled: "\u{1F6F7}",
  curling_stone: "\u{1F94C}",
  dart: "\u{1F3AF}",
  yo_yo: "\u{1FA80}",
  kite: "\u{1FA81}",
  "8ball": "\u{1F3B1}",
  crystal_ball: "\u{1F52E}",
  magic_wand: "\u{1FA84}",
  nazar_amulet: "\u{1F9FF}",
  video_game: "\u{1F3AE}",
  joystick: "\u{1F579}\uFE0F",
  slot_machine: "\u{1F3B0}",
  game_die: "\u{1F3B2}",
  jigsaw: "\u{1F9E9}",
  teddy_bear: "\u{1F9F8}",
  pinata: "\u{1FA85}",
  nesting_dolls: "\u{1FA86}",
  spades: "\u2660\uFE0F",
  hearts: "\u2665\uFE0F",
  diamonds: "\u2666\uFE0F",
  clubs: "\u2663\uFE0F",
  chess_pawn: "\u265F\uFE0F",
  black_joker: "\u{1F0CF}",
  mahjong: "\u{1F004}",
  flower_playing_cards: "\u{1F3B4}",
  performing_arts: "\u{1F3AD}",
  framed_picture: "\u{1F5BC}\uFE0F",
  art: "\u{1F3A8}",
  thread: "\u{1F9F5}",
  sewing_needle: "\u{1FAA1}",
  yarn: "\u{1F9F6}",
  knot: "\u{1FAA2}",
  eyeglasses: "\u{1F453}",
  dark_sunglasses: "\u{1F576}\uFE0F",
  goggles: "\u{1F97D}",
  lab_coat: "\u{1F97C}",
  safety_vest: "\u{1F9BA}",
  necktie: "\u{1F454}",
  shirt: "\u{1F455}",
  tshirt: "\u{1F455}",
  jeans: "\u{1F456}",
  scarf: "\u{1F9E3}",
  gloves: "\u{1F9E4}",
  coat: "\u{1F9E5}",
  socks: "\u{1F9E6}",
  dress: "\u{1F457}",
  kimono: "\u{1F458}",
  sari: "\u{1F97B}",
  one_piece_swimsuit: "\u{1FA71}",
  swim_brief: "\u{1FA72}",
  shorts: "\u{1FA73}",
  bikini: "\u{1F459}",
  womans_clothes: "\u{1F45A}",
  purse: "\u{1F45B}",
  handbag: "\u{1F45C}",
  pouch: "\u{1F45D}",
  shopping: "\u{1F6CD}\uFE0F",
  school_satchel: "\u{1F392}",
  thong_sandal: "\u{1FA74}",
  mans_shoe: "\u{1F45E}",
  shoe: "\u{1F45E}",
  athletic_shoe: "\u{1F45F}",
  hiking_boot: "\u{1F97E}",
  flat_shoe: "\u{1F97F}",
  high_heel: "\u{1F460}",
  sandal: "\u{1F461}",
  ballet_shoes: "\u{1FA70}",
  boot: "\u{1F462}",
  crown: "\u{1F451}",
  womans_hat: "\u{1F452}",
  tophat: "\u{1F3A9}",
  mortar_board: "\u{1F393}",
  billed_cap: "\u{1F9E2}",
  military_helmet: "\u{1FA96}",
  rescue_worker_helmet: "\u26D1\uFE0F",
  prayer_beads: "\u{1F4FF}",
  lipstick: "\u{1F484}",
  ring: "\u{1F48D}",
  gem: "\u{1F48E}",
  mute: "\u{1F507}",
  speaker: "\u{1F508}",
  sound: "\u{1F509}",
  loud_sound: "\u{1F50A}",
  loudspeaker: "\u{1F4E2}",
  mega: "\u{1F4E3}",
  postal_horn: "\u{1F4EF}",
  bell: "\u{1F514}",
  no_bell: "\u{1F515}",
  musical_score: "\u{1F3BC}",
  musical_note: "\u{1F3B5}",
  notes: "\u{1F3B6}",
  studio_microphone: "\u{1F399}\uFE0F",
  level_slider: "\u{1F39A}\uFE0F",
  control_knobs: "\u{1F39B}\uFE0F",
  microphone: "\u{1F3A4}",
  headphones: "\u{1F3A7}",
  radio: "\u{1F4FB}",
  saxophone: "\u{1F3B7}",
  accordion: "\u{1FA97}",
  guitar: "\u{1F3B8}",
  musical_keyboard: "\u{1F3B9}",
  trumpet: "\u{1F3BA}",
  violin: "\u{1F3BB}",
  banjo: "\u{1FA95}",
  drum: "\u{1F941}",
  long_drum: "\u{1FA98}",
  iphone: "\u{1F4F1}",
  calling: "\u{1F4F2}",
  phone: "\u260E\uFE0F",
  telephone: "\u260E\uFE0F",
  telephone_receiver: "\u{1F4DE}",
  pager: "\u{1F4DF}",
  fax: "\u{1F4E0}",
  battery: "\u{1F50B}",
  electric_plug: "\u{1F50C}",
  computer: "\u{1F4BB}",
  desktop_computer: "\u{1F5A5}\uFE0F",
  printer: "\u{1F5A8}\uFE0F",
  keyboard: "\u2328\uFE0F",
  computer_mouse: "\u{1F5B1}\uFE0F",
  trackball: "\u{1F5B2}\uFE0F",
  minidisc: "\u{1F4BD}",
  floppy_disk: "\u{1F4BE}",
  cd: "\u{1F4BF}",
  dvd: "\u{1F4C0}",
  abacus: "\u{1F9EE}",
  movie_camera: "\u{1F3A5}",
  film_strip: "\u{1F39E}\uFE0F",
  film_projector: "\u{1F4FD}\uFE0F",
  clapper: "\u{1F3AC}",
  tv: "\u{1F4FA}",
  camera: "\u{1F4F7}",
  camera_flash: "\u{1F4F8}",
  video_camera: "\u{1F4F9}",
  vhs: "\u{1F4FC}",
  mag: "\u{1F50D}",
  mag_right: "\u{1F50E}",
  candle: "\u{1F56F}\uFE0F",
  bulb: "\u{1F4A1}",
  flashlight: "\u{1F526}",
  izakaya_lantern: "\u{1F3EE}",
  lantern: "\u{1F3EE}",
  diya_lamp: "\u{1FA94}",
  notebook_with_decorative_cover: "\u{1F4D4}",
  closed_book: "\u{1F4D5}",
  book: "\u{1F4D6}",
  open_book: "\u{1F4D6}",
  green_book: "\u{1F4D7}",
  blue_book: "\u{1F4D8}",
  orange_book: "\u{1F4D9}",
  books: "\u{1F4DA}",
  notebook: "\u{1F4D3}",
  ledger: "\u{1F4D2}",
  page_with_curl: "\u{1F4C3}",
  scroll: "\u{1F4DC}",
  page_facing_up: "\u{1F4C4}",
  newspaper: "\u{1F4F0}",
  newspaper_roll: "\u{1F5DE}\uFE0F",
  bookmark_tabs: "\u{1F4D1}",
  bookmark: "\u{1F516}",
  label: "\u{1F3F7}\uFE0F",
  moneybag: "\u{1F4B0}",
  coin: "\u{1FA99}",
  yen: "\u{1F4B4}",
  dollar: "\u{1F4B5}",
  euro: "\u{1F4B6}",
  pound: "\u{1F4B7}",
  money_with_wings: "\u{1F4B8}",
  credit_card: "\u{1F4B3}",
  receipt: "\u{1F9FE}",
  chart: "\u{1F4B9}",
  envelope: "\u2709\uFE0F",
  email: "\u{1F4E7}",
  "e-mail": "\u{1F4E7}",
  incoming_envelope: "\u{1F4E8}",
  envelope_with_arrow: "\u{1F4E9}",
  outbox_tray: "\u{1F4E4}",
  inbox_tray: "\u{1F4E5}",
  package: "\u{1F4E6}",
  mailbox: "\u{1F4EB}",
  mailbox_closed: "\u{1F4EA}",
  mailbox_with_mail: "\u{1F4EC}",
  mailbox_with_no_mail: "\u{1F4ED}",
  postbox: "\u{1F4EE}",
  ballot_box: "\u{1F5F3}\uFE0F",
  pencil2: "\u270F\uFE0F",
  black_nib: "\u2712\uFE0F",
  fountain_pen: "\u{1F58B}\uFE0F",
  pen: "\u{1F58A}\uFE0F",
  paintbrush: "\u{1F58C}\uFE0F",
  crayon: "\u{1F58D}\uFE0F",
  memo: "\u{1F4DD}",
  pencil: "\u{1F4DD}",
  briefcase: "\u{1F4BC}",
  file_folder: "\u{1F4C1}",
  open_file_folder: "\u{1F4C2}",
  card_index_dividers: "\u{1F5C2}\uFE0F",
  date: "\u{1F4C5}",
  calendar: "\u{1F4C6}",
  spiral_notepad: "\u{1F5D2}\uFE0F",
  spiral_calendar: "\u{1F5D3}\uFE0F",
  card_index: "\u{1F4C7}",
  chart_with_upwards_trend: "\u{1F4C8}",
  chart_with_downwards_trend: "\u{1F4C9}",
  bar_chart: "\u{1F4CA}",
  clipboard: "\u{1F4CB}",
  pushpin: "\u{1F4CC}",
  round_pushpin: "\u{1F4CD}",
  paperclip: "\u{1F4CE}",
  paperclips: "\u{1F587}\uFE0F",
  straight_ruler: "\u{1F4CF}",
  triangular_ruler: "\u{1F4D0}",
  scissors: "\u2702\uFE0F",
  card_file_box: "\u{1F5C3}\uFE0F",
  file_cabinet: "\u{1F5C4}\uFE0F",
  wastebasket: "\u{1F5D1}\uFE0F",
  lock: "\u{1F512}",
  unlock: "\u{1F513}",
  lock_with_ink_pen: "\u{1F50F}",
  closed_lock_with_key: "\u{1F510}",
  key: "\u{1F511}",
  old_key: "\u{1F5DD}\uFE0F",
  hammer: "\u{1F528}",
  axe: "\u{1FA93}",
  pick: "\u26CF\uFE0F",
  hammer_and_pick: "\u2692\uFE0F",
  hammer_and_wrench: "\u{1F6E0}\uFE0F",
  dagger: "\u{1F5E1}\uFE0F",
  crossed_swords: "\u2694\uFE0F",
  gun: "\u{1F52B}",
  boomerang: "\u{1FA83}",
  bow_and_arrow: "\u{1F3F9}",
  shield: "\u{1F6E1}\uFE0F",
  carpentry_saw: "\u{1FA9A}",
  wrench: "\u{1F527}",
  screwdriver: "\u{1FA9B}",
  nut_and_bolt: "\u{1F529}",
  gear: "\u2699\uFE0F",
  clamp: "\u{1F5DC}\uFE0F",
  balance_scale: "\u2696\uFE0F",
  probing_cane: "\u{1F9AF}",
  link: "\u{1F517}",
  chains: "\u26D3\uFE0F",
  hook: "\u{1FA9D}",
  toolbox: "\u{1F9F0}",
  magnet: "\u{1F9F2}",
  ladder: "\u{1FA9C}",
  alembic: "\u2697\uFE0F",
  test_tube: "\u{1F9EA}",
  petri_dish: "\u{1F9EB}",
  dna: "\u{1F9EC}",
  microscope: "\u{1F52C}",
  telescope: "\u{1F52D}",
  satellite: "\u{1F4E1}",
  syringe: "\u{1F489}",
  drop_of_blood: "\u{1FA78}",
  pill: "\u{1F48A}",
  adhesive_bandage: "\u{1FA79}",
  stethoscope: "\u{1FA7A}",
  door: "\u{1F6AA}",
  elevator: "\u{1F6D7}",
  mirror: "\u{1FA9E}",
  window: "\u{1FA9F}",
  bed: "\u{1F6CF}\uFE0F",
  couch_and_lamp: "\u{1F6CB}\uFE0F",
  chair: "\u{1FA91}",
  toilet: "\u{1F6BD}",
  plunger: "\u{1FAA0}",
  shower: "\u{1F6BF}",
  bathtub: "\u{1F6C1}",
  mouse_trap: "\u{1FAA4}",
  razor: "\u{1FA92}",
  lotion_bottle: "\u{1F9F4}",
  safety_pin: "\u{1F9F7}",
  broom: "\u{1F9F9}",
  basket: "\u{1F9FA}",
  roll_of_paper: "\u{1F9FB}",
  bucket: "\u{1FAA3}",
  soap: "\u{1F9FC}",
  toothbrush: "\u{1FAA5}",
  sponge: "\u{1F9FD}",
  fire_extinguisher: "\u{1F9EF}",
  shopping_cart: "\u{1F6D2}",
  smoking: "\u{1F6AC}",
  coffin: "\u26B0\uFE0F",
  headstone: "\u{1FAA6}",
  funeral_urn: "\u26B1\uFE0F",
  moyai: "\u{1F5FF}",
  placard: "\u{1FAA7}",
  atm: "\u{1F3E7}",
  put_litter_in_its_place: "\u{1F6AE}",
  potable_water: "\u{1F6B0}",
  wheelchair: "\u267F",
  mens: "\u{1F6B9}",
  womens: "\u{1F6BA}",
  restroom: "\u{1F6BB}",
  baby_symbol: "\u{1F6BC}",
  wc: "\u{1F6BE}",
  passport_control: "\u{1F6C2}",
  customs: "\u{1F6C3}",
  baggage_claim: "\u{1F6C4}",
  left_luggage: "\u{1F6C5}",
  warning: "\u26A0\uFE0F",
  children_crossing: "\u{1F6B8}",
  no_entry: "\u26D4",
  no_entry_sign: "\u{1F6AB}",
  no_bicycles: "\u{1F6B3}",
  no_smoking: "\u{1F6AD}",
  do_not_litter: "\u{1F6AF}",
  "non-potable_water": "\u{1F6B1}",
  no_pedestrians: "\u{1F6B7}",
  no_mobile_phones: "\u{1F4F5}",
  underage: "\u{1F51E}",
  radioactive: "\u2622\uFE0F",
  biohazard: "\u2623\uFE0F",
  arrow_up: "\u2B06\uFE0F",
  arrow_upper_right: "\u2197\uFE0F",
  arrow_right: "\u27A1\uFE0F",
  arrow_lower_right: "\u2198\uFE0F",
  arrow_down: "\u2B07\uFE0F",
  arrow_lower_left: "\u2199\uFE0F",
  arrow_left: "\u2B05\uFE0F",
  arrow_upper_left: "\u2196\uFE0F",
  arrow_up_down: "\u2195\uFE0F",
  left_right_arrow: "\u2194\uFE0F",
  leftwards_arrow_with_hook: "\u21A9\uFE0F",
  arrow_right_hook: "\u21AA\uFE0F",
  arrow_heading_up: "\u2934\uFE0F",
  arrow_heading_down: "\u2935\uFE0F",
  arrows_clockwise: "\u{1F503}",
  arrows_counterclockwise: "\u{1F504}",
  back: "\u{1F519}",
  end: "\u{1F51A}",
  on: "\u{1F51B}",
  soon: "\u{1F51C}",
  top: "\u{1F51D}",
  place_of_worship: "\u{1F6D0}",
  atom_symbol: "\u269B\uFE0F",
  om: "\u{1F549}\uFE0F",
  star_of_david: "\u2721\uFE0F",
  wheel_of_dharma: "\u2638\uFE0F",
  yin_yang: "\u262F\uFE0F",
  latin_cross: "\u271D\uFE0F",
  orthodox_cross: "\u2626\uFE0F",
  star_and_crescent: "\u262A\uFE0F",
  peace_symbol: "\u262E\uFE0F",
  menorah: "\u{1F54E}",
  six_pointed_star: "\u{1F52F}",
  aries: "\u2648",
  taurus: "\u2649",
  gemini: "\u264A",
  cancer: "\u264B",
  leo: "\u264C",
  virgo: "\u264D",
  libra: "\u264E",
  scorpius: "\u264F",
  sagittarius: "\u2650",
  capricorn: "\u2651",
  aquarius: "\u2652",
  pisces: "\u2653",
  ophiuchus: "\u26CE",
  twisted_rightwards_arrows: "\u{1F500}",
  repeat: "\u{1F501}",
  repeat_one: "\u{1F502}",
  arrow_forward: "\u25B6\uFE0F",
  fast_forward: "\u23E9",
  next_track_button: "\u23ED\uFE0F",
  play_or_pause_button: "\u23EF\uFE0F",
  arrow_backward: "\u25C0\uFE0F",
  rewind: "\u23EA",
  previous_track_button: "\u23EE\uFE0F",
  arrow_up_small: "\u{1F53C}",
  arrow_double_up: "\u23EB",
  arrow_down_small: "\u{1F53D}",
  arrow_double_down: "\u23EC",
  pause_button: "\u23F8\uFE0F",
  stop_button: "\u23F9\uFE0F",
  record_button: "\u23FA\uFE0F",
  eject_button: "\u23CF\uFE0F",
  cinema: "\u{1F3A6}",
  low_brightness: "\u{1F505}",
  high_brightness: "\u{1F506}",
  signal_strength: "\u{1F4F6}",
  vibration_mode: "\u{1F4F3}",
  mobile_phone_off: "\u{1F4F4}",
  female_sign: "\u2640\uFE0F",
  male_sign: "\u2642\uFE0F",
  transgender_symbol: "\u26A7\uFE0F",
  heavy_multiplication_x: "\u2716\uFE0F",
  heavy_plus_sign: "\u2795",
  heavy_minus_sign: "\u2796",
  heavy_division_sign: "\u2797",
  infinity: "\u267E\uFE0F",
  bangbang: "\u203C\uFE0F",
  interrobang: "\u2049\uFE0F",
  question: "\u2753",
  grey_question: "\u2754",
  grey_exclamation: "\u2755",
  exclamation: "\u2757",
  heavy_exclamation_mark: "\u2757",
  wavy_dash: "\u3030\uFE0F",
  currency_exchange: "\u{1F4B1}",
  heavy_dollar_sign: "\u{1F4B2}",
  medical_symbol: "\u2695\uFE0F",
  recycle: "\u267B\uFE0F",
  fleur_de_lis: "\u269C\uFE0F",
  trident: "\u{1F531}",
  name_badge: "\u{1F4DB}",
  beginner: "\u{1F530}",
  o: "\u2B55",
  white_check_mark: "\u2705",
  ballot_box_with_check: "\u2611\uFE0F",
  heavy_check_mark: "\u2714\uFE0F",
  x: "\u274C",
  negative_squared_cross_mark: "\u274E",
  curly_loop: "\u27B0",
  loop: "\u27BF",
  part_alternation_mark: "\u303D\uFE0F",
  eight_spoked_asterisk: "\u2733\uFE0F",
  eight_pointed_black_star: "\u2734\uFE0F",
  sparkle: "\u2747\uFE0F",
  copyright: "\xA9\uFE0F",
  registered: "\xAE\uFE0F",
  tm: "\u2122\uFE0F",
  hash: "#\uFE0F\u20E3",
  asterisk: "*\uFE0F\u20E3",
  zero: "0\uFE0F\u20E3",
  one: "1\uFE0F\u20E3",
  two: "2\uFE0F\u20E3",
  three: "3\uFE0F\u20E3",
  four: "4\uFE0F\u20E3",
  five: "5\uFE0F\u20E3",
  six: "6\uFE0F\u20E3",
  seven: "7\uFE0F\u20E3",
  eight: "8\uFE0F\u20E3",
  nine: "9\uFE0F\u20E3",
  keycap_ten: "\u{1F51F}",
  capital_abcd: "\u{1F520}",
  abcd: "\u{1F521}",
  symbols: "\u{1F523}",
  abc: "\u{1F524}",
  a: "\u{1F170}\uFE0F",
  ab: "\u{1F18E}",
  b: "\u{1F171}\uFE0F",
  cl: "\u{1F191}",
  cool: "\u{1F192}",
  free: "\u{1F193}",
  information_source: "\u2139\uFE0F",
  id: "\u{1F194}",
  m: "\u24C2\uFE0F",
  new: "\u{1F195}",
  ng: "\u{1F196}",
  o2: "\u{1F17E}\uFE0F",
  ok: "\u{1F197}",
  parking: "\u{1F17F}\uFE0F",
  sos: "\u{1F198}",
  up: "\u{1F199}",
  vs: "\u{1F19A}",
  koko: "\u{1F201}",
  sa: "\u{1F202}\uFE0F",
  u6708: "\u{1F237}\uFE0F",
  u6709: "\u{1F236}",
  u6307: "\u{1F22F}",
  ideograph_advantage: "\u{1F250}",
  u5272: "\u{1F239}",
  u7121: "\u{1F21A}",
  u7981: "\u{1F232}",
  accept: "\u{1F251}",
  u7533: "\u{1F238}",
  u5408: "\u{1F234}",
  u7a7a: "\u{1F233}",
  congratulations: "\u3297\uFE0F",
  secret: "\u3299\uFE0F",
  u55b6: "\u{1F23A}",
  u6e80: "\u{1F235}",
  red_circle: "\u{1F534}",
  orange_circle: "\u{1F7E0}",
  yellow_circle: "\u{1F7E1}",
  green_circle: "\u{1F7E2}",
  large_blue_circle: "\u{1F535}",
  purple_circle: "\u{1F7E3}",
  brown_circle: "\u{1F7E4}",
  black_circle: "\u26AB",
  white_circle: "\u26AA",
  red_square: "\u{1F7E5}",
  orange_square: "\u{1F7E7}",
  yellow_square: "\u{1F7E8}",
  green_square: "\u{1F7E9}",
  blue_square: "\u{1F7E6}",
  purple_square: "\u{1F7EA}",
  brown_square: "\u{1F7EB}",
  black_large_square: "\u2B1B",
  white_large_square: "\u2B1C",
  black_medium_square: "\u25FC\uFE0F",
  white_medium_square: "\u25FB\uFE0F",
  black_medium_small_square: "\u25FE",
  white_medium_small_square: "\u25FD",
  black_small_square: "\u25AA\uFE0F",
  white_small_square: "\u25AB\uFE0F",
  large_orange_diamond: "\u{1F536}",
  large_blue_diamond: "\u{1F537}",
  small_orange_diamond: "\u{1F538}",
  small_blue_diamond: "\u{1F539}",
  small_red_triangle: "\u{1F53A}",
  small_red_triangle_down: "\u{1F53B}",
  diamond_shape_with_a_dot_inside: "\u{1F4A0}",
  radio_button: "\u{1F518}",
  white_square_button: "\u{1F533}",
  black_square_button: "\u{1F532}",
  checkered_flag: "\u{1F3C1}",
  triangular_flag_on_post: "\u{1F6A9}",
  crossed_flags: "\u{1F38C}",
  black_flag: "\u{1F3F4}",
  white_flag: "\u{1F3F3}\uFE0F",
  rainbow_flag: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
  transgender_flag: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F",
  pirate_flag: "\u{1F3F4}\u200D\u2620\uFE0F",
  ascension_island: "\u{1F1E6}\u{1F1E8}",
  andorra: "\u{1F1E6}\u{1F1E9}",
  united_arab_emirates: "\u{1F1E6}\u{1F1EA}",
  afghanistan: "\u{1F1E6}\u{1F1EB}",
  antigua_barbuda: "\u{1F1E6}\u{1F1EC}",
  anguilla: "\u{1F1E6}\u{1F1EE}",
  albania: "\u{1F1E6}\u{1F1F1}",
  armenia: "\u{1F1E6}\u{1F1F2}",
  angola: "\u{1F1E6}\u{1F1F4}",
  antarctica: "\u{1F1E6}\u{1F1F6}",
  argentina: "\u{1F1E6}\u{1F1F7}",
  american_samoa: "\u{1F1E6}\u{1F1F8}",
  austria: "\u{1F1E6}\u{1F1F9}",
  australia: "\u{1F1E6}\u{1F1FA}",
  aruba: "\u{1F1E6}\u{1F1FC}",
  aland_islands: "\u{1F1E6}\u{1F1FD}",
  azerbaijan: "\u{1F1E6}\u{1F1FF}",
  bosnia_herzegovina: "\u{1F1E7}\u{1F1E6}",
  barbados: "\u{1F1E7}\u{1F1E7}",
  bangladesh: "\u{1F1E7}\u{1F1E9}",
  belgium: "\u{1F1E7}\u{1F1EA}",
  burkina_faso: "\u{1F1E7}\u{1F1EB}",
  bulgaria: "\u{1F1E7}\u{1F1EC}",
  bahrain: "\u{1F1E7}\u{1F1ED}",
  burundi: "\u{1F1E7}\u{1F1EE}",
  benin: "\u{1F1E7}\u{1F1EF}",
  st_barthelemy: "\u{1F1E7}\u{1F1F1}",
  bermuda: "\u{1F1E7}\u{1F1F2}",
  brunei: "\u{1F1E7}\u{1F1F3}",
  bolivia: "\u{1F1E7}\u{1F1F4}",
  caribbean_netherlands: "\u{1F1E7}\u{1F1F6}",
  brazil: "\u{1F1E7}\u{1F1F7}",
  bahamas: "\u{1F1E7}\u{1F1F8}",
  bhutan: "\u{1F1E7}\u{1F1F9}",
  bouvet_island: "\u{1F1E7}\u{1F1FB}",
  botswana: "\u{1F1E7}\u{1F1FC}",
  belarus: "\u{1F1E7}\u{1F1FE}",
  belize: "\u{1F1E7}\u{1F1FF}",
  canada: "\u{1F1E8}\u{1F1E6}",
  cocos_islands: "\u{1F1E8}\u{1F1E8}",
  congo_kinshasa: "\u{1F1E8}\u{1F1E9}",
  central_african_republic: "\u{1F1E8}\u{1F1EB}",
  congo_brazzaville: "\u{1F1E8}\u{1F1EC}",
  switzerland: "\u{1F1E8}\u{1F1ED}",
  cote_divoire: "\u{1F1E8}\u{1F1EE}",
  cook_islands: "\u{1F1E8}\u{1F1F0}",
  chile: "\u{1F1E8}\u{1F1F1}",
  cameroon: "\u{1F1E8}\u{1F1F2}",
  cn: "\u{1F1E8}\u{1F1F3}",
  colombia: "\u{1F1E8}\u{1F1F4}",
  clipperton_island: "\u{1F1E8}\u{1F1F5}",
  costa_rica: "\u{1F1E8}\u{1F1F7}",
  cuba: "\u{1F1E8}\u{1F1FA}",
  cape_verde: "\u{1F1E8}\u{1F1FB}",
  curacao: "\u{1F1E8}\u{1F1FC}",
  christmas_island: "\u{1F1E8}\u{1F1FD}",
  cyprus: "\u{1F1E8}\u{1F1FE}",
  czech_republic: "\u{1F1E8}\u{1F1FF}",
  de: "\u{1F1E9}\u{1F1EA}",
  diego_garcia: "\u{1F1E9}\u{1F1EC}",
  djibouti: "\u{1F1E9}\u{1F1EF}",
  denmark: "\u{1F1E9}\u{1F1F0}",
  dominica: "\u{1F1E9}\u{1F1F2}",
  dominican_republic: "\u{1F1E9}\u{1F1F4}",
  algeria: "\u{1F1E9}\u{1F1FF}",
  ceuta_melilla: "\u{1F1EA}\u{1F1E6}",
  ecuador: "\u{1F1EA}\u{1F1E8}",
  estonia: "\u{1F1EA}\u{1F1EA}",
  egypt: "\u{1F1EA}\u{1F1EC}",
  western_sahara: "\u{1F1EA}\u{1F1ED}",
  eritrea: "\u{1F1EA}\u{1F1F7}",
  es: "\u{1F1EA}\u{1F1F8}",
  ethiopia: "\u{1F1EA}\u{1F1F9}",
  eu: "\u{1F1EA}\u{1F1FA}",
  european_union: "\u{1F1EA}\u{1F1FA}",
  finland: "\u{1F1EB}\u{1F1EE}",
  fiji: "\u{1F1EB}\u{1F1EF}",
  falkland_islands: "\u{1F1EB}\u{1F1F0}",
  micronesia: "\u{1F1EB}\u{1F1F2}",
  faroe_islands: "\u{1F1EB}\u{1F1F4}",
  fr: "\u{1F1EB}\u{1F1F7}",
  gabon: "\u{1F1EC}\u{1F1E6}",
  gb: "\u{1F1EC}\u{1F1E7}",
  uk: "\u{1F1EC}\u{1F1E7}",
  grenada: "\u{1F1EC}\u{1F1E9}",
  georgia: "\u{1F1EC}\u{1F1EA}",
  french_guiana: "\u{1F1EC}\u{1F1EB}",
  guernsey: "\u{1F1EC}\u{1F1EC}",
  ghana: "\u{1F1EC}\u{1F1ED}",
  gibraltar: "\u{1F1EC}\u{1F1EE}",
  greenland: "\u{1F1EC}\u{1F1F1}",
  gambia: "\u{1F1EC}\u{1F1F2}",
  guinea: "\u{1F1EC}\u{1F1F3}",
  guadeloupe: "\u{1F1EC}\u{1F1F5}",
  equatorial_guinea: "\u{1F1EC}\u{1F1F6}",
  greece: "\u{1F1EC}\u{1F1F7}",
  south_georgia_south_sandwich_islands: "\u{1F1EC}\u{1F1F8}",
  guatemala: "\u{1F1EC}\u{1F1F9}",
  guam: "\u{1F1EC}\u{1F1FA}",
  guinea_bissau: "\u{1F1EC}\u{1F1FC}",
  guyana: "\u{1F1EC}\u{1F1FE}",
  hong_kong: "\u{1F1ED}\u{1F1F0}",
  heard_mcdonald_islands: "\u{1F1ED}\u{1F1F2}",
  honduras: "\u{1F1ED}\u{1F1F3}",
  croatia: "\u{1F1ED}\u{1F1F7}",
  haiti: "\u{1F1ED}\u{1F1F9}",
  hungary: "\u{1F1ED}\u{1F1FA}",
  canary_islands: "\u{1F1EE}\u{1F1E8}",
  indonesia: "\u{1F1EE}\u{1F1E9}",
  ireland: "\u{1F1EE}\u{1F1EA}",
  israel: "\u{1F1EE}\u{1F1F1}",
  isle_of_man: "\u{1F1EE}\u{1F1F2}",
  india: "\u{1F1EE}\u{1F1F3}",
  british_indian_ocean_territory: "\u{1F1EE}\u{1F1F4}",
  iraq: "\u{1F1EE}\u{1F1F6}",
  iran: "\u{1F1EE}\u{1F1F7}",
  iceland: "\u{1F1EE}\u{1F1F8}",
  it: "\u{1F1EE}\u{1F1F9}",
  jersey: "\u{1F1EF}\u{1F1EA}",
  jamaica: "\u{1F1EF}\u{1F1F2}",
  jordan: "\u{1F1EF}\u{1F1F4}",
  jp: "\u{1F1EF}\u{1F1F5}",
  kenya: "\u{1F1F0}\u{1F1EA}",
  kyrgyzstan: "\u{1F1F0}\u{1F1EC}",
  cambodia: "\u{1F1F0}\u{1F1ED}",
  kiribati: "\u{1F1F0}\u{1F1EE}",
  comoros: "\u{1F1F0}\u{1F1F2}",
  st_kitts_nevis: "\u{1F1F0}\u{1F1F3}",
  north_korea: "\u{1F1F0}\u{1F1F5}",
  kr: "\u{1F1F0}\u{1F1F7}",
  kuwait: "\u{1F1F0}\u{1F1FC}",
  cayman_islands: "\u{1F1F0}\u{1F1FE}",
  kazakhstan: "\u{1F1F0}\u{1F1FF}",
  laos: "\u{1F1F1}\u{1F1E6}",
  lebanon: "\u{1F1F1}\u{1F1E7}",
  st_lucia: "\u{1F1F1}\u{1F1E8}",
  liechtenstein: "\u{1F1F1}\u{1F1EE}",
  sri_lanka: "\u{1F1F1}\u{1F1F0}",
  liberia: "\u{1F1F1}\u{1F1F7}",
  lesotho: "\u{1F1F1}\u{1F1F8}",
  lithuania: "\u{1F1F1}\u{1F1F9}",
  luxembourg: "\u{1F1F1}\u{1F1FA}",
  latvia: "\u{1F1F1}\u{1F1FB}",
  libya: "\u{1F1F1}\u{1F1FE}",
  morocco: "\u{1F1F2}\u{1F1E6}",
  monaco: "\u{1F1F2}\u{1F1E8}",
  moldova: "\u{1F1F2}\u{1F1E9}",
  montenegro: "\u{1F1F2}\u{1F1EA}",
  st_martin: "\u{1F1F2}\u{1F1EB}",
  madagascar: "\u{1F1F2}\u{1F1EC}",
  marshall_islands: "\u{1F1F2}\u{1F1ED}",
  macedonia: "\u{1F1F2}\u{1F1F0}",
  mali: "\u{1F1F2}\u{1F1F1}",
  myanmar: "\u{1F1F2}\u{1F1F2}",
  mongolia: "\u{1F1F2}\u{1F1F3}",
  macau: "\u{1F1F2}\u{1F1F4}",
  northern_mariana_islands: "\u{1F1F2}\u{1F1F5}",
  martinique: "\u{1F1F2}\u{1F1F6}",
  mauritania: "\u{1F1F2}\u{1F1F7}",
  montserrat: "\u{1F1F2}\u{1F1F8}",
  malta: "\u{1F1F2}\u{1F1F9}",
  mauritius: "\u{1F1F2}\u{1F1FA}",
  maldives: "\u{1F1F2}\u{1F1FB}",
  malawi: "\u{1F1F2}\u{1F1FC}",
  mexico: "\u{1F1F2}\u{1F1FD}",
  malaysia: "\u{1F1F2}\u{1F1FE}",
  mozambique: "\u{1F1F2}\u{1F1FF}",
  namibia: "\u{1F1F3}\u{1F1E6}",
  new_caledonia: "\u{1F1F3}\u{1F1E8}",
  niger: "\u{1F1F3}\u{1F1EA}",
  norfolk_island: "\u{1F1F3}\u{1F1EB}",
  nigeria: "\u{1F1F3}\u{1F1EC}",
  nicaragua: "\u{1F1F3}\u{1F1EE}",
  netherlands: "\u{1F1F3}\u{1F1F1}",
  norway: "\u{1F1F3}\u{1F1F4}",
  nepal: "\u{1F1F3}\u{1F1F5}",
  nauru: "\u{1F1F3}\u{1F1F7}",
  niue: "\u{1F1F3}\u{1F1FA}",
  new_zealand: "\u{1F1F3}\u{1F1FF}",
  oman: "\u{1F1F4}\u{1F1F2}",
  panama: "\u{1F1F5}\u{1F1E6}",
  peru: "\u{1F1F5}\u{1F1EA}",
  french_polynesia: "\u{1F1F5}\u{1F1EB}",
  papua_new_guinea: "\u{1F1F5}\u{1F1EC}",
  philippines: "\u{1F1F5}\u{1F1ED}",
  pakistan: "\u{1F1F5}\u{1F1F0}",
  poland: "\u{1F1F5}\u{1F1F1}",
  st_pierre_miquelon: "\u{1F1F5}\u{1F1F2}",
  pitcairn_islands: "\u{1F1F5}\u{1F1F3}",
  puerto_rico: "\u{1F1F5}\u{1F1F7}",
  palestinian_territories: "\u{1F1F5}\u{1F1F8}",
  portugal: "\u{1F1F5}\u{1F1F9}",
  palau: "\u{1F1F5}\u{1F1FC}",
  paraguay: "\u{1F1F5}\u{1F1FE}",
  qatar: "\u{1F1F6}\u{1F1E6}",
  reunion: "\u{1F1F7}\u{1F1EA}",
  romania: "\u{1F1F7}\u{1F1F4}",
  serbia: "\u{1F1F7}\u{1F1F8}",
  ru: "\u{1F1F7}\u{1F1FA}",
  rwanda: "\u{1F1F7}\u{1F1FC}",
  saudi_arabia: "\u{1F1F8}\u{1F1E6}",
  solomon_islands: "\u{1F1F8}\u{1F1E7}",
  seychelles: "\u{1F1F8}\u{1F1E8}",
  sudan: "\u{1F1F8}\u{1F1E9}",
  sweden: "\u{1F1F8}\u{1F1EA}",
  singapore: "\u{1F1F8}\u{1F1EC}",
  st_helena: "\u{1F1F8}\u{1F1ED}",
  slovenia: "\u{1F1F8}\u{1F1EE}",
  svalbard_jan_mayen: "\u{1F1F8}\u{1F1EF}",
  slovakia: "\u{1F1F8}\u{1F1F0}",
  sierra_leone: "\u{1F1F8}\u{1F1F1}",
  san_marino: "\u{1F1F8}\u{1F1F2}",
  senegal: "\u{1F1F8}\u{1F1F3}",
  somalia: "\u{1F1F8}\u{1F1F4}",
  suriname: "\u{1F1F8}\u{1F1F7}",
  south_sudan: "\u{1F1F8}\u{1F1F8}",
  sao_tome_principe: "\u{1F1F8}\u{1F1F9}",
  el_salvador: "\u{1F1F8}\u{1F1FB}",
  sint_maarten: "\u{1F1F8}\u{1F1FD}",
  syria: "\u{1F1F8}\u{1F1FE}",
  swaziland: "\u{1F1F8}\u{1F1FF}",
  tristan_da_cunha: "\u{1F1F9}\u{1F1E6}",
  turks_caicos_islands: "\u{1F1F9}\u{1F1E8}",
  chad: "\u{1F1F9}\u{1F1E9}",
  french_southern_territories: "\u{1F1F9}\u{1F1EB}",
  togo: "\u{1F1F9}\u{1F1EC}",
  thailand: "\u{1F1F9}\u{1F1ED}",
  tajikistan: "\u{1F1F9}\u{1F1EF}",
  tokelau: "\u{1F1F9}\u{1F1F0}",
  timor_leste: "\u{1F1F9}\u{1F1F1}",
  turkmenistan: "\u{1F1F9}\u{1F1F2}",
  tunisia: "\u{1F1F9}\u{1F1F3}",
  tonga: "\u{1F1F9}\u{1F1F4}",
  tr: "\u{1F1F9}\u{1F1F7}",
  trinidad_tobago: "\u{1F1F9}\u{1F1F9}",
  tuvalu: "\u{1F1F9}\u{1F1FB}",
  taiwan: "\u{1F1F9}\u{1F1FC}",
  tanzania: "\u{1F1F9}\u{1F1FF}",
  ukraine: "\u{1F1FA}\u{1F1E6}",
  uganda: "\u{1F1FA}\u{1F1EC}",
  us_outlying_islands: "\u{1F1FA}\u{1F1F2}",
  united_nations: "\u{1F1FA}\u{1F1F3}",
  us: "\u{1F1FA}\u{1F1F8}",
  uruguay: "\u{1F1FA}\u{1F1FE}",
  uzbekistan: "\u{1F1FA}\u{1F1FF}",
  vatican_city: "\u{1F1FB}\u{1F1E6}",
  st_vincent_grenadines: "\u{1F1FB}\u{1F1E8}",
  venezuela: "\u{1F1FB}\u{1F1EA}",
  british_virgin_islands: "\u{1F1FB}\u{1F1EC}",
  us_virgin_islands: "\u{1F1FB}\u{1F1EE}",
  vietnam: "\u{1F1FB}\u{1F1F3}",
  vanuatu: "\u{1F1FB}\u{1F1FA}",
  wallis_futuna: "\u{1F1FC}\u{1F1EB}",
  samoa: "\u{1F1FC}\u{1F1F8}",
  kosovo: "\u{1F1FD}\u{1F1F0}",
  yemen: "\u{1F1FE}\u{1F1EA}",
  mayotte: "\u{1F1FE}\u{1F1F9}",
  south_africa: "\u{1F1FF}\u{1F1E6}",
  zambia: "\u{1F1FF}\u{1F1F2}",
  zimbabwe: "\u{1F1FF}\u{1F1FC}",
  england: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
  scotland: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
  wales: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"
};

// node_modules/.pnpm/remark-gemoji@7.0.1/node_modules/remark-gemoji/index.js
var find2 = /:(\+1|[-\w]+):/g, own16 = {}.hasOwnProperty;
function remarkGemoji() {
  return (tree) => {
    visit(tree, "text", (node) => {
      let value = node.value, slices = [];
      find2.lastIndex = 0;
      let match = find2.exec(value), start = 0;
      for (; match; ) {
        let emoji = match[1], position3 = match.index;
        own16.call(nameToEmoji, emoji) ? (start !== position3 && slices.push(value.slice(start, position3)), slices.push(nameToEmoji[emoji]), start = position3 + match[0].length) : find2.lastIndex = position3 + 1, match = find2.exec(value);
      }
      slices.length > 0 && (slices.push(value.slice(start)), node.value = slices.join(""));
    });
  };
}

// app/routes/repository.$repoName.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function loader2({ params }) {
  let repoName = params.repoName, repo = await getGithubRepoDetail(repoName), readme, readmeResponse = await getGithubReadme(repoName);
  return readmeResponse.data && (readme = readmeResponse.data, readme.content = atob(readme.content)), console.log(readme == null ? void 0 : readme.content), (0, import_node3.json)({
    repository: repo.data,
    readme: readme || void 0
  });
}
function Repository() {
  let loader6 = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "px-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
      className: "prose dark:prose-invert",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReactMarkdown, {
        components: {
          code({ node, inline, className, children, ...props }) {
            let match = /language-(\w+)/.exec(className || "");
            return !inline && match ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_syntax_highlighter.Prism, {
              showLineNumbers: !0,
              style: import_prism.oneDark,
              language: match[1],
              PreTag: "div",
              ...props,
              children: String(children).replace(/\n$/, "")
            }, void 0, !1, {
              fileName: "app/routes/repository.$repoName.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", {
              children
            }, void 0, !1, {
              fileName: "app/routes/repository.$repoName.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this);
          }
        },
        remarkPlugins: [remarkGemoji, remarkGfm],
        rehypePlugins: [rehypeRaw],
        children: loader6.readme.content
      }, void 0, !1, {
        fileName: "app/routes/repository.$repoName.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/repository.$repoName.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/repository.$repoName.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/action/set-theme.tsx
var set_theme_exports = {};
__export(set_theme_exports, {
  action: () => action,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node");
var action = async ({ request }) => {
  let theme = await getThemeSession(request), newTheme = theme.getTheme() === "light" ? "dark" : "light";
  return theme.setTheme(newTheme), (0, import_node4.json)(
    { success: !0 },
    { headers: { "Set-Cookie": await theme.commit() } }
  );
}, loader3 = () => (0, import_node4.redirect)("/", { status: 404 });

// app/routes/repository.tsx
var repository_exports = {};
__export(repository_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Index,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react19 = require("@remix-run/react");

// app/api/getGithubRepos.ts
function GetGithubRepos(page = 1, perPage = 15) {
  return new Promise((resolve, reject) => {
    let q = [];
    q.push(`user:${config_default.githubUsername}`), config_default.githubTopic && q.push(`topic:${config_default.githubTopic}`);
    let query = new URLSearchParams({
      q: q.join(" "),
      page: page.toString(),
      per_page: perPage.toString()
    });
    console.info(`https://api.github.com/search/repositories?${query}`);
    let cacheKey = `repositories.${query}`, cacheExist = cache_default.get(cacheKey);
    if (cacheExist)
      return resolve(cacheExist), console.info("GetGithubReposResponse: from cache"), !0;
    fetch(`https://api.github.com/search/repositories?${query}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }).then(async (response) => {
      let json6 = await response.json(), result = {
        data: response.ok ? json6 : void 0,
        error: response.ok ? void 0 : { type: "api", ...json6 }
      };
      response.ok && cache_default.set(cacheKey, result), resolve(result);
    }).catch((error) => {
      resolve({
        data: void 0,
        error
      });
    }).finally(() => {
      console.info("GetGithubReposResponse: from response");
    });
  });
}

// app/components/paginate.tsx
var import_react16 = require("@remix-run/react"), import_ri2 = require("react-icons/ri"), import_fa = require("react-icons/fa"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LEFT_PAGE = "LEFT", RIGHT_PAGE = "RIGHT", range = (from, to, step = 1) => {
  let i = from, range2 = [];
  for (; i <= to; )
    range2.push(i), i += step;
  return range2;
};
function Paginate(props) {
  let navigate = (0, import_react16.useNavigate)(), totalPages = Math.ceil(props.totalData / props.dataPerPage), pages = (() => {
    let currentPage = props.currentPage, pageNeighbours = 2, totalNumbers = 2 * 1 + 3, totalBlocks = totalNumbers + 2;
    if (totalPages > totalBlocks) {
      let startPage = Math.max(2, currentPage - pageNeighbours), endPage = Math.min(totalPages - 1, currentPage + pageNeighbours), pages2 = range(startPage, endPage), hasLeftSpill = startPage > 2, hasRightSpill = totalPages - endPage > 1, spillOffset = totalNumbers - (pages2.length + 1);
      switch (!0) {
        case (hasLeftSpill && !hasRightSpill): {
          let extraPages = range(startPage - spillOffset, startPage - 1);
          pages2 = [LEFT_PAGE, ...extraPages, ...pages2];
          break;
        }
        case (!hasLeftSpill && hasRightSpill): {
          let extraPages = range(endPage + 1, endPage + spillOffset);
          pages2 = [...pages2, ...extraPages, RIGHT_PAGE];
          break;
        }
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages2 = [LEFT_PAGE, ...pages2, RIGHT_PAGE];
          break;
        }
      }
      return [1, ...pages2, totalPages];
    }
    return range(1, totalPages);
  })();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full flex flex-col items-center py-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "btn-group",
      children: [
        props.currentPage - 1 > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Link, {
          rel: "canonical",
          to: `.?page=${props.currentPage - 1}`,
          className: "btn",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri2.RiArrowLeftFill, {}, void 0, !1, {
            fileName: "app/components/paginate.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/paginate.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "btn btn-disabled",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri2.RiArrowLeftFill, {}, void 0, !1, {
            fileName: "app/components/paginate.tsx",
            lineNumber: 110,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/paginate.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        pages.map((page, index2) => page === LEFT_PAGE ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "btn btn-outline pointer-events-none",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_fa.FaEllipsisH, {}, void 0, !1, {
            fileName: "app/components/paginate.tsx",
            lineNumber: 117,
            columnNumber: 17
          }, this)
        }, void 0, !1, {
          fileName: "app/components/paginate.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this) : page === RIGHT_PAGE ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "btn btn-outline pointer-events-none",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_fa.FaEllipsisH, {}, void 0, !1, {
            fileName: "app/components/paginate.tsx",
            lineNumber: 124,
            columnNumber: 17
          }, this)
        }, void 0, !1, {
          fileName: "app/components/paginate.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Link, {
          rel: "canonical",
          className: `btn ${page == props.currentPage ? "btn-active" : ""}`,
          to: `.?page=${page}`,
          children: page
        }, index2, !1, {
          fileName: "app/components/paginate.tsx",
          lineNumber: 129,
          columnNumber: 13
        }, this)),
        props.currentPage + 1 <= totalPages ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react16.Link, {
          rel: "canonical",
          to: `.?page=${props.currentPage + 1}`,
          className: "btn",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri2.RiArrowRightFill, {}, void 0, !1, {
            fileName: "app/components/paginate.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/paginate.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "btn btn-disabled",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri2.RiArrowRightFill, {}, void 0, !1, {
            fileName: "app/components/paginate.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/components/paginate.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/paginate.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/paginate.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/components/repoCards.tsx
var import_go = require("react-icons/go"), import_react17 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function RepoCards(props) {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "w-full px-10",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "lg:columns-3 md:columns-2 sm:columns-1 xs:columns-1 gap-8 space-y-8",
        children: (_a = props.repositories) == null ? void 0 : _a.map((repository, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RepoCard, {
          repository,
          index: index2
        }, index2, !1, {
          fileName: "app/components/repoCards.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this))
      }, void 0, !1, {
        fileName: "app/components/repoCards.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/repoCards.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/repoCards.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function RepoCard({
  repository,
  index: index2
}) {
  let left = (index2 + 1) % 2 == 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Link, {
    to: `/repository/${repository.name}`,
    className: "group card card-compact bg-base-100 shadow-xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
        className: "flex flex-col h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `transition ease-in-out  align-middle text-slate-100 capitalize text-5xl font-semibold w-full text-center group-hover:-translate-y-1 group-hover:scale-150 duration-300 ${left ? "group-hover:-rotate-12" : "group-hover:rotate-12"} `,
          children: repository.name[0].toUpperCase()
        }, void 0, !1, {
          fileName: "app/components/repoCards.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/repoCards.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "card-body",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "card-title",
            children: repository.name
          }, void 0, !1, {
            fileName: "app/components/repoCards.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: repository.description
          }, void 0, !1, {
            fileName: "app/components/repoCards.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "card-actions justify-end",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "badge badge-outline",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mr-1",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_go.GoGitBranch, {}, void 0, !1, {
                      fileName: "app/components/repoCards.tsx",
                      lineNumber: 56,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/repoCards.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: repository.forks_count
                  }, void 0, !1, {
                    fileName: "app/components/repoCards.tsx",
                    lineNumber: 58,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/repoCards.tsx",
                lineNumber: 54,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "badge badge-outline",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mr-1",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_go.GoStar, {}, void 0, !1, {
                      fileName: "app/components/repoCards.tsx",
                      lineNumber: 62,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/components/repoCards.tsx",
                    lineNumber: 61,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: repository.stargazers_count
                  }, void 0, !1, {
                    fileName: "app/components/repoCards.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/components/repoCards.tsx",
                lineNumber: 60,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/components/repoCards.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/repoCards.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/repoCards.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/components/errors/component.tsx
var import_react18 = require("@remix-run/react"), import_ri3 = require("react-icons/ri"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function RenderErrorComponent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "px-4 py-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "card w-full bg-error text-error-content",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "card-body items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-8xl",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri3.RiBugLine, {}, void 0, !1, {
              fileName: "app/components/errors/component.tsx",
              lineNumber: 9,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/errors/component.tsx",
            lineNumber: 8,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "card-title",
            children: "Opps something happened!"
          }, void 0, !1, {
            fileName: "app/components/errors/component.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            children: [
              "I'm sorry if you seen this message. It seem ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
                children: '"tiar"'
              }, void 0, !1, {
                fileName: "app/components/errors/component.tsx",
                lineNumber: 14,
                columnNumber: 57
              }, this),
              " had some error with this page. He will fix this page soon."
            ]
          }, void 0, !0, {
            fileName: "app/components/errors/component.tsx",
            lineNumber: 13,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "card-actions justify-end mt-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react18.Link, {
              to: ".",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "btn btn-ghost gap-2 underline",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_ri3.RiRefreshLine, {}, void 0, !1, {
                    fileName: "app/components/errors/component.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                  }, this),
                  " Refresh"
                ]
              }, void 0, !0, {
                fileName: "app/components/errors/component.tsx",
                lineNumber: 19,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/errors/component.tsx",
              lineNumber: 18,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/components/errors/component.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/errors/component.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/components/errors/component.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/errors/component.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/repository.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ErrorBoundary = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RenderErrorComponent, {}, void 0, !1, {
  fileName: "app/routes/repository.tsx",
  lineNumber: 11,
  columnNumber: 10
}, this), loader4 = async ({ request }) => {
  let page = new URL(request.url).searchParams.get("page"), currentPage = parseInt(page || "1") || 1, { data, error } = await GetGithubRepos(currentPage, 15);
  return (0, import_node5.json)({ repositories: data, error, currentPage });
};
function Index() {
  let { repositories, error, currentPage } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RepoCards, {
        repositories: repositories.items || []
      }, void 0, !1, {
        fileName: "app/routes/repository.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Paginate, {
        dataPerPage: 9,
        currentPage,
        totalData: repositories.total_count
      }, void 0, !1, {
        fileName: "app/routes/repository.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/repository.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route4 = __toESM(require_aboutMe());

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Index2,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node"), import_react22 = require("@remix-run/react");

// app/components/cta.tsx
var import_react20 = require("@headlessui/react"), import_react21 = require("react");

// app/assets/images/avatar.svg
var avatar_default = "/build/_assets/avatar-A52KPWKU.svg";

// app/components/cta.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Cta() {
  let [isShowing, setIsShowing] = (0, import_react21.useState)(!1), [isShowingCall, setIsShowingCall] = (0, import_react21.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    onMouseEnter: () => setIsShowing(!0),
    onMouseLeave: () => setIsShowing(!1),
    className: "bg-white dark:bg-gray-800 overflow-hidden relative flex md:flex-row flex-col",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "xs:w-full sm:w-full text-start  w-full md:w-1/2 lg:w-2/3 py-10 px-4 sm:px-6 lg:py-10 lg:px-8 z-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-3xl font-extrabold text-black dark:text-white sm:text-4xl",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "block",
              children: "Hi \u{1F44B}, I'm Adha Bakhtiar"
            }, void 0, !1, {
              fileName: "app/components/cta.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/cta.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-lg text-violet-600 dark:text-violet-300",
            children: "A passionate frontend & backend developer from Indonesia \u{1F1EE}\u{1F1E9}"
          }, void 0, !1, {
            fileName: "app/components/cta.tsx",
            lineNumber: 17,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-lg mt-4 text-gray-800 dark:text-gray-200",
            children: "Bakhtiar currently working on PT. Doran Sukses Indonesia as frontend & backend enginer. He has several skills including ReactJS, VueJS, AngularJS, React Native, Flutter, NextJS, NuxtJS, NestJs, Laravel"
          }, void 0, !1, {
            fileName: "app/components/cta.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "lg:mt-0 lg:flex-shrink-0",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-12 inline-flex rounded-md shadow",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                onMouseEnter: () => setIsShowingCall(!0),
                onMouseLeave: () => setIsShowingCall(!1),
                type: "button",
                className: "py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ",
                children: "More About Him..."
              }, void 0, !1, {
                fileName: "app/components/cta.tsx",
                lineNumber: 27,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/cta.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/cta.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/cta.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "xs:w-full sm:w-full md:w-1/2 min-h-full lg:w-2/3 flex items-center flex-col relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react20.Transition, {
            show: isShowingCall,
            appear: !0,
            unmount: !1,
            enter: "transition-opacity duration-75",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "transition-opacity duration-150",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            className: "md:absolute relative z-10 top-2 right-2 !block",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "rounded-full bg-white w-64 flex items-center border-dotted border-2 border-violet-500 ",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "w-full px-4 py-6 text-center",
                children: "Yeah go ahead!!!"
              }, void 0, !1, {
                fileName: "app/components/cta.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/components/cta.tsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/cta.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react20.Transition, {
            show: isShowing,
            unmount: !1,
            enter: "transition-bottom duration-75",
            enterFrom: "-bottom-10",
            enterTo: "bottom-0",
            leave: "transition-bottom duration-150",
            leaveFrom: "bottom-0",
            leaveTo: "-bottom-10",
            className: "right-0 -bottom-10 !block relative md:absolute ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: avatar_default,
              className: "h-full w-60"
            }, void 0, !1, {
              fileName: "app/components/cta.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/cta.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/cta.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/cta.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader5 = async () => {
  let { data, error } = await GetGithubRepos(1, 3);
  return (0, import_node6.json)({ repositories: data == null ? void 0 : data.items, error });
};
function Index2() {
  let { repositories, error } = (0, import_react22.useLoaderData)();
  return console.info(repositories), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RepoCards, {
            repositories
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Link, {
            className: "btn btn-link",
            to: "repository",
            children: "Show all repositories"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var ErrorBoundary2 = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RenderErrorComponent, {}, void 0, !1, {
  fileName: "app/routes/index.tsx",
  lineNumber: 36,
  columnNumber: 10
}, this);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "fc0e93ee", entry: { module: "/build/entry.client-PLYO3SFV.js", imports: ["/build/_shared/chunk-A2YXLOHS.js", "/build/_shared/chunk-VCOUTWMJ.js", "/build/_shared/chunk-DF3EUDCN.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JJ3B7TGZ.js", imports: ["/build/_shared/chunk-5IXPVAJX.js", "/build/_shared/chunk-EDOSB7CT.js", "/build/_shared/chunk-N5MDCD5X.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aboutMe": { id: "routes/aboutMe", parentId: "root", path: "aboutMe", index: void 0, caseSensitive: void 0, module: "/build/routes/aboutMe-RXL4AIFF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/action/set-theme": { id: "routes/action/set-theme", parentId: "root", path: "action/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action/set-theme-SARVBQVM.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZXYJT5VK.js", imports: ["/build/_shared/chunk-OSUSCEKX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/repository": { id: "routes/repository", parentId: "root", path: "repository", index: void 0, caseSensitive: void 0, module: "/build/routes/repository-VFX34HD7.js", imports: ["/build/_shared/chunk-OSUSCEKX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/repository.$repoName": { id: "routes/repository.$repoName", parentId: "root", path: "repository/:repoName", index: void 0, caseSensitive: void 0, module: "/build/routes/repository.$repoName-Z2RIKJMU.js", imports: ["/build/_shared/chunk-4V2367GV.js", "/build/_shared/chunk-UVQV72B6.js", "/build/_shared/chunk-HY6HMZSN.js", "/build/_shared/chunk-H4BL5VG4.js", "/build/_shared/chunk-S3WDQVVH.js", "/build/_shared/chunk-LYL74Y4Y.js", "/build/_shared/chunk-66YPE6EH.js", "/build/_shared/chunk-K7QOPNAE.js", "/build/_shared/chunk-AUQZUQGK.js", "/build/_shared/chunk-GS7S3BZY.js", "/build/_shared/chunk-QG6R6CP3.js", "/build/_shared/chunk-G7PTAIMV.js", "/build/_shared/chunk-P7L5KWL4.js", "/build/_shared/chunk-ZMRHPIB4.js", "/build/_shared/chunk-TUCLFLUK.js", "/build/_shared/chunk-THC4APOE.js", "/build/_shared/chunk-FPIASUXO.js", "/build/_shared/chunk-U2X6LCFE.js", "/build/_shared/chunk-7DIDYYVO.js", "/build/_shared/chunk-BISBOYET.js", "/build/_shared/chunk-VJFZN4US.js", "/build/_shared/chunk-WXQO4RGC.js", "/build/_shared/chunk-2TSHK7XU.js", "/build/_shared/chunk-QSJ4DOPL.js", "/build/_shared/chunk-JIS3XBDS.js", "/build/_shared/chunk-AIGHSTDY.js", "/build/_shared/chunk-3SIGYE3Q.js", "/build/_shared/chunk-BYTXUVJB.js", "/build/_shared/chunk-KYRHA4SF.js", "/build/_shared/chunk-XNZE6SD4.js", "/build/_shared/chunk-CJHRGJSL.js", "/build/_shared/chunk-YXICH3US.js", "/build/_shared/chunk-IQO3PUHD.js", "/build/_shared/chunk-FBNE5LSY.js", "/build/_shared/chunk-TXM73QDX.js", "/build/_shared/chunk-KWDYTIQ3.js", "/build/_shared/chunk-7QQ7JLN6.js", "/build/_shared/chunk-RGGPBZCE.js", "/build/_shared/chunk-O6FJKJWL.js", "/build/_shared/chunk-OSKKE4IS.js", "/build/_shared/chunk-G5CZUMVZ.js", "/build/_shared/chunk-BEQ4VYJQ.js", "/build/_shared/chunk-PD5JAS4M.js", "/build/_shared/chunk-3ZJ7Q2LE.js", "/build/_shared/chunk-QHBKTI5P.js", "/build/_shared/chunk-UVUHAXVD.js", "/build/_shared/chunk-T4FUV5XY.js", "/build/_shared/chunk-OVKI26VJ.js", "/build/_shared/chunk-W5AYQ3AE.js", "/build/_shared/chunk-6UV2GEVH.js", "/build/_shared/chunk-6Z5O43ME.js", "/build/_shared/chunk-QI7XOGTF.js", "/build/_shared/chunk-WVGIYPHX.js", "/build/_shared/chunk-Q5IFE4CT.js", "/build/_shared/chunk-R55WSE73.js", "/build/_shared/chunk-H4AECMNO.js", "/build/_shared/chunk-3G7LIMA2.js", "/build/_shared/chunk-GJ4QGMTP.js", "/build/_shared/chunk-A2QANK4K.js", "/build/_shared/chunk-BEKQJRMR.js", "/build/_shared/chunk-GCB4HGMC.js", "/build/_shared/chunk-QROJFESC.js", "/build/_shared/chunk-FXALFBYC.js", "/build/_shared/chunk-OANAASCZ.js", "/build/_shared/chunk-QG6QSA6P.js", "/build/_shared/chunk-WOF3WKL4.js", "/build/_shared/chunk-XEY4X4JV.js", "/build/_shared/chunk-EFANF5LW.js", "/build/_shared/chunk-7BKWZ7SW.js", "/build/_shared/chunk-R7L7UDU4.js", "/build/_shared/chunk-SAKT47NA.js", "/build/_shared/chunk-CM5KYQRG.js", "/build/_shared/chunk-YRN3F2GO.js", "/build/_shared/chunk-BYMYERRM.js", "/build/_shared/chunk-FJ2WPK4Y.js", "/build/_shared/chunk-YNOC3BNH.js", "/build/_shared/chunk-QOTZN7NX.js", "/build/_shared/chunk-3OWPTHPD.js", "/build/_shared/chunk-HBZZXLEV.js", "/build/_shared/chunk-EJ6PNR34.js", "/build/_shared/chunk-W5VFQD32.js", "/build/_shared/chunk-SJWUMQV3.js", "/build/_shared/chunk-DC724BOR.js", "/build/_shared/chunk-44YPOGWV.js", "/build/_shared/chunk-UUEPHPSN.js", "/build/_shared/chunk-CG6VXUBM.js", "/build/_shared/chunk-37MULJQS.js", "/build/_shared/chunk-Y5HJ6LOE.js", "/build/_shared/chunk-YQGS576K.js", "/build/_shared/chunk-LP433SD3.js", "/build/_shared/chunk-UPZ74GRT.js", "/build/_shared/chunk-OFQFB4CX.js", "/build/_shared/chunk-CXP2NVZ5.js", "/build/_shared/chunk-UB3JTGLK.js", "/build/_shared/chunk-Y3DB5DFY.js", "/build/_shared/chunk-2HLSLTFL.js", "/build/_shared/chunk-PHMBMNQ4.js", "/build/_shared/chunk-GGA2Y4TJ.js", "/build/_shared/chunk-GUCHR4SW.js", "/build/_shared/chunk-Q7PZASDQ.js", "/build/_shared/chunk-BBCWZ4RT.js", "/build/_shared/chunk-YVRSJZQB.js", "/build/_shared/chunk-26X67PK6.js", "/build/_shared/chunk-POAYH57I.js", "/build/_shared/chunk-AD23OH6V.js", "/build/_shared/chunk-ZOSEHBWK.js", "/build/_shared/chunk-KHWJLVBT.js", "/build/_shared/chunk-OGN7UP6U.js", "/build/_shared/chunk-ZUGKJIRS.js", "/build/_shared/chunk-PC52AKW3.js", "/build/_shared/chunk-IBS5TOYI.js", "/build/_shared/chunk-HDU4ECTC.js", "/build/_shared/chunk-QUR7CQFH.js", "/build/_shared/chunk-42YG6GKF.js", "/build/_shared/chunk-OP6MQAXJ.js", "/build/_shared/chunk-AMXZGY7G.js", "/build/_shared/chunk-L4M52H3Y.js", "/build/_shared/chunk-AH7RVGBL.js", "/build/_shared/chunk-HEU6LSKU.js", "/build/_shared/chunk-N6TZXAZG.js", "/build/_shared/chunk-4VXOCH5F.js", "/build/_shared/chunk-L2VXOPC7.js", "/build/_shared/chunk-YXTWZWST.js", "/build/_shared/chunk-IGDM6UGM.js", "/build/_shared/chunk-DNABBBOV.js", "/build/_shared/chunk-ZT5FUN6A.js", "/build/_shared/chunk-EWOAOQ2K.js", "/build/_shared/chunk-OA5RVYSK.js", "/build/_shared/chunk-ENFEY4YZ.js", "/build/_shared/chunk-NLOOLAFC.js", "/build/_shared/chunk-YDJY3MBA.js", "/build/_shared/chunk-PRXL4I3G.js", "/build/_shared/chunk-AKLCBBD3.js", "/build/_shared/chunk-HCAGLZJ2.js", "/build/_shared/chunk-TMJG2XA5.js", "/build/_shared/chunk-NV277LND.js", "/build/_shared/chunk-BY7K2RU4.js", "/build/_shared/chunk-YANNB2QP.js", "/build/_shared/chunk-U42INIXZ.js", "/build/_shared/chunk-4MBFMO2C.js", "/build/_shared/chunk-FIMFEZ43.js", "/build/_shared/chunk-5U5YQIFS.js", "/build/_shared/chunk-2SJ3V4UN.js", "/build/_shared/chunk-W5F3CVAB.js", "/build/_shared/chunk-NZKTNS2C.js", "/build/_shared/chunk-YZ4D4WIL.js", "/build/_shared/chunk-ZJZHZNTA.js", "/build/_shared/chunk-QWP34KVF.js", "/build/_shared/chunk-M6UEIWM3.js", "/build/_shared/chunk-X6ZW64TS.js", "/build/_shared/chunk-TBZCBC6I.js", "/build/_shared/chunk-CYY6GOGL.js", "/build/_shared/chunk-3LNU7773.js", "/build/_shared/chunk-PEAGM2DJ.js", "/build/_shared/chunk-67S6YEUP.js", "/build/_shared/chunk-V4VDXXQO.js", "/build/_shared/chunk-SPM33WT5.js", "/build/_shared/chunk-WW7GINNS.js", "/build/_shared/chunk-2Z63ZXBM.js", "/build/_shared/chunk-DDIC3KSY.js", "/build/_shared/chunk-772M2GKS.js", "/build/_shared/chunk-R37OKIBI.js", "/build/_shared/chunk-S44PJTLA.js", "/build/_shared/chunk-KUO5AOB5.js", "/build/_shared/chunk-C4OSTTRQ.js", "/build/_shared/chunk-TMU7ENY7.js", "/build/_shared/chunk-J3MGG23C.js", "/build/_shared/chunk-2FZ5R2RK.js", "/build/_shared/chunk-QBTNERGH.js", "/build/_shared/chunk-46YZWPNF.js", "/build/_shared/chunk-4NYX4ZBU.js", "/build/_shared/chunk-U3CEEQG4.js", "/build/_shared/chunk-MHZSURRH.js", "/build/_shared/chunk-FD3DCY7H.js", "/build/_shared/chunk-7XDBMQKT.js", "/build/_shared/chunk-7JJNVAU7.js", "/build/_shared/chunk-3B5O6ZZH.js", "/build/_shared/chunk-ZNFORU2P.js", "/build/_shared/chunk-VWF2XXX3.js", "/build/_shared/chunk-HNEKREZW.js", "/build/_shared/chunk-Y754NXDT.js", "/build/_shared/chunk-SZC2CZYH.js", "/build/_shared/chunk-SYXPKXX3.js", "/build/_shared/chunk-A5SV5GUM.js", "/build/_shared/chunk-YLRL5QVT.js", "/build/_shared/chunk-AFX7H6X2.js", "/build/_shared/chunk-YYRK7AJR.js", "/build/_shared/chunk-WKKYLU62.js", "/build/_shared/chunk-5TY6EDYS.js", "/build/_shared/chunk-QBK54VGF.js", "/build/_shared/chunk-AMOFI3AC.js", "/build/_shared/chunk-AS2MQREW.js", "/build/_shared/chunk-UEWB73OO.js", "/build/_shared/chunk-OS32HI3D.js", "/build/_shared/chunk-UCCOWDQE.js", "/build/_shared/chunk-YVJBMAAQ.js", "/build/_shared/chunk-BL3JBKWG.js", "/build/_shared/chunk-CVTHCJ7H.js", "/build/_shared/chunk-G43TTS3K.js", "/build/_shared/chunk-5JE652YG.js", "/build/_shared/chunk-A2TO5XBK.js", "/build/_shared/chunk-JQCEFZ4B.js", "/build/_shared/chunk-34LQ3OL4.js", "/build/_shared/chunk-XLSLI25U.js", "/build/_shared/chunk-ZBN2TVL3.js", "/build/_shared/chunk-FQJA7YWX.js", "/build/_shared/chunk-QVPPLWWE.js", "/build/_shared/chunk-7YMCYIKN.js", "/build/_shared/chunk-IQZP264Y.js", "/build/_shared/chunk-K5BRBWTF.js", "/build/_shared/chunk-4MOPHHML.js", "/build/_shared/chunk-KPI4R3QM.js", "/build/_shared/chunk-DC3V6PY3.js", "/build/_shared/chunk-4AEQHV42.js", "/build/_shared/chunk-4IQOBBNX.js", "/build/_shared/chunk-ORU6MQJY.js", "/build/_shared/chunk-EIZFHKJP.js", "/build/_shared/chunk-SOUKKZCU.js", "/build/_shared/chunk-54QRYLFP.js", "/build/_shared/chunk-DP53LYH4.js", "/build/_shared/chunk-F4DUDXCJ.js", "/build/_shared/chunk-ZUBYFKAE.js", "/build/_shared/chunk-34ONCYRN.js", "/build/_shared/chunk-ZLSTW7QP.js", "/build/_shared/chunk-NSY7SM5E.js", "/build/_shared/chunk-4L7374HS.js", "/build/_shared/chunk-HW2HHO5P.js", "/build/_shared/chunk-TMBLSZIB.js", "/build/_shared/chunk-KMV7FFIJ.js", "/build/_shared/chunk-I3PTEK6V.js", "/build/_shared/chunk-IRHL27PU.js", "/build/_shared/chunk-UUAMRUXC.js", "/build/_shared/chunk-4HZE7HQ2.js", "/build/_shared/chunk-H24SW5A6.js", "/build/_shared/chunk-UA5BG67N.js", "/build/_shared/chunk-FR4JCMEI.js", "/build/_shared/chunk-OSDWJ6X6.js", "/build/_shared/chunk-FHSW2HPJ.js", "/build/_shared/chunk-HLCFKPMT.js", "/build/_shared/chunk-ZDC5N4FL.js", "/build/_shared/chunk-RCBD76YJ.js", "/build/_shared/chunk-KO3C5ACK.js", "/build/_shared/chunk-TPYZBWHR.js", "/build/_shared/chunk-IPQVVVUE.js", "/build/_shared/chunk-4K7FVBCB.js", "/build/_shared/chunk-EJ7N24JU.js", "/build/_shared/chunk-FNZPZAFS.js", "/build/_shared/chunk-IIRXFXA7.js", "/build/_shared/chunk-GIEYBCBR.js", "/build/_shared/chunk-TKNMRJHE.js", "/build/_shared/chunk-3HBRM4AC.js", "/build/_shared/chunk-OO7ZR4NS.js", "/build/_shared/chunk-M3NQAPOW.js", "/build/_shared/chunk-3MHKIE4T.js", "/build/_shared/chunk-ZIPZJE7K.js", "/build/_shared/chunk-74FRJD56.js", "/build/_shared/chunk-EWEJIUUK.js", "/build/_shared/chunk-5AA3WEYS.js", "/build/_shared/chunk-7G6CRAH3.js", "/build/_shared/chunk-HVSMPTBG.js", "/build/_shared/chunk-G2IVRHMM.js", "/build/_shared/chunk-VLID2CG2.js", "/build/_shared/chunk-IKN4ZXIW.js", "/build/_shared/chunk-X6675VUC.js", "/build/_shared/chunk-IRZB643R.js", "/build/_shared/chunk-SXCVAXXQ.js", "/build/_shared/chunk-2YRZSKUE.js", "/build/_shared/chunk-OAVCV57R.js", "/build/_shared/chunk-WOM2DDHE.js", "/build/_shared/chunk-NZLQT5WN.js", "/build/_shared/chunk-HK5RVPEC.js", "/build/_shared/chunk-XWSJ2TVD.js", "/build/_shared/chunk-JZ5NMFLL.js", "/build/_shared/chunk-TBQQOVKG.js", "/build/_shared/chunk-7RY2C7ZX.js", "/build/_shared/chunk-ZOBFVQXD.js", "/build/_shared/chunk-UDC5WOBE.js", "/build/_shared/chunk-EA3OZ24C.js", "/build/_shared/chunk-37PTWADO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-FC0E93EE.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/repository.$repoName": {
    id: "routes/repository.$repoName",
    parentId: "root",
    path: "repository/:repoName",
    index: void 0,
    caseSensitive: void 0,
    module: repository_repoName_exports
  },
  "routes/action/set-theme": {
    id: "routes/action/set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: set_theme_exports
  },
  "routes/repository": {
    id: "routes/repository",
    parentId: "root",
    path: "repository",
    index: void 0,
    caseSensitive: void 0,
    module: repository_exports
  },
  "routes/aboutMe": {
    id: "routes/aboutMe",
    parentId: "root",
    path: "aboutMe",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
