import { useTheme } from "@emotion/react";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomPriceCard from "./CustomPriceCard";

const TuitionContent = ({
  paragraphTitle,
  content,
  firstCourseCategory,
  secondCourseCategory,
}) => {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems="start"
      justifyContent="space-between"
      mt={{ sm: 10 }}
      wrap="wrap-reverse"
      sx={{ width: "100%" }}
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
  );
};

export default TuitionContent;
