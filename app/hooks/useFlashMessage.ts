import { useMatches } from "@remix-run/react";
import type { FlashMessageType } from "~/types/session";

export function useFlashMessages() {
  return useMatches()?.find((data) => Boolean(data?.data?.message)) as
    | FlashMessageType
    | undefined;
}
