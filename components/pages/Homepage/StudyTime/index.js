import { useTheme } from "@emotion/react";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { SecondaryButton } from "../../../shared/StyledComponents";
import CustomPriceCard from "./CustomPriceCard";
import CustomScheduleCard from "./CustomScheduleCard";

const StyledSvg = styled("svg")(({ theme }) => ({
  width: "410px",
  height: "170px",
  [theme.breakpoints.down("lg")]: { width: "300px", height: "130px" },
  [theme.breakpoints.down("sm")]: { width: "220px", height: "90px" },
}));

const Study = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="#fff" py={{ xs: 1, lg: 10 }}>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="start"
          justifyContent={{ sm: "space-between", xs: "center" }}
          spacing={1}
          wrap="wrap-reverse"
        >
          <Grid
            item
            md={6}
            sm={12}
            sx={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              mb: 5,
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <SecondaryButton variant="contained" color="secondary">
                <Typography
                  p={{ xs: 1, lg: 2 }}
                  variant="h4"
                  fontSize={{ xs: 20, lg: 26 }}
                >
                  Studying Time
                </Typography>
              </SecondaryButton>
              <Box sx={{ position: "relative" }} mb={2}>
                <StyledSvg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="1.19214 -0.119 19.61 7.207"
                >
                  <path
                    d="M 9.995 -0.005 C 9.965 3.859 10.188 2.105 1.912 5.032 Q 1.184 5.537 1.311 6.988 M 10.946 0.04 V 6.979 M 12.001 -0.019 Q 11.926 2.506 13.115 2.848 Q 16.815 3.665 20.158 4.988 Q 20.767 5.523 20.693 6.979"
                    stroke={theme.palette.primary.main}
                    strokeWidth="0.21"
                    fill="none"
                  />
                </StyledSvg>
                <Stack
                  direction="row"
                  spacing={{ xs: 12.2, sm: 15.8, lg: 22.7 }}
                  sx={{
                    position: "absolute",
                    bottom: { xs: "2px", sm: 0 },
                    left: { xs: "-7px", sm: "-10px" },
                  }}
                >
                  <CircleIcon
                    sx={{
                      color: theme.palette.primary.main,
                      marginLeft: "4px",
                    }}
                    fontSize="small"
                  />
                  <CircleIcon
                    sx={{ color: theme.palette.primary.main }}
                    fontSize="small"
                  />
                  <CircleIcon
                    sx={{ color: theme.palette.primary.main }}
                    fontSize="small"
                  />
                </Stack>
              </Box>

              <Stack direction="row" spacing={{ xs: 1, lg: 3 }}>
                <CustomScheduleCard
                  color="#63CD9B"
                  period="Morning Time"
                  time="8-16"
                />
                <CustomScheduleCard
                  color={theme.palette.primary.main}
                  period="Evening Time"
                  time="17-20"
                />
                <CustomScheduleCard
                  color={theme.palette.secondary.main}
                  period="Weekends"
                  time="12-17"
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            sm={5}
            xs={11}
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "500px",
              position: "relative",
              left: { xs: "7vw", sm: "25%", md: 0 },
            }}
          >
            <Box>
              <Box
                sx={{
                  position: "absolute",
                  width: { lg: 250, xs: 150, sm: 200 },
                  top: 0,
                  left: 0,
                }}
              >
                <CustomPriceCard
                  position="top"
                  bgcolor={theme.palette.primary.main}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "144px", sm: "135px", lg: "185px" },
                  left: { xs: "140px", sm: "190px", lg: "238px" },
                  width: { lg: 250, xs: 150, sm: 200 },
                }}
              >
                <CustomPriceCard
                  position="bottom"
                  bgcolor={theme.palette.secondary.main}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Study;
