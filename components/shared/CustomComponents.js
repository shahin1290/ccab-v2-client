import { styled } from "@mui/system";
import Typography from "@material-ui/core/Typography";
import { Button } from "@mui/material";
import Image from "next/image";

const SectionHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.mainTextColor,
  fontFamily: "'Segoe UI', sans-serif !important",
  fontWeight: "bold !important",
}));

const SectionSubHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
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
