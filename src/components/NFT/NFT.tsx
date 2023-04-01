import React from "react";
import NftSearch from "@/components/NFT/NFTSearch/NFTSearch";
import NftList from "@/components/NFT/NFTList/NFTList";
import { NFTProps } from "@/components/NFT/types";
import { useNFTStyles } from "@/components/NFT/NFT.styles";
import { DEFAULT_ADDRESS, DEFAULT_CHAIN } from "@/lib/constants/constants";

const NFT = ({
  search = DEFAULT_ADDRESS,
  chain = DEFAULT_CHAIN,
  id = "",
}: Partial<NFTProps>) => {
  const props = { search, chain, id };

  return (
    <ContainerSC>
      <NftSearch {...props} />
      <NftList {...props} />
    </ContainerSC>
  );
};

const { ContainerSC } = useNFTStyles();

export default React.memo(NFT);
