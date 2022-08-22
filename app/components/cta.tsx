import { Transition } from "@headlessui/react";
import { useState } from "react";
import avatar from "~/assets/images/avatar.svg";
export default function Cta() {
  const [isShowing, setIsShowing] = useState(false);
  const [isShowingCall, setIsShowingCall] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
      className="bg-white dark:bg-gray-800 overflow-hidden relative flex md:flex-row flex-col"
    >
      <div className="xs:w-full sm:w-full text-start  w-full md:w-1/2 lg:w-2/3 py-10 px-4 sm:px-6 lg:py-10 lg:px-8 z-0">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Hi 👋, I'm Adha Bakhtiar</span>
        </h2>
        <p className="text-lg text-violet-600 dark:text-violet-300">
          A passionate frontend & backend developer from Indonesia 🇮🇩
        </p>
        <p className="text-lg mt-4 text-gray-800 dark:text-gray-200">
          Bakhtiar currently working on PT. Doran Sukses Indonesia as frontend &
          backend enginer. He has several skills including ReactJS, VueJS,
          AngularJS, React Native, Flutter, NextJS, NuxtJS, NestJs, Laravel
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              onMouseEnter={() => setIsShowingCall(true)}
              onMouseLeave={() => setIsShowingCall(false)}
              type="button"
              className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            >
              More About Him...
            </button>
          </div>
        </div>
      </div>
      <div className="xs:w-full sm:w-full md:w-1/2 min-h-full lg:w-2/3 flex items-center flex-col relative">
        <Transition
          show={isShowingCall}
          appear={true}
          unmount={false}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="md:absolute relative z-10 top-2 right-2 !block"
        >
          <div className="rounded-full bg-white w-64 flex items-center border-dotted border-2 border-violet-500 ">
            <p className="w-full px-4 py-6 text-center">Yeah go ahead!!!</p>
          </div>
        </Transition>

        <Transition
          show={isShowing}
          unmount={false}
          enter="transition-bottom duration-75"
          enterFrom="-bottom-10"
          enterTo="bottom-0"
          leave="transition-bottom duration-150"
          leaveFrom="bottom-0"
          leaveTo="-bottom-10"
          className="right-0 -bottom-10 !block relative md:absolute "
        >
          <img src={avatar} className="h-full w-60" />
        </Transition>
      </div>
    </div>
  );
}
