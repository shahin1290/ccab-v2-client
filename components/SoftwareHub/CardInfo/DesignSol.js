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
   {
    id:4,
    title:'Test 4',
    content: 'content 4',
    price:'400',
   },
]

export default function DesignSol() {
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
    <DetailsContainer style={{background:'#fff'}}>
            <TextWrapper>
             <Typography variant="h3">
             Design Solutions
            </Typography>
            <Underline />
             <Typography
                variant="body2"
                sx={{ color: "secondary.contrastText", padding: "2rem" }}
              >
               Design Service is a process where designers create sustainable solutions and optimal experiences for both customers in unique contexts and any service providers involved. Designers break services into sections and adapt fine-tuned solutions to suit all users’ needs in context—based on actors, location and other factors.
             </Typography>
             <Typography
              variant="body2"
              sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
            >
              In service design, you work within a broad scope including user experience (UX) design and customer experience (CX) design. To design for everyone concerned.
            </Typography>
            </TextWrapper>
            <Grid
            container
            spacing={{ xs: 4, md: 3 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
            style={{  
              textAlign:"-webkit-center",
              marginTop:'20px',
          }}
            >
              {fakeData.map(({id, title, content, price}) => (
              <Grid item xs={3} key={id}>
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
