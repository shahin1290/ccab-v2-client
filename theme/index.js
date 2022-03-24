import { createTheme } from "@mui/material/styles";

const NotoSnas = "'Noto Sans', sans-serif";
const theme = createTheme({
  palette: {
    primary: {
      main: "#6364D9",
      contrastText: "#FFFFFF",
      background: "#F0F0F8",
    },
    secondary: {
      main: "#FFA950",
      contrastText: "#707070",
    },
    tertiary: {
      main: "#338AE8",
      contrastText: "#E2004D",
    },
    mainTextColor: "#313030",
  },
  typography: {
    fontFamily: NotoSnas,
  },
});

export default theme;
