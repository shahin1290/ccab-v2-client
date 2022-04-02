import { Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  HeroContainer,
  LeftSide,
  RightSide,
} from "../../shared/customComponents/CustomComponent2";
import HeroSVG from "../../../images/svg/HeroSVG";

export default function Hero() {
  const theme = useTheme();
  return (
    <HeroContainer maxWidth="xl">
      <Container maxWidth="xl">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="space-between"
        >
          <LeftSide item xs={12} md={5}>
            <Typography variant="h2" color="secondary.contrastText" mb={1}>
              Learn to code,
            </Typography>
            <Typography variant="h1" color="primary" mb={3}>
              With a New Digital Life
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "secondary.contrastText", lineHeight: 1.5 }}
            >
              Start your new Work with our weekly remotely Tech programs in
              full-stack developer and build web and mobile apps powered by
              JavaScript Start your new Work with our weekly remotely
            </Typography>
          </LeftSide>
          <RightSide item xs={12} md={5}>
            <HeroSVG />
          </RightSide>
        </Grid>
      </Container>
    </HeroContainer>
  );
}
