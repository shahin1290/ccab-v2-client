import {
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    Typography,
  } from "@mui/material";
  import React from "react";
  import learning from "../../../public/images/learning.png";
  import Image from "next/image";
  import {
    BranchedTitle,
    CardButton,
    SummaryContainer,
    TextWrapper,
  } from "../../shared/CustomComponents2";
  import Underline from "../../../images/svg/Underline";
  import { useRouter } from "next/router";


export default function Courses() {
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
            Similar Courses
          </Typography>
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
            <Card
              sx={{ maxWidth: 400 }}
              style={{
                background: "#F7F8FB",
                borderRadius: "20px",
                display: "block",
                boxShadow: "none",
              }}
            >
              <Image
                priority
                src={learning}
                alt="learning"
                layout="responsive"
              />
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
                <CardButton
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/course-details")}
                >
                  Learn More
                </CardButton>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{ maxWidth: 400 }}
              style={{
                background: "#F7F8FB",
                borderRadius: "20px",
                display: "block",
                boxShadow: "none",
              }}
            >
              <Image
                priority
                src={learning}
                alt="learning"
                layout="responsive"
              />
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
                <CardButton
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/course-details")}
                >
                  Learn More
                </CardButton>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{ maxWidth: 400 }}
              style={{
                background: "#F7F8FB",
                borderRadius: "20px",
                boxShadow: "none",
              }}
            >
              <Image
                priority
                src={learning}
                alt="learning"
                layout="responsive"
              />
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
                <CardButton
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/course-details")}
                >
                  Learn More
                </CardButton>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </SummaryContainer>
  )
}
