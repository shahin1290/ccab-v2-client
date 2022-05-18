import { Box } from "@mui/system";
import React from "react";
import { styled } from "@mui/system";
import { Chip, Stack, SvgIcon, Typography } from "@mui/material";
import Image from "next/image";

const OuterCard = styled(Box)(({ theme }) => ({
  maxWidth: "385px",
  height: "250px",
  borderRadius: "20px",
  perspective: "1000px",
  WebkitPerspective: "1000px",
  padding: "1px",
  margin: 20,
  [theme.breakpoints.down("sm")]: {
    width: "315px",
    height: "210px",
  },
  "&:hover .inner-card": {
    transform: "rotateY(180deg)",
    WebkitTransform: "rotateY(180deg)",
  },
}));

const InnerCard = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.background,
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  WebkitTransformStyle: "preserve-3d",
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
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: "30%",

  "&  path": {
    fill: "white !important",
  },
}));

export const ServiceCardFront = ({ icon, title, backgroundColor }) => {
  return (
    <Box
      sx={{
        backgroundColor,
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
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
        <IconCircle>
          <Image
            priority
            src={icon}
            width={40}
            height={40}
            layout="fixed"
            alt={title}
          />
        </IconCircle>
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
        backgroundColor: "#FFA950",
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        WebkitTransform: "rotateY(180deg)",
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

const ServiceCard = ({ children, sx }) => {
  return (
    <OuterCard>
      <InnerCard className="inner-card" sx={{ ...sx }}>
        {children}
      </InnerCard>
    </OuterCard>
  );
};

export default ServiceCard;
