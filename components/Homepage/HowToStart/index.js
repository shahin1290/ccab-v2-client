import { Container, Stack, Box } from "@mui/material";
import Image from "next/image";

import { PrimaryButton, SectionHeader, SectionSubHeader, CustomImage } from "../../shared/CustomComponents";

const HowToStart = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Stack justifyContent="center" alignItems="center" sx={{ mb: 10 }} spacing={2}>
        <SectionHeader variant="h4">How can you start?</SectionHeader>
        <SectionSubHeader>
          Register yourself now and get real employable skills that top companies want
        </SectionSubHeader>
      </Stack>
      <Stack direction="row" sx={{ width: "100%", justifyContent: "space-between" }}>
        <Stack spacing={2} justifyContent="center" alignItems="start" sx={{ maxWidth: "450px", height: "100%" }}>
          <SectionHeader variant="h5">Remote supervised self-paced training</SectionHeader>
          <SectionSubHeader>
            Choose a start date and register on this page to secure your spot. To prepare for the Bootcamp, get the
            pre-course materials. If you have no prior experience with JavaScript, HTML, or CSS, we estimate it will
            take you 20-30 hours
          </SectionSubHeader>
          <PrimaryButton variant="contained" color="primary">
            Learn More
          </PrimaryButton>
        </Stack>
        <Box>
          <CustomImage src="/howToStart.png" alt="How To Start Image" />
        </Box>
      </Stack>
    </Container>
  );
};

export default HowToStart;
