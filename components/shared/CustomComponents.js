import { styled } from "@mui/system";

import { Button, Typography, Card } from "@mui/material";
import Image from "next/image";

const SectionHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.mainTextColor,
  fontFamily: "'Segoe UI', sans-serif ",
  fontWeight: "bold",
}));

const SectionSubHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontFamily: "'Segoe UI', sans-serif",
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  fontSize: 22,
  borderRadius: 18,
  textTransform: "none",
  padding: "5px 50px",
  marginTop: 30,
}));

const CustomImage = styled("img")(({ theme }) => ({
  borderRadius: 20,
  boxShadow: `-30px 30px 0px ${theme.palette.primary.light}`,
  width: "100%",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    boxShadow: `none`,
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  // width: "300px",
  height: "364px",
  boxShadow: "0 0 20px  #00000029",
}));
const CustomCardContent = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  padding: "30px 20px",
  border: " none",
  height: "100%",
}));

export { SectionHeader, SectionSubHeader, PrimaryButton, CustomImage, CustomCard, CustomCardContent };
