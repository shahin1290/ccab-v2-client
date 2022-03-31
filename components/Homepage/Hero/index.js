import {  Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import hero from "../../../images/Hero_Section_SVG.svg";
import Image from 'next/image';
import { 
  HeroContainer, 
  LeftSide, 
  RightSide,} from "../../shared/CustomComponent2";


export default function Hero() {
  const theme = useTheme();
  return (
    <HeroContainer md={6}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <LeftSide item xs={12} md={6} >
          <Typography variant='h2' style={{color: '#707070', padding:'0.8rem'}} >Learn to code,</Typography>
          <Typography variant='h1' style={{color: '#6364D9', padding:'0.8rem'}} >With a New Digital Life</Typography>
          <Typography variant='body1' sx={{ color: "secondary.contrastText", padding:'0.8rem' }} >
            Start your new Work with our weekly remotely Tech programs in full-stack developer and build web and mobile
            apps powered by JavaScript Start your new Work with our weekly remotely
          </Typography>
        </LeftSide>
        <RightSide item xs={12} md={6} >
          <Image src={hero} alt="learn coding" layout='responsive' />
        </RightSide>
      </Grid>
    </HeroContainer>
  );
}
