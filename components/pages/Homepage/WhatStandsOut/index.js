import {
  Container,
  Stack,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import {
  CalenderIcon,
  HelpIcon,
  HouseIcon,
  TeacherIcon,
} from "../../../../images/svg/cardIcons";
import Underline from "../../../../images/svg/Underline";

import {
  PrimaryButton,
  CustomImage,
  InfoCard,
  SecondaryButton,
  BannerImage,
} from "../../../shared/StyledComponents";

const cardData = [
  {
    id: 1,
    icon: HouseIcon,
    title: "Build skills for a new career",
    content:
      "We start with the languages that you'll need most to work : JavaScript, Express JS and more...",
  },
  {
    id: 2,
    icon: TeacherIcon,
    title: "Match-up with an employer",
    content:
      "Our students' skills are in demand so we have employment partners over the globe. We work hard to find a place that suits you.",
  },
  {
    id: 3,
    icon: HelpIcon,
    title: "We’re here to support you",
    content:
      "We offer 24-hour weekday support plus help throughout the weekend, a student care package, individual career support, mentoring and more…",
  },
  {
    id: 4,
    icon: CalenderIcon,
    title: "We know your strengths",
    content:
      "We monitor your progress with our custom software so we can support you exactly where you need it.",
  },
];
const WhatStandsOut = () => {
  return (
    <Box bgcolor="primary.main">
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
          <Typography variant="h3" sx={{ color: "primary.contrastText" }}>
            What Stands Us Out
          </Typography>
          <Underline fill="#fff" />
          <Typography
            variant="h6"
            sx={{ color: "primary.contrastText", fontWeight: "normal" }}
            pt={1}
          >
            Register yourself now and get real employable skills that top
            companies want
          </Typography>
        </Stack>

        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
          gap={2}
        >
          {cardData.map((item) => {
            return (
              <Grid item key={item.id} sx={{ width: 290 }}>
                <InfoCard>
                  <CardMedia component={item.icon} height="180px" size={1} />
                  <CardContent>
                    <Typography variant="h6" align="center" mb={2}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "secondary.contrastText" }}
                      align="center"
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatStandsOut;
