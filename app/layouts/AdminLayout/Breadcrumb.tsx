import { Link, useMatches } from "@remix-run/react";
import { Fragment } from "react";
import { CgChevronRight } from "react-icons/cg";
import { TiFolder } from "react-icons/ti";

export default function Breadcrumb() {
  const matches = useMatches();
  const route = matches[matches.length - 1] || undefined;
  if (!route) {
    return <></>;
  }
  if (route.pathname === "/") {
    return <></>;
  }
  const pathNames = route.pathname.split("/");

  const breadCrumbs: { name: string; path: string; active: boolean }[] = [];
  for (let i = 1; i < pathNames.length; i++) {
    breadCrumbs.push({
      name: pathNames[i],
      path: pathNames.slice(0, i + 1).join("/"),
      active: i + 1 === pathNames.length,
    });
  }
  return (
    <ol className="breadcrumbs text-sm font-semibold px-4 dark:text-slate-50 inline-flex items-center space-x-1 text-ellipsis whitespace-nowrap overflow-x-hidden hover:overflow-x-auto">
      {breadCrumbs.map(
        (breadCrumb, index) =>
          !breadCrumb.active && (
            <Fragment key={index}>
              {index > 0 && (
                <li>
                  <span className="text-xl">
                    <CgChevronRight />
                  </span>
                </li>
              )}
              <li>
                <div className="flex items-center py-2">
                  <div className="mr-1 text-xl">
                    <TiFolder className="" />
                  </div>
                  <Link
                    to={breadCrumb.path}
                    className={`flex items-center capitalize link link-hover link-secondary leading-none `}
                  >
                    <span>{breadCrumb.name || "Home"}</span>
                  </Link>
                </div>
              </li>
            </Fragment>
          )
      )}
    </ol>
  );
}
