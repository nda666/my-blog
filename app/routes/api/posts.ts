import { ActiveStatus } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticatedRoute } from "~/utils/server/auth.server";
import { prisma } from "~/utils/server/prisma.server";

export interface PostParams {
  page?: number;
  length?: number;
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  await authenticatedRoute(request);
  const page = parseInt(url.searchParams.get("page")!) || 1;
  const length = parseInt(url.searchParams.get("length")!) || 10;
  const posts = await prisma.post.findMany({
    take: length,
    skip: length * (page - 1),
    include: {
      tags: {
        where: {
          active: ActiveStatus.Active,
        },
      },
    },
  });
  const count = await prisma.post.count();
  return json({
    data: posts,
    currentPage: page,
    totalPage: Math.ceil(count / length),
  });
};
