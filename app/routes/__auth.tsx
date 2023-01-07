import { MetaFunction } from "@remix-run/node";
import { Outlet, useMatches } from "@remix-run/react";
import AuthLayout from "~/layouts/AuthLayout";

export default function Index() {
  const root = useMatches()[0];
  return (
    <AuthLayout env={root.data.env}>
      <Outlet></Outlet>
    </AuthLayout>
  );
}

export const meta: MetaFunction = ({ parentsData }) => {
  console.log("parentsData", parentsData);
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    // title: `${data?.env?.APP_NAME}` || "",
    description:
      // "Adha Bakhtiar A passionate frontend & backend developer from Indonesia 🇮🇩",
      JSON.stringify(parentsData),
  };
};
