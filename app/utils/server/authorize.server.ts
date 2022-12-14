import { Post } from "@prisma/client";
import { Response } from "@remix-run/node";

export function isUserPost(post: Post | null, userId: string) {
  if (!post) {
    throw new Response("Not Found!", {
      status: 404,
    });
  }
  if (post.userId !== userId) {
    throw new Response("Unauthorized!", {
      status: 403,
    });
  }
}
