import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";

export const useHeader = () => {
  const router = useRouter();
  const handlePressLogo = () => {
    if (router.pathname === PagesNamespace.INDEX) {
      window.scrollTo({ behavior: "smooth", top: 0 });
      return;
    }
    router.push("/");
  };

  return {
    handlePressLogo,
  };
};
