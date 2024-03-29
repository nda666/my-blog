/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      sans: [
        "Jost",
        "-apple-system",
        "blinkmacsystemfont",
        "Segoe UI",
        "roboto",
        "Helvetica Neue",
        "arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      body: [
        "Jost",
        "-apple-system",
        "blinkmacsystemfont",
        "Segoe UI",
        "roboto",
        "Helvetica Neue",
        "arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      mono: [
        "Fira Code",
        "Fira Mono",
        "Menlo",
        "Consolas",
        "DejaVu Sans Mono",
        "monospace",
      ],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              pre: {
                padding: 0,
              },
              "pre > div": {
                margin: "0 !important",
              },
              "ul > li.task-list-item::before": {
                content: "none",
              },
              "ul > li.task-list-item input": {
                margin: 0,
              },
              img: {
                display: "unset",
                marginTop: "unset",
                marginBottom: "unset",
              },
            },
          ],
        },
      }),
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#883aed",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
