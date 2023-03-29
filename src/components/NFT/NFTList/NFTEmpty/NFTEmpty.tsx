import React from "react";
import { Button } from "@mui/material";
import { NFTContainerSC, NFTTitleSC } from "@/components/NFT/NFTList/styles";
import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";

const NFTEmpty = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(PagesNamespace.NFT);
  };

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
