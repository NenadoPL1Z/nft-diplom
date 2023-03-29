import { styled } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../../theme/colors";

const ContainerSC = styled("div")`
  margin-bottom: 20px;
  padding: 0 10px;
  width: 20%;
  min-width: 200px;
  @media (max-width: 1024px) {
    width: 33%;
  }
  @media (max-width: 650px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    min-width: 150px;
    padding: 0 5px;
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;

const WrapperSC = styled("div")`
  border-radius: 10px;
  background-color: ${COLORS.SECONDARY};
  overflow: hidden;
  height: 100%;
`;

const TextSC = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 255px);
  justify-content: space-between;
`;

const TitleSC = styled("h4")`
  margin-bottom: 10px;
  font-weight: 500;
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
`;

export const useNFTItemStyless = () => ({
  ContainerSC,
  WrapperSC,
  TextSC,
  TitleSC,
});
