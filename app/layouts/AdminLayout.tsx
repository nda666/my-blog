import { useMatches } from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import OverlayLoading from "~/components/OverlayLoading";
import { useTheme } from "~/contexts/ThemeContext";
import BottomNavigation from "./AdminLayout/BottomNavigation";
import Navbar from "./AdminLayout/Navbar";
import Sidebar from "./AdminLayout/Sidebar";
import Breadcrumb from "./AdminLayout/Breadcrumb";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function AdminLayout({
  env,
  children,
}: {
  env?: any;
  children: ReactNode;
}) {
  const { themeChangeState } = useTheme();
  const matches = useMatches();
  return (
    <QueryClientProvider client={queryClient}>
      {themeChangeState != "idle" && (
        <OverlayLoading message="Loading theme for you" />
      )}
      <div className="bg-white dark:bg-base-100 opacity-90 relative min-h-full pb-32 md:pb-10">
        <div className="w-full flex">
          <Sidebar />
          <div className="w-full">
            <Navbar title={matches.pop()?.handle?.title()!} />
            <Breadcrumb />
            <div className="p-2 md:px-4">{children}</div>
          </div>
        </div>
        <BottomNavigation />
        {/* <Footer env={env} /> */}
      </div>
    </QueryClientProvider>
  );
}
