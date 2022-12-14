import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useNavigate } from "@remix-run/react";
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
import Dropdown, { DropdownItem } from "~/components/Dropdown";
import PaginatedTable from "~/components/Tables/PaginatedTable";
import type { AdminRootLoader } from "../../__page";
import type { Tag as ITag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { GetTags } from "~/api/tag";
export const handle = {
  title: () => "Tag",
};
const loader = () => {
  return json({});
};
export const meta: MetaFunction<
  typeof loader,
  {
    "routes/admin/__page": AdminRootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Tag - ${parentsData["routes/admin/__page"].env.APP_NAME}`,
    description: "This page is for managing tags",
  };
};

export default function Tag() {
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

  const columns = useMemo<ColumnDef<ITag, unknown>[]>(
    () => [
      {
        header: "Action",
        footer: "Action",
        accessorKey: "id",
        cell: (post) => (
          <>
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
        header: "Name",
        footer: "Name",
        accessorKey: "name",
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
    ["tag.table", fetchDataOptions],
    async () => {
      return await GetTags({
        pageIndex,
        pageSize,
      });
    },
    { keepPreviousData: false }
  );

  const deleteOnePost = async (id: string) => {
    const deleted = await fetch(`tag/${id}/delete`, { method: "POST" });

    dataQuery.refetch();
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-full mb-4 gap-2">
        <Link to={"/admin/tag/create"} className="btn btn-primary gap-2">
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
