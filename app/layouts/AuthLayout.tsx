import { Link, Outlet } from "@remix-run/react";
import type { ReactNode } from "react";
import OverlayLoading from "~/components/OverlayLoading";
import { useTheme } from "~/contexts/ThemeContext";

export default function AuthLayout({
  env,
  children,
}: {
  env?: any;
  children: ReactNode;
}) {
  const { themeChangeState } = useTheme();
  return (
    <>
      {themeChangeState != "idle" && (
        <OverlayLoading message="Loading theme for you" />
      )}
      <div className="w-full flex flex-wrap h-screen bg-base-200">
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start items-center pt-4 md:px-5">
            <Link to={"/"} className="">
              <img
                className="h-10 px-2 transition-transform duration-1000 hover:-rotate-[360deg] ease-in-out"
                src="/images/logo.png"
                alt={env.APP_NAME || "APP_TITLE"}
              />
            </Link>
            <div className="font-bold text-xl">{env.APP_NAME}</div>
          </div>
          {/* <div className="flex justify-center md:justify-start pt-4 md:pl-12">
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              {env.APP_NAME}
            </a>
          </div> */}

          <div className="flex flex-col justify-center md:justify-start my-auto">
            <div className="flex justify-center items-center content-center ">
              <div className=" w-full md:w-full sm:w-[70%] font-bold px-5 py-6 rounded-md">
                <Outlet />
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 md:w-1/3 lg:w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen fixed hidden md:block"
            src="https://source.unsplash.com/m_7p45JfXQo"
            alt="background"
          />
        </div>
      </div>
    </>
  );
}
