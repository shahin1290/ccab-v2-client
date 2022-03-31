import { Grid, Typography } from '@mui/material'
import React from 'react'
import CurriculumSVGDesktop from "../../../images/svg/CurriculumImageDesktop";
import CurriculumImageMobile from "../../../images/svg/CurriculumImageMobile";
import {  
    DesktopContent, 
    MobileContent, 
    SectionContainer, 
    TextWrapper,  
} from '../../shared/CustomComponent2';
import Underline from "../../../images/svg/Underline";

export default function ComprehensiveCurriculum() {
  return (
    <SectionContainer>
        <TextWrapper>
            <Typography variant="h3">
                Comprehensive Curriculum
            </Typography>
            <Underline />
            <Typography variant="subtitle2" sx={{ color: "secondary.contrastText", padding:'0.8rem' }}>
            Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.
            </Typography>
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
