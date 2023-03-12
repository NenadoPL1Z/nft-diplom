import { styled, TextField } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../theme/colors";

const TextFieldUI = styled(TextField)`
  .MuiFormLabel-root {
    color: ${COLORS.WHITE};
  }
  .MuiInputBase-root {
    .MuiInputBase-input {
      color: ${COLORS.WHITE};
    }
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${PRIMARY_MAIN_COLOR};
      }
    }
    .MuiOutlinedInput-notchedOutline {
      border-color: ${COLORS.WHITE};
    }
  }
`;

export default TextFieldUI;
