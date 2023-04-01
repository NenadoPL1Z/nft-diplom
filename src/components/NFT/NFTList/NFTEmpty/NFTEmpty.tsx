import React from "react";
import { Button } from "@mui/material";
import { NFTContainerSC, NFTTitleSC } from "@/components/NFT/NFTList/styles";
import { useNFTEmpty } from "@/components/NFT/NFTList/NFTEmpty/useNFTEmpty";

const NFTEmpty = () => {
  const { handleClick } = useNFTEmpty();

  return (
    <NFTContainerSC>
      <NFTTitleSC>По данному запросу ничего не найденно!{"\n"}</NFTTitleSC>
      <Button
        color="error"
        onClick={handleClick}>
        Вернуться к MONKEY
      </Button>
    </NFTContainerSC>
  );
};

export default React.memo(NFTEmpty);
