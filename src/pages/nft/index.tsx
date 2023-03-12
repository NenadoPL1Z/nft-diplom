import React, { useEffect } from "react";
import PageContainerSC from "@/UI/SC/PageContainerSC";

import NftList from "@/components/Nft/NftList/NftList";
import { useAppDispatch } from "@/hooks/useStore";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import NftSearch from "@/components/Nft/NftSearch/NftSearch";

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
