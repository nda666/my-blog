import type { DataFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useFetcher, useLoaderData } from "@remix-run/react";
import type { PaginationState } from "@tanstack/react-table";
import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import { HiPlus } from "react-icons/hi";
import PaginatedTable from "~/components/Tables/PaginatedTable";
import type { Category as ICategory } from "@prisma/client";
import { categoryDatatables } from "~/models";
import type { RootLoader } from "~/root";
import { DefaultActionButton } from "~/components/Tables/DefaultActionButton";

const defaultPageSize = 10;

export const handle = {
  title: () => "Category",
};

export const loader = async ({ request }: DataFunctionArgs) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")!) || 1;
  const length = parseInt(url.searchParams.get("length")!) || defaultPageSize;
  const initialData = await categoryDatatables({ page, length });
  return json(initialData);
};
export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Category - ${parentsData["root"].env.APP_NAME}`,
    description: "This page is for managing categories",
  };
};

export default function Category() {
  const initialData = useLoaderData<typeof loader>();
  const datatableFetcher = useFetcher();
  const actionFetcher = useFetcher();

  const [state, setState] = useState({
    firstLoad: true,
    datatable: initialData,
  });
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: defaultPageSize,
  });

  const runDatatableFetcher = () => {
    datatableFetcher.load(
      `/admin/category?index&page=${pageIndex + 1 || 1}&length=${pageSize}`
    );
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
  const columnHelper = createColumnHelper<ICategory>();
  const columns = useMemo(
    () => [
      columnHelper.accessor<"id", string>("id", {
        cell: (props) => (
          <DefaultActionButton
            onDeleteSuccess={() => runDatatableFetcher()}
            modelId={props.getValue()}
          />
        ),
      }),
      columnHelper.accessor<"name", string>("name", {
        header: "Name",
        footer: "Name",
      }),
      columnHelper.accessor<"slug", string>("slug", {
        header: "Slug",
        footer: "Slug",
      }),
      columnHelper.accessor<"createdAt", Date>("createdAt", {
        header: "Created At",
        footer: "Created At",
        cell: (post) =>
          post.getValue()
            ? format(new Date(post.getValue()), "dd MMM yyyy hh:mm aa")
            : "",
      }),
      columnHelper.accessor<"createdAt", Date>("createdAt", {
        header: "Created At",
        footer: "Created At",
        cell: (post) =>
          post.getValue()
            ? format(new Date(post.getValue()), "dd MMM yyyy hh:mm aa")
            : "",
      }),
    ],
    []
  );

  const deleteOnePost = async (id: string) => {
    await actionFetcher.submit(
      {},
      { method: "post", action: `admin/category/${id}/delete` }
    );
    runDatatableFetcher();
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-full mb-4 gap-2">
        <Link to={"/admin/category/create"} className="btn btn-primary gap-2">
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
        onRefreshButtonClick={runDatatableFetcher}
        onPaginationChange={setPagination}
      />
    </div>
  );
}
