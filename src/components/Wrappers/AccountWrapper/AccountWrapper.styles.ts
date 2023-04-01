import { styled, Typography } from "@mui/material";
import { COLORS } from "../../../theme/colors";

const ContainerSC = styled("div")`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const WrapperSC = styled("div")`
  width: 100%;
  max-width: 600px;
`;

const InnerWrapperSC = styled("div")`
  padding: 20px;
  background-color: ${COLORS.SECONDARY};
  border-radius: 10px;
`;

const TitleSC = styled("h1")`
  margin: 0 0 15px 0;
  font-size: 28px;
`;

const ParagraphSC = styled(Typography)`
  color: ${COLORS.GRAY};
  line-height: 18px;
  margin-bottom: 20px;
`;

export const useAccountWrapper = () => ({
  ContainerSC,
  WrapperSC,
  InnerWrapperSC,
  TitleSC,
  ParagraphSC,
});
