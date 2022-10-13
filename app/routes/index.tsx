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
  const blog = await graphqlClient.query({
    query: gql`
      query {
        blogCollection {
          items {
            title
            slug
            thumbnail {
              url
            }
          }
        }
      }
    `,
  });
  return json({ repositories: data?.slice(0, 6), error: error, blog });
};
interface IndexData {
  repositories: GithubRepositories[];
  error: any;
  blog: any;
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
