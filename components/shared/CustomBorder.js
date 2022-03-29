import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomBorder = ({ children, index, color, width = 306, height = 233 }) => {
  const CustomBorderColor = `6px solid ${color}`;
  const customDropShadow = "drop-shadow(5px 15px 6px rgba(0,0,0,0.2))";
  return (
    <Box sx={{ position: "relative", width, height, mx: 10, mb: 5 }}>
      <Typography
        variant="h1"
        sx={{
          color,
          position: "absolute",
          top: "50%",
          left: 0,
          fontSize: 140,
          fontFamily: " 'Archivo' , sans-serif",
          fontWeight: 900,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 2,
          lineHeight: 0.65,
          wordSpacing: 0,
          letterSpacing: 0,
          transform: "translate(-60%, -50%)",
          backgroundColor: "transparent",
          zIndex: 5,
        }}>
        {index}
      </Typography>
      <Box
        sx={{
          position: "relative",
          width,
          height,
          border: CustomBorderColor,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          borderRight: "none",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
          borderTop: CustomBorderColor,
          filter: customDropShadow,
          borderLeft: "none",
        }}>
        {/* LEFT SIDE */}
        <Box
          sx={{
            width: "10%",
            display: "flex",
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            flexDirection: "column",
            filter: customDropShadow,
          }}>
          <Box sx={{ height: "25%", borderLeft: CustomBorderColor, borderTopLeftRadius: 30 }}></Box>
          <Box
            sx={{
              height: "50%",
              borderRight: "none",
              filter: customDropShadow,
            }}></Box>
          <Box
            sx={{
              height: "25%",
              borderLeft: CustomBorderColor,
              filter: customDropShadow,
              borderBottomLeftRadius: 30,
            }}></Box>
        </Box>
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 1,
            pl: 2,
            pr: 1,
            filter: customDropShadow,
          }}>
          {children}
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            width: "17%",
            display: "flex",
            flexDirection: "column",
            filter: customDropShadow,
          }}>
          <Box sx={{ height: "12.5%", borderRight: CustomBorderColor }}></Box>
          <Box
            sx={{
              height: "75%",
              border: CustomBorderColor,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderRight: "none",
              filter: customDropShadow,
            }}></Box>
          <Box
            sx={{
              height: "12.5%",
              borderRight: CustomBorderColor,
              filter: customDropShadow,
            }}></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomBorder;
