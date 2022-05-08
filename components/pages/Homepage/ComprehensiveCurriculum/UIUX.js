import { useTheme } from "@emotion/react";
import { Grid, Stack, Typography, useThemeProps } from "@mui/material";
import React from "react";
import {
  DesktopContent,
  MobileContent,
  TextWrapper,
} from "../../../shared/StyledComponents";
import UIUXCurriculumDesktop from "./UIUXCurriuculmDesktop";

const UIUX = () => {
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
          <UIUXCurriculumDesktop />
        </DesktopContent>
        <MobileContent display={{ xs: "block", md: "none" }}></MobileContent>
      </Grid>
    </Stack>
  );
};

export default UIUX;
