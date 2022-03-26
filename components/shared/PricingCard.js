import { Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { Checked, Crossed } from "../../images/svg/pricingIcons";
import { PrimaryButton } from "./CustomComponents";

const PricingCard = ({ price, cardColor, checked, crossed, height }) => {
  const border = 20;
  return (
    <Stack
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 300,
        filter: "drop-shadow(0px 15px 12px rgba(0,0,0,0.15))",
      }}>
      <Box
        sx={{
          width: "90%",
          height: 20,
          backgroundColor: cardColor,
          borderTopLeftRadius: border,
          borderTopRightRadius: border,
        }}></Box>
      <Paper
        elevation={5}
        sx={{
          py: 5,
          px: 7,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: 5,
        }}>
        <Typography variant="h2" sx={{ color: cardColor, fontSize: 40 }}>
          {price}
        </Typography>
        <Stack direction="column" spacing={2} sx={{ width: "100%", my: 6 }} justifyContent="start">
          {checked.map((item, index) => {
            return (
              <Stack key={index} direction="row" justifyContent="start" alignItems="center" spacing={2}>
                <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Checked />
                </Box>
                <Typography variant="body1" align="left">
                  {item}
                </Typography>
              </Stack>
            );
          })}
          {crossed.map((item, index) => {
            return (
              <Stack key={index} direction="row" justifyContent="start" alignItems="center" spacing={2}>
                <Box sx={{ width: "10%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Crossed />
                </Box>
                <Typography variant="body1">{item}</Typography>
              </Stack>
            );
          })}
        </Stack>
        <PrimaryButton
          variant="contained"
          sx={{ borderRadius: 2, backgroundColor: cardColor, fontSize: { sm: 18, xs: 14 } }}>
          Select
        </PrimaryButton>
      </Paper>
      <Box
        sx={{
          width: "90%",
          height: 20,
          backgroundColor: cardColor,
          borderBottomLeftRadius: border,
          borderBottomRightRadius: border,
        }}></Box>
    </Stack>
  );
};

export default PricingCard;
