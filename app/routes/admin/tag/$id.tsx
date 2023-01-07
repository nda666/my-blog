import type { Tag, Tag } from "@prisma/client";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { format } from "date-fns";
import { BiTag } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import gfm from "remark-gfm";
import { findOneTag } from "~/models/tag";
import { RootLoader } from "~/root";
import type { AdminRootLoader } from "../../../__admin";

export const handle = {
  title: () => "View Tag",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `View Tag - ${data.tag?.title} - ${parentsData["root"].env.APP_NAME}`,
    description: `This page is for view tag: ${data.tag?.title}`,
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const tag = await findOneTag(params.id!);
  if (!tag) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  return json({
    tag,
  });
};
interface ViewLoader {
  tag:
    | (Tag & {
        tag: Tag;
        tags: Tag[];
      })
    | null;
}

export default function View() {
  const { tag } = useLoaderData<ViewLoader>();
  return (
    <div className="flex justify-center items-center content-center ">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Name</div>
            <p>{tag?.name}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Slug</div>
            <p>{tag?.slug}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Created At</div>
            <p>
              {tag?.createdAt
                ? format(new Date(tag?.createdAt), "MMM dd, yyyy HH:mm:ss")
                : ""}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Updated At</div>
            <p>
              {tag?.updatedAt
                ? format(new Date(tag?.updatedAt), "MMM dd, yyyy HH:mm:ss")
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
