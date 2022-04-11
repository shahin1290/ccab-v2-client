import {
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  FilledInput,
  InputLabel,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";

const CardInputField = ({ label, placeholder }) => {
  return (
    <Box sx={{ mx: 2, my: 1 }}>
      <InputLabel sx={{ fontWeight: "bold", mb: 1, ml: 1 }}>{label}</InputLabel>
      <FilledInput
        fullWidth
        hiddenLabel
        sx={{ borderRadius: 3 }}
        disableUnderline
        placeholder={placeholder}
      />
    </Box>
  );
};

const AskAdvisorScreen = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        background: theme.palette.primary.background,
        height: "100vh",
        position: "relative",
        mb: 10,
      }}
      maxWidth={false}
    >
      <Box
        bgcolor="primary.main"
        sx={{
          width: "550px",
          height: "1000px",
          borderRadius: "260px 260px 0 0",
          position: "absolute",
          left: "-150px",
          transform: "rotate(45deg)",
        }}
      >
        <Box
          p={15}
          sx={{
            transform: "rotate(-45deg)",
            position: "absolute",
            top: "100px",
            color: "primary.contrastText",
          }}
        >
          <Typography variant="h2">Ask an advisor</Typography>

          <Typography variant="body1">
            Enter your question(s) in the area provided below. Your question
            will be emailed to the appropriate person.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          top: "48%",
          left: "50%",
        }}
      >
        <Paper
          sx={{
            placeItems: "center",
            p: 8,
            width: "900px",
            borderRadius: "20px",
          }}
        >
          <CardInputField label="Card Type" />

          <CardInputField label="Card Number" />

          <CardInputField label="Expiry" placeholder="MM/YY" />

          <CardInputField label="CVV (3 digits)" />
        </Paper>
      </Box>
    </Container>
  );
};

export default AskAdvisorScreen;
