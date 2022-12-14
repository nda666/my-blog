import type { Category, Tag } from "@prisma/client";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { format } from "date-fns";
import { BiCategory } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import gfm from "remark-gfm";
import { findOneCategory } from "~/utils/server/category.server";
import type { AdminRootLoader } from "../../__page";

export const handle = {
  title: () => "View Category",
};

export const meta: MetaFunction<
  typeof loader,
  {
    "routes/admin/__page": AdminRootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `View Category - ${data.category?.title} - ${parentsData["routes/admin/__page"].env.APP_NAME}`,
    description: `This page is for view category: ${data.category?.title}`,
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const category = await findOneCategory(params.id!);
  if (!category) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  return json({
    category,
  });
};
interface ViewLoader {
  category:
    | (Category & {
        category: Category;
        tags: Tag[];
      })
    | null;
}

export default function View() {
  const { category } = useLoaderData<ViewLoader>();
  return (
    <div className="flex justify-center items-center content-center ">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Name</div>
            <p>{category?.name}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Slug</div>
            <p>{category?.slug}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Created At</div>
            <p>
              {category?.createdAt
                ? format(new Date(category?.createdAt), "MMM dd, yyyy HH:mm:ss")
                : ""}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Updated At</div>
            <p>
              {category?.updatedAt
                ? format(new Date(category?.updatedAt), "MMM dd, yyyy HH:mm:ss")
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
