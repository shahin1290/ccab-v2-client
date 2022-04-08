import { Grid, Typography } from "@mui/material";
import {
  HeroHubContainer,
  HubLeftSide,
  HubRightSide,
} from "../../shared/CustomComponents2";
import Image from "next/image";

export default function Hero() {
  return (
    <HeroHubContainer>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-between"
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
            color="secondary.contrastText"
            mb={1}
            textAlign={{ xs: "center", md: "start" }}
          >
            Applications
          </Typography>
          <Typography
            variant="h2"
            color="primary"
            mb={3}
            textAlign={{ xs: "center", md: "start" }}
          >
            to drive your business
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
            src="/svgImages/HeroImages/SoftwareHubHero.svg"
            layout="fill"
            alt="Software Hub Hero"
          />
        </HubRightSide>
      </Grid>
    </HeroHubContainer>
  );
}
