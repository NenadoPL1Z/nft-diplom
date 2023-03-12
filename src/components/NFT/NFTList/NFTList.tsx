import React from "react";
import { CircularProgress, styled } from "@mui/material";
import { useAppSelector } from "@/hooks/useStore";
import { useNFTList } from "@/components/NFT/NFTList/useNFTList";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import NFTError from "@/components/NFT/NFTList/NFTError/NFTError";
import NFTEmpty from "@/components/NFT/NFTList/NFTEmpty/NFTEmpty";
import NFTData from "@/components/NFT/NFTList/NFTData/NFTData";

const NFTList = () => {
  const { result, isError, isEmpty, isResult, isLoading } = useNFTList();
  return (
    <ContainerSC>
      {isResult && <NFTData data={result} />}
      {isEmpty && <NFTEmpty />}
      {isError && <NFTError />}
      {isLoading && <NFTLoading />}
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default React.memo(NFTList);
