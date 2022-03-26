import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const CustomCard = ({ price, duration, durationType, width = 300, cardColor, sx }) => {
  return (
    <Stack
      direction="column"
      sx={{
        width,
        height: 0.7 * width,
        justifyContent: "space-between",
        backgroundColor: "secondary.background",
        p: 1.5,
        borderRadius: "20px",
        boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
        ...sx,
      }}>
      <Box
        sx={{
          backgroundColor: cardColor,
          height: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Typography align="center" variant="h3" sx={{ color: "secondary.background" }}>
          {price}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "55%",
        }}>
        <Typography align="center" variant="h3" sx={{ color: cardColor, fontWeight: "normal" }}>
          {duration}
        </Typography>
        <Typography align="center" variant="h6" sx={{ fontWeight: "normal" }}>
          {durationType}
        </Typography>
      </Box>
    </Stack>
  );
};

export default CustomCard;
