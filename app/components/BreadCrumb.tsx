import { Link, useMatches } from "@remix-run/react";
import { TiChevronRightOutline, TiHomeOutline } from "react-icons/ti";

export default function Breadcrumb() {
  const matches = useMatches();
  const route = matches[1];
  if (route.pathname === "/") {
    return <></>;
  }
  const pathNames = route.pathname.split("/");

  const breadCrumbs: { name: string; path: string; active: boolean }[] = [];
  for (let i = 0; i < pathNames.length; i++) {
    breadCrumbs.push({
      name: pathNames[i],
      path: pathNames.slice(0, i + 1).join("/"),
      active: i + 1 == pathNames.length,
    });
  }
  return (
    <div className="px-10 mb-10">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadCrumbs.map((breadCrumb, index) => (
            <li key={index}>
              <div className="flex items-center">
                <div className="mr-2 text-primary">
                  {breadCrumb.name == "" ? (
                    <TiHomeOutline />
                  ) : (
                    <TiChevronRightOutline />
                  )}
                </div>
                <Link
                  to={breadCrumb.path}
                  className={`capitalize link link-hover ${
                    breadCrumb.active ? `link-neutral` : `link-primary`
                  } `}
                >
                  {breadCrumb.name || "Home"}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
