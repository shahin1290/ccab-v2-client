import React from "react";
import { Container } from "@mui/material";
import ProgressBar from "../../images/svg/ProgressBar";
import { useTheme } from "@mui/system";
import ProgressBarMobile from "../../images/svg/ProgressBarMobile";

const HowMuch = () => {
  const theme = useTheme();
  const [currentStage, setCurrentStage] = React.useState(1);
  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 20,
        display: "flex",
        backgroundColor: "primary.main",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
      }}
    ></Container>
  );
};

export default HowMuch;
