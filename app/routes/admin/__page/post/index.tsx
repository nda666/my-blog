import type { Post as IPost } from "@prisma/client";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { format, formatDistance } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { HiPlus } from "react-icons/hi";
import {
  RiArchiveLine,
  RiDeleteBin2Line,
  RiEditLine,
  RiEye2Line,
} from "react-icons/ri";
import { GetPosts } from "~/api/getPosts";
import Dropdown, { DropdownItem } from "~/components/Dropdown";
import PaginatedTable from "~/components/Tables/PaginatedTable";
import { AdminRootLoader } from "../../__page";

export const loader: LoaderFunction = async ({ request }) => {
  return {};
};

export const handle = {
  title: () => "Post",
};

export const meta: MetaFunction<
  typeof loader,
  {
    "routes/admin/__page": AdminRootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Post - ${parentsData["routes/admin/__page"].env.APP_NAME}`,
    description: "This page is for managing posts.",
  };
};
export default function Post() {
  const navigate = useNavigate();
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [fetchDataOptions, setFetchOptions] = useState(() => ({
    pageIndex,
    pageSize,
  }));
  useEffect(() => {
    setFetchOptions({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  const columns = useMemo<ColumnDef<IPost, unknown>[]>(
    () => [
      {
        header: "Action",
        footer: "Action",
        accessorKey: "id",
        cell: (post) => (
          <>
            {/* <Link to={`${post.getValue()}/edit`} className="btn">
              Edit
            </Link> */}
            <Dropdown label="Action">
              <DropdownItem>
                <Link
                  to={`${post.getValue()}`}
                  className="flex items-center w-full p-2 gap-2"
                >
                  <RiEye2Line />
                  View
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  to={`${post.getValue()}/edit`}
                  className="flex items-center w-full p-2 gap-2"
                >
                  <RiEditLine />
                  Edit
                </Link>
              </DropdownItem>
              <hr className="dark:border-gray-600"></hr>
              <DropdownItem>
                <Link
                  to={`${post.getValue()}/archive`}
                  className="flex items-center w-full p-2 gap-2"
                >
                  <RiArchiveLine />
                  Archive
                </Link>
              </DropdownItem>
              <DropdownItem>
                <button
                  onClick={() => deleteOnePost(post.getValue() as string)}
                  className="flex items-center w-full p-2 gap-2"
                >
                  <RiDeleteBin2Line />
                  Delete
                </button>
              </DropdownItem>
            </Dropdown>
          </>
        ),
      },
      {
        header: "Title",
        footer: "Title",
        accessorKey: "title",
      },
      {
        header: "Slug",
        footer: "Slug",
        accessorKey: "slug",
      },
      {
        header: "Created At",
        footer: "Created At",
        accessorKey: "createdAt",
        cell: (post) =>
          post.getValue()
            ? format(
                new Date(post.getValue() as string),
                "dd MMM yyyy hh:mm aa"
              )
            : "",
      },
      {
        header: "Last Update",
        footer: "Last Update",
        accessorKey: "updatedAt",
        cell: (post) =>
          post.getValue()
            ? formatDistance(new Date(post.getValue() as string), new Date(), {
                addSuffix: true,
              })
            : "",
      },
    ],
    []
  );

  const dataQuery = useQuery(
    ["post.table", fetchDataOptions],
    async () => {
      return await GetPosts({
        pageIndex,
        pageSize,
      });
    },
    { keepPreviousData: false }
  );

  const deleteOnePost = async (id: string) => {
    const deleted = await fetch(`post/${id}/delete`, { method: "POST" });
    dataQuery.refetch();
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-full mb-4 gap-2">
        <Link to={"/admin/post/create"} className="btn btn-primary gap-2">
          <HiPlus /> Add New
        </Link>
      </div>
      <PaginatedTable
        loading={dataQuery.isFetching}
        columns={columns as any}
        data={dataQuery.data?.data || []}
        pageCount={dataQuery.data?.totalPage || 1}
        pageSize={pageSize}
        pageIndex={pageIndex}
        onPaginationChange={setPagination}
      />
    </div>
  );
}
