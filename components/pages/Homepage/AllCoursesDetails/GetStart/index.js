import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { DotGrid } from "../../../../../images/svg/CareerSupport";
import {
  ButtonWrap,
  CourseDetailsBtn,
  CourseDetailsBtn2,
  TextWrapper,
} from "../../../../shared/StyledComponents";

export default function GetStart({Header, SubHeader}) {
  const router = useRouter();
  const theme = useTheme();
  return (
    <Box
      bgcolor="#6364D9"
      color="white"
      mt={{ md: 10, xs: 5 }}
      p={{ md: 0, xs: 5 }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", height: { md: "300px", xs: "225px" } }}>
        <Box
          sx={{
            position: "absolute",
            top: { lg: "-39px", md: "-50px" },
            left: { lg: "30px", md: "-10px" },
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <DotGrid fillColor={theme.palette.secondary.main} />
        </Box>
        <TextWrapper sx={{ paddingTop: "25px" }}>
          <Typography variant="h3" paddingBottom="12px">
           {Header}
          </Typography>
          <Typography variant="body1" paddingBottom="12px">
            {SubHeader}
          </Typography>
          <ButtonWrap style={{ paddingBottom: "50px" }}>
            <CourseDetailsBtn>Get Started</CourseDetailsBtn>
          </ButtonWrap>
        </TextWrapper>
      </Container>
    </Box>
  );
}
