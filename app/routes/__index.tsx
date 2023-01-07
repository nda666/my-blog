import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import DefaultLayout from "~/layouts/DefaultLayout";

export const loader: LoaderFunction = async ({ request }) => {
  return json({
    env: {
      APP_NAME: process.env.APP_NAME,
      SENTRY_DSN: process.env.SENTRY_DSN,
      GITHUB_USERNAME: process.env.GITHUB_USERNAME,
      SOCIAL_EMAIL: process.env.SOCIAL_EMAIL,
      SOCIAL_FACEBOOK_URL: process.env.SOCIAL_FACEBOOK_URL,
      SOCIAL_INSTAGRAM_USERNAME: process.env.SOCIAL_INSTAGRAM_USERNAME,
      SOCIAL_TWITTER_USERNAME: process.env.SOCIAL_TWITTER_USERNAME,
    },
  });
};

export const meta: MetaFunction = ({ data, params }) => {
  return {
    charset: "utf-8",
    viewport: "width=device-width,initial-scale=1",
    title: `${data?.env?.APP_NAME}` || "",
    description:
      "Adha Bakhtiar A passionate frontend & backend developer from Indonesia 🇮🇩",
  };
};

export default function Index() {
  const { env } = useLoaderData();
  return (
    <DefaultLayout env={env}>
      <Outlet></Outlet>
    </DefaultLayout>
  );
}
