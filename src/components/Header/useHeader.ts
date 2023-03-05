import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";
import { useTablet } from "@/hooks/useMedia";

export const useHeader = () => {
  const router = useRouter();
  const isTablet = useTablet();
  const handlePressLogo = () => {
    if (router.pathname === PagesNamespace.INDEX) {
      window.scrollTo({ behavior: "smooth", top: 0 });
      return;
    }
    router.push("/");
  };

  return {
    isTablet,
    handlePressLogo,
  };
};
