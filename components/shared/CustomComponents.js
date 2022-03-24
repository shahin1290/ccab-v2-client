import { styled } from "@mui/system";

import { Button, Typography } from "@mui/material";
import Image from "next/image";

const SectionHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.mainTextColor,
  fontFamily: "'Segoe UI', sans-serif ",
  fontWeight: "bold !important",
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
  boxShadow: `-30px 30px 0px ${theme.palette.primary.light} `,
}));

export { SectionHeader, SectionSubHeader, PrimaryButton, CustomImage };
