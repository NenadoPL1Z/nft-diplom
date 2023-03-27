import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { useEffect, useRef, useState } from "react";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import { useRouter } from "next/router";
import { changeAddress, changeChain } from "@/store/reducers/nftSlice/nftSlice";
import { exchangeData } from "@/lib/mock/exchangeData";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";
import { changeIsInitNFT } from "@/store/reducers/globalSlice/globalSlice";

export const useNftPage = () => {
  const router = useRouter();

  const isMoralis = useAppSelector((state) => state.globalSlice.isMoralis);
  const isInitNFT = useAppSelector((state) => state.globalSlice.isInitNFT);
  // const result = useAppSelector((state) => state.nftSlice.result);
  const dispatch = useAppDispatch();
  const renderCount = useRef(1);

  useEffect(() => {
    if (router) {
      if (router.query) {
        if ("search" in router.query) {
          dispatch(changeAddress(router.query.search as string));
        }
        if (
          "chain" in router.query &&
          exchangeData.find((item) => item === router.query.chain)
        ) {
          dispatch(changeChain(router.query.chain as EvmChainUnion));
        }
      }
      if (Object.keys(router.query).length || renderCount.current > 1) {
        dispatch(changeIsInitNFT(true));
      }
      renderCount.current += 1;
    }
  }, [dispatch, router]);

  useEffect(() => {
    if (isMoralis && isInitNFT) {
      dispatch(fetchGetContractNFTs());
    }
  }, [isMoralis, isInitNFT]);
};
