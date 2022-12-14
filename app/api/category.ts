import RequestApi from "~/utils/requestApi";

export type GetPostsInput = {
  pageIndex: number;
  pageSize: number;
};
export async function GetCategories(params: GetPostsInput) {
  return await RequestApi(
    `/api/categories?page=${params.pageIndex + 1}&length=${params.pageSize}`
  );
}
