import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import getGithubRepoDetail from "~/api/getGithubRepoDetail";
interface RepositoryProps {
  repoName: string;
}

export async function loader({ params }: { params: RepositoryProps }) {
  const repoName = params.repoName;
  const { data, error } = await getGithubRepoDetail(repoName);
  return json({
    repository: data,
  });
}

export default function Repository() {
  const loader = useLoaderData();
  console.log(loader);https://raw.githubusercontent.com/{owner}/{repo}/{branch}/README.md
  return <></>;
}
