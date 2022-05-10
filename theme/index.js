import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6364D9",
      light: "rgba(99,100,217,0.38)",
      contrastText: "#FFFFFF",
      background: "#F5F6F9",
    },
    secondary: {
      main: "rgb(255, 169, 80)",
      dark: "rgba(255, 169, 80, 0.8)",
      contrastText: "#707070",
      background: "#FFFFFF",
    },
    tertiary: {
      main: "#338AE8",
      contrastText: "#E2004D",
    },
    mainTextColor: "#313030",
  },
  typography: {
    htmlFontSize: 10,
    "@media (max-width: 600px)": {
      htmlFontSize: 5,
    },
    // fontSize: 10,
    h1: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "4.8rem",
      fontWeight: "bold",
      "@media (max-width: 480px)": {
        whiteSpace: "nowrap",
      },
    },
    h2: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "4.5rem",
      fontWeight: "bold",
      "@media (max-width: 480px)": {
        whiteSpace: "nowrap",
      },
    },
    h3: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "2.8rem",
      fontWeight: "bolder",
      "@media (max-width: 600px)": {
        // whiteSpace: "nowrap",
        fontSize: "4.8rem",
      },
    },
    h4: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "2.4rem",
      fontWeight: "bold",
      "@media (max-width: 600px)": {
        // whiteSpace: "nowrap",
        fontSize: "3.2rem",
      },
    },
    h5: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h6: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "1.8rem",
      fontWeight: "bold",
      "@media (max-width: 600px)": {
        fontSize: "2.4rem",
      },
    },
    subtitle1: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "2rem",
      fontWeight: "normal",
      "@media (max-width: 600px)": {
        fontSize: "2.8rem",
      },
    },
    subtitle2: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "1.8rem",
      fontWeight: "normal",
      "@media (max-width: 600px)": {
        fontSize: "2.8rem",
      },
    },
    body1: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "1.6rem",
      fontWeight: "normal",
      "@media (max-width: 600px)": {
        fontSize: "2.8rem",
      },
    },
    body2: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "1.4rem",
      "@media (max-width: 600px)": {
        fontSize: "2.8rem",
      },
    },
    button: {
      fontFamily: " 'Verdana', sans-serif ",
      fontSize: "1.8rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
