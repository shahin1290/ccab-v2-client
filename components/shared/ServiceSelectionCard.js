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
  width: "300px",
  height: "255px",
  borderRadius: "15px",
  fontWeight: "bold",
  border: `5px solid ${theme.palette.common.white}`,
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: "250px",
    height: "200px",
  },
}));

const CheckMark = styled("div")(({ theme }) => ({
  position: "absolute",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  borderRadius: "100%",
  fontWeight: "bold",
  border: `5px solid ${theme.palette.common.white}`,
  cursor: "pointer",
  transition: "scale boxShadow 0.5s",

  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
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
      display: "none",
      top: 2,
      zIndex: -5,
    },
    selected: {
      display: "block",
      top: -30,
      zIndex: 2,
      transition: {
        type: "spring",
        stiffness: 300,
        delayChildren: 3,
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
        <CheckOutlinedIcon sx={{ fontSize: { sm: 40, xs: 30 } }} />
      </MotionCheckMark>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Box>{props.Icon}</Box>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
      </Stack>
    </MotionSelectionCard>
  );
};

export default ServiceSelectionCard;
