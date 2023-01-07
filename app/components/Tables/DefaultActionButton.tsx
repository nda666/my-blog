import { Link, useFetcher } from "@remix-run/react";
import { useEffect } from "react";
import {
  RiEye2Line,
  RiEditLine,
  RiArchiveLine,
  RiDeleteBin2Line,
} from "react-icons/ri";
import Dropdown, { DropdownItem } from "../Dropdown";

export interface DefaultActionButtonProps {
  modelId: string;
  onDeleteSuccess?: () => void;
}

export const DefaultActionButton = ({
  modelId,
  onDeleteSuccess,
}: DefaultActionButtonProps) => {
  const fetcher = useFetcher();
  useEffect(() => {
    if (fetcher.type == "done") {
      onDeleteSuccess && onDeleteSuccess();
    }
  }, [fetcher]);
  return (
    <>
      <Dropdown label="Action">
        <DropdownItem>
          <Link
            to={`${modelId}`}
            className="flex items-center w-full p-2 gap-2"
          >
            <RiEye2Line />
            View
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link
            to={`${modelId}/edit`}
            className="flex items-center w-full p-2 gap-2"
          >
            <RiEditLine />
            Edit
          </Link>
        </DropdownItem>
        <hr className="dark:border-gray-600"></hr>
        <DropdownItem>
          <Link
            to={`${modelId}/archive`}
            className="flex items-center w-full p-2 gap-2"
          >
            <RiArchiveLine />
            Archive
          </Link>
        </DropdownItem>
        <DropdownItem>
          <fetcher.Form
            method="post"
            action={`${modelId}/delete`}
            className="w-full"
          >
            <button
              type="submit"
              className="flex items-center w-full p-2 gap-2"
            >
              <RiDeleteBin2Line />
              Delete
            </button>
          </fetcher.Form>
        </DropdownItem>
      </Dropdown>
    </>
  );
};
