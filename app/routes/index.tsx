import { ErrorBoundaryComponent, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import GetGithubRepos from "~/api/getGithubRepos";
import Cta from "~/components/cta";
import RenderErrorComponent from "~/components/errors/component";
import RepoCards from "~/components/repoCards";
import type { GithubRepositories } from "~/types/GithubRepositories";

export const loader = async () => {
  const { data, error } = await GetGithubRepos(1, 3);

  return json({ repositories: data?.items, error: error });
};
interface IndexData {
  repositories: GithubRepositories[];
  error: any;
}

export default function Index() {
  const { repositories, error } = useLoaderData<IndexData>();
  console.info(repositories);
  return (
    <>
      <Cta />
      <div className="flex flex-col items-center">
        <RepoCards repositories={repositories} />
        <Link className="btn btn-link" to={"repository"}>
          Show all repositories
        </Link>
      </div>
    </>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <RenderErrorComponent></RenderErrorComponent>;
};
