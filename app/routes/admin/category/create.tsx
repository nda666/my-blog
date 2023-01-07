import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import CategoryForm from "~/components/Forms/CategoryForm";
import { createCategory } from "~/models/category";
import { RootLoader } from "~/root";
import { categoryValidation } from "~/utils/validations";
import type { AdminRootLoader } from "../../../__admin";

export const links: LinksFunction = () => {
  return [];
};

export const handle = {
  title: () => "Create Category",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Create Category - ${parentsData["root"].env.APP_NAME}`,
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
