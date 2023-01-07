import { useFetcher } from "@remix-run/react";
import { useContext, useRef, useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const ThemeContextValue = (initialTheme?: "dark" | "light") => {
  /** first we want to know what them that user want */
  const [userWantTheme, setUserWantTheme] = useState<"dark" | "light">(
    initialTheme || "light"
  );

  /** this will saved to cookies after submiting */
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

    if (!userWantTheme) {
      return;
    }

    persistThemeRef.current.submit(
      { userWantTheme },
      { action: "theme", method: "post" }
    );
  }, [userWantTheme]);

  useEffect(() => {
    setThemeChangeState(persistTheme.state);
    persistTheme.state == "idle" && setTheme(userWantTheme);
  }, [persistTheme?.state]);

  return {
    theme,
    setTheme: setUserWantTheme,
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
