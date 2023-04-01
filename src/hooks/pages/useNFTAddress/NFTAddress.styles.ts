import { styled } from "@mui/material";
import { COLORS } from "../../../theme/colors";

const ContainerSC = styled("div")`
  margin: 20px 0;
`;

const TitleSC = styled("h1")`
  margin: 0 0 10px 0;
`;

const TitleTwoSC = styled("h2")`
  color: ${COLORS.GRAY};
`;

export const useNFTAddressStyles = () => ({
  ContainerSC,
  TitleSC,
  TitleTwoSC,
});
