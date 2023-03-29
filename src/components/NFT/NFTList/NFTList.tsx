import React from "react";
import { styled } from "@mui/material";
import { useNFTList } from "@/components/NFT/NFTList/useNFTList";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import NFTError from "@/components/NFT/NFTList/NFTError/NFTError";
import NFTEmpty from "@/components/NFT/NFTList/NFTEmpty/NFTEmpty";
import NFTData from "@/components/NFT/NFTList/NFTData/NFTData";
import NFTMore from "@/components/NFT/NFTList/NFTMore/NFTMore";
import NFTEnd from "@/components/NFT/NFTList/NFTEnd/NFTEnd";

const NFTList = () => {
  const {
    result,
    isError,
    isEmpty,
    isResult,
    isLoading,
    isMore,
    isVisibleEnd,
  } = useNFTList();

  return (
    <ContainerSC>
      {isResult && <NFTData data={result} />}
      {isEmpty && <NFTEmpty />}
      {isError && <NFTError />}
      {isLoading && <NFTLoading />}
      {isMore && <NFTMore />}
      {isVisibleEnd && <NFTEnd />}
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 40px;
`;

export default React.memo(NFTList);
