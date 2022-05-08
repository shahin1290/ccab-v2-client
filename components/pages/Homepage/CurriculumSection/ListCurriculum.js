import { Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import CurriculumCard from "../../../shared/CurrriculumCard";

const cardColors = [
  "#007793",
  "#00A9B9",
  "#10BE81",
  "#FFB90B",
  "#8375FB",
  "#FF8D2A",
  "#F14258",
  "#F2669C",
  "#9769B6",
  "#F20000",
];

const ListCurriculum = ({ data }) => {
  const theme = useTheme();
  return (
    <Container maxWidth="lg">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: theme.palette.primary.background,
          width: "100%",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.palette.primary.background,
          }}
        >
          {data.map((item, index) => {
            return (
              <Grid
                key={index}
                item
                md={5}
                xs={12}
                sx={{ display: "grid", placeItems: "center", px: 10 }}
              >
                <CurriculumCard
                  number={(index + 1).toString().padStart(2, "0")}
                  text={item}
                  fill={
                    index + 1 / cardColors.length > 1
                      ? cardColors[index % cardColors.length]
                      : cardColors[index]
                  }
                  order={index + 1}
                />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
};

export default ListCurriculum;
