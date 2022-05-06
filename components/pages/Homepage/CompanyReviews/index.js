import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  FacebookIcon,
  GoogleIcon,
  StarRating,
  Trustpilot,
} from "../../../../images/svg/CompanyReviews";

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
                  {item.Icon}
                </Box>

                <Typography
                  align="center"
                  variant="h6"
                  color="secondary.contrastText"
                  sx={{ fontWeight: "bold", fontSize: { xs: 16 } }}
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
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />

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
  { id: 1, Icon: <FacebookIcon />, rating: 4.5 },
  { id: 2, Icon: <GoogleIcon />, rating: 4.5 },
  { id: 3, Icon: <Trustpilot />, rating: 4.5 },
  { id: 4, Icon: <FacebookIcon />, rating: 4 },
];

export default RatingSection;
