import { useTheme } from "@emotion/react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Underline from "../../../images/svg/Underline";
import { SecondaryButton } from "../../shared/CustomComponents";
import cover from '../../../public/images/review-img.jpg'
import CustomCourseCard from "../../shared/CustomCourseCard";
import CustomCourseImgCard from '../../shared/CustomCourseImgCard'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventSeatSharpIcon from '@mui/icons-material/EventSeatSharp';

const data = [
    {
        id:1,
        color:'primary',
        wrap:'wrap', 
        flexDirection:'row',
        cardColor:'#6364D9'
    },
    {
        id:2,
        color:'secondary',
        wrap:'wrap',
        flexDirection:'row-reverse',
        cardColor:'rgb(255, 169, 80)'
    },
    {
        id:3,
        color:'primary',
        wrap:'wrap',
        flexDirection:'row',
        cardColor:'#6364D9'
    },
]

export default function About() {
    const theme = useTheme();
  return (
    <Box bgcolor="#ffffff" py={{ xs: 2, sm: 10 }} sx={{marginTop:'20px'}}>
      <Container maxWidth="xl">
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" paddingBottom="12px">About the Course</Typography>
          <Underline />
        </Stack>
        {data.map(({id, color, wrap, flexDirection, cardColor}) =>(
        <Grid
          key={id}
          container
          sx={{alignItems:{xs:'center', md:'start'}, textAlign:{xs:'center', md:'start'}}}
          flexDirection={flexDirection}
          justifyContent="space-between"
          mt={{ sm: 10, xs: 2 }}
          spacing={1}
          wrap={wrap}
        >
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              height: "100%",
              alignItems: "start",
              justifyContent: "start",
              display: "flex",
            }}
          >
            <Stack direction="column" spacing={3}>
                <Typography variant="h4">Course Name</Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "secondary.contrastText" }}
                  >
                      In this course, we will learn the basic tools that every web page coder needs to know we will start from the ground up by learning how to implement modern web pages with HTML and CSS.
                      We will then advance to learning how to code our pages such that its components rearrange and resize themselves automatically based on the size of the users screen.
                      You will be able to code up a web page that will be just as useful on a mobile phone as on a desktop computer.
                      No  pinch and zoom required. Last ut certainly not least, we will get a thorough introduction to the most ubiquitous, popular, and incredibly powerful language of the web: Javascript.
                      Using Javascript, you will be able to build a fully functional web application that utilizesAjax to expose server-side functionality and data to the end user. We will also develop mobile applications using React-Native.
                  </Typography>
                  <SecondaryButton variant="contained" color={color} sx={{width: { md: "40%", xs: "60%" }, alignSelf:{xs:'center', md:'start'}}}>
                    Enroll Now
                  </SecondaryButton>
            </Stack>
          </Grid>
          <Grid
            item
            md={5}
            sm={10}
            xs={12}
            sx={{
              mb: 5,
              width: "100%",
              maxWidth: "500px",
              display: "grid",
              height: "100%",
              gridTemplateColumns:
                "minmax(40%, 200px) minmax(20%, 100px) minmax(40%, 200px)",
              gridTemplateRows:
                "minmax(45%, 80px) minmax(5%, 20px) minmax(45%, 80px)",
              justifyItems: { xs: "center", sm: "end" },
              alignContent: "center",
              marginBottom:{xs:'80px'}
            }}
          >
            <CustomCourseImgCard
                src={cover}
                alt="cover"
              sx={{
                position: "relative",
                zIndex: 1,
                gridColumn: "1 / 3",
                gridRow: "1 / 4",
                width: { sm: 300, xs: 200 },
              }}
            />
            <CustomCourseCard
              price=" 384 $"
              duration="30 Weeks"
              SeatsNumber="9 Seats available"
              icon={<AccessTimeFilledIcon style={{fontSize:'20px', marginTop:'4px'}} />}
              icon2={<EventSeatSharpIcon style={{fontSize:'20px', marginTop:'4px'}}/>}
              cardColor={cardColor}
              sx={{
                position: "relative",
                zIndex: 2,
                gridColumn: "2 / 4",
                gridRow: "2 / 4",
                width: { sm: 300, xs: 200 },
              }}
            />
          </Grid>
          </Grid>
          ))}
       </Container>
    </Box>
  )
}
