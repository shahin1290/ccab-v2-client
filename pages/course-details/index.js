import { useRouter } from "next/router";
import { Grid, Container, Typography, Stack, useTheme  } from "@mui/material";
import { Box } from "@mui/system";
import {
  HeroHubContainer,
  HubLeftSide,
  HubRightSide,
  ButtonWrap,
  CourseDetailsBtn,
  CourseDetailsBtn2, 
  TextWrapper
} from "../../components/shared/CustomComponents2";
import Underline from "../../images/svg/Underline";
import { SecondaryButton } from "../../components/shared/CustomComponents";
import cover from '../../public/images/review1.jpeg'
import CustomCourseCard from "../../components/shared/CustomCourseCard";
import CustomCourseImgCard from '../../components/shared/CustomCourseImgCard'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventSeatSharpIcon from '@mui/icons-material/EventSeatSharp';
import { DotGrid } from "../../images/svg/CareerSupport";
import Image from "next/image";

export default function Course() {
    const router = useRouter();
    const theme = useTheme();
    if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
    <HeroHubContainer>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
        sx={{ pt: { md: 10, xs: 0 } }}
      >
        <HubLeftSide
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            minHeight: { xs: "50vw", sm: "30vw", lg: "25vw" },
            maxHeight: "400px",
          }}
        >
          <Typography
            variant="h2"
            color="primary"
            mb={1}
            textAlign={{ xs: "center", md: "start" }}
            whiteSpace={{ xs: "break-spaces" }}
          >
            JavaScript Full Stack Web and Mobile Development
          </Typography>
        </HubLeftSide>
        <HubRightSide
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            minHeight: { xs: "50vw", sm: "40vw", lg: "40vw", xl: "35vw" },
            maxHeight: "400px",
          }}
        >
          <Image
            priority
            src="/svgImages/HeroImages/CourseHeroImage.svg"
            layout="fill"
            alt="Software Hub Hero"
          />
        </HubRightSide>
      </Grid>
    </HeroHubContainer>
    <Box bgcolor="#ffffff" py={{ xs: 2, sm: 10 }} sx={{marginTop:'20px'}}>
      <Container maxWidth="xl">
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" paddingBottom="12px">About the Course</Typography>
          <Underline />
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
                  <Typography
                    variant="body1"
                    sx={{ color: "secondary.contrastText" }}
                  >
                      In this course, we will learn the basic tools that every web page coder needs to know we will start from the ground up by learning how to implement modern web pages with HTML and CSS.
                      We will then advance to learning how to code our pages such that its components rearrange and resize themselves automatically based on the size of the users screen.
                      You will be able to code up a web page that will be just as useful on a mobile phone as on a desktop computer.
                      No  pinch and zoom required. Last ut certainly not least, we will get a thorough introduction to the most ubiquitous, popular, and incredibly powerful language of the web: Javascript.
                      Using Javascript, you will be able to build a fully functional web application that utilizesAjax to expose server-side functionality and data to the end user. We will also develop mobile applications using React-Native.
                  </Typography>
                  <SecondaryButton variant="contained" color="secondary" sx={{width: { md: "40%", xs: "50%", sm:'40%' },}}>
                    Enroll Now
                  </SecondaryButton>
            </Stack>
          </Grid>
          <Grid
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
              gridTemplateColumns:
                "minmax(40%, 200px) minmax(20%, 100px) minmax(40%, 200px)",
              gridTemplateRows:
                "minmax(45%, 80px) minmax(5%, 20px) minmax(45%, 80px)",
              justifyItems: { xs: "center", sm: "end" },
              alignContent: "center",
              marginBottom:{xs:'80px'}
            }}
          >
            <CustomCourseImgCard
                src={cover}
                alt="cover"
              sx={{
                position: "relative",
                zIndex: 1,
                gridColumn: "1 / 3",
                gridRow: "1 / 4",
                width: { sm: 300, xs: 200 },
              }}
            />
            <CustomCourseCard
              price=" 384 $"
              duration="30 Weeks"
              SeatsNumber="9 Seats available"
              icon={<AccessTimeFilledIcon style={{fontSize:'20px', marginTop:'4px'}} />}
              icon2={<EventSeatSharpIcon style={{fontSize:'20px', marginTop:'4px'}}/>}
              cardColor={theme.palette.primary.main}
              sx={{
                position: "relative",
                zIndex: 2,
                gridColumn: "2 / 4",
                gridRow: "2 / 4",
                width: { sm: 300, xs: 200 },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
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
    </>
  )
}
