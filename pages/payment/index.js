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

const PaymentScreen = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        background: theme.palette.primary.background,
        height: "100%",
        py: 5,
      }}
      maxWidth={false}
    >
      <Container maxWidth="xl">
        <Typography variant="h2">Payment Details</Typography>
        <Paper sx={{ display: "grid", placeItems: "center" }}>
          <Grid container>
            <Grid item md={6} xs={12}>
              CREDIT CARD IMAGE
            </Grid>
            <Grid item container md={6} xs={12}>
              <Grid item xs={12}>
                {" "}
                PAYMENT ICONS ICONS
              </Grid>
              <Grid item xs={12}>
                <CardInputField label="Card Type" />
              </Grid>
              <Grid item xs={12}>
                <CardInputField label="Card Number" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardInputField label="Expiry" placeholder="MM/YY" />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardInputField label="CVV (3 digits)" />
              </Grid>
              <Grid item xs={12}>
                <CardInputField label="Cardholder's Name" />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

export default PaymentScreen;
