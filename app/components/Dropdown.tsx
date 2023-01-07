import { Menu, Portal, Transition } from "@headlessui/react";
import type { ComponentType, ReactNode } from "react";
import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import { RiArrowDownLine } from "react-icons/ri";
import { usePopper } from "react-popper";

export interface DropdownProps {
  children?: ReactNode;
  label: string | ReactNode;
  menus?: ReactNode[] | string[];
  dropdownParent?: string;
}
type ExtractProps<T> = T extends ComponentType<infer P> ? P : T;

export function DropdownItem(props: ExtractProps<typeof Menu.Item>) {
  return (
    <Menu.Item {...props}>
      {({ active }) => (
        <div
          className={`${
            active
              ? "bg-primary  text-white"
              : "text-primary dark:text-primary-content"
          } flex rounded-md w-full text-left`}
          {...props}
        ></div>
      )}
    </Menu.Item>
  );
}

export default function Dropdown(props: DropdownProps) {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
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
          allowedAutoPlacements: ["bottom-end"],
          fallbackPlacements: ["bottom-end", "top-start"],
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

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          as="button"
          ref={setReferenceElement}
          className="btn flex-row flex-nowrap gap-2"
        >
          {props.label}
          <RiArrowDownLine />
        </Menu.Button>
      </div>
      <Portal>
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <Transition
            as={Fragment}
            enter="transition ease-in duration-100"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
            afterLeave={() => setPopperElement(null)}
          >
            <Menu.Items
              static
              className="right-0 w-56 origin-top-right bg-white dark:bg-slate-800  rounded-md shadow-lg p-1"
            >
              <small className="px-2 py-1 block border-b dark:text-primary-content dark:border-gray-600 w-full">
                Menu
              </small>
              {props.children}
            </Menu.Items>
          </Transition>
        </div>
        {/* , document.querySelector(props.dropdownParent || "body")! */}
      </Portal>
    </Menu>
  );
}
