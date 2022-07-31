import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[800],
    },
    secondary: {
      main: blue[500],
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
      
    }
  },
});
