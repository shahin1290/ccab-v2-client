import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroSVG from '../../../images/svg/HeroSVG'
import { InfoContainer, InfoLeftSide, InfoRightSide } from '../../shared/CustomComponents2'

export default function DesignSol() {
  return (
    <InfoContainer >
        <Container maxWidth="xl">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="space-between"
        >
          <InfoLeftSide item xs={12} md={6}>
            <Typography variant="h2" color="#fff" mb={1}>
              Design
            </Typography>
            <Typography variant="h1" color="#fff" mb={3}>
              Solutions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", lineHeight: 1.5 }}
            >
              Design service is a process where designers create sustainable solutions and optimal experiences for both customers in unique contexts and any service providers involved. Designers break services into sections and adapt fine-tuned solutions to suit all users needs in context--based on actors, location, and other factors.
            </Typography>
          </InfoLeftSide>
          <InfoRightSide item xs={12} md={6}>
            <HeroSVG />
          </InfoRightSide>
        </Grid>
      </Container>
    </InfoContainer>
  )
}
