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
  typography: {
    h1: {
      fontSize: "32px",
      fontWeight: "700",
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "secondary",
      },
    },
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
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: "15px 20px",
          minWidth: "320px",
          minHeight: "150px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "100px",
          backgroundColor: COLORS.SECONDARY,
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: `0 0 10px ${COLORS.BLACK}`,
          backgroundColor: COLORS.SECONDARY,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          maxHeight: "250px",
          backgroundColor: COLORS.SECONDARY,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: PRIMARY_MAIN_COLOR,
          fontWeight: 500,
          fontSize: "14px",
        },
      },
    },
  },
});
