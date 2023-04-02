import { styled } from "@mui/material";
import { PRIMARY_MAIN_COLOR } from "../../../../../../../theme/colors";

const ContainerSC = styled("li")`
  margin-bottom: 10px;
`;
const LeftSC = styled("span")`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: ${PRIMARY_MAIN_COLOR};
  margin-right: 5px;
`;
const RightSC = styled("span")`
  font-weight: 400;
  font-size: 18px;
  word-wrap: break-word;
  white-space: pre-line;
`;

export const useNFTTopRightItemStyles = () => ({
  ContainerSC,
  LeftSC,
  RightSC,
});
