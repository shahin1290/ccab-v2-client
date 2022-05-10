import { useTheme } from "@emotion/react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Underline from "../../../../../images/svg/Underline";
import CourseSection from "../../../../shared/CourseSection";

export default function About({ CoursesData }) {
  const theme = useTheme();
  return (
    <Box bgcolor="#ffffff" py={{ xs: 2, sm: 10 }} sx={{ marginTop: "20px" }}>
      <Container maxWidth="xl">
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" paddingBottom="12px">
            About the Courses
          </Typography>
          <Underline />
        </Stack>
        {CoursesData.map((item, index) => {
          return (
            <CourseSection
              key={item.id}
              title={item.title}
              courseSummary={item.courseSummary}
              courseImage={item.courseImage}
              color={index % 2 !== 0 ? "primary" : "secondary"}
              price={item.price}
              duration={item.duration}
              availableSeats={item.availableSeats}
            />
          );
        })}
      </Container>
    </Box>
  );
}
