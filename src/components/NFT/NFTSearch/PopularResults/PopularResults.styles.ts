import { styled } from "@mui/material";
import { COLORS } from "../../../../theme/colors";

const ContainerSC = styled("div")``;

const TitleSC = styled("h4")`
  font-size: 14px;
  color: ${COLORS.GRAY};
  padding-left: 5px;
  margin-bottom: 10px;
`;

const WrapperSC = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${COLORS.SECONDARY};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.LIGHT};
      border-radius: 20px;
    }
  }
  & > *:last-child > * {
    margin-right: 0;
  }
`;

export const usePopularResultsStyles = () => ({
  ContainerSC,
  TitleSC,
  WrapperSC,
});
