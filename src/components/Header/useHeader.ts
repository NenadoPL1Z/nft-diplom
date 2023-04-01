import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";
import { useTablet } from "@/hooks/useMedia";
import { scrollTop } from "@/lib/services/services";

export const useHeader = () => {
  const router = useRouter();
  const isTablet = useTablet();
  const handlePressLogo = () => {
    if (router.pathname === PagesNamespace.INDEX) {
      scrollTop();
      return;
    }
    router.push("/");
  };

  return {
    isTablet,
    handlePressLogo,
  };
};
