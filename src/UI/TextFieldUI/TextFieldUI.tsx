import { styled, TextField } from "@mui/material";
import { COLORS } from "../../theme/colors";

const TextFieldUI = styled(TextField)`
  .MuiFormLabel-root {
    color: ${COLORS.WHITE};
  }
  .MuiInputBase-root {
    .MuiInputBase-input {
      color: ${COLORS.WHITE};
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${COLORS.WHITE};
    }
  }
`;

export default TextFieldUI;
