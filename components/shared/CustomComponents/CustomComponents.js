import { Box, styled } from "@mui/system";

import {
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";

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
    padding: "5px 10px",
  },
}));

const CustomImage = styled("img")(({ theme }) => ({
  borderRadius: 20,
  boxShadow: `-20px 20px 0px ${theme.palette.primary.light}`,
  width: "100%",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    boxShadow: `-10px 10px 0px ${theme.palette.primary.light}`,
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

const BannerImage = styled("img")(({ theme }) => ({
  width: "20%",
  height: "auto",
  position: "absolute",
  right: 40,
  bottom: 0,
  [theme.breakpoints.down("md")]: {
    width: "30%",
    height: "auto",
    right: 0,
  },
  [theme.breakpoints.down("sm")]: {
    height: "70%",
    width: "auto",
    right: 15,
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
  CustomImage,
  CustomCard,
  SecondaryButton,
  BannerImage,
  SliderButton,
};
