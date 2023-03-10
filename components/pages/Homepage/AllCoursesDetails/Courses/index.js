import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { SummaryContainer } from "../../../../shared/StyledComponents";
import Underline from "../../../../../images/svg/Underline";
import CourseCard from "../../../../shared/CourseCard";

export default function Courses({ Courses }) {
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
          {Courses.map((item) => {
            return (
              <Grid item xs={4} key={item.id}>
                <CourseCard
                  coverImage={item.coverImage}
                  slug={item.slug}
                  title={item.title}
                  description={item.description}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </SummaryContainer>
  );
}
