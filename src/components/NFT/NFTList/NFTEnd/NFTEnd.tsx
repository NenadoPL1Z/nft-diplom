import React from "react";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import { styled, Typography } from "@mui/material";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";

const NFTEnd = () => {
  return (
    <ContainerSC>
      <MoodBadIcon />
      <ParagraphSC>Больше NFT по данному запрсу нет</ParagraphSC>
      <ButtonUI
        variant="outlined"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Наверх
      </ButtonUI>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 50px;
    height: 50px;
  }
`;

const ParagraphSC = styled("p")`
  margin: 10px 0 20px;
  font-size: 18px;
`;

export default React.memo(NFTEnd);
