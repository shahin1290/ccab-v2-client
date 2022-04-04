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
  width: "140px",
  borderRadius: "50%",

  [theme.breakpoints.down("lg")]: {
    width: "100px",
  },

  [theme.breakpoints.down("md")]: {
    width: "80px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "70px",
  },
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
  width: "55%",
  height: "auto",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
  [theme.breakpoints.down("xs")]: {
    width: "80%",
  },
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
        <Typography variant="h6" mt={{ xs: 1 }} color="secondary.contrastText">
          Most of our graduates were employed after 6 months upon graduation
        </Typography>
      </Box>

      <Box sx={{ position: "relative" }}>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data.map((item) => (
            <Box
              sx={{
                position: "relative",
                pb: 20,
              }}
              key={item.id}
            >
              <Box sx={{ position: "relative" }}>
                <CustomImage src="/review-img.jpg" alt="Student Review Image" />
                <Box
                  onClick={handleOpen}
                  sx={{
                    position: "absolute",
                    top: { md: "40%", xs: "40%" },
                    left: { md: "45%", xs: "45%" },
                    cursor: "pointer",
                  }}
                >
                  <svg
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="7vw"
                    height="7vw"
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
                    bottom: { lg: "-130px", sm: "-110px", xs: "-100px" },
                    left: { sm: "45%", xs: "43%" },
                  }}
                >
                  <UserImg src={item.avatarUrl} alt="student" />
                  <Typography
                    align="center"
                    variant="h3"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: "normal",
                      fontSize: { xs: 22 },
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                    sx={{ fontWeight: "normal", fontSize: { xs: 16 } }}
                  >
                    {item.address}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          ))}
        </Slider>
        <Box
          sx={{
            position: "absolute",
            top: { md: "14vw", xs: "16vw" },
            right: { md: "10vw", xs: "10px" },
          }}
        >
          <SliderButton onClick={() => slider.slickNext()}>
            <ArrowForwardIosIcon />
          </SliderButton>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: { md: "14vw", xs: "16vw" },
            left: { md: "10vw", xs: "10px" },
          }}
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

const data = [
  { id: 1, name: "John doe", address: "London, UK", avatarUrl: "/person.jpg" },
  { id: 2, name: "John doe", address: "London, UK", avatarUrl: "/person.jpg" },
  { id: 3, name: "John doe", address: "London, UK", avatarUrl: "/person.jpg" },
];

export default StudentReviews;
