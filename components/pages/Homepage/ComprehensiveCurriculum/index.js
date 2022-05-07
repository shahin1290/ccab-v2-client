import { Container, Grid, Typography, Box, Stack } from "@mui/material";
import React from "react";

import {
  SectionContainer,
  SliderButton,
  TextWrapper,
} from "../../../shared/StyledComponents";
import Underline from "../../../../images/svg/Underline";
import Slider from "react-slick";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FullStackCurriculum from "./FullStackCurriculum";
import NFTCurriculum from "./NFTCurriculum";
import UIUXCurriculum from "./UIUXCurriuculm";

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
  "NFT Projects Ecosystem",
];

const settings = {
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: false,
  adaptiveHeight: true,
  centerMode: false,
  swipe: false,
  nextArrow: <ArrowBackIosNewIcon />,
  prevArrow: <ArrowForwardIosIcon />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export default function ComprehensiveCurriculum() {
  const [slider, setSlider] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <SectionContainer>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          position: "relative",
          minHeight: "50px",
        }}
      >
        <SliderButton onClick={() => slider.slickPrev()}>
          <ArrowBackIosNewIcon color="white" />
        </SliderButton>
        <Box
          sx={{
            position: "relative",
            width: { lg: "50%", md: "60%", xs: "70%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider
            {...settings}
            asNavFor={slider2}
            ref={(slider) => setSlider(slider)}
            style={{ width: "100%", padding: 0 }}
          >
            <Typography variant="h3" mb={1} textAlign="center">
              Full Stack Curriculum
            </Typography>
            <Typography variant="h3" mb={1} textAlign="center">
              NFT Curriculum
            </Typography>
            <Typography variant="h3" mb={1} textAlign="center">
              UI/UX Curriculum
            </Typography>
          </Slider>
        </Box>
        <SliderButton onClick={() => slider.slickNext()}>
          <ArrowForwardIosIcon />
        </SliderButton>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Underline />
      </Container>
      <Slider
        {...settings}
        asNavFor={slider}
        ref={(slider) => setSlider2(slider)}
        style={{ width: "100%", padding: 0 }}
      >
        <FullStackCurriculum />
        <NFTCurriculum
          CurriculumTitle="NFT Curriculum"
          CurriculumDescription="Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch."
          CurriculumData={CurriculumData}
        />
        <UIUXCurriculum mainTitle="UI/UX" />
      </Slider>
    </SectionContainer>
  );
}
