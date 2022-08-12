import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GetGithubRepos from "~/api/getGithubRepos";
import Cta from "~/components/cta";
import RepoCards from "~/components/repoCards";
import DefaultLayout from "~/layouts/defaultLayout";
import type { GithubRepositories } from "~/types/githubRepositories";

export const loader = async () => {
  const { data, error } = await GetGithubRepos();
  return json({ repositories: data, error: error });
};
interface IndexData {
  repositories: GithubRepositories[];
  error: any;
}
export default function Index() {
  const { repositories, error } = useLoaderData<IndexData>();

  return (
    <>
      <Cta />

      <RepoCards repositories={repositories!} />
    </>
  );
}
