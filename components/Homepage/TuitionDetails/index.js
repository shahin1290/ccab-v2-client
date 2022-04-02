import { useTheme } from "@emotion/react";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Underline from "../../../images/svg/Underline";
import PricingCard from "../../shared/PricingCard";

const pricingDetails = [
  {
    price: "€5995",
    checked: ["Lorem Ipsum  1", "Lorem Ipsum  2"],
    crossed: [
      "Lorem Ipsum  3",
      "Lorem Ipsum  4",
      "Lorem Ipsum  5",
      "Lorem Ipsum  6",
      "Lorem Ipsum  7",
      "Lorem Ipsum  8",
    ],
  },
  {
    price: "€6995",
    checked: [
      "Lorem Ipsum  1",
      "Lorem Ipsum  2",
      "Lorem Ipsum  3",
      "Lorem Ipsum  4",
    ],
    crossed: [
      "Lorem Ipsum  5",
      "Lorem Ipsum  6",
      "Lorem Ipsum  7",
      "Lorem Ipsum  8",
    ],
  },
  {
    price: "€7995",
    checked: [
      "Lorem Ipsum  1",
      "Lorem Ipsum  2",
      "Lorem Ipsum  3",
      "Lorem Ipsum  4",
      "Lorem Ipsum  5",
      "Lorem Ipsum  6",
      "Lorem Ipsum  7",
      "Lorem Ipsum  8",
    ],
    crossed: [],
  },
];
const TuitionDetails = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: { xs: 3, md: 10 },
        pb: { xs: 2 },
      }}
    >
      <Typography variant="h3" mb={1}>
        Tuition Details
      </Typography>
      <Underline />

      <Typography variant="subtitle2" mt={{ xs: 1 }}>
        More detailed Pricing section
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 0, lg: 10 }, width: "clamp(300px, 100%, 950px)" }}
      >
        {pricingDetails.map((item, index) => {
          const color =
            (index + 1) % 3 === 0
              ? "primary"
              : (index + 1) % 2 === 0
              ? "tertiary"
              : "secondary";
          return (
            <Grid
              item
              key={index}
              md={4}
              xs={12}
              sx={{
                transform: (index + 1) % 2 == 0 ? "scale(1.1)" : "scale(0.95)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <PricingCard
                price={item.price}
                cardColor={theme.palette[color].main}
                checked={item.checked}
                crossed={item.crossed}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default TuitionDetails;
