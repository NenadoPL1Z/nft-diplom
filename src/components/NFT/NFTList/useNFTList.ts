import { useAppSelector } from "@/hooks/useStore";
import { useMemo } from "react";

export const useNFTList = () => {
  const hasError = useAppSelector((state) => state.nftSlice.hasError);
  const isLoading = useAppSelector((state) => state.nftSlice.isLoading);
  const result = useAppSelector((state) => state.nftSlice.result);

  const isError = useMemo(
    () => !!hasError && !isLoading,
    [hasError, isLoading],
  );

  const isEmpty = useMemo(
    () => !result.length && !hasError && !isLoading,
    [result, hasError, isLoading],
  );

  const isResult = useMemo(() => !!result.length, [result]);

  return {
    result,
    isEmpty,
    isError,
    isResult,
    isLoading,
  };
};
