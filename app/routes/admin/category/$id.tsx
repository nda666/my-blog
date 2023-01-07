import type { Category, Tag } from "@prisma/client";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { format } from "date-fns";
import { findOneCategory } from "~/models/category";
import type { RootLoader } from "~/root";

export const handle = {
  title: () => "View Category",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `View Category - ${data.category?.title} - ${parentsData["root"].env.APP_NAME}`,
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
