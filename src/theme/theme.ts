import { blue, lime, orange, purple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

declare module "@mui/material" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[50],
    },
  },
  status: {
    danger: orange[500],
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
  },
});
