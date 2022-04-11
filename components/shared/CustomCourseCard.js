import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const CustomCourseCard = ({ price, duration, SeatsNumber, width = 300, cardColor, sx }) => {
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
        <Typography align="center" variant="body1" sx={{ color: "secondary.background", fontSize: { xs: 18 }, paddingRight:'5px' }}>
          Start from
        </Typography>
        <Typography align="center" variant="h1" sx={{ color: "secondary.background", fontSize: { xs: 26 } }}>
          {price}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "55%",
        }}>
        <Typography align="center" variant="h6" sx={{ color: "secondary.contrastText" , fontWeight: "normal", fontSize: { xs: 16}, paddingBottom:'2px' }}>
          {duration}
        </Typography>
        <Typography align="center" variant="h6" sx={{color: "secondary.contrastText" , fontWeight: "normal", fontSize: { xs: 16 } }}>
          {SeatsNumber}
        </Typography>
      </Box>
    </Stack>
  );
};

export default CustomCourseCard;
