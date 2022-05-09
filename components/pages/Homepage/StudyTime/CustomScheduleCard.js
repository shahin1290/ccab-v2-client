import { Divider, Stack, Typography } from "@mui/material";
import React from "react";

const CustomScheduleCard = ({ period, time, color }) => {
  return (
    <Stack
      spacing={1.5}
      py={{ xs: 1.5, lg: 3 }}
      px={{ xs: 1.5, lg: 3, xl: 10 }}
      sx={{
        boxShadow: "0 0 25px rgba(0,0,0,0.3)",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontSize: { xs: 16, md: 20 },
        }}
      >
        {period}
      </Typography>
      <Divider
        sx={{
          borderBottomWidth: 4,
          backgroundColor: color,
          width: { sm: "130px", md: "130px", xl: "150px" },
        }}
      />
      <Typography align="center">{time}</Typography>
    </Stack>
  );
};

export default CustomScheduleCard;
