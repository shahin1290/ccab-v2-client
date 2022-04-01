import { ThemeProvider } from "@mui/system";
import PropTypes from "prop-types";
import createEmotionCache from "../theme/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Head from "next/head";

import "../styles/globals.css";
import HomepageLayout from "../components/Layout/HomepageLayout";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomepageLayout>
          <Head>
            <title>Codify College Dashboard</title>
            <meta name="description" content="CodifyCollege" />
            <link rel="icon" href="/Logo.ico" />
          </Head>
          <Component {...pageProps} />
        </HomepageLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
