import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import TUIEditorDarkCss from "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import TUIEditorCss from "@toast-ui/editor/dist/toastui-editor.css";
import { validationError } from "remix-validated-form";
import PostForm from "~/components/Forms/PostForm";
import { authenticatedRoute } from "~/utils/server/auth.server";
import { getAllActiveCategory } from "~/utils/server/category.server";
import { findOnePost, updatePost } from "~/utils/server/post.server";
import postValidation from "~/utils/validations/post.validation";
import type { AdminRootLoader } from "../../__page";
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: TUIEditorCss },
    { rel: "stylesheet", href: TUIEditorDarkCss },
  ];
};
export const handle = {
  title: () => "Edit Post",
};
export const meta: MetaFunction<
  typeof loader,
  {
    "routes/admin/__page": AdminRootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `Edit Post - ${data.post?.title} - ${parentsData["routes/admin/__page"].env.APP_NAME}`,
    description: `This page is for edit post: ${data.post?.title}`,
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const post = await findOnePost(params.id!);
  if (!post) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  const categories = await getAllActiveCategory();
  return json({
    post,
    categories: categories.map((x) => ({ id: x.id, name: x.name })),
  });
};
export const action: ActionFunction = async ({ request }) => {
  const user = await authenticatedRoute(request);
  const result = await postValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);
  await updatePost(result.data.id!, {
    title: result.data.title,
    slug: result.data.slug,
    content: result.data.content,
    userId: user.id,
    tags: result.data.tags,
    category: result.data.category,
  });

  return redirect(`/admin/post`);
};

export default function Edit() {
  const { post, categories } = useLoaderData();
  return <PostForm post={post} categoryList={categories} />;
}
