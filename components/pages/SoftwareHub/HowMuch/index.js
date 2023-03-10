import React from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { Box, useTheme } from "@mui/system";
import { useRouter } from "next/router";

import ServiceSelectionCard from "../../../shared/ServiceSelectionCard";
import Underline from "../../../../images/svg/Underline";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ForwardArrow } from "../../../../images/svg/ServiceIcons";
import HowContactForm from "../ContactForm";
import FourStageProgressBar from "../../../shared/FourStageProgressBar";
import FourStageProgressBarMobile from "../../../shared/FourStageProgressBarMobile";
import Header from "../../../shared/Header";
import SixStageProgressBarMobile from "../../../shared/SixStageProgressBarMobile";
import SixStageProgressBar from "../../../shared/SixStageProgressBar";

const LargeContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 2,
  paddingBottom: 2,
  backgroundImage:
    'url("/svgImages/BackgroundImages/howMuchBackgroundImage.svg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const InnerContainer = styled(Container)(({ theme }) => ({
  paddingTop: 5,
  paddingBottom: 5,
  flexDirection: "column",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CustomStack = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 1,
  paddingRight: 1,

  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    paddingLeft: 4,
    paddingRight: 4,
  },
}));

const HowMuch = ({
  title,
  subTitle,
  AllSections,
  lastStage,
  lastButtonText,
  lastLink,
}) => {
  const theme = useTheme();
  const [currentStage, setCurrentStage] = React.useState(1);
  const [slider, setSlider] = React.useState(null);
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,

    centerPadding: "0px",
    adaptiveHeight: true,
    swipeToSlide: true,
    speed: 500,

    beforeChange: function (oldIndex, newIndex) {
      setCurrentStage(newIndex + 1);
    },
  };

  const nextHandler = () => {
    if (currentStage === lastStage) return console.log("Form Submitted");

    slider.slickNext();
    setCurrentStage(currentStage + 1);
  };

  const prevHandler = () => {
    if (currentStage - 1 < 1) return;
    slider.slickPrev();
    setCurrentStage(currentStage - 1);
  };
  return (
    <LargeContainer
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <InnerContainer maxWidth="xl">
        <Box sx={{ color: "common.white", mb: 2, mt: { md: 3, xs: 3 } }}>
          <Header title={title} subTitle={subTitle} color="secondary" />
        </Box>
        <CustomStack spacing={1}>
          {lastStage === 4 ? (
            md ? (
              <Box>
                <FourStageProgressBarMobile
                  color={theme.palette.secondary.main}
                  stage={currentStage}
                />
              </Box>
            ) : (
              <FourStageProgressBar
                color={theme.palette.secondary.main}
                stage={currentStage}
              />
            )
          ) : md ? (
            <Box>
              <SixStageProgressBarMobile
                color={theme.palette.secondary.main}
                stage={currentStage}
              />
            </Box>
          ) : (
            <SixStageProgressBar
              color={theme.palette.secondary.main}
              stage={currentStage}
            />
          )}

          <Slider
            {...settings}
            style={{
              width: md ? "60vw" : "80vw",
            }}
            ref={(slider) => setSlider(slider)}
          >
            {AllSections.map((section, index) => {
              return (
                <Container
                  maxWidth="xl"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: { xs: 10, md: 5 },
                    mx: { xl: 10, lg: 5, xs: 0, md: 10 },
                  }}
                  key={index}
                >
                  <Grid
                    key={index}
                    container
                    rowSpacing={{ xs: 3, md: 6 }}
                    justifyContent="start"
                    alignItems="center"
                    sx={{ my: 0.5, mx: { xs: -1.5 } }}
                  >
                    {section.map((item, index) => {
                      return (
                        <Grid key={index} item lg={4} md={6} xs={12}>
                          <ServiceSelectionCard
                            title={item.title}
                            description={item.description}
                            iconUrl={item.iconUrl}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Container>
              );
            })}
            <Container
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <HowContactForm />
            </Container>
          </Slider>
        </CustomStack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          mt={2}
          mb={5}
        >
          <Button
            onClick={prevHandler}
            variant="contained"
            sx={{
              borderRadius: "30px",
              height: "60px",
              width: "70px",
              backgroundColor: "common.white",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
              "&:hover .icon": {
                fill: "#ffff !important",
              },
            }}
          >
            <KeyboardBackspaceIcon
              className="icon"
              color="primary"
              fontSize="large"
            />
          </Button>
          <Button
            onClick={nextHandler}
            variant="filled"
            color="secondary"
            sx={{
              borderRadius: "30px",
              height: "60px",
              width: "max-content",
              backgroundColor: "secondary.main",
              color: "common.white",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              fill: `white !important`,
              fontSize: "16px",
              textTransform: "none",
              px: 5,
              gap: 1,
              "&:hover": {
                backgroundColor: "common.white",
                color: "secondary.main",
                fill: `rgb(255, 169, 80) !important`,
              },
            }}
          >
            {currentStage === lastStage ? (
              <p>{lastButtonText}</p>
            ) : (
              <>
                Next <ForwardArrow />
              </>
            )}
          </Button>
        </Stack>
      </InnerContainer>
    </LargeContainer>
  );
};

export default HowMuch;
