import type { Tag } from "@prisma/client";
import RequestApi from "~/utils/requestApi";

export type GetTagInput = {
  pageIndex?: number;
  pageSize?: number;
};

export async function GetTags(params: GetTagInput): Promise<Tag[]> {
  const url = new URL(`/api/tags`, window.location.origin);
  if (params.pageSize) {
    url.searchParams.append("length", params.pageSize.toString());
    url.searchParams.append("page", ((params.pageIndex || 0) + 1).toString());
  }
  return await RequestApi(url);
}
