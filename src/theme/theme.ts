import { blue, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material";

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
