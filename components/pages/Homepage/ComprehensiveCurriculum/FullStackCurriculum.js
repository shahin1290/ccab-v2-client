import { useTheme } from "@emotion/react";
import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CurriculumSVGDesktop from "../../../../images/svg/CurriculumImageDesktop";
import CurriculumImageMobile from "../../../../images/svg/CurriculumImageMobile";
import {
  DesktopContent,
  MobileContent,
  TextWrapper,
} from "../../../shared/StyledComponents";

const FullStackCurriculum = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: theme.palette.primary.background,
      }}
    >
      <TextWrapper sx={{ padding: 0 }}>
        <Typography
          variant="h6"
          sx={{ color: "secondary.contrastText", padding: "0.8rem", mb: 3 }}
        >
          Our Full Stack Developer Courses are made to give you an easy and fast
          path in web development. By the end these courses you will be able to
          build web applications from scratch.
        </Typography>
      </TextWrapper>
      <Grid style={{ paddingBottom: "50px", paddingTop: "30px" }}>
        <DesktopContent display={{ xs: "none", md: "block" }}>
          <CurriculumSVGDesktop />
        </DesktopContent>
        <MobileContent display={{ xs: "block", md: "none" }}>
          <CurriculumImageMobile />
        </MobileContent>
      </Grid>
    </Stack>
  );
};

export default FullStackCurriculum;
