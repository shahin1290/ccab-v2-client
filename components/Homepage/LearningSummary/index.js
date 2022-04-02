import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import learning from "../../../images/learning.png";
import Image from "next/image";
import {
  BranchedTitle,
  CardButton,
  SummaryContainer,
  TextWrapper,
} from "../../shared/customComponents/CustomComponent2";
import Underline from "../../../images/svg/Underline";

export default function LearningSummary() {
  return (
    <SummaryContainer>
      <TextWrapper>
        <Typography variant="h3">
          Learn how to become a
          <BranchedTitle>Full-stack Developer</BranchedTitle>
        </Typography>
        <Typography style={{ marginTop: "5px" }} variant="h3">
          and build Web and Mobile Apps using JavaScript
        </Typography>
        <Underline />

        <Typography
          variant="subtitle2"
          sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
        >
          As a graduate, you’ll leave with a solid base of fundamental
          programming and computer science knowledge, as well as experience with
          languages, frameworks, and libraries that employers demand.
        </Typography>
      </TextWrapper>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{ textAlign: "-webkit-center", marginTop: "20px" }}
      >
        <Grid item xs={4}>
          <Card
            sx={{ maxWidth: 385 }}
            style={{ background: "#F7F8FB", borderRadius: "20px" }}
          >
            <Image src={learning} alt="learning" layout="responsive" />
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h6" align="center" mb={2}>
                Javascript Full Stack Web and Mobile Development
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
              >
                We will start from the ground up by learning how to implement
                modern web pages with HTML and CSS.
              </Typography>
              <CardButton>Learn More</CardButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{ maxWidth: 385 }}
            style={{ background: "#F7F8FB", borderRadius: "20px" }}
          >
            <Image src={learning} alt="learning" layout="responsive" />
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h6" align="center" mb={2}>
                Javascript Full Stack Web and Mobile Development
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
              >
                We will start from the ground up by learning how to implement
                modern web pages with HTML and CSS.
              </Typography>
              <CardButton>Learn More</CardButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{ maxWidth: 385 }}
            style={{ background: "#F7F8FB", borderRadius: "20px" }}
          >
            <Image src={learning} alt="learning" layout="responsive" />
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h6" align="center" mb={2}>
                Javascript Full Stack Web and Mobile Development
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
              >
                We will start from the ground up by learning how to implement
                modern web pages with HTML and CSS.
              </Typography>
              <CardButton>Learn More</CardButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </SummaryContainer>
  );
}
