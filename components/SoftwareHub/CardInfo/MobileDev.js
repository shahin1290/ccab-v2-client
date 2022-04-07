import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HeroSVG from '../../../images/svg/HeroSVG'
import Underline from '../../../images/svg/Underline'
import {ButtonWrap, CardDetailsButton, DetailsContainer, InfoContainer, InfoLeftSide, InfoRightSide, TextWrapper, Wrapper, } from '../../shared/CustomComponents2'
import ServiceCard, { ServiceCardBack, ServiceCardFront } from '../../shared/ServiceCard'

const fakeData = [
  {
   id:1,
   title:'Test 1',
   content: 'content 1',
   price:'100',
  },
  {
    id:2,
    title:'Test 2',
    content: 'content 2',
    price:'200',
   },
   {
    id:0,
    title:'Test 3',
    content: 'content 3',
    price:'300',
   },
]

export default function MobileDev() {
  return (
    <Wrapper>
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
        <DetailsContainer style={{background:'#fff'}}>
            <TextWrapper>
             <Typography variant="h3">
                Mobile Development Services
            </Typography>
            <Underline />
             <Typography
                variant="body2"
                sx={{ color: "secondary.contrastText", padding: "2rem" }}
              >
               Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS. The software can be preinstalled on the device.
             </Typography>
             <Typography
              variant="body2"
              sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
            >
              Mobile app development is rapidly growing. From retail, telecommunications and e-commerce to insurance, healthcare and government, organizations across industries must meet user expectations for real-time, convenient ways to conduct transactions and access information. Today, mobile devices—and the mobile applications that unlock their value—are the most popular way for people and businesses to connect to the internet. To stay relevant, responsive and successful, organizations need to develop the mobile applications that their customers, partners and employees demand.
            </Typography>
            </TextWrapper>
            <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{  
              textAlign:"-webkit-center",
              marginTop:'20px',
          }}
            >
              {fakeData.map(({id, title, content, price}) => (
              <Grid item xs={4} key={id}>
                <ServiceCard style={{maxWidth:'385px'}}>
                  <ServiceCardFront title={title} />
                  <ServiceCardBack title={title} content={content} price={price}/>
                </ServiceCard>
              </Grid>
              ))}
            </Grid>
            <ButtonWrap>
            <CardDetailsButton>
               Book Appointment with the Technical team
            </CardDetailsButton>
            </ButtonWrap>
      </DetailsContainer>
    </Wrapper>
  )
}
