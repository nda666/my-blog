import { Link, useNavigate } from "@remix-run/react";
import { Fragment } from "react";
import {
  RiArrowLeftFill,
  RiArrowRightFill,
  RiArrowRightSFill,
  RiMenu4Line,
} from "react-icons/ri";
import { FaEllipsisH } from "react-icons/fa";

import ReactPaginate from "react-paginate";

export interface PaginateInterface {
  totalData: number;
  dataPerPage: number;
  currentPage: number;
  handlePageClick?: (selectedItem: { selected: number }) => void;
}

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

/**
 * Helper method for creating a range of numbers
 * range(1, 5) => [1, 2, 3, 4, 5]
 */
const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

export default function Paginate(props: PaginateInterface) {
  const navigate = useNavigate();
  const totalPages = Math.ceil(props.totalData / props.dataPerPage);

  const fetchPageNumbers = () => {
    const currentPage = props.currentPage;
    const pageNeighbours = 2;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */
    const totalNumbers = 2 * 1 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };
  const pages = fetchPageNumbers();
  return (
    <div className="w-full flex flex-col items-center py-4">
      <div className="btn-group">
        {props.currentPage - 1 > 0 ? (
          <Link
            rel="canonical"
            to={`.?page=${props.currentPage - 1}`}
            className="btn"
          >
            <RiArrowLeftFill />
          </Link>
        ) : (
          <button className="btn btn-disabled">
            <RiArrowLeftFill />
          </button>
        )}
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <div className="btn btn-outline pointer-events-none">
                <FaEllipsisH />
              </div>
            );

          if (page === RIGHT_PAGE)
            return (
              <div className="btn btn-outline pointer-events-none">
                <FaEllipsisH />
              </div>
            );

          return (
            <Link
              key={index}
              rel="canonical"
              className={`btn ${page == props.currentPage ? `btn-active` : ``}`}
              to={`.?page=${page}`}
            >
              {page}
            </Link>
          );
        })}
        {props.currentPage + 1 <= totalPages ? (
          <Link
            rel="canonical"
            to={`.?page=${props.currentPage + 1}`}
            className="btn"
          >
            <RiArrowRightFill />
          </Link>
        ) : (
          <button className="btn btn-disabled">
            <RiArrowRightFill />
          </button>
        )}
      </div>
    </div>
  );
}
