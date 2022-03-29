import { useTheme } from "@emotion/react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import StyledModal from "./StyledModal";
import { SliderButton } from "../shared/CustomComponents";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { styled } from "@mui/system";
import Underline from "../../images/svg/Underline";
import Image from "next/image";
import { Calculate } from "@mui/icons-material";

const UserImg = styled("img")(({ theme }) => ({
  display: "block",
  width: "10em",
  height: "10em",
  borderRadius: "50%",
}));

function Arrow(props) {
  const { className, style, onClick, bgcolor } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: bgcolor,
      }}
      onClick={onClick}
    />
  );
}

const CustomImage = styled("img")(({ theme }) => ({
  borderRadius: 20,
  width: "50%",
  height: "auto",
  margin: "0 auto",
}));

const StudentReviews = () => {
  const theme = useTheme();
  const [slider, setSlider] = useState(null);

  /* modal */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 3, md: 10 },
          pb: { xs: 10 },
        }}
      >
        <Typography variant="h3" mb={1}>
          Reviews By Students
        </Typography>
        <Underline />
        <Typography variant="subtitle2" mt={{ xs: 1 }}>
          Most of our graduates were employed after 6 months upon graduation
        </Typography>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "100px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CustomImage src="/review-img.jpg" alt="Student Review Image" />
              <Box
                onClick={handleOpen}
                sx={{
                  position: "absolute",
                  top: "calc(50% - 50px)",
                  left: "calc(50% - 50px)",
                  cursor: "pointer",
                }}
              >
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="10rem"
                  height="10rem"
                >
                  <path
                    fill="white"
                    stroke="none"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                  ></path>
                </svg>
              </Box>
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{
                  position: "absolute",
                  bottom: "-100px",
                  left: "calc(50% - 50px)",
                }}
              >
                <UserImg src="/person.jpg" alt="student" />
                <Typography
                  align="center"
                  variant="h3"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: "normal",
                    fontSize: { xs: 22 },
                  }}
                >
                  Ema Watsom
                </Typography>
                <Typography
                  align="center"
                  variant="h6"
                  sx={{ fontWeight: "normal", fontSize: { xs: 16 } }}
                >
                  London, UK
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "50px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CustomImage src="/review-img.jpg" alt="Student Review Image" />
              <Box
                onClick={handleOpen}
                sx={{
                  position: "absolute",
                  top: "calc(50% - 50px)",
                  left: "calc(50% - 50px)",
                  cursor: "pointer",
                }}
              >
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="10rem"
                  height="10rem"
                >
                  <path
                    fill="white"
                    stroke="none"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                  ></path>
                </svg>
              </Box>
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{
                  position: "absolute",
                  bottom: "-100px",
                  left: "calc(50% - 50px)",
                }}
              >
                <UserImg src="/person.jpg" alt="student" />
                <Typography
                  align="center"
                  variant="h3"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: "normal",
                    fontSize: { xs: 22 },
                  }}
                >
                  Ema Watsom
                </Typography>
                <Typography
                  align="center"
                  variant="h6"
                  sx={{ fontWeight: "normal", fontSize: { xs: 16 } }}
                >
                  London, UK
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              paddingBottom: "50px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CustomImage src="/review-img.jpg" alt="Student Review Image" />
              <Box
                onClick={handleOpen}
                sx={{
                  position: "absolute",
                  top: "calc(50% - 50px)",
                  left: "calc(50% - 50px)",
                  cursor: "pointer",
                }}
              >
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="10rem"
                  height="10rem"
                >
                  <path
                    fill="white"
                    stroke="none"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                  ></path>
                </svg>
              </Box>
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{
                  position: "absolute",
                  bottom: "-100px",
                  left: "calc(50% - 50px)",
                }}
              >
                <UserImg src="/person.jpg" alt="student" />
                <Typography
                  align="center"
                  variant="h3"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: "normal",
                    fontSize: { xs: 22 },
                  }}
                >
                  Ema Watsom
                </Typography>
                <Typography
                  align="center"
                  variant="h6"
                  sx={{ fontWeight: "normal", fontSize: { xs: 16 } }}
                >
                  London, UK
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Slider>
        <Box
          sx={{
            position: "absolute",
            top: "calc(50% - 50px)",
            right: "150px",
          }}
        >
          <SliderButton onClick={() => slider.slickNext()}>
            <ArrowForwardIosIcon />
          </SliderButton>
        </Box>

        <Box
          sx={{ position: "absolute", top: "calc(50% - 50px)", left: "150px" }}
        >
          <SliderButton onClick={() => slider.slickPrev()}>
            <ArrowBackIosNewIcon color="white" />
          </SliderButton>
        </Box>

        <StyledModal open={open} handleClose={handleClose} />
      </Box>
    </Container>
  );
};

export default StudentReviews;
