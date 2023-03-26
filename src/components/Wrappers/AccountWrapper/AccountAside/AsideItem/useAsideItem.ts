import { useRouter } from "next/router";
import { useMemo } from "react";
import { PagesNamespace } from "@/types/enum";

export const useAsideItem = (url: PagesNamespace) => {
  const router = useRouter();

  const isActive = useMemo(() => router.pathname === url, [router]);

  return {
    isActive,
  };
};
