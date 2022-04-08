import { Box, styled } from "@mui/system";

import {
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import Image from "next/image";

const PrimaryButton = styled(Button)(({ theme }) => ({
  fontSize: 22,
  borderRadius: 18,
  textTransform: "none",
  padding: "5px 50px",
  marginTop: 30,
}));

const SecondaryButton = styled(Button)(({ theme }) => ({
  fontSize: "1.8rem",
  borderRadius: 100,
  textTransform: "none",
  padding: "10px 50px",
  marginTop: 30,
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
    marginTop: 15,
    padding: "5px 30px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    marginTop: 5,
    padding: "10px 25px",
  },
}));

const CustomImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "block",
  borderRadius: 20,
  width: "100%",
  height: "auto",
  boxShadow: `-20px 20px 0px ${theme.palette.primary.light}`,
  overflow: "hidden",
  border: "none",
  outline: "none",
  [theme.breakpoints.down("md")]: {
    boxShadow: `-10px 10px 0px ${theme.palette.primary.light}`,
    width: "80vw",
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  height: "364px",
  boxShadow: "0 0 20px  #00000029",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "stretch",
  alignItems: "center",
  padding: "35px 10px 5px",
}));

const BannerImage = styled("div")(({ theme }) => ({
  width: "20%",
  height: "auto",
  position: "absolute",
  right: 40,
  bottom: -4,
  padding: 0,
  margin: 0,
  [theme.breakpoints.down("md")]: {
    width: "30%",
    height: "auto",
    right: 0,
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "60%",
    right: 15,
    bottom: -2,
  },
}));

const SliderButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "35px",
  height: "35px",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

export {
  PrimaryButton,
  CustomImageContainer,
  CustomCard,
  SecondaryButton,
  BannerImage,
  SliderButton,
};
