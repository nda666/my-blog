import React, { useContext } from "react";
import { AppContext } from "./AppContext";

interface SidebarContextInterface {
  sidebar: boolean;
  toggleSidebar: (show?: boolean | any) => void;
}

const SidebarContextValue = (): SidebarContextInterface => {
  let [sidebar, setSidebar] = React.useState(false);

  let toggleSidebar = (show = null) => {
    setSidebar(typeof show === "boolean" ? show : !sidebar);
  };

  return { sidebar, toggleSidebar };
};

const useSidebar = () => {
  const { sidebar, toggleSidebar } = React.useContext(AppContext);
  return { sidebar, toggleSidebar };
};

export { useSidebar, SidebarContextValue };
