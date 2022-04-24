import {
    Box,
    Container,
    Typography,
    useTheme,
  } from "@mui/material";
  import { DotGrid } from "../../../images/svg/CareerSupport";
import { ButtonWrap, CourseDetailsBtn,CourseDetailsBtn2, TextWrapper } from "../../shared/CustomComponents2";
import { useRouter } from "next/router";

export default function GetStart() {
    const theme = useTheme();
    const router = useRouter();

  return (
    <Box
      bgcolor="#6364D9"
      color="white"
      mt={{ md: 10, xs: 5 }}
      p={{ md: 0, xs: 5 }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: { lg: "-39px", md: "-50px" },
            left: { lg: "30px", md: "-10px" },
            display: { xs:'none',sm: "none", md: "block" },
          }}
        >
          <DotGrid fillColor={theme.palette.secondary.main} />
        </Box>
        <TextWrapper>
            <Typography variant="h3"  paddingBottom="12px">Ready to get Started?</Typography>
            <Typography variant="body1" paddingBottom="12px">
                Register yourself now and get real employable skills that top
                companies want.
              </Typography>
              <ButtonWrap style={{paddingBottom:'50px'}}>
                <CourseDetailsBtn2>
                    Get Started
                </CourseDetailsBtn2>
                <CourseDetailsBtn onClick={() => router.push("/course-details/all-courses")}>
                    All Courses
                </CourseDetailsBtn>
              </ButtonWrap>
        </TextWrapper>
      </Container>
    </Box>
  )
}
  