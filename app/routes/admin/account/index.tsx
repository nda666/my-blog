import { useLoaderData } from "@remix-run/react";
import AccountForm from "~/components/Forms/AccountForm";
import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import type { RootLoader } from "~/root";
import type { AdminRootLoader } from "~/routes/admin";

export const handle = {
  title: () => "Account",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Account - ${parentsData["root"].env.APP_NAME}`,
    description: "This page is for managing your account.",
  };
};

export const loader = async ({ request }: DataFunctionArgs) => {
  return {};
};

export default function Page() {
  const { user } = useLoaderData<typeof loader & AdminRootLoader>();
  return <AccountForm user={user} />;
}

export type AccountLoader = typeof loader & AdminRootLoader;
