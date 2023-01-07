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
import type { CategoryValueProps } from "~/components/Forms/CategorySelect";
import PostForm from "~/components/Forms/PostForm";
import { authenticatedRoute } from "~/models/auth";
import { getAllActiveCategory } from "~/models/category";
import { createNewPost } from "~/models/post";
import { RootLoader } from "~/root";
import { postValidation } from "~/utils/validations";
import type { AdminRootLoader } from "../../../__admin";
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: TUIEditorCss },
    { rel: "stylesheet", href: TUIEditorDarkCss },
  ];
};
export const handle = {
  title: () => "Create Post",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Create Post - ${parentsData["root"].env.APP_NAME}`,
    description: "This page is for create a post.",
  };
};
export const action: ActionFunction = async ({ request }) => {
  const user = await authenticatedRoute(request);
  const result = await postValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);
  const post = await createNewPost({
    ...result.data,
    userId: user.id,
  });

  return redirect(`/admin/post`);
};

export const loader: LoaderFunction = async ({ request }) => {
  const categories = await getAllActiveCategory();
  return json({
    categories: categories.map((x) => ({ id: x.id, name: x.name })),
  });
};

interface CreateLoaderData {
  categories: CategoryValueProps[];
}

export default function Create() {
  const { categories } = useLoaderData<CreateLoaderData>();
  return <PostForm categoryList={categories} />;
}
