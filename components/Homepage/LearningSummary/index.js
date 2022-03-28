import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import {
  BranchedTitle,
  CardButton,
  CardDescription,
  CardTitle,
  Cover,
  Description,
  Line1,
  Line2,
  LineHolder,
  SummaryContainer,
  TextWrapper,
  Title,
} from "./styles";
import learning from "../../../images/learning.png";
import Image from "next/image";
import CurriculumSVGDesktop from "../../../images/svg/CurriculumImageDesktop";
import CurriculumImageMobile from "../../../images/svg/CurriculumImageMobile";

export default function LearningSummary() {
  return (
    <SummaryContainer>
      <TextWrapper>
        <Title>
          Learn how to become a<BranchedTitle>Full-stack Developer</BranchedTitle>
        </Title>
        <Title style={{ marginTop: "-5px" }}>and build Web and Mobile Apps using JavaScript</Title>
        <LineHolder>
          <Line1></Line1>
          <Line2></Line2>
        </LineHolder>
        <Description>
          As a graduate, you’ll leave with a solid base of fundamental programming and computer science knowledge, as
          well as experience with languages, frameworks, and libraries that employers demand.
        </Description>
      </TextWrapper>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ textAlign: "-webkit-center", marginTop: "20px" }}>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 385 }} style={{ background: "#F7F8FB", borderRadius: "20px" }}>
            <Image src={learning} alt="learning" layout="responsive" />
            <CardContent style={{ textAlign: "center" }}>
              <CardTitle>Javascript Full Stack Web and Mobile Development</CardTitle>
              <CardDescription>
                We will start from the ground up by learning how to implement modern web pages with HTML and CSS.
              </CardDescription>
              <CardButton>Learn More</CardButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 385 }} style={{ background: "#F7F8FB", borderRadius: "20px" }}>
            <Image src={learning} alt="learning" layout="responsive" />
            <CardContent style={{ textAlign: "center" }}>
              <CardTitle>Javascript Full Stack Web and Mobile Development</CardTitle>
              <CardDescription>
                We will start from the ground up by learning how to implement modern web pages with HTML and CSS.
              </CardDescription>
              <CardButton>Learn More</CardButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 385 }} style={{ background: "#F7F8FB", borderRadius: "20px" }}>
            <Image src={learning} alt="learning" layout="responsive" />
            <CardContent style={{ textAlign: "center" }}>
              <CardTitle>Javascript Full Stack Web and Mobile Development</CardTitle>
              <CardDescription>
                We will start from the ground up by learning how to implement modern web pages with HTML and CSS.
              </CardDescription>
              <CardButton>Learn More</CardButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* <CurriculumSVGDesktop />
      <CurriculumImageMobile /> */}
    </SummaryContainer>
  );
}
