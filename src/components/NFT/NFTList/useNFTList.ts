import { useAppSelector } from "@/hooks/store/useStore";
import { useMemo } from "react";

export const useNFTList = () => {
  const hasError = useAppSelector((state) => state.nftSlice.hasError);
  const isLoading = useAppSelector((state) => state.nftSlice.isLoading);
  const result = useAppSelector((state) => state.nftSlice.result);
  const isEnd = useAppSelector((state) => state.nftSlice.isEnd);
  const isSingle = useAppSelector((state) => state.nftSlice.isSingle);

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
    () => !hasError && !isLoading && !!result.length && isEnd && !isSingle,
    [hasError, isEnd, isLoading, result, isSingle],
  );

  const isMore = useMemo(
    () =>
      !isLoading &&
      !isError &&
      !isEmpty &&
      isResult &&
      !isVisibleEnd &&
      !isSingle,
    [isLoading, isError, isEmpty, isResult, isVisibleEnd, isSingle],
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
