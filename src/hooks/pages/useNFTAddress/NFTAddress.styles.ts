import { styled } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../theme/colors";

const ContainerSC = styled("div")`
  margin: 20px 0;
`;

const TitleSC = styled("h1")`
  margin: 0 0 20px 0;
  word-break: break-word;
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
`;

const TitleTwoSC = styled("h2")`
  word-break: break-word;
  color: ${COLORS.GRAY};
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
`;

export const useNFTAddressStyles = () => ({
  ContainerSC,
  TitleSC,
  TitleTwoSC,
});
