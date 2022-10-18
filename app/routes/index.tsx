import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GetGithubRepos from "~/api/getGithubRepos";
import Cta from "~/components/cta";
import RepoCards from "~/components/repoCards";
import type { GithubRepositories } from "~/types/githubRepositories";

export const loader = async () => {
  const { data, error } = await GetGithubRepos();

  return json({ repositories: data?.slice(0, 6), error: error });
};
interface IndexData {
  repositories: GithubRepositories[];
  error: any;
}
export default function Index() {
  const { repositories, error, blog } = useLoaderData<IndexData>();
  console.log(blog);
  return (
    <>
      <Cta />
      <RepoCards repositories={repositories!} />
    </>
  );
}
