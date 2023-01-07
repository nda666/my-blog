import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet, useMatches } from "@remix-run/react";
import AdminLayout from "~/layouts/AdminLayout";
import { authenticatedRoute } from "~/models/auth";

export const loader = async ({ request }: DataFunctionArgs) => {
  const user = await authenticatedRoute(request);
  if (!user) {
    throw redirect("login");
  }

  return json({
    user,
  });
};

export default function Admin() {
  const matches = useMatches();
  const { env } = matches[0].data;
  const index = matches.length - 1;
  const title = matches[index].handle?.title() || "";
  return (
    <AdminLayout env={env} title={title}>
      <Outlet></Outlet>
    </AdminLayout>
  );
}

export const meta: MetaFunction = ({ parentsData }) => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: `Admin | ${parentsData?.root?.env?.APP_NAME}` || "Admin",
    description:
      "Adha Bakhtiar A passionate frontend & backend developer from Indonesia 🇮🇩",
  };
};

export type AdminRootLoader = typeof loader;
