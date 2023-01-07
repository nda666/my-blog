import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { validationError } from "remix-validated-form";
import CategoryForm from "~/components/Forms/CategoryForm";
import { findOneCategory, updateCategory } from "~/models/category";
import { RootLoader } from "~/root";
import { categoryValidation } from "~/utils/validations";
import type { AdminRootLoader } from "../../../__admin";
export const links: LinksFunction = () => {
  return [];
};
export const handle = {
  title: () => "Edit Category",
};
export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `Edit Category - ${data.category?.title} - ${parentsData["root"].env.APP_NAME}`,
    description: `This page is for edit category: ${data.category?.title}`,
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
export const action: ActionFunction = async ({ request }) => {
  const result = await categoryValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);
  await updateCategory(result.data.id!, {
    name: result.data.name,
    slug: result.data.slug,
  });

  return redirect(`/admin/category`);
};

export default function Edit() {
  const { category } = useLoaderData();
  return <CategoryForm category={category} />;
}
