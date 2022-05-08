import { Container, Typography, Box, Stack } from "@mui/material";
import React from "react";

import {
  SectionContainer,
  SliderButton,
} from "../../../shared/StyledComponents";
import Underline from "../../../../images/svg/Underline";
import Slider from "react-slick";
import { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CurriculumContent from "./CurriculumContent";
import CurriculumSVGDesktop from "../../../../images/svg/CurriculumImageDesktop";
import CurriculumImageMobile from "../../../../images/svg/CurriculumImageMobile";
import NFTContent from "./ListCurriculum";
import UIUXCurriculumDesktop from "./UIUXCurriuculmDesktop";
import ListCurriculum from "./ListCurriculum";

const NFTCurriculumData = [
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
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: false,
  adaptiveHeight: true,
  centerMode: false,
  swipe: false,
};

const DUMMY_DESCRIPTION =
  "Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.";

export default function CurriculumSection() {
  const [slider, setSlider] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <SectionContainer sx={{ py: 10 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          position: "relative",
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
        style={{
          width: "100%",
          padding: 0,
        }}
      >
        <CurriculumContent
          description={DUMMY_DESCRIPTION}
          LargeContent="/svgImages/Curriculums/FullStackCurriculumDesktop.svg"
          SmallContent="/svgImages/Curriculums/FullStackCurriculumMobile.svg"
        />
        <CurriculumContent
          list
          description={DUMMY_DESCRIPTION}
          LargeContent={<ListCurriculum data={NFTCurriculumData} />}
          SmallContent={<ListCurriculum data={NFTCurriculumData} />}
        />
        <CurriculumContent
          description={DUMMY_DESCRIPTION}
          LargeContent="/svgImages/Curriculums/UIUXCurriculumDesktop.svg"
          SmallContent="/svgImages/Curriculums/UIUXCurriculumMobile.svg"
        />
      </Slider>
    </SectionContainer>
  );
}
