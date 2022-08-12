import { useTheme } from "~/contexts/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Drawer from "./drawer";
import { PropsWithChildren } from "react";
import { Link } from "@remix-run/react";

interface NavbarProps {
  /** Application name */
  title: string;
}
export default function Navbar({
  title,
  children,
}: PropsWithChildren<NavbarProps>) {
  const { isDark, toggleTheme } = useTheme();
  const __ = typeof window !== "undefined" && window.env;
  console.log(__);
  return (
    <div className="navbar bg-base-100 dark:bg-gray-900 dark:text-slate-100">
      <div className="navbar-start justify-between">
        <Drawer />
        <div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case hover:dark:bg-slate-600"
          >
            Home
          </Link>
          <a className="btn btn-ghost normal-case hover:dark:bg-slate-600">
            Repository
          </a>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-2xl app-name-header ">
          {title || "APP_TITLE"}
        </a>
      </div>
      <div className="navbar-end  justify-between">
        <div>
          <a className="btn btn-ghost normal-case hover:dark:bg-slate-600 ">
            Blog
          </a>
          <a className="btn btn-ghost normal-case hover:dark:bg-slate-600 ">
            Profile
          </a>
        </div>
        <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
          {isDark() === false && <MdOutlineDarkMode />}
          {isDark() && <MdOutlineLightMode />}
        </button>
      </div>
    </div>
  );
}
