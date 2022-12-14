import { LoaderFunction, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import AdminLayout from "~/layouts/AdminLayout";
import { authenticatedRoute } from "~/utils/server/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticatedRoute(request);
  if (!user) {
    throw redirect("login");
  }

  return json({
    user,
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

export default function Page() {
  const { env, user } = useLoaderData();
  return (
    <AdminLayout env={env}>
      <Outlet></Outlet>
    </AdminLayout>
  );
}

export type AdminRootLoader = typeof loader;
