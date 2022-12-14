import type { ReactNode } from "react";
import { createContext } from "react";
import { SidebarContextValue } from "./SidebarContext";
import { ThemeContextValue } from "./ThemeContext";

interface AppContextInterface
  extends ReturnType<typeof ThemeContextValue>,
    ReturnType<typeof SidebarContextValue> {}

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

interface AppProviderProps {
  children?: ReactNode;
  initialTheme?: "dark" | "light";
}

let AppProvider = ({ children, initialTheme }: AppProviderProps) => {
  const sidebarContext = SidebarContextValue();
  const themeContextValue = ThemeContextValue(initialTheme);
  return (
    <AppContext.Provider value={{ ...sidebarContext, ...themeContextValue }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
