import { styled } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../../../theme/colors";

const ContainerSC = styled("div")`
  margin-bottom: 10px;
`;

const ListSC = styled("ul")`
  display: flex;
  flex-wrap: wrap;
`;

const TitleSC = styled("h5")`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.GRAY};
  margin-bottom: 2px;
`;

const LiSC = styled("li")`
  font-size: 14px;
  color: ${PRIMARY_MAIN_COLOR};
`;

export const useNFTAttributesStyles = () => ({
  ContainerSC,
  ListSC,
  TitleSC,
  LiSC,
});
