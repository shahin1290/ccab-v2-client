import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import learning from "../../../public/images/learning.png";
import { SummaryContainer } from "../../shared/CustomComponents2";
import Underline from "../../../images/svg/Underline";
import CourseCard from "../../shared/CourseCard";

export default function Courses() {
  return (
    <SummaryContainer>
      <Container maxWidth="xl">
        <Stack
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          mt={5}
          gap={1}
        >
          <Typography variant="h3">Similar Courses</Typography>
          <Underline />
        </Stack>
        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{
            textAlign: "-webkit-center",
            marginTop: "20px",
            flexWrap: "nowrap",
            overflowY: "hidden",
          }}
        >
          <Grid item xs={4}>
            <CourseCard
              image={learning}
              link="/home/course-details"
              title="Javascript Full Stack Web and Mobile Development"
              description="We will start from the ground up by learning how to implement modern
              web pages with HTML and CSS."
            />
          </Grid>
          <Grid item xs={4}>
            <CourseCard
              image={learning}
              link="/home/course-details"
              title="Javascript Full Stack Web and Mobile Development"
              description="We will start from the ground up by learning how to implement modern
              web pages with HTML and CSS."
            />
          </Grid>
          <Grid item xs={4}>
            <CourseCard
              image={learning}
              link="/home/course-details"
              title="Javascript Full Stack Web and Mobile Development"
              description="We will start from the ground up by learning how to implement modern
              web pages with HTML and CSS."
            />
          </Grid>
        </Grid>
      </Container>
    </SummaryContainer>
  );
}
