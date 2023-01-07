import classNames from "classnames";
import { useContext } from "react";
import {
  RiLightbulbFlashLine,
  RiMenuLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri";
import { useSidebar } from "~/contexts/SidebarContext";
import { useTheme } from "~/contexts/ThemeContext";

export interface NavbarProps {
  title?: string;
}

export default function Navbar({ title }: NavbarProps) {
  const { sidebar, toggleSidebar } = useSidebar();
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="navbar bg-gray-100 shadow-lg dark:bg-gray-800 dark:text-white">
      <div className="navbar-start">
        <button
          tabIndex={0}
          onClick={toggleSidebar}
          className="btn btn-ghost btn-circle md:hidden"
        >
          <RiMenuLine size={18} />
        </button>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">{title || ""}</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <button
          className="btn btn-ghost btn-circle dark:"
          onClick={toggleTheme}
        >
          {isDark() === false && <RiSunLine size={18} />}
          {isDark() && <RiMoonLine size={18} />}
        </button>
      </div>
    </div>
  );
}
