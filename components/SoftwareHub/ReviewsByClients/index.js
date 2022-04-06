import { useTheme } from "@emotion/react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Slider from "react-slick";
import { SliderButton } from "../../shared/CustomComponents";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { styled } from "@mui/system";
import Underline from "../../../images/svg/Underline";

const UserImg = styled("img")(({ theme }) => ({
  display: "block",
  width: "50px",
  borderRadius: "50%",
}));

const CustomImage = styled("img")(({ theme }) => ({
  borderRadius: 20,
  width: "100%",
  height: "100%",
  margin: "0 auto",
}));

const StudentReviews = () => {
  const theme = useTheme();
  const [slider, setSlider] = useState(null);

  /* modal */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 10,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container maxWidth="xl">
      <Box px={{ lg: 5, sm: 10, xs: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pt: { xs: 3, md: 10 },
            pb: { xs: 5, sm: 10 },
          }}
        >
          <Typography variant="h3" mb={1}>
            Reviews By Students
          </Typography>
          <Underline />
          <Typography
            variant="body1"
            mt={{ xs: 1 }}
            color="secondary.contrastText"
            align="center"
          >
            Most of our graduates were employed after 6 months upon graduation
          </Typography>
        </Box>

        <Box sx={{ position: "relative" }} mb={{ xs: 10, sm: 15 }}>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {data.map((item) => (
              <Box
                p={{ sm: 2 }}
                sx={{
                  position: "relative",
                }}
                key={item.id}
              >
                <Box sx={{ position: "relative" }} pb={{ xs: 1, md: 0 }}>
                  <CustomImage
                    src="/review-img.jpg"
                    alt="Student Review Image"
                  />
                  <Box
                    onClick={handleOpen}
                    sx={{
                      position: "absolute",
                      top: { md: "32%", sm: "34%", xs: "38%" },
                      left: { md: "40%", sm: "42%", xs: "44%" },
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="8rem"
                      height="8rem"
                    >
                      <path
                        fill="white"
                        stroke="none"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                      ></path>
                    </svg>
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    bgcolor="rgba(133, 133, 135, 0.7)"
                    sx={{
                      position: "absolute",
                      width: "100%",
                      bottom: { xs: "8px", md: 0 },
                      left: 0,
                      borderRadius: "0 0 20px  20px ",
                    }}
                    py={0.5}
                    px={{ xs: 0.5, sm: 2 }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <UserImg src={item.avatarUrl} alt="student" />
                      <Typography
                        align="center"
                        variant="h3"
                        color={theme.palette.primary.contrastText}
                        sx={{
                          fontWeight: "normal",
                          fontSize: { xs: 22 },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Stack>
                    <Typography
                      align="center"
                      variant="h6"
                      color={theme.palette.primary.contrastText}
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
              top: { md: "8vw", xs: "20vw" },
              right: { md: "-50px", xs: "-35px" },
              display: { md: "block", xs: "none" },
            }}
          >
            <SliderButton onClick={() => slider.slickNext()}>
              <ArrowForwardIosIcon />
            </SliderButton>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: { md: "8vw", xs: "20vw" },
              left: { md: "-50px", xs: "-35px" },
              display: { md: "block", xs: "none" },
            }}
          >
            <SliderButton onClick={() => slider.slickPrev()}>
              <ArrowBackIosNewIcon color="white" />
            </SliderButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const data = [
  { id: 1, name: "John doe", address: "London, UK", avatarUrl: "/person.jpg" },
  { id: 2, name: "John doe", address: "London, UK", avatarUrl: "/person.jpg" },
  { id: 3, name: "John doe", address: "London, UK", avatarUrl: "/person.jpg" },
  { id: 4, name: "John doe", address: "London, UK", avatarUrl: "/person.jpg" },
];

export default StudentReviews;
