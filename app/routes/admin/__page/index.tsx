import type { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { authenticatedRoute } from "~/utils/server/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return {};
};

export const handle = {
  title: () => "Dashboard",
};

export default function Index() {
  return <div>Hai</div>;
}
