import {
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import learning from "../../../../public/images/learning.png";
import Image from "next/image";
import {
  BranchedTitle,
  CardButton,
  SummaryContainer,
  TextWrapper,
} from "../../../shared/StyledComponents";
import Underline from "../../../../images/svg/Underline";
import { useRouter } from "next/router";
import CourseCard from "../../../shared/CourseCard";

export default function LearningSummary({Header, BranchedHeader, SubHeader, Description}) {
  const router = useRouter();
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
          <Typography variant="h3">
              {Header}
            <BranchedTitle> {BranchedHeader} </BranchedTitle>
          </Typography>
          <Typography style={{ marginTop: "5px" }} variant="h3" mb={1}>
            {SubHeader}
          </Typography>
          <Underline />

          <Typography
            variant="h6"
            sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
          >
             {Description}
          </Typography>
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