import "../styles/globals.css";
import HomepageLayout from "../components/Layout/HomepageLayout";
import { ThemeProvider } from "@mui/system";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HomepageLayout suppressHydrationWarning>
        {typeof window === "undefined" ? null : <Component {...pageProps} />}
      </HomepageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
