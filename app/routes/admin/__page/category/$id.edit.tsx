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
import { authenticatedRoute } from "~/utils/server/auth.server";
import { getAllActiveCategory } from "~/utils/server/category.server";
import {
  findOneCategory,
  updateCategory,
} from "~/utils/server/category.server";
import categoryValidation from "~/utils/validations/category.validation";
import type { AdminRootLoader } from "../../__page";
export const links: LinksFunction = () => {
  return [
  ];
};
export const handle = {
  title: () => "Edit Category",
};
export const meta: MetaFunction<
  typeof loader,
  {
    "routes/admin/__page": AdminRootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `Edit Category - ${data.category?.title} - ${parentsData["routes/admin/__page"].env.APP_NAME}`,
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
