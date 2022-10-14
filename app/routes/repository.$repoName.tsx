import { json } from "@remix-run/node";
import { useLoaderData, useParams } from "@remix-run/react";
import getGithubReadme from "~/api/getGithubReadme";
import getGithubRepoDetail from "~/api/getGithubRepoDetail";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import type { GithubReadme } from "~/types/GithubReadme";
import remarkGemoji from "remark-gemoji";

interface RepositoryProps {
  repoName: string;
}

export async function loader({ params }: { params: RepositoryProps }) {
  const repoName = params.repoName;
  const repo = await getGithubRepoDetail(repoName);
  let readme: GithubReadme | undefined = undefined;
  const readmeResponse = await getGithubReadme(repoName);
  if (readmeResponse.data) {
    readme = readmeResponse.data;
    readme.content = atob(readme.content);
  }

  console.log(readme?.content);

  return json({
    repository: repo.data,
    readme: readme || undefined,
  });
}

export default function Repository() {
  const loader = useLoaderData();
  return (
    <div className="px-4">
      <article className="prose dark:prose-invert">
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
          remarkPlugins={[gfm, remarkGemoji]}
          rehypePlugins={[rehypeRaw]}
        >
          {loader.readme.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
