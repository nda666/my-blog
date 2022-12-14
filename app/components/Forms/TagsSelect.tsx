import { Combobox } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { usePopper } from "react-popper";
import { GetTags } from "~/api/tag";

export interface TagValueProps {
  id: null | string;
  name: string;
}
export interface TagsSelectProps {
  initialValue?: TagValueProps[];
  onChange?: (val: TagValueProps[]) => void;
  name?: string;
}

export default function TagsSelect(props: TagsSelectProps) {
  const [selectedTag, setSelectedTag] = useState<TagValueProps[]>(
    props?.initialValue || []
  );
  const [query, setQuery] = useState("");
  const comboBtn = useRef<HTMLButtonElement>(null);

  const tagsQuery = useQuery(
    ["selectTags"],
    async () => {
      return await GetTags();
    },
    { keepPreviousData: true }
  );

  const filteredPeople =
    query === ""
      ? tagsQuery?.data || []
      : tagsQuery?.data?.filter((tag) => {
          return tag.name.toLowerCase().includes(query.toLowerCase());
        }) || [];
  const [referenceElement, setReferenceElement] =
    useState<HTMLInputElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLUListElement | null>(
    null
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "top-start",
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          boundary: "clippingParents",
        },
      },
      {
        name: "flip",
        options: {
          allowedAutoPlacements: ["top-end"],
          fallbackPlacements: ["top-end", "top-start"],
          altBoundary: true,
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  const deleteTag = (index: number) => {
    let _tags = [...selectedTag];
    _tags.splice(index, 1);
    setSelectedTag(_tags);
  };

  const onSelectHandler = (val: TagValueProps[]) => {
    setSelectedTag(val);
    props.onChange && props.onChange(val);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <Combobox
        value={selectedTag}
        by="name"
        onChange={onSelectHandler}
        multiple
      >
        <Combobox.Button className="hidden" ref={comboBtn}></Combobox.Button>
        <div className="relative">
          <Combobox.Input
            ref={setReferenceElement}
            placeholder="Select or create a new tag"
            className="input input-bordered w-full"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(tag) => ""}
            autoComplete="off"
            onFocus={() => {
              comboBtn?.current?.click();
            }}
          />
          <Combobox.Options
            ref={setPopperElement}
            {...attributes.popper}
            className=" mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 dark:text-primary-content py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            style={styles.popper}
          >
            {query.length > 0 && (
              <Combobox.Option
                value={{ id: null, name: query }}
                className={({ active, selected }) =>
                  `relative cursor-default select-none p-2 ${
                    active ? "bg-primary text-white" : "dark:text-white"
                  }`
                }
              >
                Create "{query}"
              </Combobox.Option>
            )}

            {tagsQuery?.data && tagsQuery?.data?.length <= 0 && (
              <div className="relative cursor-default select-none p-2 dark:text-white text-sm italic">
                No tags found on database. To add new tag, just type and hit
                enter.
              </div>
            )}

            {filteredPeople?.map((tag) => (
              <>
                {selectedTag.findIndex((x) => x.id === tag.id) === -1 && (
                  <Combobox.Option
                    key={tag.id}
                    value={tag}
                    className={({ active }) =>
                      `relative cursor-default select-none p-2 ${
                        active ? "bg-primary text-white" : "dark:text-white"
                      }`
                    }
                  >
                    {tag.name}
                  </Combobox.Option>
                )}
              </>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>

      <div className="flex flex-wrap gap-2">
        {selectedTag?.map((value, index) => (
          <div key={index} className="badge badge-primary gap-2 badge-lg">
            <button
              type="button"
              onClick={() => deleteTag(index)}
              className="btn btn-circle btn-ghost btn-xs"
            >
              <RiCloseCircleLine />
            </button>
            {value.name}
            <input
              type="hidden"
              name={`tags[${index}].id`}
              value={value.id ?? ""}
            ></input>
            <input
              type="hidden"
              name={`tags[${index}].name`}
              value={value.name}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
}
