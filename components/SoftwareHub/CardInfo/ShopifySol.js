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

export default function ShopifySol() {
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
              Shopify
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
                Mobile Development Services
            </Typography>
            <Underline />
             <Typography
                variant="body2"
                sx={{ color: "secondary.contrastText", padding: "2rem" }}
              >
              Shopify ecommerce solution comes with a monthly fee, but comes with peace of mind knowing your customers are shopping in a safe and secure space. If you want to manage inventory for your online and physical store presence, Shopify’s ecommerce solution can be further configured with a point of sale system to manage both inventories seamlessly.
             </Typography>
             <Typography
              variant="body2"
              sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
            >
              If you want to maintain an online store presence, and also operate a blog or other basic pages to promote your business, the Shopify ecommerce solution is set-up to handle that too!
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
