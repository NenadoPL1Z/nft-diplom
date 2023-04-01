import { styled } from "@mui/material";
import { NFTTitleSC } from "@/components/NFT/NFTList/styles";
import { COLORS } from "../../../../theme/colors";

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const TitleSC = styled(NFTTitleSC)`
  margin-bottom: 5px;
`;

const ParagraphSC = styled("p")`
  color: ${COLORS.GRAY};
  margin-bottom: 15px;
`;

export const useNFTErrorStyles = () => ({
  ContainerSC,
  TitleSC,
  ParagraphSC,
});
