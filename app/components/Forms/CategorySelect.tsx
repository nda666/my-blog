import { Combobox } from "@headlessui/react";
import { usePopper } from "react-popper";
import { Fragment, useRef, useState } from "react";

export interface CategoryValueProps {
  id: null | string;
  name: string;
}

export interface CategorySelectProps {
  initialValue?: CategoryValueProps;
  onChange?: (val: CategoryValueProps) => void;
  categories: CategoryValueProps[];
  name?: string;
}

export default function CategorySelect(props: CategorySelectProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryValueProps | undefined
  >(props?.initialValue || undefined);
  const [query, setQuery] = useState("");

  const comboBtn = useRef<HTMLButtonElement>(null);

  const filteredPeople =
    query === ""
      ? props?.categories || []
      : props?.categories?.filter((category) => {
          return category.name.toLowerCase().includes(query.toLowerCase());
        }) || [];

  const allowToUseCategory = (find: string) => {
    return props?.categories?.find((x) => x.name === find) ? false : true;
  };
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

  //   const deleteCategory = (index: number) => {
  //     let _categories = [...selectedCategory];
  //     _categories.splice(index, 1);
  //     setSelectedCategory(_categories);
  //   };

  const onSelectHandler = (val: CategoryValueProps) => {
    setSelectedCategory(val);
    props.onChange && props.onChange(val);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <Combobox value={selectedCategory} by="name" onChange={onSelectHandler}>
        <Combobox.Button className="hidden" ref={comboBtn}></Combobox.Button>
        <div className="relative">
          <Combobox.Input
            ref={setReferenceElement}
            placeholder="Select or create a new category"
            className="input input-bordered w-full"
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(category: CategoryValueProps) => category?.name!}
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
            {query.length > 0 && allowToUseCategory(query) && (
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

            {props?.categories && props?.categories?.length <= 0 && (
              <div className="relative cursor-default select-none p-2 dark:text-white text-sm italic">
                No categories found on database. To add new category, just type
                and hit enter.
              </div>
            )}

            {filteredPeople?.map((category) => (
              <Combobox.Option
                key={category.id}
                value={category}
                className={({ active }) =>
                  `relative cursor-default select-none p-2 ${
                    active ? "bg-primary text-white" : "dark:text-white"
                  }`
                }
              >
                {category.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </div>
      </Combobox>
      {selectedCategory && (
        <Fragment>
          <input
            type="hidden"
            name={`${props.name}.id`}
            value={selectedCategory.id ?? ""}
          ></input>
          <input
            type="hidden"
            name={`${props.name}.name`}
            value={selectedCategory.name}
          ></input>
        </Fragment>
      )}
    </div>
  );
}
