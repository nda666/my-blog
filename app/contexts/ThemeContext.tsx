import { useFetcher } from "@remix-run/react";
import { ReactNode, useContext, useRef } from "react";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({} as ReturnType<typeof useValue>);

const useValue = (initialTheme) => {
  const [theme, setTheme] = useState<"dark" | "light">(initialTheme);

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

  // useEffect(() => {
  //   console.log("theme", theme);
  //   rawSetTheme(theme);
  // }, [theme]);

  return {
    theme,
    setTheme,
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
  const { theme, setTheme } = useContext(ThemeContext);

  const isDark = () => {
    console.log("ctx", theme);
    return theme === "dark";
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    isDark,
    toggleTheme,
  };
};
