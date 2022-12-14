import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import GetGithubRepos from "~/api/getGithubRepos";
import Paginate from "~/components/Paginate";
import type { ErrorBoundaryComponent, MetaFunction } from "@remix-run/node";
import RenderErrorComponent from "~/components/Errors/RenderErrorComponent";
import type { GithubSearchRepositories } from "~/types/github";
import { RepoCards } from "~/components/Repository";

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <RenderErrorComponent></RenderErrorComponent>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const currentPage = parseInt(page || "1") || 1;
  const { data, error } = await GetGithubRepos(currentPage, 15);
  return json({
    repositories: data,
    error: error,
    currentPage,
    appName: process.env?.APP_NAME,
  });
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

export const meta: MetaFunction = ({ data, params }) => ({
  charset: "utf-8",
  title: `Repository | ${data?.appName}` || "",
  viewport: "width=device-width,initial-scale=1",
  description: `${data?.appName}'s repository list`,
});
