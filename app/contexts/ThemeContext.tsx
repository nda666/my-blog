import { useFetcher } from "@remix-run/react";
import { ReactNode, useContext, useRef } from "react";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({} as ReturnType<typeof useValue>);

const useValue = (initialTheme?: "dark" | "light") => {
  const [theme, setTheme] = useState<"dark" | "light">();
  const [submitState, setSubmitState] = useState<
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
    setSubmitState(persistTheme.state);
  }, [persistTheme?.state]);

  return {
    theme,
    setTheme,
    submitState,
  };
};

export default function ThemeProvider({
  initialTheme,
  children,
}: {
  initialTheme?: "dark" | "light";
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider value={useValue(initialTheme)}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const { theme, setTheme, submitState } = useContext(ThemeContext);

  const isDark = () => {
    return theme === "dark";
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    isDark,
    toggleTheme,
    submitState,
  };
};
