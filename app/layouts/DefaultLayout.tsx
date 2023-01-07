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
      {themeChangeState == "submitting" && (
        <OverlayLoading message="Loading theme for you">
          <span className="text-4xl animate-bounce">🎨</span>
        </OverlayLoading>
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
