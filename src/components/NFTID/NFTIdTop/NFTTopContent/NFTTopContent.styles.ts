import { styled } from "@mui/material";
import { COLORS } from "../../../../theme/colors";

const ContainerSC = styled("section")``;

const WrapperSC = styled("div")`
  display: flex;
`;

const AsideSC = styled("aside")`
  width: 250px;
  flex-shrink: 0;
  margin-right: 20px;
`;

const RightContainerSC = styled("section")`
  background-color: ${COLORS.SECONDARY};
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  overflow: hidden;
`;

export const useNFTTopContentStyles = () => ({
  ContainerSC,
  WrapperSC,
  AsideSC,
  RightContainerSC,
});
