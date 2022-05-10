import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CourseInfoCard from "./CourseInfoCard";
import CourseInfoCardImg from "./CourseInfoCardImg";
import { SecondaryButton } from "./StyledComponents";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import EventSeatSharpIcon from "@mui/icons-material/EventSeatSharp";

const CourseSection = ({
  title,
  courseSummary,
  enrollmentLink,
  color,
  courseImage,
  price,
  duration,
  availableSeats,
}) => {
  return (
    <Grid
      container
      sx={{
        alignItems: { xs: "center", md: "start" },
        textAlign: { xs: "center", md: "start" },
      }}
      flexDirection={color === "primary" ? "row-reverse" : "row"}
      justifyContent="space-between"
      mt={{ sm: 10, xs: 2 }}
      spacing={1}
      wrap="wrap"
    >
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          height: "100%",
          alignItems: "start",
          justifyContent: "start",
          display: "flex",
        }}
      >
        <Stack direction="column" spacing={3}>
          <Typography variant="h4"> {title} </Typography>
          <Typography variant="body1" sx={{ color: "secondary.contrastText" }}>
            {courseSummary}
          </Typography>
          <SecondaryButton
            variant="contained"
            color={color}
            sx={{
              width: { md: "40%", xs: "60%" },
              alignSelf: { xs: "center", md: "start" },
            }}
          >
            Enroll Now
          </SecondaryButton>
        </Stack>
      </Grid>
      <Grid
        item
        md={5}
        sm={10}
        xs={12}
        sx={{
          mb: 5,
          width: "100%",
          maxWidth: "500px",
          display: "grid",
          height: "100%",
          gridTemplateColumns:
            "minmax(40%, 200px) minmax(20%, 100px) minmax(40%, 200px)",
          gridTemplateRows:
            "minmax(45%, 80px) minmax(5%, 20px) minmax(45%, 80px)",
          justifyItems: { xs: "center", sm: "end" },
          alignContent: "center",
          marginBottom: { xs: "80px" },
        }}
      >
        <CourseInfoCardImg
          src={courseImage}
          alt="cover"
          sx={{
            position: "relative",
            zIndex: 1,
            gridColumn: "1 / 3",
            gridRow: "1 / 4",
            width: { sm: 300, xs: 200 },
          }}
        />
        <CourseInfoCard
          price={price}
          duration={duration}
          SeatsNumber={availableSeats}
          icon={
            <AccessTimeFilledIcon
              style={{ fontSize: "20px", marginTop: "4px" }}
            />
          }
          icon2={
            <EventSeatSharpIcon
              style={{ fontSize: "20px", marginTop: "4px" }}
            />
          }
          cardColor={color === "primary" ? "rgb(255, 169, 80)" : "#6364D9"}
          sx={{
            position: "relative",
            zIndex: 2,
            gridColumn: "2 / 4",
            gridRow: "2 / 4",
            width: { sm: 300, xs: 200 },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CourseSection;
