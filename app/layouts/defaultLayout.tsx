import type { ReactNode } from "react";
import Navbar from "~/components/navbar";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
