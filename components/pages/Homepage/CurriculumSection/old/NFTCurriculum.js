import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import CurriculumCard from "../../../../shared/CurrriculumCard";

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

const NFTCurriculum = ({ description, data }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: theme.palette.primary.background,
      }}
    >
      <Typography variant="subtitle2" textAlign="center">
        {description}
      </Typography>

      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: theme.palette.primary.background,
          }}
        >
          {data.map((item, index) => {
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

export default NFTCurriculum;
