import { styled } from "@mui/system";
import Typography from "@material-ui/core/Typography";
import { Button } from "@mui/material";

const SectionHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.mainTextColor,
  fontFamily: '"Segoe UI"',
  fontWeight: 700,
}));

const SectionSubHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  fontSize: 22,
  borderRadius: 18,
  textTransform: "none",
  padding: "5px 50px",
}));

export { SectionHeader, SectionSubHeader, PrimaryButton };
