import { Container, Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import HeroBanner from "../../../public/svgImages/HeroImages/SoftwareHubHero.svg";

export default function Banner() {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.background} pt={{ lg: 8, xs: 2 }}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={8} md={6}>
          <Image
            priority
            src={HeroBanner}
            layout="responsive"
            alt="Software Hub Hero"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
