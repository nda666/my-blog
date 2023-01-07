import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { validationError } from "remix-validated-form";
import TagForm from "~/components/Forms/TagForm";
import { createTag } from "~/models/tag";
import { RootLoader } from "~/root";
import { tagValidation } from "~/utils/validations";
import type { AdminRootLoader } from "../../../__admin";

export const links: LinksFunction = () => {
  return [];
};

export const handle = {
  title: () => "Create Tag",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Create Tag - ${parentsData["root"].env.APP_NAME}`,
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
