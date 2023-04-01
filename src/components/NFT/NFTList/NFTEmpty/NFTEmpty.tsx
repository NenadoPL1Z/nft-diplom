import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { NFTContainerSC, NFTTitleSC } from "@/components/NFT/NFTList/styles";
import { useNFTEmpty } from "@/components/NFT/NFTList/NFTEmpty/useNFTEmpty";

type NFTEmptyProps = {
  isButton?: boolean;
  buttonProps?: ButtonProps;
};

const NFTEmpty = ({ isButton = true, buttonProps = {} }: NFTEmptyProps) => {
  const { handleClick } = useNFTEmpty();

  return (
    <NFTContainerSC>
      <NFTTitleSC>По данному запросу ничего не найденно!{"\n"}</NFTTitleSC>
      {isButton && (
        <Button
          color="error"
          onClick={handleClick}
          {...buttonProps}>
          {buttonProps?.children || "Вернуться к MONKEY"}
        </Button>
      )}
    </NFTContainerSC>
  );
};

export default React.memo(NFTEmpty);
