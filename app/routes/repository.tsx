import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GetGithubRepos from "~/api/getGithubRepos";
import Paginate from "~/components/paginate";
import RepoCards from "~/components/repoCards";
import type { GithubSearchRepositories } from "~/types/GithubRepositories";
import type { ErrorBoundaryComponent } from "@remix-run/node";
import RenderErrorComponent from "~/components/errors/component";

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <RenderErrorComponent></RenderErrorComponent>;
};

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const currentPage = parseInt(page || "1") || 1;
  const { data, error } = await GetGithubRepos(currentPage, 15);
  return json({ repositories: data, error: error, currentPage });
};
interface RepoPageData {
  repositories: GithubSearchRepositories;
  currentPage: number;
  error: any;
}
export default function Index() {
  const { repositories, error, currentPage } = useLoaderData<RepoPageData>();
  return (
    <>
      <RepoCards repositories={repositories.items || []} />
      <Paginate
        dataPerPage={9}
        currentPage={currentPage}
        totalData={repositories.total_count}
      />
    </>
  );
}
