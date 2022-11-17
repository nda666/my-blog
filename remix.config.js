/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  // serverBuildTarget: "netlify",
  // server:
  //   process.env.NETLIFY || process.env.NETLIFY_LOCAL
  //     ? "./server.js"
  //     : undefined,

  serverBuildTarget: "vercel",
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",

  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
  serverDependenciesToBundle: [
    /^rehype.*/,
    /^remark.*/,
    /^unified.*/,
    /^unist.*/,
    /^hast.*/,
    /^bail.*/,
    /^trough.*/,
    /^mdast.*/,
    /^micromark.*/,
    /^decode.*/,
    /^character.*/,
    /^property.*/,
    /^space.*/,
    /^comma.*/,
    /^react-markdown$/,
    /^vfile.*/,
    /^trim-lines.*/,
    /^ccount.*/,
    /^markdown-table.*/,
    /^web-namespaces.*/,
    /^zwitch.*/,
    /^html-void-elements.*/,
    /^gemoji.*/,
    /^is-plain-obj.*/,
    /^escape-string-regexp.*/,
    /three\/examples\/jsm\/loaders\/FontLoader/,
    /three\/examples\/jsm\/geometries\/TextGeometry/,
    /three\/examples\/jsm\/controls\/OrbitControls/,
  ],
};
