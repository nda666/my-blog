import type { LoaderFunction } from "@remix-run/node";
import { authenticatedRoute, logout } from "~/utils/server/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await authenticatedRoute(request);
  return await logout(request);
};
export default function Logout() {
  return <></>;
}
