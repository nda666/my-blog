import { useTheme } from "~/contexts/ThemeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Drawer from "./Drawer";
import type { PropsWithChildren } from "react";
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

  return (
    <div className="fixed z-10 top-0 navbar bg-base-100 dark:bg-gray-900 dark:text-slate-100">
      <div className="navbar-start justify-between">
        <Drawer></Drawer>
        <div className="hidden md:block">
          <Link
            to={"/"}
            className="btn btn-ghost normal-case hover:dark:bg-slate-600"
          >
            Home
          </Link>
          <Link
            to={"/repository"}
            className="btn btn-ghost normal-case hover:dark:bg-slate-600"
          >
            Repository
          </Link>
        </div>
      </div>
      <div className="navbar-center">
        <Link to={"/"} className="">
          <img
            className="h-10 px-2 transition-transform duration-1000 hover:-rotate-[360deg] ease-in-out"
            src="/images/logo.png"
            alt={title || "APP_TITLE"}
          />
        </Link>
      </div>
      <div className="navbar-end justify-end md:justify-between">
        <div className="hidden md:block">
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
