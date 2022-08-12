import type { ReactNode } from "react";
import Navbar from "~/components/navbar";

export default function DefaultLayout({
  env,
  children,
}: {
  env?: any;
  children: ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Navbar title={env.APP_NAME} />
      {children}
    </div>
  );
}
