import React, { useState } from "react";
import { Container, Grid, Typography, Stack } from "@mui/material";
import {
  SectionContainer,
  TextWrapper,
} from "../../../shared/StyledComponents";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderButton } from "../../../shared/StyledComponents";
import { useTheme } from "@mui/material/styles";
import Underline from "../../../../images/svg/Underline";
import Slider from "react-slick";
import CourseCurriculum from "../../../course-curriculum";
import ComprehensiveCurriculum from "../ComprehensiveCurriculum";


const slides = [
  {id:1,
   title: 'Comprehensive Curriculum',
   component: <ComprehensiveCurriculum /> ,
   Height:"1000px",
   xsMaxHeight:'1300px',
   Bio:"Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.", 
  },
  {id:2, 
   title: 'NFT Curriculum',
   component: <CourseCurriculum />,
   Height:"1000px",
   xsMaxHeight:'1300px', 
   Bio:"Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.", 
  }
 ];

 export default function Curriculum() {
  const theme = useTheme();
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const [slider, setSlider] = useState(null);
  return (
    <SectionContainer>
      <Slider
          {...settings}
          style={{ width: "100%" }}
          ref={(slider) => setSlider(slider)}
        >
        {slides.map((item,Height, xsMaxHeight)=> {
        return(
      <Grid key={item.id}
        >
      <Container maxWidth="lg" sx={{maxHeight:item.Height}}>
      <TextWrapper >
        <Stack direction="row" spacing={3} alignItems="center" justifyContent="center"  mb={{ xs: 3 }}>
          <SliderButton onClick={() => slider.slickPrev()}>
            <ArrowBackIosNewIcon color="white" />
          </SliderButton>
          <Typography variant="h3" mb={1} >
            {item.title}
          </Typography>   
          <SliderButton onClick={() => slider.slickNext()}>
            <ArrowForwardIosIcon />
          </SliderButton>
        </Stack>
         <Underline />
         <Typography
             variant="h6"
             sx={{ color: "secondary.contrastText", padding: "0.8rem", mb: 3 }}
           >
             {item.Bio}
           </Typography>
           </TextWrapper>
           
      </Container>
      {item.component}
      </Grid>
      )
    })}
      
      </Slider>

    </SectionContainer>
  );
}
