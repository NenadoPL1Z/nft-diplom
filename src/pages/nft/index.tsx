import React, { useEffect } from "react";
import NftList from "@/components/NFT/NFTList/NFTList";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import NftSearch from "@/components/NFT/NFTSearch/NFTSearch";

const Nft = () => {
  const isMoralis = useAppSelector((state) => state.globalSlice.isMoralis);
  const result = useAppSelector((state) => state.nftSlice.result);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isMoralis && !result.length) {
      dispatch(fetchGetContractNFTs());
    }
  }, [isMoralis]);

  return (
    <>
      <NftSearch />
      <NftList />
    </>
  );
};

export default Nft;
