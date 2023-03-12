import React from "react";
import { Button } from "@mui/material";
import { NFTContainerSC, NFTTitleSC } from "@/components/NFT/NFTList/styles";
import { useRouter } from "next/router";

const NFTEmpty = () => {
  const { reload } = useRouter();

  return (
    <NFTContainerSC>
      <NFTTitleSC>По данному запросу ничего не найденно!{"\n"}</NFTTitleSC>
      <Button
        color="error"
        onClick={reload}>
        Очистить все параметры поска и попробовать снова
      </Button>
    </NFTContainerSC>
  );
};

export default React.memo(NFTEmpty);
