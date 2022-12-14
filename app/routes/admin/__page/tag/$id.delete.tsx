import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { deleteOneTag } from "~/utils/server/tag.server";

export const action: ActionFunction = async ({ request, params }) => {
  const result = await deleteOneTag(params.id!);

  return json({
    result: result ? true : false,
    message: result ? "Delete successfull" : "Delete Unsuccessfull",
  });
};
