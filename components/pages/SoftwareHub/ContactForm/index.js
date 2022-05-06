import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import TextInputField from "../../../shared/TextInputField";

const HowContactForm = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Stack direction="column" spacing={3} mb={3}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="white"
          textAlign="center"
        >
          Please leave your email or cell phone to let us come back to you with
          free estimate and analysis.
        </Typography>
        <TextInputField FieldLabel="Name" required />
        <TextInputField FieldLabel="Phone No. or Email" required />
        <TextInputField FieldLabel="Company Name" />
        <TextInputField FieldLabel="Request Description" multiline rows={5} />
      </Stack>
    </Container>
  );
};

export default HowContactForm;
