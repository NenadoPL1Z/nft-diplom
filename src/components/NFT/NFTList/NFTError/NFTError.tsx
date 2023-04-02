import React from "react";
import { Button } from "@mui/material";
import { NFTProps } from "@/components/NFT/types";
import { useNFTErrorStyles } from "@/components/NFT/NFTList/NFTError/NFTError.styles";
import { useNFTError } from "@/components/NFT/NFTList/NFTError/useNFTError";

const NFTError = (props: NFTProps) => {
  const { hasError, handleClick } = useNFTError(props);

  return (
    <ContainerSC>
      <TitleSC>Что-то пошло не так</TitleSC>
      <ParagraphSC>{hasError}</ParagraphSC>
      <Button
        onClick={handleClick}
        variant="contained"
        color="error">
        попробовать ещё раз
      </Button>
    </ContainerSC>
  );
};

const { ContainerSC, TitleSC, ParagraphSC } = useNFTErrorStyles();

export default React.memo(NFTError);
