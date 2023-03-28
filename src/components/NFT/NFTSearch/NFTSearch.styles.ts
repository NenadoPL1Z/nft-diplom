import { Button, styled } from "@mui/material";
import { COLORS } from "../../../theme/colors";
import TFSearchUI from "@/UI/TextFieldUI/TextFields/TFSearchUI/TFSearchUI";

const ContainerSC = styled("section")``;

const FormContainerSC = styled("form")`
  padding: 10px 0px 5px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 65px;
  z-index: 1;
  background-color: ${COLORS.MAIN};
  @media (max-width: 768px) {
    top: 70px;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

const TFSearchUISC = styled(TFSearchUI)`
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;

const SelectContainerSC = styled("div")`
  flex-grow: 1;
  & > .MuiFormControl-root {
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const CustomButton = styled(Button)`
  margin-left: 10px;
  height: 56px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const useNFTSearchStyles = () => ({
  ContainerSC,
  FormContainerSC,
  TFSearchUISC,
  SelectContainerSC,
  CustomButton,
});
