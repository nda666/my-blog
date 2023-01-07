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
import { findOneTag, updateTag } from "~/models/tag";
import { RootLoader } from "~/root";
import { tagValidation } from "~/utils/validations";
import type { AdminRootLoader } from "../../../__admin";
export const links: LinksFunction = () => {
  return [];
};
export const handle = {
  title: () => "Edit Tag",
};
export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ data, parentsData }) => {
  return {
    title: `Edit Tag - ${data.tag?.title} - ${parentsData["root"].env.APP_NAME}`,
    description: `This page is for edit tag: ${data.tag?.title}`,
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const tag = await findOneTag(params.id!);
  if (!tag) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return json({
    tag,
  });
};
export const action: ActionFunction = async ({ request }) => {
  const result = await tagValidation.validate(await request.formData());
  if (result.error) return validationError(result.error);
  await updateTag(result.data.id!, {
    name: result.data.name,
    slug: result.data.slug,
  });

  return redirect(`/admin/tag`);
};

export default function Edit() {
  const { tag } = useLoaderData();
  return <TagForm tag={tag} />;
}
