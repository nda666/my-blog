import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { deleteOneCategory } from "~/models/category";

export const action: ActionFunction = async ({ request, params }) => {
  const result = await deleteOneCategory(params.id!);

  return json({
    result: result ? true : false,
    message: result ? "Delete successfull" : "Delete Unsuccessfull",
  });
};
