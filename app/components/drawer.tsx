/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";

export default function Drawer({}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id="menu-button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        className="btn btn-ghost btn-circle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </button>
      <DrawerContainer open={open} setOpen={setOpen} />
    </>
  );
}

const DrawerContainer = ({ open, setOpen }) => {
  const body = typeof document !== "undefined" ? document.body : null;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="-translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="-translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white text-gray-900 dark:bg-slate-800 dark:text-white shadow-xl overflow-y-auto">
                    <div className="px-4 py-2 w-full flex flex-row justify-between items-center">
                      <Dialog.Title className="text-lg font-medium">
                        Menu
                      </Dialog.Title>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <button
                          type="button"
                          className="btn btn-ghost btn-circle btn-lg"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <MdClose />
                        </button>
                      </Transition.Child>
                    </div>
                    <div className="relative flex-1 px-4 overflow-y-auto">
                      <ul className="menu w-full p-0 rounded-box">
                        <li>
                          <a>Home</a>
                        </li>
                        <li>
                          <a>Repository</a>
                        </li>
                        <li>
                          <a>Blog</a>
                        </li>
                        <li>
                          <a>Profile</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
