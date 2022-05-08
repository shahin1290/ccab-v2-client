import { Container, Grid, Typography } from "@mui/material";
import {
  HeroContainer,
  LeftSide,
  RightSide,
} from "../../../shared/StyledComponents";
import HeroSVG from "../../../../images/svg/HeroSVG";


export default function Hero({Header, SubHeader, Description, Media}) {
  return (
    <HeroContainer maxWidth="xl">
      <Container maxWidth="xl">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="space-between"
        >
          <LeftSide item xs={6} md={6}>
            <Typography variant="h2" color="secondary.contrastText" mb={1}>
              {Header}
            </Typography>
            <Typography variant="h1" color="primary" mb={3}>
               {SubHeader}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "secondary.contrastText", lineHeight: 1.5 }}
            >
              
              {Description}
            </Typography>
          </LeftSide>
          <RightSide item xs={6} md={6}>
             {Media}
          </RightSide>
        </Grid>
      </Container>
    </HeroContainer>
  );
}
