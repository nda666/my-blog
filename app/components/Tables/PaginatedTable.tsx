import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  OnChangeFn,
  PaginationState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, useMemo } from "react";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import TableLoading from "./TableLoading";

export interface PaginatedTableProps {
  columns: any;
  data: unknown[];
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  loading: boolean;
  onPaginationChange?: OnChangeFn<PaginationState> | undefined;
}

export default function PaginatedTable(props: PaginatedTableProps) {
  // Use the state and functions returned from useTable to build your UI
  const table = useReactTable({
    columns: props.columns,
    data: props.data,
    pageCount: props.pageCount,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    state: {
      pagination: {
        pageIndex: props.pageIndex,
        pageSize: props.pageSize,
      },
    },
    onPaginationChange: props.onPaginationChange,
  });
  // Render the UI for your table
  return (
    <Fragment>
      <div className="overflow-x-auto relative">
        {props.loading ? <TableLoading /> : null}
        {/* <div className="w-full h-full flex flex-col items-center justify-center absolute bg-slate-500 bg-opacity-80 z-30">
          <progress className="progress progress-primary w-full max-w-md"></progress>
        </div> */}

        <table className="table table-compact w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length === 0 && (
              <tr>
                <td colSpan={table.getAllColumns().length}>
                  <div className="h-10"></div>
                </td>
              </tr>
            )}
            {table.getRowModel().rows.map((row, i) => (
              <tr key={row.id}>
                {row
                  .getVisibleCells()
                  .map((cell, index) =>
                    index > 0 ? (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ) : (
                      <th key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </th>
                    )
                  )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
      <div className="h-2" />
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            className="btn btn-circle"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <HiChevronDoubleLeft size={18} />
          </button>
          <button
            className="btn btn-circle"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <HiChevronLeft size={18} />
          </button>
          <button
            className="btn btn-circle"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <HiChevronRight size={18} />
          </button>
          <button
            className="btn btn-circle"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <HiChevronDoubleRight size={18} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | <div>{table.getRowModel().rows.length} Rows</div>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div>
            Go to page:
            <input
              type="number"
              min={1}
              max={props.pageCount}
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="input w-20 mx-1"
            />
          </div>
          <select
            className="select mx-1"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Fragment>
  );
}
