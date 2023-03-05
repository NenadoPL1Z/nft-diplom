import { createTheme } from "@mui/material";
import {
  LIGHT_COLOR,
  MAIN_COLOR,
  PRIMARY_MAIN_COLOR,
  SECONDARY_COLOR,
} from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR,
      light: LIGHT_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      light: LIGHT_COLOR,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiAvatar: {
      defaultProps: {
        style: {
          backgroundColor: MAIN_COLOR,
          border: `2px solid ${LIGHT_COLOR}`,
          boxSizing: "content-box",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: MAIN_COLOR,
          padding: 10,
          borderRight: `1px solid ${LIGHT_COLOR}`,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
  },
});
