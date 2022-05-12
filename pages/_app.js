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
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
    FooterData,
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MenuProvider value={FooterData}>
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

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const res = {
    FooterData: {
      logoLink: "/images/Logo.ico",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
      socialLinks: {
        googlePlus: "#",
        facebook: "https://www.facebook.com/CfCollegezz/",
        linkedin: "https://www.linkedin.com/company/codifycollegeab/",
      },
      services: [
        { id: 1, name: "Foundation Course", link: "#" },
        { id: 2, name: "Front-end Full Course", link: "#" },
        { id: 3, name: "Mern Full-Stack Developer", link: "#" },
        { id: 4, name: "Career Support", link: "#" },
        { id: 5, name: "Comprehendive Curriculum", link: "#" },
      ],
      quickLinks: [
        { id: 1, name: "About Us", link: "#" },
        { id: 2, name: "Contact Us", link: "#" },
        { id: 3, name: "FAQs", link: "#" },
        { id: 4, name: "Privacy Policy", link: "#" },
      ],
      contactUs: {
        address: " Rontgenvagen 1, 141 52, Huddinge, Stockholm, Sweden",
        email: "info@codifycollege.se",
      },
      copyrightText: "CF College AB. Designed by CF College AB",
    },
  };

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    FooterData: res.FooterData,
  };
};

export default MyApp;
