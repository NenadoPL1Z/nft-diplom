import { createTheme } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_MAIN_COLOR,
      light: COLORS.LIGHT,
    },
    secondary: {
      main: COLORS.LIGHT,
      light: COLORS.LIGHT,
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
          backgroundColor: COLORS.MAIN,
          border: `2px solid ${COLORS.LIGHT}`,
          boxSizing: "content-box",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: COLORS.MAIN,
          padding: 10,
          borderRight: `1px solid ${COLORS.LIGHT}`,
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
