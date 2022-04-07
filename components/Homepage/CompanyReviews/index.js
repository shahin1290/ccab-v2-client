import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";

const RatingSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.secondary.main,
        py: { xs: 3, md: 10 },
        mt: { xs: 3, md: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
          gap={2}
        >
          {data.map((item) => (
            <Grid item key={item.id} sx={{ width: 290 }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{
                  backgroundColor: "secondary.background",
                  py: 5,
                  borderRadius: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    priority
                    src={item.imageUrl}
                    width={80}
                    height={70}
                    alt="switchup"
                  />
                </Box>

                <Typography
                  align="center"
                  variant="h6"
                  sx={{ fontWeight: "normal", fontSize: { xs: 16 } }}
                >
                  {item.rating}/5 Rating
                </Typography>

                <Box
                  sx={{
                    position: "relative",
                    pb: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  <svg
                    fill="#FFC107"
                    viewBox="0 0 576 512"
                    width="2.8em"
                    title="star"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.850.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>
                  <svg
                    fill="#FFC107"
                    viewBox="0 0 576 512"
                    width="2.8em"
                    title="star"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.850.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>
                  <svg
                    fill="#FFC107"
                    viewBox="0 0 576 512"
                    width="2.8em"
                    title="star"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.850.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>
                  <svg
                    fill="#FFC107"
                    viewBox="0 0 576 512"
                    width="2.8em"
                    title="star"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.850.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>
                  <svg
                    fill="#FFC107"
                    viewBox="0 0 576 512"
                    width="2.8em"
                    title="star"
                  >
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.850.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                  </svg>

                  <Box
                    sx={{
                      background: "white",
                      height: "100%",
                      overflow: "hidden",
                      mixBlendMode: "color",
                      position: "absolute",
                      top: 0,
                      right: 0,
                    }}
                    style={{
                      width: `${(1 - item.rating / 5) * 100}%`,
                    }}
                  ></Box>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const data = [
  { id: 1, imageUrl: "/facebook.png", rating: 4.5 },
  { id: 2, imageUrl: "/google.png", rating: 4.5 },
  { id: 3, imageUrl: "/switchup.png", rating: 4.5 },
  { id: 4, imageUrl: "/trustpilot.jpg", rating: 4 },
];

export default RatingSection;
