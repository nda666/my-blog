import type { NavigateFunction } from "@remix-run/react";
import RequestApi from "~/utils/requestApi";

export type GetPostsInput = {
  pageIndex: number;
  pageSize: number;
};
export async function GetPosts(params: GetPostsInput) {
  return await RequestApi(
    `/api/posts?page=${params.pageIndex + 1}&length=${params.pageSize}`
  );
}
