import { styled, TextField } from "@mui/material";
import { WHITE_COLOR } from "../../theme/colors";

const TextFieldUI = styled(TextField)`
  .MuiFormLabel-root {
    color: ${WHITE_COLOR};
  }
  .MuiInputBase-root {
    .MuiInputBase-input {
      color: ${WHITE_COLOR};
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${WHITE_COLOR} !important;
    }
  }
`;

export default TextFieldUI;
