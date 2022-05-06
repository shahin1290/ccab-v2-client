import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({ price, duration, text, width = 300, cardColor, sx }) => {
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
      }}
    >
      <Box
        sx={{
          backgroundColor: cardColor,
          height: "45%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography
            align="center"
            variant="body1"
            sx={{ color: "secondary.background", fontSize: { xs: 22 } }}
          >
            from
          </Typography>
          <Typography
            align="center"
            variant="h3"
            sx={{ color: "secondary.background", fontSize: { xs: 35 } }}
          >
            {price}
          </Typography>
          <Typography
            align="center"
            variant="body1"
            sx={{ color: "secondary.background", fontSize: { xs: 22 } }}
          >
            {duration}
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "60%",
        }}
        p={3}
      >
        <Typography
          align="left"
          variant="h6"
          sx={{ fontWeight: "normal", fontSize: { xs: 16 } }}
        >
          {text}
        </Typography>
      </Box>
    </Stack>
  );
};

export default InfoCard;
