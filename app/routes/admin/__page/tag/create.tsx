import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { validationError } from "remix-validated-form";
import TagForm from "~/components/Forms/TagForm";
import type { TagValueProps } from "~/components/Forms/TagSelect";
import { authenticatedRoute } from "~/utils/server/auth.server";
import { createTag, getAllActiveTag } from "~/utils/server/tag.server";
import tagValidation from "~/utils/validations/tag.validation";
import type { AdminRootLoader } from "../../__page";

export const links: LinksFunction = () => {
  return [];
};

export const handle = {
  title: () => "Create Tag",
};

export const meta: MetaFunction<
  typeof loader,
  {
    "routes/admin/__page": AdminRootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Create Tag - ${parentsData["routes/admin/__page"].env.APP_NAME}`,
    description: "This page is for create a tag.",
  };
};

export const action: ActionFunction = async ({ request }) => {
  const result = await tagValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);
  const tag = await createTag({
    ...result.data,
  });

  return redirect(`/admin/tag`);
};

export const loader: LoaderFunction = async ({ request }) => {
  return json({});
};

export default function Create() {
  return <TagForm />;
}
