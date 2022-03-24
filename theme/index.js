import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6364D9",
      background: "#F0F0F8",
      contrastText: "#707070",
    },
    secondary: {
      main: "#FFA950",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      main: "#338AE8",
      contrastText: "#E2004D",
    },
    mainTextColor: "#313030",
  },
});

export default theme;
