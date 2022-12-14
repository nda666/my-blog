import { Outlet } from "@remix-run/react";
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
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
            <a href="#" className="bg-black text-white font-bold text-xl p-4">
              Logo
            </a>
          </div>

          <div className="flex flex-col justify-center md:justify-start my-auto">
            <Outlet />
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://source.unsplash.com/IXUM4cJynP0"
          />
        </div>
      </div>
    </>
  );
}
