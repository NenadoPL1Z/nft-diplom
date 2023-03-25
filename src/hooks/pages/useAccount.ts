import { useAppSelector } from "@/hooks/useStore";
import { useEffect } from "react";

export const useAccount = () => {
  const { isLoading, isAuth } = useAppSelector((state) => state.userSlice);

  useEffect(() => {}, [isLoading, isAuth]);

  return {
    isAuth,
    isLoading,
  };
};
