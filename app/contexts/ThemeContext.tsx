import { useFetcher } from "@remix-run/react";
import { useContext, useRef, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const ThemeContextValue = (initialTheme?: "dark" | "light") => {
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme || "light");
  const [themeChangeState, setThemeChangeState] = useState<
    "idle" | "submitting" | "loading"
  >("idle");
  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);

  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) {
      return;
    }

    persistThemeRef.current.submit(
      { theme },
      { action: "action/set-theme", method: "post" }
    );
  }, [theme]);

  useEffect(() => {
    setThemeChangeState(persistTheme.state);
  }, [persistTheme?.state]);

  return {
    theme,
    setTheme,
    themeChangeState,
  };
};

export const useTheme = () => {
  const { theme, setTheme, themeChangeState } = useContext(AppContext);
  const isDark = () => {
    return theme === "dark";
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    theme,
    isDark,
    toggleTheme,
    themeChangeState,
  };
};
