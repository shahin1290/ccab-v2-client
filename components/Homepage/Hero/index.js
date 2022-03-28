import { Container, Grid } from "@mui/material";
import hero from "../../../images/Hero_Section_SVG.svg";
import { Description, HeadLine, HeroContainer, LeftSide, Media, RightSide, Title } from './styles'


export default function Hero() {

  return (
    <HeroContainer md={6}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <LeftSide item xs={12} md={6} >
          <HeadLine >Learn to code,</HeadLine>
          <Title >With a New Digital Life</Title>
          <Description>
            Start your new Work with our weekly remotely Tech programs in full-stack developer and build web and mobile
            apps powered by JavaScript Start your new Work with our weekly remotely
          </Description>
        </LeftSide>
        <RightSide item xs={12} md={6} >
          <Media src={hero} alt="learn coding" layout='responsive' />
        </RightSide>
      </Grid>
    </HeroContainer>
  );
}
