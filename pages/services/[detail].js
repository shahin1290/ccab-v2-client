import React from "react";
import fs from "fs";
import path from "path";
import util from "util";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
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

const Details = (props) => {
  const router = useRouter();
  return (
    <Wrapper>
      <InfoContainer>
        <Container maxWidth="xl">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-between"
            sx={{ overflow: "visible" }}
          >
            <InfoLeftSide item xs={12} md={4}>
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
              <Typography
                variant="body1"
                sx={{ color: "#fff", lineHeight: 1.5 }}
              >
                {props.description}
              </Typography>
            </InfoLeftSide>
            <InfoRightSide item xs={12} md={6} sx={{ display: "block" }}>
              <Image
                src={props.HeroImage}
                alt={props.header}
                width={450}
                height={450}
                layout="responsive"
                priority
              />
            </InfoRightSide>
          </Grid>
        </Container>
      </InfoContainer>
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
          }}
        >
          {props.serviceCardsDetails?.map(
            ({ id, title, content, price, icon }) => (
              <Grid item xs={4} key={id}>
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
    </Wrapper>
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
