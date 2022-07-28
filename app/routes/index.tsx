import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getGithubRepo from "~/api/getGithubRepo";
import Cta from "~/components/cta";
import DefaultLayout from "~/layouts/defaultLayout";

export const loader = async () => {
  return json({ repositories: await getGithubRepo() });
};

export default function Index() {
  const { repositories } = useLoaderData();
  console.log(repositories);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Cta />
    </div>
  );
}
