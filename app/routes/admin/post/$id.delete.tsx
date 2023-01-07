import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticatedRoute } from "~/models/auth";
import { deleteOnePost } from "~/models/post";

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticatedRoute(request);
  await deleteOnePost(params.id!, user.id);

  return json({
    result: true,
    message: "Delete successfull",
  });
};
