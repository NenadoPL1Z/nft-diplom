import React, { useEffect } from "react";
import NftList from "@/components/NFT/NFTList/NFTList";
import { useAppDispatch } from "@/hooks/useStore";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import NftSearch from "@/components/NFT/NFTSearch/NFTSearch";

const Nft = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetContractNFTs());
  }, []);

  return (
    <>
      <NftSearch />
      <NftList />
    </>
  );
};

export default Nft;
