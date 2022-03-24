import { Container, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
import useStyles from "./styles";
import hero from "../../../images/Hero_Section_SVG.svg";
import HeroSVG from "../../../images/svg/HeroSVG";

export default function Hero() {
  const classes = useStyles();

  return (
    <Container md={6}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6} className={classes.leftSide}>
          <h2 className={classes.headLine}>Learn to code,</h2>
          <h1 className={classes.title}>With a New Digital Life</h1>
          <p className={classes.description}>
            Start your new Work with our weekly remotely Tech programs in full-stack developer and build web and mobile
            apps powered by JavaScript Start your new Work with our weekly remotely
          </p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.rightSide}>
          <Image src={hero} alt="learn coding" className={classes.image} />
          {/* <HeroSVG /> */}
        </Grid>
      </Grid>
    </Container>
  );
}
