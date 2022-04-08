import React from "react";
import {
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProgressBar from "../../../images/svg/ProgressBar";
import { Box, useTheme } from "@mui/system";
import ProgressBarMobile from "../../../images/svg/ProgressBarMobile";
import Underline from "../../../images/svg/Underline";
import ServiceSelectionCard from "../../shared/ServiceSelectionCard";
import AllSections from "./data.";
import Slider from "react-slick";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ForwardArrow } from "../../../images/svg/ServiceIcons";
import styled from "@emotion/styled";
import HowContactForm from "../ContactForm";

const LargeContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 2,
  paddingBottom: 2,
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

const HowMuch = () => {
  const theme = useTheme();
  const [currentStage, setCurrentStage] = React.useState(1);
  const [slider, setSlider] = React.useState(null);
  const md = useMediaQuery(theme.breakpoints.down("md"));

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
      // console.log(oldIndex, newIndex);
      setCurrentStage(newIndex + 1);
    },
  };

  const nextHandler = () => {
    if (currentStage === 7) return console.log("Form Submitted");

    slider.slickNext();
    setCurrentStage(currentStage + 1);
  };

  const prevHandler = () => {
    if (currentStage - 1 < 1) return;
    slider.slickPrev();
    setCurrentStage(currentStage - 1);
  };
  return (
    <LargeContainer>
      <InnerContainer maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ color: "common.white", mb: 2, mt: { md: 10, xs: 3 } }}
        >
          How much?
        </Typography>
        <Underline fill={theme.palette.common.white} />
        <Typography variant="subtitle2" color="common.white" mt={3} mb={5}>
          Click the icons below to describe your app to get the estimate
        </Typography>
        <CustomStack spacing={1}>
          {md ? (
            <Box>
              <ProgressBarMobile
                color={theme.palette.secondary.main}
                stage={currentStage}
              />
            </Box>
          ) : (
            <ProgressBar
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
                    py: { xs: 3, md: 4 },
                    mx: { xl: 10, lg: 5, xs: 0, md: 10 },
                  }}
                  key={index}
                >
                  <Grid
                    key={index}
                    container
                    rowSpacing={{ xs: 1, md: 3 }}
                    justifyContent="start"
                    alignItems="center"
                    sx={{ my: 0.5, mx: { xs: -1.5 } }}
                  >
                    {section.map((item, index) => {
                      return (
                        <Grid key={index} item lg={4} md={6} xs={12}>
                          <ServiceSelectionCard
                            title={item.title}
                            Icon={item.Icon}
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
                justifyContent: "center",
                alignItems: "center",
                py: { xs: 3, md: 4 },
                mx: { xl: 10, lg: 5, xs: 0, md: 10 },
              }}
            >
              <Grid
                container
                rowSpacing={{ xs: 1, md: 3 }}
                justifyContent="start"
                alignItems="center"
                sx={{ my: 0.5, mx: { xs: -1.5 } }}
              >
                <HowContactForm />
              </Grid>
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
            {currentStage === 7 ? (
              "Get Estimate Today "
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
