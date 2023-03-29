import { useAppSelector } from "@/hooks/store/useStore";
import { useEffect } from "react";
import { PagesNamespace } from "@/types/enum";
import { useRouter } from "next/navigation";

export const usePrivatePage = () => {
  const router = useRouter();

  const { isLoading, isAuth } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    if (!isLoading && !isAuth) {
      router.push(PagesNamespace.SIGN_IN);
    }
  }, [isLoading, isAuth, router]);

  return {
    isLoading,
  };
};
