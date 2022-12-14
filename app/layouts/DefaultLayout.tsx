import type { ReactNode } from "react";
import Breadcrumb from "~/layouts/DefaultLayout/Breadcrumb";
import OverlayLoading from "~/components/OverlayLoading";
import { useTheme } from "~/contexts/ThemeContext";
import Navbar from "./DefaultLayout/Navbar";
import Footer from "./DefaultLayout/Footer";

export default function DefaultLayout({
  env,
  children,
}: {
  env?: any;
  children: ReactNode;
}) {
  const { themeChangeState } = useTheme();
  return (
    <>
      {themeChangeState == "loading" && (
        <OverlayLoading message="Loading theme for you" />
      )}
      <div className="bg-white dark:bg-gray-800 relative">
        <Navbar title={env.APP_NAME} />

        <div className="pt-20">
          <Breadcrumb />
          {children}
        </div>

        <Footer env={env} />
      </div>
    </>
  );
}
