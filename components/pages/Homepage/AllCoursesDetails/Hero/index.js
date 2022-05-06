import { Grid, Typography } from "@mui/material";
import React from "react";
import {
  HeroHubContainer,
  HubLeftSide,
  HubRightSide,
} from "../../../../shared/StyledComponents";
import Image from "next/image";

export default function index() {
  return (
    <HeroHubContainer>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
        sx={{ pt: { md: 10, xs: 0 } }}
      >
        <HubLeftSide
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            minHeight: { xs: "50vw", sm: "30vw", lg: "25vw" },
            maxHeight: "400px",
          }}
        >
          <Typography
            variant="h2"
            color="primary"
            mb={1}
            textAlign={{ xs: "center", md: "start" }}
            whiteSpace={{ xs: "break-spaces" }}
          >
            JavaScript Full Stack Web and Mobile Development
          </Typography>
        </HubLeftSide>
        <HubRightSide
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            minHeight: { xs: "50vw", sm: "40vw", lg: "40vw", xl: "35vw" },
            maxHeight: "400px",
          }}
        >
          <Image
            priority
            src="/svgImages/HeroImages/CourseHeroImage.svg"
            layout="fill"
            alt="Software Hub Hero"
          />
        </HubRightSide>
      </Grid>
    </HeroHubContainer>
  );
}
