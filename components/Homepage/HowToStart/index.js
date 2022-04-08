import {
  Container,
  Stack,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import {
  CalenderIcon,
  HelpIcon,
  HouseIcon,
  TeacherIcon,
} from "../../../images/svg/cardIcons";
import {
  BannerImage,
  CustomCard,
  CustomImageContainer,
  PrimaryButton,
  SecondaryButton,
} from "../../shared/CustomComponents";

import HappyGuy from "../../../public/images/happyGuy.png";
import HowToStartImage from "../../../public/images/howToStart.png";

const cardData = [
  {
    id: 1,
    icon: HouseIcon,
    title: "Learn full-stack from the comfort of your own home",
    content:
      "Get access to all of the course's core contents, including both text and video lessons.  Begin learning at your own pace from the first day of the Bootcamp, extending the course duration as needed.",
  },
  {
    id: 2,
    icon: TeacherIcon,
    title: "Personal 1:1 sessions with mentors",
    content:
      "Schedule weekly 1:1 appointments with your mentor to work through any current challenges, obtain additional explanations, and ask any concerns you may have.",
  },
  {
    id: 3,
    icon: HelpIcon,
    title: "For code-related questions, there is a support platform",
    content:
      "The curriculum, projects, exercises, and outcomes are identical to the boot camp's in-person version.",
  },
  {
    id: 4,
    icon: CalenderIcon,
    title: "Flexible schedule Completely",
    content:
      "We provide support via a support portal, chat, and provide comments on your progress.",
  },
];
const HowToStart = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="secondary.background">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          my: { xs: 2, md: 5 },
          py: { xs: 3, md: 10 },
          gap: { xs: 5, md: 10 },
        }}
      >
        <Stack justifyContent="center" alignItems="center" spacing={1}>
          <Typography variant="h3">How can you start?</Typography>
          <Typography variant="h6" color="secondary.contrastText">
            Register yourself now and get real employable skills that top
            companies want
          </Typography>
        </Stack>
        <Grid
          container
          justifyContent={{ lg: "space-between", xs: "center" }}
          spacing={5}
        >
          <Grid item md={5}>
            <Stack
              spacing={4}
              justifyContent="center"
              alignItems={{ xs: "center", md: "start" }}
              sx={{ maxWidth: "450px", height: "100%" }}
            >
              <Typography variant="h4">
                Remote supervised self-paced training
              </Typography>
              <Typography variant="body1">
                Choose a start date and register on this page to secure your
                spot. To prepare for the Bootcamp, get the pre-course materials.
                If you have no prior experience with JavaScript, HTML, or CSS,
                we estimate it will take you 20-30 hours
              </Typography>
              <PrimaryButton variant="contained" color="primary">
                Learn More
              </PrimaryButton>
            </Stack>
          </Grid>
          <Grid item md={5}>
            <CustomImageContainer>
              <Image
                priority
                src={HowToStartImage}
                alt="How To Start Image"
                layout="responsive"
              />
            </CustomImageContainer>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
          gap={2}
        >
          {cardData.map((item) => {
            return (
              <Grid item key={item.id} sx={{ width: 294 }}>
                <CustomCard>
                  <CardMedia sx={{ height: "30%" }}>
                    <item.icon />
                  </CardMedia>
                  <CardContent sx={{ height: "70%" }}>
                    <Typography variant="h6" align="center" mb={2}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.content}</Typography>
                  </CardContent>
                </CustomCard>
              </Grid>
            );
          })}
        </Grid>
        <Container
          maxWidth="xl"
          sx={{
            height: "300px",
            display: "flex",
            alignItems: { sm: "flex-end", xs: "initial" },
            justifyContent: "stretch",
          }}
        >
          <Stack
            direction="row"
            bgcolor="primary.main"
            gap={5}
            sx={{
              width: "100%",
              position: "relative",
              borderRadius: "20px",
              height: { xs: "100%", sm: "80%" },
              alignItems: { md: "flex-end", sm: "center" },
              flexDirection: { sm: "row", xs: "column" },
            }}
          >
            <Stack
              justifyContent="center"
              sx={{
                pl: { lg: 15, md: 7, sm: 4, xs: 2 },
                pt: { xs: 2, sm: 5 },
                alignItems: { sm: "flex-start", xs: "flex-start" },
                justifyContent: { xs: "flex-start" },
                height: "100%",
                width: { md: "70%", xs: "100%" },
              }}
            >
              <Typography sx={{ color: "secondary.main" }} variant="h3">
                Unsure which course fits you?
              </Typography>
              <Typography sx={{ color: "common.white" }} variant="subtitle2">
                Talk to our advisor to craft the ideal course plan
              </Typography>
              <SecondaryButton variant="contained" color="secondary">
                Ask an advisor
              </SecondaryButton>
            </Stack>
            <BannerImage>
              <Image priority src={HappyGuy} alt="Advisor" />
            </BannerImage>
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default HowToStart;
