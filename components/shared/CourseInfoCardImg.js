import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const CourseInfoCardImg = ({ src, alt, width = 300, cardColor, sx }) => {
  return (
    <Stack
      direction="column"
      sx={{
        width,
        height: "auto",
        justifyContent: "space-between",
        backgroundColor: "secondary.background",
        p: 1.5,
        borderRadius: "20px",
        overflow: "hidden",
        ...sx,
      }}
    >
      <Image src={src} alt={alt} layout="fill" priority />
    </Stack>
  );
};

export default CourseInfoCardImg;
