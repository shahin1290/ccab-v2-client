import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6364D9",
      light: "rgba(99,100,217,0.38)",
      contrastText: "#FFFFFF",
      background: "#F0F0F8",
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
    },
    h2: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "4.5rem",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "2.8rem",
      fontWeight: "bolder",
<<<<<<< HEAD
=======
      "@media (max-width: 600px)": {
        fontSize: "3.6rem",
      },
>>>>>>> ce2d0fa6f02c8e3c7bd434874e585f2fad9baae0
    },
    h4: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "2.4rem",
      fontWeight: "bold",
<<<<<<< HEAD
=======
      "@media (max-width: 600px)": {
        fontSize: "3.2rem",
      },
>>>>>>> ce2d0fa6f02c8e3c7bd434874e585f2fad9baae0
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
<<<<<<< HEAD
        fontSize: "2.4rem",
=======
        fontSize: "3.2rem",
>>>>>>> ce2d0fa6f02c8e3c7bd434874e585f2fad9baae0
      },
    },
    subtitle1: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "2rem",
      fontWeight: "normal",
    },
    subtitle2: {
      fontFamily: "'Segoe UI', sans-serif",
      fontSize: "1.8rem",
      fontWeight: "normal",
<<<<<<< HEAD
=======
      color: "#707070",
      "@media (max-width: 600px)": {
        fontSize: "2.4rem",
      },
>>>>>>> ce2d0fa6f02c8e3c7bd434874e585f2fad9baae0
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
<<<<<<< HEAD
=======
      "@media (max-width: 600px)": {
        fontSize: "2.2rem",
      },
>>>>>>> ce2d0fa6f02c8e3c7bd434874e585f2fad9baae0
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
