import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroSVG from '../../../images/svg/HeroSVG'
import { InfoContainer, InfoLeftSide, InfoRightSide } from '../../shared/CustomComponents2'

export default function WebDev() {
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
              Web
            </Typography>
            <Typography variant="h1" color="#fff" mb={3}>
              Development
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", lineHeight: 1.5 }}
            >
              Web development refers in general to the tasks associated with developing websites for hosting via internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.
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
