import React from "react";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { useNFTEndStyles } from "@/components/NFT/NFTList/NFTEnd/NFTEnd.styles";

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

const { ContainerSC, ParagraphSC } = useNFTEndStyles();
export default React.memo(NFTEnd);
