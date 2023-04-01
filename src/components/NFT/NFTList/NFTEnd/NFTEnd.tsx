import React from "react";
import MoodBadIcon from "@mui/icons-material/MoodBad";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { useNFTEndStyles } from "@/components/NFT/NFTList/NFTEnd/NFTEnd.styles";
import { scrollTop } from "@/lib/services/services";

const NFTEnd = () => {
  return (
    <ContainerSC>
      <MoodBadIcon />
      <ParagraphSC>Больше NFT по данному запрсу нет</ParagraphSC>
      <ButtonUI
        variant="outlined"
        onClick={scrollTop}>
        Наверх
      </ButtonUI>
    </ContainerSC>
  );
};

const { ContainerSC, ParagraphSC } = useNFTEndStyles();
export default React.memo(NFTEnd);
