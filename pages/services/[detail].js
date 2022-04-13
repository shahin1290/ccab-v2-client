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
  TextWrapper,
} from "../../components/shared/CustomComponents2";

import ServiceCard, {
  ServiceCardBack,
  ServiceCardFront,
} from "../../components/shared/ServiceCard";

import Underline from "../../images/svg/Underline";

import Image from "next/image";
import { useRouter } from "next/router";
import ServiceDetailBackground from "../../images/svg/ServiceDetailBackground";

const Details = (props) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Grid container pb={12} sx={{ overflow: "visible", position: "relative" }}>
      <Grid
        container
        item
        xs={12}
        md={6}
        sx={{
          background: theme.palette.primary.main,
          overflow: "visible",
          maxHeight: "680px",
        }}
      >
        <Grid item md={11} xs={12}>
          <Box
            sx={{
              display: { xs: "none", md: "grid" },
              position: "absolute",
              placeItems: "center",
              px: 10,
              py: 3,

              "& > svg": {
                position: "relative",
                inset: 0,
                width: "100%",
                display: { xs: "hidden", md: "block" },
              },
            }}
          >
            <ServiceDetailBackground />
          </Box>
          <Stack
            sx={{
              height: "100%",
              justifyContent: "center",
              alignItems: "start",
              px: "15%",
              overflow: "visible",

              py: { xs: "10%", md: 5 },
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
            <Box
              sx={{ width: "30%", height: "3px", background: "white", mb: 4 }}
            />
            <Typography variant="body1" sx={{ color: "#fff", lineHeight: 1.5 }}>
              {props.description}
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          md={1}
          xs={12}
          sx={{
            position: "relative",
            left: { md: "5%", xs: 0 },
            display: { md: "block", xs: "hidden" },
            background: theme.palette.primary.main,
          }}
        ></Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          background: theme.palette.primary.background,
          overflow: "visible",
          maxHeight: "700px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            width: { md: "80%", xs: "100%" },
            display: "grid",
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
        <ButtonWrap>
          <CardDetailsButton onClick={() => router.push("/services/how-much")}>
            Book Appointment with the Technical team
          </CardDetailsButton>
        </ButtonWrap>
      </DetailsContainer>
    </Grid>
  );
};

export async function getStaticProps(context) {
  const { detail } = context.params;
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "ServiceData.json")
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
    path.join(process.cwd(), "dummydata", "ServiceData.json")
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
