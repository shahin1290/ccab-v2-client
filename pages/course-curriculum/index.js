import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import CurriculumCard from "../../images/svg/CurrriculumCard";
import Underline from "../../images/svg/Underline";

const cardColors = [
  "#007793",
  "#00A9B9",
  "#10BE81",
  "#FFB90B",
  "#8375FB",
  "#FF8D2A",
  "#F14258",
  "#F2669C",
  "#9769B6",
  "#F20000",
];

const CurriculumData = [
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects Ecosystem",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs and how it works",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects to help prepare you for real life situations and projects with diverse teams",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects Ecosystem",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs and how it works",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects to help prepare you for real life situations and projects with diverse teams",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects Ecosystem",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs and how it works",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects to help prepare you for real life situations and projects with diverse teams",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects Ecosystem",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs and how it works",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
  "NFT Projects to help prepare you for real life situations and projects with diverse teams",
  "Welcome to the Course",
  "Understanding the Concepts behind NFTs",
  "History Behind NFTs",
  "NFT Projects Ecosystem",
];

const CourseCurriculum = ({
  CurriculumTitle,
  CurriculumDescription,
  CurriculumData,
}) => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: theme.palette.primary.background,
        width: "100%",
        py: { md: 10, xs: 5 },
      }}
    >
      <Typography variant="h3" mb={2}>
        {CurriculumTitle}
      </Typography>
      <Underline />
      <Container maxWidth="lg">
        <Typography variant="subtitle2" textAlign="center" mt={2}>
          {CurriculumDescription}
        </Typography>
      </Container>

      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            py: 5,
            backgroundColor: theme.palette.primary.background,
          }}
        >
          {CurriculumData.map((item, index) => {
            return (
              <Grid key={index} item md={5} xs={12}>
                <CurriculumCard
                  number={(index + 1).toString().padStart(2, "0")}
                  text={item}
                  fill={
                    index + 1 / cardColors.length > 1
                      ? cardColors[index % cardColors.length]
                      : cardColors[index]
                  }
                  order={index + 1}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Stack>
  );
};

export async function getStaticProps() {
  return {
    props: {
      CurriculumTitle: "NFT Curriculum",
      CurriculumDescription:
        "Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.",
      CurriculumData,
    },
  };
}

export default CourseCurriculum;
