import React from "react";
import fs from "fs";
import path from "path";
import util from "util";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import {
  DetailsContainer,
  TextWrapper,
} from "../../components/shared/StyledComponents";

import ServiceCard, {
  ServiceCardBack,
  ServiceCardFront,
} from "../../components/shared/ServiceCard";
import Underline from "../../images/svg/Underline";
import Image from "next/image";
import { useRouter } from "next/router";
import CompanySolutionSection from "../../components/shared/CompanySolutionSection";
import CompanySolutionsData from "../../dummydata/CompanySolutionsData";

const StyledSvg = styled("svg")(({ theme }) => ({
  width: "930px",
  height: "930px",

  [theme.breakpoints.down("xl")]: { width: "600px", height: "600px" },
  // [theme.breakpoints.down("lg")]: { width: "400px", height: "400px" },
  [theme.breakpoints.down("sm")]: { width: "350px", height: "350px" },
}));

const StyledCircleSvg = styled("svg")(({ theme }) => ({
  width: "500px",
  height: "500px",

  [theme.breakpoints.down("xl")]: { width: "350px", height: "350px" },
  [theme.breakpoints.down("sm")]: { width: "200px", height: "200px" },
}));

const Details = (props) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box>
      <Box pb={2}>
        <Box
          bgcolor={theme.palette.primary.background}
          sx={{
            position: "relative",
            height: { xl: 900, lg: 600, md: 600, sm: 590, xs: 315 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-120px",
              left: { xs: "-70px", sm: 0 },
              zIndex: {xl:0, xs:0},
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: { xl: "300px", md: "200px", sm: "170px", xs: "120px" },
                left: { xl: "100px", md: "70px", sm: "70px", xs: "90px" },
              }}
            >
              <Typography
                variant="h2"
                color="#fff"
                mb={1}
                sx={{ fontWeight: "normal" }}
              >
                {props.header}
              </Typography>
              <Typography variant="h1" color="#fff" mb={3}>
                {props.subheader}
              </Typography>
            </Box>
            <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >
              <g fill="#7072DF">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M0 0 L0 64 L11.166666666666668 64 Q21.833333333333332 63.5 26.5 55.833333333333336 L44.666666666666664 20.5 Q49 13 43.666666666666664 6.5 L38.833333333333336 0 Z"
                />
              </g>
            </StyledSvg>

            <Box
              sx={{
                position: "absolute",
                bottom: { xl: "200px", lg: "100px", sm: "100px", xs: "70px" },
                left: { md: "20px", sm: "-50px", xs: "20px" },
                height: { lg: "210px", xl: "290px", sm: "220px", xs: "130px" },
                width: { lg: "210px", xl: "290px", sm: "220px", xs: "130px" },
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                display: "inline-block",
                zIndex: 2,
              }}
            ></Box>

            <Box
              sx={{
                position: "absolute",
                right: { xl: "157px", sm: "92px", xs: "56px" },
                top: "0px",
                zIndex: 1,
              }}
            >
              <StyledCircleSvg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="rgba(0, 0, 0, 0.07)"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M6.166666666666666 0 C0.8333333333333339 18 25.833333333333336 41.833333333333336 50 17.833333333333332 L37.333333333333336 0.16666666666666607 Z"
                />
              </StyledCircleSvg>
            </Box>

            <Box
              sx={{
                position: "absolute",
                right: { sm: "2px", xl: "167px" },
                top: { sm: "80px", xl: "100px" },
                zIndex: 1,
                display: { xs: "none", md: "block" },
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="614.843"
                height="573.918"
                viewBox="0 0 614.843 573.918"
              >
                <filter id="blur">
                  <feGaussianBlur stdDeviation="2.9" />
                </filter>
                <g
                  id="Group_23169"
                  data-name="Group 23169"
                  transform="translate(-178.956 -270.226)"
                >
                  <path
                    id="Path_26637"
                    data-name="Path 26637"
                    d="M90.5,396.845a9.247,9.247,0,1,1,9.245,9.245A9.245,9.245,0,0,1,90.5,396.845Z"
                    transform="translate(88.454 438.054)"
                    fill="#fff"
                    opacity="0.4"
                  />

                  <path
                    id="Path_26643"
                    data-name="Path 26643"
                    d="M228.695,168.45a7.657,7.657,0,1,1-7.657-7.657A7.655,7.655,0,0,1,228.695,168.45Z"
                    transform="translate(262.116 117.511)"
                    fill="#fff"
                    opacity="0.5"
                    filter="url(#blur)"
                  />
                </g>
              </svg>
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              left: { xl: "40vw", lg: "550px", sm: "35vw", xs: "20vw" },
              top: { xs: "-5vw", xl: "50px", md: 0, sm: "5vw" },
              zIndex: 999,
              px: 1,
              width: {
                xs: "60vw",
                sm: "60vw",
                md: "50vw",
                lg: "40vw",
                xl: "50vw",
              },
              height: {
                xs: "60vw",
                sm: "60vw",
                md: "50vw",
                lg: "40vw",
                xl: "46vw",
              },
            }}
          >
            <Image src={props.HeroImage} alt={props.header} layout="fill" />
          </Box>
        </Box>

        <DetailsContainer style={{ background: "#fff" }}>
          <Container maxWidth="lg">
            <TextWrapper>
              <Typography variant="h3" mb={2}>
                {props.header + " " + props.subheader}
              </Typography>
              <Underline />
              <Box mt={5}>
                {props.detailParagraphs?.map((paragraph) => (
                  <Typography
                    key={paragraph.id}
                    variant="body1"
                    sx={{ color: "secondary.contrastText", mt: 2 }}
                  >
                    {paragraph.text}
                  </Typography>
                ))}
              </Box>
            </TextWrapper>
          </Container>
          <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{
              textAlign: "-webkit-center",
              marginTop: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {props.serviceCardsDetails?.map(
              ({ id, title, content, price, icon }) => (
                <Grid item md={4} sm={6} xs={12} key={id}>
                  <ServiceCard style={{ maxWidth: "385px" }}>
                    <ServiceCardFront title={title} icon={icon} />
                    <ServiceCardBack
                      title={title}
                      content={content}
                      price={price}
                    />
                  </ServiceCard>
                </Grid>
              )
            )}
          </Grid>
        </DetailsContainer>
      </Box>

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pt: { xs: 5, md: 10 },
            pb: { xs: 5, md: 10 },
          }}
        >
          <Typography variant="h3" mb={2}>
            Other Solutions
          </Typography>
          <Underline />
        </Box>
        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
        >
          {CompanySolutionsData.filter((item) => item.slug !== props.slug).map(
            (item, index) => (
              <Grid item key={index} sm={12} lg={6}>
                <CompanySolutionSection
                  imageUrl={item.HeroImage}
                  title={item.header + " " + item.subheader}
                  description={item.description}
                  slug={item.slug}
                  subDirectory="company"
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export async function getStaticProps(context) {
  const { detail } = context.params;
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "CompanySolutionsData.json")
  );
  const data = JSON.parse(jsonData);

  const [pageProps] = data.filter((item) => item.slug === detail);

  if (!pageProps) return { notFound: true };
  return {
    props: { ...pageProps },
  };
}

export async function getStaticPaths() {
  const readFile = util.promisify(fs.readFile);
  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "CompanySolutionsData.json")
  );
  const data = JSON.parse(jsonData);
  const ServicesPaths = data.map((item) => ({
    params: {
      detail: item.slug,
    },
  }));
  return {
    paths: ServicesPaths,
    fallback: false,
  };
}
export default Details;
