import React, { useState } from "react";
import { Box, styled, useTheme } from "@mui/system";
import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const SelectionCard = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "275px",
  height: "235px",
  borderRadius: "15px",
  fontWeight: "bold",
  border: `5px solid ${theme.palette.common.white}`,
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "200px",
    height: "120px",
    border: `3px solid ${theme.palette.common.white}`,
  },
}));

const CheckMark = styled("div")(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.secondary.main,
  display: "grid",
  placeItems: "center",
  width: "50px",
  height: "50px",
  borderRadius: "100%",
  fontWeight: "bold",
  border: `5px solid ${theme.palette.common.white}`,
  cursor: "pointer",
  boxSizing: "border-box",

  [theme.breakpoints.down("md")]: {
    width: "35px",
    height: "35px",
    fontWeight: "normal",
    border: `3px solid ${theme.palette.common.white}`,
  },
}));

const MotionSelectionCard = motion(SelectionCard);
const MotionCheckMark = motion(CheckMark);

const ServiceSelectionCard = (props) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);

  const cardVariants = {
    notSelected: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.contrastText,
      fill: theme.palette.secondary.contrastText,
    },
    selected: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      fill: theme.palette.common.white,
    },
  };

  const checkMarkVariant = {
    notSelected: {
      opacity: 0,
      top: 2,
      zIndex: 2,
      transition: {
        duration: 0.2,
      },
    },
    selected: {
      opacity: 3,
      display: "block",
      top: -25,
      zIndex: 2,
      display: "grid",
      placeItems: "center",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <MotionSelectionCard
      onClick={() => {
        setSelected((prevState) => !prevState);
      }}
      variants={cardVariants}
      initial="notSelected"
      animate={selected ? "selected" : "notSelected"}
      whileHover={{ boxShadow: "0 4px 6px rgba(0,0,0,0.15)", scale: 1.01 }}
    >
      <MotionCheckMark
        variants={checkMarkVariant}
        initial="notSelected"
        animate={selected ? "selected" : "notSelected"}
      >
        <CheckOutlinedIcon sx={{ fontSize: { md: 35, xs: 22 } }} />
      </MotionCheckMark>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Box
          sx={{
            "& svg": {
              height: { xs: 40, md: 85 },
            },
          }}
        >
          {props.Icon}
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: { xs: "normal", md: "bold" } }}
        >
          {props.title}
        </Typography>
      </Stack>
    </MotionSelectionCard>
  );
};

export default ServiceSelectionCard;
