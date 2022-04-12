import {
  Container,
  Grid,
  Paper,
  Typography,
  FilledInput,
  InputLabel,
  Box,
  IconButton,
  Stack,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";
import Image from "next/image";
import React from "react";

const CardInputField = ({ label, placeholder }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: 1,
      }}
    >
      <InputLabel sx={{ fontWeight: "bold" }}>{label}</InputLabel>
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

const PaymentMethodIconButton = ({ src, name }) => {
  const theme = useTheme();

  return (
    <IconButton
      size="large"
      sx={{
        display: "block",
        width: "33%",
        maxWidth: "86px",
        backgroundColor: theme.palette.primary.background,
        borderRadius: 2,
        display: "grid",
        placeItems: "center",
        py: 3,
      }}
    >
      <Image
        src={src}
        alt={name}
        width={45}
        height={15}
        layout="fill"
        objectFit="scale-down"
      />
    </IconButton>
  );
};

const PaymentScreen = () => {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down("md"));

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
        <Typography
          variant="h3"
          sx={{
            mb: { xs: 1, md: 5 },
            textAlign: { xs: "center", md: "start" },
          }}
        >
          Payment Details
        </Typography>
        {downMD && (
          <Container maxWidth="sm">
            <Grid container>
              <Grid item xs={12}>
                <Image
                  src="/svgImages/payment/CardImage.svg"
                  alt="Card Image"
                  width={400}
                  height={300}
                  layout="responsive"
                />
              </Grid>
            </Grid>
          </Container>
        )}
        <Paper sx={{ display: "grid", placeItems: "center", borderRadius: 10 }}>
          <Grid
            container
            sx={{ masHeight: "640px" }}
            justifyContent="center"
            alignItems="center"
          >
            {!downMD && (
              <Grid
                item
                container
                md={6}
                xs={12}
                sx={{
                  px: 5,
                  py: 10,
                }}
              >
                <Grid item xs={12}>
                  <Image
                    src="/svgImages/payment/CardImage.svg"
                    alt="Card Image"
                    width={400}
                    height={300}
                    layout="responsive"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "grid", placeItems: "center" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      px: { xs: 2, sm: 5, md: 6 },
                      borderRadius: 20,
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "grid", placeItems: "center" }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      px: { xs: 2, sm: 5, md: 6 },
                      borderRadius: 20,
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            )}
            <Grid
              item
              container
              md={6}
              xs={12}
              spacing={2}
              rowSpacing={5}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                px: 5,
                py: 5,
              }}
            >
              <Grid item xs={12} sx={{ display: "grid", placeItems: "center" }}>
                <Stack sx={{ width: "100%" }} direction="row" spacing={2}>
                  <PaymentMethodIconButton
                    name="paypal"
                    src="/svgImages/payment/paypal.svg"
                  />
                  <PaymentMethodIconButton
                    name="VISA"
                    src="/svgImages/payment/visa.svg"
                  />
                  <PaymentMethodIconButton
                    name="paypal"
                    src="/svgImages/payment/bankTransfer.svg"
                  />
                </Stack>
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

              {downMD && (
                <Grid item container spacing={3}>
                  <Grid item xs={12}>
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderRadius: 20,
                        fontSize: "20px",
                      }}
                    >
                      Back
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: 20,
                        fontSize: "20px",
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

export default PaymentScreen;
