import { styled } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../theme/colors";

const ContainerSC = styled("div")`
  &:hover {
    & > div > div:first-child > div {
      transform: translateX(0);
    }
  }
`;

const WrapperSC = styled("div")`
  border-radius: 8px 0 8px 8px;
  background-color: ${COLORS.SECONDARY};
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainerSC = styled("div")`
  position: relative;
`;

const FavoriteContainerSC = styled("div")`
  position: absolute;
  top: -1px;
  right: 0;
  z-index: 1;
  background-color: ${COLORS.SECONDARY};
  transform: translateY(-50px);
  border-radius: 0 0 0 8px;
  transition: 0.1s all linear;
`;

const TextSC = styled("div")`
  flex-grow: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextTopSC = styled("div")`
  flex-grow: 1;
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
  ImageContainerSC,
  FavoriteContainerSC,
  TextSC,
  TextTopSC,
  TitleSC,
});
