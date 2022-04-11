import { Box } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import CurriculumCard from "../../images/svg/CurrriculumCard";

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
];

const CourseDetails = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.background,
          width: "100%",
        }}
      >
        {CurriculumData.map((item, index) => {
          return (
            <CurriculumCard
              text={item}
              fill={cardColors[index]}
              number={(index + 1).toString().padStart(2, "0")}
              key={index}
              order={index + 1}
            />
          );
        })}
      </Box>

      {/* <CurriculumCard
        text="Understanding the Concepts behind NFTs and how it works which is"
        fill="#F20000"
        number="1"
        order={1}
      /> */}
    </>
  );
};

export default CourseDetails;
