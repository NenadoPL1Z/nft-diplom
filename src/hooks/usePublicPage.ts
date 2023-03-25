import { useAppSelector } from "@/hooks/useStore";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const usePublicPage = () => {
  const router = useRouter();
  const { isLoading, isAuth } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    if (!isLoading && isAuth) {
      console.log(router);
    }
  }, [isLoading, isAuth]);

  return {};
};
