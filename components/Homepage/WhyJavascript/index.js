import { Container, Grid, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import Border from "../../../images/svg/Border";
import Worldmap from "../../../images/svg/Worldmap";
import CustomBorder from "../../shared/CustomBorder";

const Cards = [
  "JavaScript has been the most popular language in the world for 9 years in a row, according to StackOverflow.com, the largest community website for professional and enthusiast programmers.",
  "Knowing JavaScript allows you to design Web and mobile apps without any restrictions. JavaScript can be used to create back-end, front-end, full-stack, iOS, and Android apps.",
  "The most in-demand position on the job market is full-stack developer.",
];

const WhyJavascript = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: { lg: 472 },
      }}>
      <Worldmap />
      <Typography variant="h3" color="primary.main">
        WHY JAVASCRIPT?
      </Typography>

      <CustomBorder color={theme.palette.primary.main} index={3}>
        <Typography variant="body2">The most in-demand position on the job market is full-stack developer.</Typography>
      </CustomBorder>
    </Container>
  );
};

export default WhyJavascript;
