import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";
import { Chip, Stack, Typography } from "@mui/material";

const OuterCard = styled(Box)(({ theme }) => ({
  width: "385px",
  height: "250px",
  borderRadius: "20px",
  perspective: "1000px",
  padding: "1px",
  margin: 100,
  [theme.breakpoints.down("sm")]: {
    width: "315px",
    height: "210px",
  },
  "&:hover .inner-card": {
    transform: "rotateY(180deg)",
  },
}));

const InnerCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.background,
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "all 0.8s",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const IconCircle = styled("div")(({ theme }) => ({
  width: "78px",
  height: "78px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "1000px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&  path": {
    fill: "white !important",
  },
}));

const ServiceCard = ({ children, sx }) => {
  return (
    <OuterCard>
      <InnerCard className="inner-card" sx={{ ...sx }}>
        {children}
      </InnerCard>
    </OuterCard>
  );
};

export const ServiceCardFront = ({ icon, title, backgroundColor }) => {
  return (
    <Box
      sx={{
        backgroundColor,
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        borderRadius: "20px",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{ width: "100%", height: "100%", px: "20%" }}
      >
        <IconCircle>{icon}</IconCircle>
        <Typography variant="h6" textAlign="center">
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};
export const ServiceCardBack = ({ title, content, price, backgroundColor }) => {
  return (
    <Box
      sx={{
        backgroundColor,
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        borderRadius: "20px",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        spacing={1}
        sx={{ width: "100%", height: "100%", px: "6%" }}
      >
        <Typography
          variant="subtitle2"
          color="white"
          sx={{ fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography textAlign="center" variant="body1" color="white">
          {content}
        </Typography>
        <Chip
          label={price}
          variant="filled"
          sx={{
            backgroundColor: "#FFF",
            color: "primary.main",
            fontWeight: "bold",
            px: 3,
          }}
        />
      </Stack>
    </Box>
  );
};

export default ServiceCard;
