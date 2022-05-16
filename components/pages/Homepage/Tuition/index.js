import { useTheme } from "@emotion/react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Underline from "../../../../images/svg/Underline";
import Header from "../../../shared/Header";
import CustomPriceCard from "./CustomPriceCard";

const Tuition = ({
  title,
  subTitle,
  paragraphTitle,
  content,
  firstCourseCategory,
  secondCourseCategory,
}) => {
  const theme = useTheme();
  return (
    <Box bgcolor="#F8F9FB" py={{ xs: 2, sm: 8 }}>
      <Container
        maxWidth="xl"
        sx={{ textAlign: { xs: "center", sm: "inherit" } }}
      >
        <Header title={title} subTitle={subTitle} color="primary" />

        <Grid
          container
          alignItems="start"
          justifyContent="space-between"
          mt={{ sm: 10 }}
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
            mb={4}
          >
            <Stack direction="column" spacing={3}>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                {paragraphTitle}
              </Typography>
              {content.map((item, index) => {
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
              height: "450px",
              position: "relative",
              left: { xs: "7vw", sm: "25%", md: 0 },
            }}
          >
            <Stack justifyContent="center" alignItems="center">
              <Box
                sx={{
                  position: { xs: "inherit", sm: "absolute" },
                  width: { lg: 250, xs: 250, sm: 200 },
                  height: { xs: 200, sm: "auto" },
                  top: 0,
                  left: 0,
                }}
              >
                <CustomPriceCard
                  position="top"
                  bgcolor={theme.palette.primary.main}
                  name={firstCourseCategory.name}
                  price={firstCourseCategory.price}
                  courseDuration={firstCourseCategory.courseDuration}
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
                  name={secondCourseCategory.name}
                  price={secondCourseCategory.price}
                  courseDuration={secondCourseCategory.courseDuration}
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
