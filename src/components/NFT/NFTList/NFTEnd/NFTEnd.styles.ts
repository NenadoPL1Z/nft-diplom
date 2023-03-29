import { styled } from "@mui/material";

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 50px;
    height: 50px;
  }
`;

const ParagraphSC = styled("p")`
  margin: 10px 0 20px;
  font-size: 18px;
`;

export const useNFTEndStyles = () => ({
  ContainerSC,
  ParagraphSC,
});
