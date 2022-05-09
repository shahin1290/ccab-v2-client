import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Worldmap from "../../../../images/svg/Worldmap";
import CustomBorder from "../../../shared/CustomBorder";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderButton } from "../../../shared/StyledComponents";
import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const settings = {
  className: "whySectionStyling",
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

const CardsComponent = ({ cards, id }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid key={id} container sx={{ width: "100%" }}>
      {cards.map((card, index) => {
        const color =
          (index + 1) % 3 === 0
            ? "primary"
            : (index + 1) % 2 === 0
            ? "tertiary"
            : "secondary";

        const columns = 12 / cards.length;
        return (
          <Grid
            item
            justifyContent="center"
            aligItems="center"
            key={index}
            xs={12}
            md={6}
            lg={columns}
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <CustomBorder
              color={theme.palette[color].main}
              index={index + 1}
              width={sm ? 250 : 300}
            >
              <Typography variant="body2" fontWeight={sm ? "normal" : "bold"}>
                {card}
              </Typography>
            </CustomBorder>
          </Grid>
        );
      })}
    </Grid>
  );
};
const WhySection = ({ data }) => {
  const [slider, setSlider] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 5, sm: 15 },
      }}
    >
      <Worldmap width="100%" />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SliderButton onClick={() => slider.slickPrev()}>
          <ArrowBackIosNewIcon color="white" />
        </SliderButton>
        <Slider
          asNavFor={slider2}
          {...settings}
          style={{ width: "50%" }}
          ref={(slider) => setSlider(slider)}
        >
          {data.map((item) => {
            return (
              <Typography
                variant="h3"
                color="primary.main"
                textAlign="center"
                key={item.id}
              >
                {item.title}
              </Typography>
            );
          })}
        </Slider>
        <SliderButton onClick={() => slider.slickNext()}>
          <ArrowForwardIosIcon />
        </SliderButton>
      </Container>
      <Container maxWidth="xl">
        <Slider
          {...settings}
          ref={(slider) => setSlider2(slider)}
          asNavFor={slider}
        >
          {data.map((course) => {
            return (
              <CardsComponent
                cards={course.cards}
                id={course.id}
                key={course.id}
              />
            );
          })}
        </Slider>
      </Container>
    </Container>
  );
};

export default WhySection;
