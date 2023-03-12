import React from "react";
import { Button, styled } from "@mui/material";
import { NFTTitleSC } from "@/components/NFT/NFTList/styles";

const NFTError = () => {
  return (
    <ContainerSC>
      <NFTTitleSC>Что-то пошло не так</NFTTitleSC>
      <Button
        variant="contained"
        color="error">
        попробовать ещё раз
      </Button>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export default React.memo(NFTError);
