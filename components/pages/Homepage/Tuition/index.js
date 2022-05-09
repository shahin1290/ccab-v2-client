import { useTheme } from "@emotion/react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomPriceCard from "./CustomPriceCard";

const data = {
  title: "Fully Flexible Self-Paced Online Learning",
  content: [
    "Interest-free payment option of 5-6 months Alternatively, you may sign up for up to 36 months with Klarna, which includes complete access to the materials for 6 months and 9-15 weeks of mentor assistance, which includes access to the support platform, 1:1 sessions, and our Slack chat group.",
    "If you require additional time and mentor help to complete the bootcamp, you may extend it on a weekly basis for 99€ each week, allowing you to study at your own speed while still receiving all of the support and direction we give.",
    "As a result, you may finish the bootcamp according to your schedule and learning pace – from a full-time intense 3-6 months to a longer period, just as we do with our in-person group on campus.",
  ],
};

const Tuition = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="#F8F9FB" py={{ xs: 2, sm: 10 }}>
      <Container maxWidth="xl">
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" sx={{ mt: 5, mb: 2 }}>
            Tuition
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "secondary.contrastText", px: 3 }}
          >
            We conduct discount programs from time to time, so the price may be
            lower
          </Typography>
        </Stack>
        <Grid
          container
          alignItems="start"
          justifyContent="space-between"
          mt={{ sm: 10, xs: 2 }}
          spacing={1}
          wrap="wrap-reverse"
        >
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              height: "100%",
              alignItems: "start",
              justifyContent: "start",
              display: "flex",
            }}
          >
            <Stack direction="column" spacing={3}>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                {data.title}
              </Typography>
              {data.content.map((item, index) => {
                return (
                  <Typography
                    variant="body1"
                    sx={{ color: "secondary.contrastText" }}
                    key={index}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Stack>
          </Grid>
          {/* <Grid
            item
            md={5}
            sm={10}
            xs={12}
            sx={{
              mb: 5,
              width: "100%",
              maxWidth: "500px",
              display: "grid",
              height: "100%",
              rowGap: 3,

              gridTemplateColumns:
                "minmax(40%, 200px) minmax(20%, 100px) minmax(40%, 200px)",
              gridTemplateRows:
                "minmax(45%, 80px) minmax(5%, 20px) minmax(45%, 80px)",
              justifyItems: { xs: "center", sm: "end" },
              alignContent: "center",
            }}
          >
            <InfoCard
              price="29€"
              text="Help with your coding studies according to your needs, and schedule the number of sessions!"
              duration="per hour"
              cardColor={theme.palette.primary.main}
              sx={{
                position: "relative",
                zIndex: 1,
                gridColumn: { sm: "1 / 3", xs: " 2 " },
                gridRow: "1 / 3",
                // width: { sm: 300, xs: 200 },
              }}
            />
            <Typography
              variant="h6"
              textAlign="center"
              sx={{
                gridColumn: "3 ",
                gridRow: "1",
                alignSelf: "center",
                justifySelf: "center",
                display: { sm: "block", xs: "none" },
              }}
            >
              Course Fees
            </Typography>
            <InfoCard
              price="199€"
              text="A Monthly formed with a set amount of sessions for any web or mobile development of your need full/part-time!"
              duration="per month"
              cardColor={theme.palette.secondary.main}
              sx={{
                position: "relative",
                zIndex: 2,
                gridColumn: { sm: "2 / 4", xs: " 1 / 4" },
                gridRow: { sm: "2 / 4", xs: "3 / 4" },
                // width: { sm: 300, xs: 200 },
              }}
            />
          </Grid> */}

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
            <Stack justifyContent="center" alignItems="center">
              <Box
                sx={{
                  position: { xs: "inherit", sm: "absolute" },
                  width: { lg: 250, xs: 250, sm: 200 },
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
                  position: { xs: "inherit", sm: "absolute" },
                  top: { xs: "144px", sm: "162px", lg: "185px" },
                  left: { xs: "139px", sm: "190px", lg: "238px" },
                  width: { lg: 250, xs: 250, sm: 200 },
                }}
              >
                <CustomPriceCard
                  position="bottom"
                  bgcolor={theme.palette.secondary.main}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Tuition;
