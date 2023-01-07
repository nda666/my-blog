import type {
  ErrorBoundaryComponent,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import GetGithubRepos from "~/api/getGithubRepos";
import RenderErrorComponent from "~/components/Errors/RenderErrorComponent";
import RepoCards from "~/components/Repository/RepoCards";
import type { GithubRepositories } from "~/types/github";
import Hero from "~/components/Hero";

export const loader: LoaderFunction = async () => {
  const { data, error } = await GetGithubRepos(1, 3);

  return json({ repositories: data?.items, error: error });
};

interface IndexData {
  repositories: GithubRepositories[];
  error: any;
}

export default function Index() {
  const { repositories, error } = useLoaderData<IndexData>();
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center ">
        <RepoCards repositories={repositories} />
      </div>
      <div className="flex flex-col items-center mt-8 mb-4">
        <Link
          className="text-lg font-semibold link link-hover link-secondary uppercase"
          to={"repository"}
        >
          Show all repositories
        </Link>
      </div>
    </>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <RenderErrorComponent></RenderErrorComponent>;
};
