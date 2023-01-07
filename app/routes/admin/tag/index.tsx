import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { format, formatDistance } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { HiPlus } from "react-icons/hi";
import PaginatedTable from "~/components/Tables/PaginatedTable";
import type { Tag as ITag } from "@prisma/client";
import type { RootLoader } from "~/root";
import { tagDatatables } from "~/models";
import { DefaultActionButton } from "~/components/Tables/DefaultActionButton";

export const handle = {
  title: () => "Tag",
};

const defaultPageSize = 10;

export const loader = async ({ request }: DataFunctionArgs) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")!) || 1;
  const length = parseInt(url.searchParams.get("length")!) || defaultPageSize;
  const initialData = await tagDatatables({ page, length });
  return json(initialData);
};
export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Tag - ${parentsData["root"].env.APP_NAME}`,
    description: "This page is for managing tags",
  };
};

export default function Tag() {
  const initialData = useLoaderData<typeof loader>();
  const datatableFetcher = useFetcher();

  const [state, setState] = useState({
    firstLoad: true,
    datatable: initialData,
  });
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: defaultPageSize,
  });

  const runDatatableFetcher = () => {
    datatableFetcher.load(`?page=${pageIndex + 1 || 1}&length=${pageSize}`);
  };

  useEffect(() => {
    if (state.firstLoad) {
      setState({ ...state, firstLoad: false });
      return;
    }
    runDatatableFetcher();
  }, [pageIndex, pageSize]);

  useEffect(() => {
    if (datatableFetcher.type == "done") {
      setState({ ...state, datatable: datatableFetcher.data });
    }
  }, [datatableFetcher]);

  const columns = useMemo<ColumnDef<ITag, string>[]>(
    () => [
      {
        header: "Action",
        footer: "Action",
        accessorKey: "id",
        cell: (cell) => (
          <DefaultActionButton
            modelId={cell.getValue()}
            onDeleteSuccess={runDatatableFetcher}
          />
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
        loading={datatableFetcher.state == "loading"}
        columns={columns}
        data={state.datatable?.data || []}
        pageCount={state.datatable?.totalPage || 1}
        pageSize={pageSize}
        pageIndex={pageIndex}
        onPaginationChange={setPagination}
      />
    </div>
  );
}
