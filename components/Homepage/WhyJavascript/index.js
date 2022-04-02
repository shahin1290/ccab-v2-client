import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Border from "../../../images/svg/Border";
import Worldmap from "../../../images/svg/Worldmap";
import CustomBorder from "../../shared/customComponents/CustomBorder";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderButton } from "../../shared/customComponents/CustomComponents";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Cards = [
  "JavaScript has been the most popular language in the world for 9 years in a row, according to StackOverflow.com, the largest community website for professional and enthusiast programmers.",
  "Knowing JavaScript allows you to design Web and mobile apps without any restrictions. JavaScript can be used to create back-end, front-end, full-stack, iOS, and Android apps.",
  "The most in-demand position on the job market is full-stack developer.",
  "The most in-demand position on the job market is full-stack developer.",
  "The most in-demand position on the job market is full-stack developer.",
  "The most in-demand position on the job market is full-stack developer.",
];

const WhyJavascript = () => {
  const theme = useTheme();
  const [slider, setSlider] = useState(null);
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: { lg: 472, md: 400 },
      }}
    >
      <Worldmap width="100%" />
      <Stack direction="row" spacing={3} alignItems="center" mb={{ xs: 3 }}>
        <SliderButton onClick={() => slider.slickPrev()}>
          <ArrowBackIosNewIcon color="white" />
        </SliderButton>
        <Typography variant="h3" color="primary.main">
          WHY JAVASCRIPT?
        </Typography>
        <SliderButton onClick={() => slider.slickNext()}>
          <ArrowForwardIosIcon />
        </SliderButton>
      </Stack>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Slider
          {...settings}
          style={{ width: "100%" }}
          ref={(slider) => setSlider(slider)}
        >
          {Cards.map((card, index) => {
            const color =
              (index + 1) % 3 === 0
                ? "primary"
                : (index + 1) % 2 === 0
                ? "tertiary"
                : "secondary";
            return (
              <CustomBorder
                color={theme.palette[color].main}
                index={index + 1}
                key={index}
                width={sm ? 250 : 300}
              >
                <Typography variant="body2" fontWeight={sm ? "normal" : "bold"}>
                  {card}
                </Typography>
              </CustomBorder>
            );
          })}
        </Slider>
      </Container>
    </Container>
  );
};

export default WhyJavascript;
