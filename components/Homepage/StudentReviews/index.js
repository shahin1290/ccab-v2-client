import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderButton } from "../../shared/CustomComponents";
import { Box, styled, useTheme } from "@mui/system";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Underline from "../../../images/svg/Underline";
import StyledModal from "./StyledModal";

const data = [
  {
    id: 1,
    name: "John doe",
    address: "London, UK",
    avatarUrl: "/images/person.jpg",
    videoImageUrl: "/images/review-img.jpg",
  },
  {
    id: 2,
    name: "John doe",
    address: "London, UK",
    avatarUrl: "/images/person.jpg",
    videoImageUrl: "/images/howToStart.png",
  },
  {
    id: 3,
    name: "John doe",
    address: "London, UK",
    avatarUrl: "/images/person.jpg",
    videoImageUrl: "/images/review-img2.jpg",
  },
];

const UserImg = styled("img")(({ theme }) => ({
  display: "block",
  width: "100px",
  borderRadius: "50%",

  [theme.breakpoints.down("lg")]: {
    width: "80px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "60px",
  },
}));

const CustomImage = styled("img")(({ theme }) => ({
  borderRadius: 30,
  width: "100%",
  height: "100%",
}));

const CustomImageMobile = styled(Image)(({ theme }) => ({
  borderRadius: 30,
}));

const StudentReview = () => {
  const theme = useTheme();

  /* Slider */
  const [selectedIndex, setSelectedIndex] = useState(0);
  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  const check = (index) => setSelectedIndex(index);

  /* modal */
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="xl" sx={{ pb: 7 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 3, md: 5 },
          pb: { xs: 5, md: 8 },
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
      <Box sx={{ display: { xs: "none", md: "block", position: "relative" } }}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: { md: "100px", lg: "150px" },
          }}
        >
          <SliderButton onClick={checkNext}>
            <ArrowBackIosNewIcon color="white" />
          </SliderButton>
        </Box>
        <div>
          <section id="slider">
            {data.map((item, index) => (
              <input
                key={item.id}
                type="radio"
                name="slider"
                id={`s${index + 1}`}
                checked={selectedIndex === index}
                onClick={() => check(index)}
                readOnly
              />
            ))}

            {data.map((item, index) => (
              <label
                htmlFor={`s${index + 1}`}
                id={`slide${index + 1}`}
                key={item.id}
              >
                <CustomImage src={item.videoImageUrl} />
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "40%" },
                    left: { xs: "44%" },
                    cursor: "pointer",
                  }}
                  onClick={handleOpen}
                >
                  <svg
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="6vw"
                    height="6vw"
                  >
                    <path
                      fill="white"
                      stroke="none"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                    ></path>
                  </svg>
                </Box>

                {selectedIndex === index && (
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    spacing={0.5}
                    sx={{
                      position: "absolute",
                      bottom: { sm: "-100px", xs: "-100px" },
                      left: { sm: "40%", lg: "45%" },
                    }}
                  >
                    <UserImg src="/images/person.jpg" alt="student" />
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
                      sx={{ fontWeight: "normal", fontSize: { xs: 14 } }}
                    >
                      {item.address}
                    </Typography>
                  </Stack>
                )}
              </label>
            ))}
          </section>
        </div>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: { md: "100px", lg: "150px" },
          }}
        >
          <SliderButton onClick={checkNext}>
            <ArrowForwardIosIcon />
          </SliderButton>
        </Box>
      </Box>

      <Container sx={{ display: { xs: "block", md: "none" } }}>
        {data.map((item, index) => (
          <Stack
            key={item.id}
            mb={15}
            sx={{ position: "relative" }}
            justifyContent="center"
            alignItems="center"
          >
            <CustomImageMobile
              src={item.videoImageUrl}
              width={350}
              height={250}
              alt="video review image"
            />

            <Box
              sx={{
                position: "absolute",
                top: "35%",
                cursor: "pointer",
              }}
            >
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="55px"
                height="55px"
              >
                <path
                  fill="white"
                  stroke="none"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                ></path>
              </svg>
            </Box>

            <Stack
              sx={{ position: "absolute", top: "85%" }}
              justifyContent="center"
              alignItems="center"
              spacing={0.1}
            >
              <UserImg src="/images/person.jpg" alt="student" />
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
          </Stack>
        ))}
      </Container>

      <StyledModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default StudentReview;
