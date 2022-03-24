import { Container, Stack, Box, Card, CardMedia, CardContent, Grid } from "@mui/material";
import Image from "next/image";
import { CalenderIcon, HelpIcon, HouseIcon, TeacherIcon } from "../../../images/svg/cardIcons";

import {
  PrimaryButton,
  SectionHeader,
  SectionSubHeader,
  CustomImage,
  CustomCard,
  CustomCardContent,
} from "../../shared/CustomComponents";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
    content: "The curriculum, projects, exercises, and outcomes are identical to the boot camp's in-person version.",
  },
  {
    id: 4,
    icon: CalenderIcon,
    title: "Flexible schedule Completely",
    content: "We provide support via a support portal, chat, and provide comments on your progress.",
  },
];
const HowToStart = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      sx={{
        bgcolor: "secondary.background",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        my: 5,
        py: 10,
        gap: 10,

        [theme.breakpoints.down("md")]: {
          my: 1,
          py: 3,
          gap: 5,
        },
      }}>
      <Stack justifyContent="center" alignItems="center" spacing={2}>
        <SectionHeader variant="h4">How can you start?</SectionHeader>
        <SectionSubHeader>
          Register yourself now and get real employable skills that top companies want
        </SectionSubHeader>
      </Stack>
      <Grid container justifyContent={lg ? "center" : "space-between"} spacing={5}>
        <Grid item md={5}>
          <Stack
            spacing={2}
            justifyContent="center"
            alignItems={md ? "center" : "start"}
            sx={{ maxWidth: "450px", height: "100%" }}>
            <SectionHeader variant="h5">Remote supervised self-paced training</SectionHeader>
            <SectionSubHeader>
              Choose a start date and register on this page to secure your spot. To prepare for the Bootcamp, get the
              pre-course materials. If you have no prior experience with JavaScript, HTML, or CSS, we estimate it will
              take you 20-30 hours
            </SectionSubHeader>
            <PrimaryButton variant="contained" color="primary">
              Learn More
            </PrimaryButton>
          </Stack>
        </Grid>
        <Grid item md={5}>
          <CustomImage src="/howToStart.png" alt="How To Start Image" />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-around" gap={2} columns={14}>
        {cardData.map((item) => {
          return (
            <Grid item key={item.id} lg={3} md={5} sm={6} xs={14}>
              <CustomCard>
                <CustomCardContent>
                  <item.icon />
                  <SectionHeader sx={{ fontSize: "18px", my: 2, textAlign: "center" }}>{item.title}</SectionHeader>
                  <SectionSubHeader sx={{ fontSize: "14px" }}>{item.content}</SectionSubHeader>
                </CustomCardContent>
              </CustomCard>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HowToStart;
