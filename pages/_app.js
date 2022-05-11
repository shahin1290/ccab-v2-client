import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/system";
import createEmotionCache from "../theme/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import Head from "next/head";

import "../styles/globals.css";
import HomepageLayout from "../components/Layout/HomepageLayout";
import { MenuProvider } from "../components/shared/MenuProvider";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuProvider value={pageProps}>
          <HomepageLayout>
            <Head>
              <title>Codify College Dashboard</title>
              <meta name="description" content="CodifyCollege" />
              <link rel="shortcut icon" href="/images/Logo.ico" />
            </Head>
            <Component {...pageProps} />
          </HomepageLayout>
        </MenuProvider>
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
