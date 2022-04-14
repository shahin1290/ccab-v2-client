import React from "react";
import fs from "fs";
import path from "path";
import util from "util";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import {
  ButtonWrap,
  CardDetailsButton,
  DetailsContainer,
  InfoContainer,
  InfoLeftSide,
  InfoRightSide,
  TextWrapper,
  Wrapper,
} from "../../components/shared/CustomComponents2";

import ServiceCard, {
  ServiceCardBack,
  ServiceCardFront,
} from "../../components/shared/ServiceCard";

import Underline from "../../images/svg/Underline";

import Image from "next/image";
import { useRouter } from "next/router";
import ServiceDetailBackground from "../../images/svg/ServiceDetailBackground";
import CustomCompanySolutionsCard from "../../components/shared/CustomCompanySolutionsCard";
import CompanySolutionsData from "../../dummydata/CompanySolutionsData";

const Details = (props) => {
  console.log(props);
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.background}>
      <Grid container pb={12}>
        <Grid
          container
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-120px",
              left: 0,
              zIndex: 3,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="900"
              height="900"
            >
              {/*  <defs>
                <linearGradient
                  id="bones-gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ "stop-color": " rgba(40, 45, 223, 0.8)" }}
                  />
                  <stop
                    offset="100%"
                    style={{ "stop-color": "rgba(40, 45, 223, 0.8)" }}
                  />
                </linearGradient>
              </defs> */}
              <g fill="#7072DF">
                <path d="M0 64 L14 64 Q18 64 22 58 L46 26 Q50 20 46 10 L42 0 L0 0 Z" />
              </g>
            </svg>

            <Box
              sx={{
                position: "absolute",
                bottom: "100px",
                left: "20px",
                height: "290px",
                width: "290px",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                display: "inline-block",
                zIndex: 2,
              }}
            ></Box>

            <Box
              sx={{
                position: "absolute",
                right: "167px",
                top: "0px",

                zIndex: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="500"
                height="500"
                fill="rgba(0, 0, 0, 0.07)"
              >
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M12 0 C6 20 30 42 54 22 L46 0 Z"
                />
              </svg>
            </Box>

            <Box
              sx={{
                position: "absolute",
                right: "167px",
                top: "0px",

                zIndex: 1,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="614.843"
                height="573.918"
                viewBox="0 0 614.843 573.918"
              >
                <filter id="blur">
                  <feGaussianBlur stdDeviation="1.2" />
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
                    opacity="0.7"
                    filter="url(#blur)"
                  />
                  
                </g>
              </svg>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            overflow: "visible",
            height: "620px",
            maxHeight: "620px",
          }}
        >
          <Box
            sx={{
              width: { md: "400px", xs: "100%" },
            }}
          >
            <Image
              src={props.HeroImage}
              alt={props.header}
              width={250}
              height={250}
              layout="responsive"
              priority
            />
          </Box>
        </Grid>
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
        </DetailsContainer>
      </Grid>

      <Container maxWidth="xl">
        <Grid container>
          {CompanySolutionsData.filter((item) => item.slug !== props.slug).map(
            (item, index) => (
              <Grid item key={index} xs={6} md={6}>
                <CustomCompanySolutionsCard
                  imageUrl={item.HeroImage}
                  title={item.header + " " + item.subheader}
                  description={item.description}
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
