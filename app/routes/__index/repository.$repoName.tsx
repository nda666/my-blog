import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getGithubReadme from "~/api/getGithubReadme";
import getGithubRepoDetail from "~/api/getGithubRepoDetail";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { formatDistance, parseISO } from "date-fns";
import type { GithubReadme, GithubRepositories } from "~/types/github";
import { RepoOwner, RepoStats } from "~/components/Repository";

interface RepositoryLoader {
  repository: GithubRepositories;
  readme: GithubReadme;
  appName: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const repoName = params.repoName;
  if (!repoName) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  const repo = await getGithubRepoDetail(repoName);
  const readmeResponse = await getGithubReadme(repoName);

  // remove reactivity of repo.data
  const data = { ...repo.data };
  if (data?.pushed_at) {
    data.pushed_at = formatDistance(
      parseISO(repo.data?.pushed_at),
      new Date(),
      {
        addSuffix: true,
      }
    );
  }

  return json({
    repository: data,
    readme: readmeResponse.data,
    appName: process.env.APP_NAME,
  });
};

export default function Repository() {
  const loader = useLoaderData<RepositoryLoader>();
  return (
    <div className="w-full px-4 grid md:grid-cols-3 grid-cols-1 gap-4">
      <div className="md:col-span-2">
        <article className="prose dark:prose-invert w-full">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    showLineNumbers
                    style={oneDark} // try passing different color schemes, drak, dracula etc.
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code>{children}</code>
                );
              },
            }}
            remarkPlugins={[remarkGemoji, gfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {loader.readme?.content}
          </ReactMarkdown>
        </article>
      </div>
      <div className="flex flex-col gap-4">
        <RepoStats repository={loader.repository} />
        <RepoOwner owner={loader.repository?.owner} />
      </div>
    </div>
  );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  charset: "utf-8",
  title: `${data.repository.name}|Repository | ${data?.appName}` || "",
  viewport: "width=device-width,initial-scale=1",
  description: `${data?.loader?.description}`,
});
