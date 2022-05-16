import { Container, Typography, Box } from "@mui/material";
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
import ListCurriculum from "./ListCurriculum";
import Header from "../../../shared/Header";

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

export default function CurriculumSection({ Curriculums }) {
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
            width: { lg: "30%", md: "60%", xs: "90%" },
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
            {Curriculums.map((item) => (
              <Header title={item.title} color="primary" key={item.id} />
            ))}
          </Slider>
        </Box>
        <SliderButton onClick={() => slider.slickNext()}>
          <ArrowForwardIosIcon />
        </SliderButton>
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
        {Curriculums.map((curriculum) => {
          return (
            <>
              {curriculum?.list ? (
                <CurriculumContent
                  key={curriculum.id}
                  list
                  description={curriculum.description}
                  largeContent={<ListCurriculum data={curriculum.listData} />}
                  smallContent={<ListCurriculum data={curriculum.listData} />}
                />
              ) : (
                <CurriculumContent
                  key={curriculum.id}
                  description={curriculum.description}
                  largeContent={curriculum.largeContent}
                  smallContent={curriculum.smallContent}
                />
              )}
            </>
          );
        })}
      </Slider>
    </SectionContainer>
  );
}
