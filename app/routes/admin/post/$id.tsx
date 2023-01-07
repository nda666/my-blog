import type { Post, Tag } from "@prisma/client";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { format } from "date-fns";
import { findOnePost } from "~/models/post";
import type { RootLoader } from "~/root";

export const handle = {
  title: () => "View Post",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `View Post - ${data.post?.title} - ${parentsData["root"].env.APP_NAME}`,
    description: `This page is for view post: ${data.post?.title}`,
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const post = await findOnePost(params.id!);
  if (!post) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  return json({
    post,
  });
};
interface ViewLoader {
  post:
    | (Post & {
        post: Post;
        tags: Tag[];
      })
    | null;
}

export default function View() {
  const { post } = useLoaderData<ViewLoader>();
  return (
    <div className="flex justify-center items-center content-center ">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Title</div>
            <p>{post?.title}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Slug</div>
            <p>{post?.slug}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Created At</div>
            <p>
              {post?.createdAt
                ? format(new Date(post?.createdAt), "MMM dd, yyyy HH:mm:ss")
                : ""}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex gap-2 items-center">
            <div className="w-32">Updated At</div>
            <p>
              {post?.updatedAt
                ? format(new Date(post?.updatedAt), "MMM dd, yyyy HH:mm:ss")
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
