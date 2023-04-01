import React from "react";
import { useNFTList } from "@/components/NFT/NFTList/useNFTList";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import NFTError from "@/components/NFT/NFTList/NFTError/NFTError";
import NFTEmpty from "@/components/NFT/NFTList/NFTEmpty/NFTEmpty";
import NFTData from "@/components/NFT/NFTList/NFTData/NFTData";
import NFTMore from "@/components/NFT/NFTList/NFTMore/NFTMore";
import NFTEnd from "@/components/NFT/NFTList/NFTEnd/NFTEnd";
import { NFTProps } from "@/components/NFT/types";
import { useNFTListStyles } from "@/components/NFT/NFTList/NFTList.styles";

const NFTList = (props: NFTProps) => {
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
      {isResult && (
        <NFTData
          {...props}
          data={result}
        />
      )}
      {isEmpty && <NFTEmpty />}
      {isError && <NFTError {...props} />}
      {isLoading && <NFTLoading />}
      {isMore && <NFTMore {...props} />}
      {isVisibleEnd && <NFTEnd />}
    </ContainerSC>
  );
};

const { ContainerSC } = useNFTListStyles();
export default React.memo(NFTList);
