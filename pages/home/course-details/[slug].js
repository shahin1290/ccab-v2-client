import { useRouter } from "next/router";
import { Grid, Container, Typography, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import {
  HeroHubContainer,
  HubLeftSide,
  HubRightSide,
  ButtonWrap,
  CourseDetailsBtn,
  CourseDetailsBtn2,
  TextWrapper,
} from "../../../components/shared/StyledComponents";
import Underline from "../../../images/svg/Underline";
import { SecondaryButton } from "../../../components/shared/StyledComponents";
import CourseInfoCard from "../../../components/shared/CourseInfoCard";
import cover from "../../../public/images/review1.jpeg";
import CourseInfoCardImg from "../../../components/shared/CourseInfoCardImg";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EventSeatSharpIcon from "@mui/icons-material/EventSeatSharp";
import { DotGrid } from "../../../images/svg/CareerSupport";
import Image from "next/image";

import fs from "fs";
import path from "path";
import util from "util";

export default function Course({
  title,
  courseSummary,
  courseHeroImage,
  startingPrice,
  duration,
  availableSeats,
  infoCardImage,
}) {
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
              {title}
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
              src={courseHeroImage}
              layout="fill"
              alt="Software Hub Hero"
            />
          </HubRightSide>
        </Grid>
      </HeroHubContainer>
      <Box bgcolor="#ffffff" py={{ xs: 2, sm: 10 }} sx={{ marginTop: "20px" }}>
        <Container maxWidth="xl">
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h3" paddingBottom="12px">
              About the Course
            </Typography>
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
                  {courseSummary}.
                </Typography>
                <SecondaryButton
                  variant="contained"
                  color="secondary"
                  sx={{ width: { md: "40%", xs: "50%", sm: "40%" } }}
                >
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
                marginBottom: { xs: "80px" },
              }}
            >
              <CourseInfoCardImg
                src={infoCardImage}
                alt="cover"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  gridColumn: "1 / 3",
                  gridRow: "1 / 4",
                  width: { sm: 300, xs: 200 },
                }}
              />
              <CourseInfoCard
                price={startingPrice}
                duration={duration}
                SeatsNumber={availableSeats}
                icon={
                  <AccessTimeFilledIcon
                    style={{ fontSize: "20px", marginTop: "4px" }}
                  />
                }
                icon2={
                  <EventSeatSharpIcon
                    style={{ fontSize: "20px", marginTop: "4px" }}
                  />
                }
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
        <Container
          maxWidth="lg"
          sx={{ position: "relative", height: { md: "300px", xs: "225px" } }}
        >
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
              Ready to get Started?
            </Typography>
            <Typography variant="body1" paddingBottom="12px">
              Register yourself now and get real employable skills that top
              companies want.
            </Typography>
            <ButtonWrap style={{ paddingBottom: "50px" }}>
              <CourseDetailsBtn2>Get Started</CourseDetailsBtn2>
              <CourseDetailsBtn
                onClick={() => router.push("/home/all-courses")}
              >
                All Courses
              </CourseDetailsBtn>
            </ButtonWrap>
          </TextWrapper>
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "HomepageData.json")
  );
  const data = JSON.parse(jsonData);

  const [staticProps] = data.CoursesData.filter((item) => item.slug === slug);
  return {
    props: {
      ...staticProps,
    },
  };
}

export async function getStaticPaths() {
  const readFile = util.promisify(fs.readFile);
  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "HomepageData.json")
  );
  const data = JSON.parse(jsonData);
  const staticPaths = data.CoursesData.map((item) => {
    return { params: { slug: item.slug } };
  });

  return {
    paths: staticPaths,
    fallback: false,
  };
}
