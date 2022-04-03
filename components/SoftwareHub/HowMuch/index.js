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
import { BackArrow, ForwardArrow } from "../../../images/svg/ServiceIcons";

const HowMuch = () => {
  const theme = useTheme();
  const [currentStage, setCurrentStage] = React.useState(1);
  const [slider, setSlider] = React.useState(null);
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const xl = useMediaQuery(theme.breakpoints.down("xl"));

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    speed: 500,
  };

  const nextHandler = () => {
    if (currentStage + 1 > 7) return;
    slider.slickNext();
    setCurrentStage(currentStage + 1);
  };

  const prevHandler = () => {
    if (currentStage - 1 < 1) return;
    slider.slickPrev();
    setCurrentStage(currentStage - 1);
  };
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: 5,
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ color: "common.white", mb: 2 }}>
          How much?
        </Typography>
        <Underline fill={theme.palette.common.white} />
        <Typography variant="subtitle2" color="common.white" mt={3} mb={5}>
          Click the icons below to describe your app to get the estimate
        </Typography>
        <Stack
          sx={{
            width: "100%",
            flexDirection: { md: "column", xs: "row" },
            // backgroundColor: "red",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 1, md: 4 },
          }}
        >
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
              // backgroundColor: "blue",
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
                    mx: { sm: 3, xs: 0 },
                  }}
                  key={index}
                >
                  <Grid
                    key={index}
                    container
                    rowSpacing={{ xs: 1, md: 6 }}
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
          </Slider>
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          mt={2}
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
              width: "200px",
              backgroundColor: "secondary.main",
              color: "common.white",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              fill: `white !important`,
              fontSize: "16px",
              px: 5,
              "&:hover": {
                backgroundColor: "common.white",
                color: "secondary.main",
                fill: `rgb(255, 169, 80) !important`,
              },
            }}
          >
            Next <ForwardArrow />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowMuch;
