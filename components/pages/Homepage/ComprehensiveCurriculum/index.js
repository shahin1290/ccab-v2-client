import {Grid} from "@mui/material";
import React from "react";
import { DesktopContent, MobileContent, SectionContainer, SliderButton, TextWrapper } from "../../../shared/StyledComponents";
import CurriculumSVGDesktop from "../../../../images/svg/CurriculumImageDesktop";
import CurriculumImageMobile from "../../../../images/svg/CurriculumImageMobile";

const ComprehensiveCurriculum = () => {  
  return (
    <Grid style={{ paddingBottom: "50px", paddingTop: "30px" }}>
        <DesktopContent display={{ xs: "none", md: "block" }}>
          <CurriculumSVGDesktop  />
        </DesktopContent>
        <MobileContent display={{ xs: "block", md: "none" }}>
          <CurriculumImageMobile />
        </MobileContent>
      </Grid>
  );
};

export default ComprehensiveCurriculum;
