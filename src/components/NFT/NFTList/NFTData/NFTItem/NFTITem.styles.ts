import { styled } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../../theme/colors";

const ContainerSC = styled("div")``;

const WrapperSC = styled("div")`
  border-radius: 10px;
  background-color: ${COLORS.SECONDARY};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TextSC = styled("div")`
  flex-grow: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleSC = styled("h4")`
  margin-bottom: 10px;
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
`;

export const useNFTItemStyles = () => ({
  ContainerSC,
  WrapperSC,
  TextSC,
  TitleSC,
});
