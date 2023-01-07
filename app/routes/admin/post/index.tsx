import type { Post as IPost } from "@prisma/client";
import {
  DataFunctionArgs,
  json,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Link,
  useFetcher,
  useLoaderData,
  useMatches,
  useNavigate,
} from "@remix-run/react";
import { useQuery } from "@tanstack/react-query";
import type { ColumnDef, PaginationState } from "@tanstack/react-table";
import { format, formatDistance } from "date-fns";
import { useCallback, useEffect, useMemo, useState } from "react";
import { HiPlus } from "react-icons/hi";
import {
  RiArchiveLine,
  RiDeleteBin2Line,
  RiEditLine,
  RiEye2Line,
} from "react-icons/ri";
import { GetPosts } from "~/api/getPosts";
import Dropdown, { DropdownItem } from "~/components/Dropdown";
import { DefaultActionButton } from "~/components/Tables/DefaultActionButton";
import PaginatedTable from "~/components/Tables/PaginatedTable";
import { postDatatables } from "~/models/post";
import { RootLoader } from "~/root";
import { AdminRootLoader } from "../../../__admin";

const defaultPageSize = 10;

export const loader = async ({ request }: DataFunctionArgs) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page")!) || 1;
  const length = parseInt(url.searchParams.get("length")!) || defaultPageSize;
  const initialData = await postDatatables({ page, length });
  return json(initialData);
};

export const handle = {
  title: () => "Post",
};

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ parentsData }) => {
  return {
    title: `Post - ${parentsData["root"].env.APP_NAME}`,
    description: "This page is for managing posts.",
  };
};

export default function Post() {
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
    datatableFetcher.load(
      `/admin/post?index&page=${pageIndex + 1 || 1}&length=${pageSize}`
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

  const columns = useMemo<ColumnDef<IPost, string>[]>(
    () => [
      {
        header: "Action",
        footer: "Action",
        accessorKey: "id",
        cell: (id) => (
          <DefaultActionButton
            modelId={id.getValue()}
            onDeleteSuccess={runDatatableFetcher}
          />
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

  const deleteOnePost = async (id: string) => {
    const deleted = await fetch(`post/${id}/delete`, { method: "POST" });
    runDatatableFetcher();
  };
  return (
    <div className="flex flex-col">
      <div className="flex w-full mb-4 gap-2">
        <Link to={"/admin/post/create"} className="btn btn-primary gap-2">
          <HiPlus /> Add New
        </Link>
      </div>
      <PaginatedTable
        loading={datatableFetcher.state == "loading"}
        columns={columns as any}
        data={state.datatable.data || []}
        pageCount={state.datatable.totalPage || 1}
        pageSize={pageSize}
        pageIndex={pageIndex}
        onPaginationChange={setPagination}
      />
    </div>
  );
}
