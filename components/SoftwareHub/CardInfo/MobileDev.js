import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroSVG from '../../../images/svg/HeroSVG'
import { InfoContainer, InfoLeftSide, InfoRightSide } from '../../shared/CustomComponents2'

export default function MobileDev() {
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
              Mobile App
            </Typography>
            <Typography variant="h1" color="#fff" mb={3}>
              Development
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", lineHeight: 1.5 }}
            >
              Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and IOS.
              The software can be preinstalled on the device.
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
