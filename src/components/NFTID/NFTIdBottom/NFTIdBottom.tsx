import React from "react";
import { useNFTIdBottom } from "@/components/NFTID/NFTIdBottom/useNFTIdBottom";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import NFTData from "@/components/NFT/NFTList/NFTData/NFTData";
import { NFTIDTitleSC } from "@/components/NFTID/NFTIDTitleSC/NFTIDTitleSC";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";
import { styled } from "@mui/material";

const NFTIdBottom = () => {
  const { isLoading, data, query } = useNFTIdBottom();

  return (
    <ContainerSC>
      {isLoading && <NFTLoading />}
      {!isLoading && data.length && (
        <>
          <NFTIDTitleSC>Токены из той-же коллекции</NFTIDTitleSC>
          <NFTData
            data={data}
            search={query.address as string}
            chain={query.chain as EvmChainUnion}
          />
        </>
      )}
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  flex-grow: 1;
`;

export default React.memo(NFTIdBottom);
