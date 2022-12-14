import classNames from "classnames/bind";
import { Fragment, useRef } from "react";
import { useSidebar } from "~/contexts/SidebarContext";
import { useClickAway } from "react-use";
import { RiBookLine, RiDashboardLine, RiPriceTagLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { Link } from "@remix-run/react";

const cx = classNames.bind({
  base: "z-20 fixed w-full h-full bg-opacity-50 bg-stone-900 md:relative md:block md:min-w-[250px] md:max-w-[250px]",
  show: "left-0 md:left-0",
  hidden: "left-[-100%] md:left-0",
});

const sidebarStyle = classNames.bind({
  base: "fixed md:block w-[250px] h-full flex flex-col transition-all ease-in",
  show: "left-0 md:left-0",
  hidden: "left-[-250px] md:left-0",
});

const menus = [
  {
    route: "/admin",
    label: "Dashboard",
    icon: <RiDashboardLine />,
  },
  {
    route: "/admin/post",
    label: "Post",
    icon: <RiBookLine />,
  },
  {
    route: "/admin/category",
    label: "Category",
    icon: <BiCategory />,
  },
  {
    route: "/admin/tag",
    label: "Tag",
    icon: <RiPriceTagLine />,
  },
];

export default function Sidebar() {
  const { sidebar, toggleSidebar } = useSidebar();
  const ref = useRef(null);
  useClickAway(ref, () => {
    toggleSidebar(false);
  });
  return (
    <div
      className={cx({
        base: true,
        show: sidebar,
        hidden: !sidebar,
      })}
    >
      <div
        ref={ref}
        className={sidebarStyle({
          base: true,
          show: sidebar,
          hidden: !sidebar,
        })}
      >
        <div className="flex flex-row justify-start px-4 py-2 items-center w-full bg-primary-focus text-primary-content after:shadow-2xl after:w-full">
          <div className="avatar mr-2">
            <div className="w-12 mask mask-hexagon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 80 80"
                className="logo"
              >
                <path
                  d="M0 40a39.87 39.87 0 0 1 11.72-28.28A40 40 0 1 1 0 40zm34 10a4 4 0 0 1-4-4v-2a2 2 0 1 0-4 0v2a4 4 0 0 1-4 4h-2a2 2 0 1 0 0 4h2a4 4 0 0 1 4 4v2a2 2 0 1 0 4 0v-2a4 4 0 0 1 4-4h2a2 2 0 1 0 0-4h-2zm24-24a6 6 0 0 1-6-6v-3a3 3 0 0 0-6 0v3a6 6 0 0 1-6 6h-3a3 3 0 0 0 0 6h3a6 6 0 0 1 6 6v3a3 3 0 0 0 6 0v-3a6 6 0 0 1 6-6h3a3 3 0 0 0 0-6h-3zm-4 36a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM21 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  className="fill-primary"
                ></path>
              </svg>
            </div>
          </div>
          <div className="font-bold text-xl">Backend</div>
        </div>
        <div className="w-full h-full overflow-y-auto scrollbar">
          <ul className="menu bg-base-100 p-2 h-full dark:bg-gray-700 dark:text-white">
            {menus.map((menu, index) => (
              <li key={index} onClick={toggleSidebar}>
                <Link to={menu.route}>
                  {menu.icon}
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
