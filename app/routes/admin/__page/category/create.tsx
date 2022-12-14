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
import type { CategoryValueProps } from "~/components/Forms/CategorySelect";
import { authenticatedRoute } from "~/utils/server/auth.server";
import {
  createCategory,
  getAllActiveCategory,
} from "~/utils/server/category.server";
import categoryValidation from "~/utils/validations/category.validation";
import type { AdminRootLoader } from "../../__page";

export const links: LinksFunction = () => {
  return [];
};

export const handle = {
  title: () => "Create Category",
};

export const meta: MetaFunction<
  typeof loader,
  {
    "routes/admin/__page": AdminRootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Create Category - ${parentsData["routes/admin/__page"].env.APP_NAME}`,
    description: "This page is for create a category.",
  };
};

export const action: ActionFunction = async ({ request }) => {
  const result = await categoryValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);
  const category = await createCategory({
    ...result.data,
  });

  return redirect(`/admin/category`);
};

export const loader: LoaderFunction = async ({ request }) => {
  return json({});
};

export default function Create() {
  return <CategoryForm />;
}
