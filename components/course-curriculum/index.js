import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useState } from "react";
import CurriculumCard from "../../images/svg/CurrriculumCard";
import Underline from "../../images/svg/Underline";
import { ButtonWrap, SecondaryButton } from "../shared/StyledComponents";

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
}) => {
  const theme = useTheme();
  const [itemsToShow, setItemsToShow] = useState(6);

  const showmore = () => {
    setItemsToShow(CurriculumData.length)
}

const showless = () => {
    setItemsToShow(6)
}
  return (
    // <Stack
    //   direction="column"
    //   justifyContent="center"
    //   alignItems="center"
    //   sx={{
    //     background: theme.palette.primary.background,
    //     width: "100%",
    //     py: { md: 10, xs: 5 },
    //   }}
    // >
    //   <Typography variant="h3" mb={2}>
    //      NFT Curriculum
    //   </Typography>
    //   <Underline />
    //   <Container maxWidth="lg">
    //     <Typography variant="subtitle2" textAlign="center" mt={2}>
    //       Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.
    //     </Typography>
    //   </Container>

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
          {CurriculumData.slice(0, itemsToShow)?.map((item, index) => {
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
        <ButtonWrap style={{marginBottom:'25px', marginTop:"-10px"}}>
        {(itemsToShow === 6) ? <SecondaryButton variant="contained" color="secondary" onClick={showmore}>Show More</SecondaryButton>: <SecondaryButton variant="contained" color="secondary" onClick={showless}>Show Less</SecondaryButton>}
        </ButtonWrap>
      </Container>
    // </Stack>
  );
};

// export async function getStaticProps() {
//   return {
//     props: {
//       CurriculumTitle: "NFT Curriculum",
//       CurriculumDescription:
//         "Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.",
//       CurriculumData,
//     },
//   };
// }

export default CourseCurriculum;
