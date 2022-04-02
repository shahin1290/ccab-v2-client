import { Container } from "@mui/material";
import { useTheme } from "@mui/system";
import React, { useState } from "react";
import ServiceCard, {
  ServiceCardBack,
  ServiceCardFront,
} from "../../components/shared/ServiceCard";
import ProgressBar from "../../images/svg/ProgressBar";

const SoftwareHub = () => {
  const theme = useTheme();
  const [currentStage, setCurrentStage] = useState(1);
  return (
    <>
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
      >
        <ProgressBar
          stage={currentStage}
          color={theme.palette.secondary.main}
        />
        <button
          onClick={() => {
            if (currentStage >= 7) return;
            setCurrentStage(currentStage + 1);
          }}
        >
          Next Stage
        </button>
        <button
          onClick={() => {
            if (currentStage <= 1) return;
            setCurrentStage(currentStage - 1);
          }}
        >
          Prev Stage
        </button>
      </Container>
    </>
  );
};

export default SoftwareHub;
