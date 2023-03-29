import { useAppSelector } from "@/hooks/useStore";
import { useMemo } from "react";

export const useNFTList = () => {
  const hasError = useAppSelector((state) => state.nftSlice.hasError);
  const isLoading = useAppSelector((state) => state.nftSlice.isLoading);
  const result = useAppSelector((state) => state.nftSlice.result);
  const isEnd = useAppSelector((state) => state.nftSlice.isEnd);

  const isError = useMemo(
    () => !!hasError && !isLoading,
    [hasError, isLoading],
  );

  const isEmpty = useMemo(
    () => !result.length && !hasError && !isLoading,
    [result, hasError, isLoading],
  );

  const isResult = useMemo(() => !!result.length, [result]);

  const isVisibleEnd = useMemo(
    () => !hasError && !isLoading && !!result.length && isEnd,
    [hasError, isEnd, isLoading, result],
  );

  const isMore = useMemo(
    () => !isLoading && !isError && !isEmpty && isResult && !isVisibleEnd,
    [isLoading, isError, isEmpty, isResult, isVisibleEnd],
  );

  return {
    result,
    isEmpty,
    isError,
    isResult,
    isLoading,
    isMore,
    isVisibleEnd,
  };
};
