import type { ReactNode } from "react";
import Navbar from "~/components/navbar";
import OverlayLoading from "~/components/OverlayLoading";
import { useTheme } from "~/contexts/ThemeContext";

export default function DefaultLayout({
  env,
  children,
}: {
  env?: any;
  children: ReactNode;
}) {
  const { submitState } = useTheme();
  return (
    <>
      {submitState != "idle" && (
        <OverlayLoading message="Loading theme for you" />
      )}
      <div className="bg-white dark:bg-gray-800 relative">
        <Navbar title={env.APP_NAME} />
        <div className="pt-20">{children}</div>
      </div>
    </>
  );
}
