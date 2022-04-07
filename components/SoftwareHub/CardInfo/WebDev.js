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

export default function WebDev() {
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
    <DetailsContainer style={{background:'#fff'}}>
    <TextWrapper>
     <Typography variant="h3">
     Web Development Services
    </Typography>
    <Underline />
     <Typography
        variant="body2"
        sx={{ color: "secondary.contrastText", padding: "2rem" }}
      >
        Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.     </Typography>
     <Typography
      variant="body2"
      sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
    >
        In a broader sense, web development encompasses all the actions, updates, and operations required to build, maintain and manage a website to ensure its performance, user experience, and speed are optimal.    </Typography>
        <Typography
      variant="body2"
      sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
    >
        It might also, but not necessarily, include all those strategic actions needed to ensure its proper ranking on search engine results. Usually, those tasks pertain to a different specialization, namely search engine optimization (SEO)
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
