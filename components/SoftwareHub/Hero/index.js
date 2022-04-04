import { Container, Grid, Typography } from '@mui/material'
import { HeroHubContainer,  HubLeftSide, HubRightSide} from '../../shared/CustomComponents2'
import { useTheme } from "@emotion/react";
import HeroSVG from "../../../images/svg/HeroSVG";

export default function Hero() {
    const theme = useTheme();
  return (
    <HeroHubContainer>
        <Container maxWidth="xl">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="space-between"
        >
          <HubLeftSide item xs={12} md={6}>
            <Typography variant="h2" color="secondary.contrastText" mb={1}>
              Applications
            </Typography>
            <Typography variant="h2" color="primary" mb={3}>
              to drive your business
            </Typography>
          </HubLeftSide>
          <HubRightSide item xs={12} md={6}>
            <HeroSVG />
          </HubRightSide>
        </Grid>
      </Container>
    </HeroHubContainer>
  )
}