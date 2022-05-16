import React, { useState } from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../../../shared/Header";
import { SliderButton } from "../../../shared/StyledComponents";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import TuitionContent from "./TuitionContent";

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

const Tuition = ({
  title,
  subTitle,
  paragraphTitle,
  content,
  firstCourseCategory,
  secondCourseCategory,
  TuitionFees,
}) => {
  const [slider, setSlider] = useState(null);
  const [slider2, setSlider2] = useState(null);
  return (
    <Box bgcolor="#F8F9FB" py={{ xs: 2, sm: 8 }}>
      <Container
        maxWidth="xl"
        sx={{
          textAlign: { xs: "center", sm: "inherit" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <SliderButton onClick={() => slider.slickPrev()}>
            <ArrowBackIosNewIcon color="white" />
          </SliderButton>
          <Box
            sx={{
              width: "60%",
            }}
          >
            <Slider
              {...settings}
              asNavFor={slider2}
              ref={(slider) => setSlider(slider)}
              style={{ width: "100%", padding: 0 }}
            >
              {TuitionFees.map((item) => (
                <Header
                  title={item.header.title}
                  subTitle={item.header.subTitle}
                  color="primary"
                  key={item.id}
                />
              ))}
            </Slider>
          </Box>
          <SliderButton onClick={() => slider.slickNext()}>
            <ArrowForwardIosIcon />
          </SliderButton>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider
            {...settings}
            asNavFor={slider}
            ref={(slider) => setSlider2(slider)}
            style={{ width: "100%", padding: 0 }}
          >
            {TuitionFees.map((item) => (
              <TuitionContent
                key={item.id * 3}
                paragraphTitle={item.paragraphTitle}
                content={item.content}
                firstCourseCategory={item.firstCourseCategory}
                secondCourseCategory={item.secondCourseCategory}
              />
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Tuition;
