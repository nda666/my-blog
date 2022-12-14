import { Prisma } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { authenticatedRoute } from "~/utils/server/auth.server";
import { prisma } from "~/utils/server/prisma.server";

export interface PostParams {
  page?: number;
  length?: number;
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  await authenticatedRoute(request);
  const tagParams: Prisma.TagFindManyArgs = {};
  const page = parseInt(url.searchParams.get("page")!) || 1;
  const length = parseInt(url.searchParams.get("length")!) || 10;

  if (url.searchParams.get("length") && url.searchParams.get("page")) {
    tagParams.take = length;
    tagParams.skip = length * (page - 1);
  }

  const tags = await prisma.tag.findMany(tagParams);
  if (!url.searchParams.get("length")) {
    return json(tags);
  }

  const count = await prisma.tag.count();
  return json({
    data: tags,
    totalPage: Math.ceil(count / length),
  });
};
