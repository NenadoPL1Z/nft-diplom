import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/store/useStore";
import { useEffect } from "react";
import { PagesNamespace } from "@/types/enum";

export const useAuthWrapper = () => {
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);

  useEffect(() => {
    if (isAuth) {
      router.push(PagesNamespace.ACCOUNT).then(() => undefined);
    }
  }, [isAuth, router]);
};
