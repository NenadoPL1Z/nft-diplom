import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/store/useStore";
import { fetchGetNFTId } from "@/store/reducers/nftSlice/asyncThunks/fetchGetNFTId/fetchGetNFTId";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export const useNFTId = () => {
  const { query } = useRouter();

  const queryData = useMemo(
    () => ({
      id: (query.id || "") as string,
      search: (query.address || "") as string,
      chain: (query.chain || "ETHEREUM") as EvmChainUnion,
    }),
    [query],
  );

  const result = useAppSelector((state) => state.nftSlice.result);
  const hasError = useAppSelector((state) => state.nftSlice.hasError);
  const isLoading = useAppSelector((state) => state.nftSlice.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Object.keys(query).length) {
      dispatch(
        fetchGetNFTId({
          search: queryData.search,
          chain: queryData.chain,
          id: queryData.id,
        }),
      );
    }
  }, [query]);

  return {
    result,
    hasError,
    isLoading,
  };
};
