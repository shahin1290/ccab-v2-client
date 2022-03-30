import { Grid } from '@mui/material'
import React from 'react'
import CurriculumSVGDesktop from "../../../images/svg/CurriculumImageDesktop";
import CurriculumImageMobile from "../../../images/svg/CurriculumImageMobile";
import { 
    Description, 
    DesktopContent, 
    Line1, 
    Line2, 
    LineHolder, 
    MobileContent, 
    SectionContainer, 
    TextWrapper, 
    Title } from '../../../theme/Componentstyling';

export default function ComprehensiveCurriculum() {
  return (
    <SectionContainer>
        <TextWrapper>
            <Title>
                Comprehensive Curriculum
            </Title>
            <LineHolder>
                <Line1></Line1>
                <Line2></Line2>
            </LineHolder>
            <Description>
            Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.
            </Description>
        </TextWrapper>
        <Grid style={{ paddingBottom:"50px", paddingTop:"30px"}} >
            <DesktopContent display={{ xs: 'none', md: 'block' }}>
                <CurriculumSVGDesktop />
            </DesktopContent>
            <MobileContent display={{ xs: 'block', md: 'none' }}>
                <CurriculumImageMobile />
            </MobileContent>
        </Grid>
    </SectionContainer>
  )
}
