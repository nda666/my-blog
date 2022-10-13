import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import gql from "graphql-tag";
import GetGithubRepos from "~/api/getGithubRepos";
import Cta from "~/components/cta";
import RepoCards from "~/components/repoCards";
import type { GithubRepositories } from "~/types/githubRepositories";
import graphqlClient from "~/utils/graphqlClient";

export const loader = async () => {
  const { data, error } = await GetGithubRepos();

  return json({ repositories: data, error: error });
};
interface RepoPageData {
  repositories: GithubRepositories[];
  error: any;
}
export default function Index() {
  const { repositories, error } = useLoaderData<RepoPageData>();
  return (
    <>
      <RepoCards repositories={repositories!} />
    </>
  );
}
