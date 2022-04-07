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
export default function WordpressSol() {
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
              Wordpress
            </Typography>
            <Typography variant="h1" color="#fff" mb={3}>
              Solutions
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#fff", lineHeight: 1.5 }}
            >
                Cloud hosting makes applications and websites accessible using cloud resources. Unlike traditional hosting, solutions are not deployed on a single server. Instead, a network of connected virtual and physical cloud servers hosts the application or website, ensuring greater flexibility and scalability.
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
             Wordpress Solutions
            </Typography>
            <Underline />
             <Typography
                variant="body2"
                sx={{ color: "secondary.contrastText", padding: "2rem" }}
              >
              WordPress is the simplest, most popular way to create your own website or blog. In fact, WordPress powers over 43.3% of all the websites on the Internet. Yes – more than one in four websites that you visit are likely powered by WordPress.
             </Typography>
             <Typography
              variant="body2"
              sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
            >
              On a slightly more technical level, WordPress is an open-source content management system licensed under GPLv2, which means that anyone can use or modify the WordPress software for free. A content management system is basically a tool that makes it easy to manage important aspects of your website – like content – without needing to know anything about programming.
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
