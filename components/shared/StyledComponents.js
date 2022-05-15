import { styled } from "@mui/system";
import { Gradient } from "@mui/icons-material";
import { Box, Button, Container, Grid, Card, IconButton } from "@mui/material";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  fontSize: 22,
  borderRadius: 18,
  textTransform: "none",
  padding: "5px 50px",
  marginTop: 30,
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
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
    fontSize: 16,
    marginTop: 5,
    padding: "2% 10%",
  },
}));

export const CustomImageContainer = styled("div")(({ theme }) => ({
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

export const InfoCard = styled(Card)(({ theme }) => ({
  borderRadius: 20,
  height: "370px",
  boxShadow: "0 0 20px  #00000029",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "stretch",
  alignItems: "center",
  padding: "25px 10px 5px",
}));

export const BannerImage = styled("div")(({ theme }) => ({
  width: "20%",
  height: "auto",
  position: "absolute",
  right: 40,
  bottom: -4,
  padding: 0,
  margin: 0,
  [theme.breakpoints.down("md")]: {
    width: "20%",
    height: "auto",
    right: 0,
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "50%",
    right: 0,
    bottom: -2,
    display: "none",
  },
}));

export const SliderButton = styled(IconButton)(({ theme }) => ({
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

export const HeroContainer = styled(Container)({
  background: "#f5f6f9",
  maxWidth: "none !important",
  fontFamily: "Segoe UI",
  "@media (max-width: 480px)": {
    fontSize: "5px",
    maxHeight: "360px",
  },
});

export const LeftSide = styled(Grid)({
  marginTop: "120px",
  zIndex: "1",
  "@media (max-width: 600px)": {
    marginTop: "55px",
  },
  "@media (max-width: 480px)": {
    marginTop: "10px",
  },
});

export const RightSide = styled(Grid)({
  marginTop: "60px",
});

export const SummaryContainer = styled(Container)({
  background: "#ffffff !important",
  maxWidth: "none !important",
});

export const TextWrapper = styled(Grid)({
  textAlign: "center",
  marginRight: "auto",
  marginLeft: "auto",
  marginTop: "20px",
  // paddingTop: "100px",
  "@media (max-width: 480px)": {
    marginTop: "30px",
    paddingTop: "30px",
  },
});

export const Title = styled("h1")({
  color: "#313030",
  fontSize: "24px",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  "@media (max-width: 480px)": {
    whiteSpace: "break-spaces",
    fontSize: "20px",
  },
});

export const BranchedTitle = styled("span")({
  color: "#6364d9",
  fontSize: "2.9rem",
  fontWeight: "900",
  whiteSpace: "nowrap",
  paddingLeft: "4px",
  "@media (max-width: 480px)": {
    fontSize: "20px",
  },
});

export const CardButton = styled(SecondaryButton)({
  borderRadius: "18px",
  whiteSpace: "nowrap",
  fontSize: "14px",
  width: "167px",
  height: "35px",
});

export const SectionContainer = styled(Container)({
  background: "#f5f6f9 !important",
  marginTop: "110px",
  maxWidth: "none !important",
});

export const DesktopContent = styled(Grid)({
  textAlign: "center",
});

export const MobileContent = styled(Grid)({
  textAlign: "center",
});

export const HeroHubContainer = styled(Container)({
  background: "#f5f6f9",
  maxWidth: "none !important",
  fontFamily: "Segoe UI",
  "@media (max-width: 900px)": {
    paddingTop: "0px",
  },
  "@media (max-width: 480px)": {
    fontSize: "5px",
  },
});

export const HubLeftSide = styled(Grid)({
  marginTop: "140px",
  zIndex: "1",
  "@media (max-width: 600px)": {
    textAlign: "center",
    marginTop: "10px",
  },
});
export const HubRightSide = styled(Grid)({
  "@media (max-width: 600px)": {
    marginTop: "-100px",
  },
});

export const InfoContainer = styled(Container)({
  background: "linear-gradient( to right, #6364D9 50%, #f5f6f9 50%)",
  maxWidth: "none !important",
  fontFamily: "Segoe UI",
  "@media (max-width: 900px)": {
    fontSize: "5px",
    background: "linear-gradient( to bottom, #6364D9 30%, #f5f6f9 70%)",
  },
});

export const InfoLeftSide = styled(Grid)({
  marginTop: "140px",
  // background: "#6364D9",
  zIndex: "1",
  "@media (max-width: 600px)": {
    textAlign: "center",
    marginTop: "10px",
  },
});

export const InfoRightSide = styled(Grid)({
  // background: "#f5f6f9",
  "@media (max-width: 600px)": {
    marginTop: "-100px",
  },
});

export const DetailsContainer = styled(Container)({
  background: "#fff !important",
  maxWidth: "none !important",
});

export const Wrapper = styled(Box)({
  width: "100%",
  padding: "2px 0 10vw 0",
  // background: "#f5f6f9",
});

export const ButtonWrap = styled("div")({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "20px",
});

export const CardDetailsButton = styled("button")({
  transition: "all .5s ease",
  borderRadius: "29px",
  background: "#6364D9",
  // whiteSpace: "nowrap",
  alignSelf: "center",
  fontFamily: "Segoe UI, Semibold",
  textDecoration: "none",
  fontSize: "16px",
  color: "#ffffff",
  outline: "none",
  border: "2px solid #ffffff",
  cursor: "pointer",
  overflow: " hidden",
  width: "449px",
  height: " 58px",
  position: "relative",
  marginRight: "1rem",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

export const CourseDetailsBtn = styled("button")({
  transition: "all .5s ease",
  borderRadius: "29px",
  background: "#FFA950",
  alignSelf: "center",
  fontFamily: "Segoe UI, Semibold",
  textDecoration: "none",
  fontSize: "16px",
  color: "#ffffff",
  outline: "none",
  border: "none",
  cursor: "pointer",
  overflow: " hidden",
  width: "200px",
  height: " 58px",
  position: "relative",
  marginRight: "1rem",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "@media (max-width: 600px)": {
    fontSize: "12px",
    width: "120px",
    height: " 38px",
  },
});

export const CourseDetailsBtn2 = styled("button")({
  transition: "all .5s ease",
  borderRadius: "29px",
  background: "#ffffff",
  alignSelf: "center",
  fontFamily: "Segoe UI, Semibold",
  textDecoration: "none",
  fontSize: "16px",
  color: "#FFA950",
  outline: "none",
  border: "none",
  cursor: "pointer",
  overflow: " hidden",
  width: "200px",
  height: " 58px",
  position: "relative",
  marginRight: "1rem",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "@media (max-width: 600px)": {
    fontSize: "12px",
    width: "120px",
    height: " 38px",
  },
});

export const ImageWrapper = styled("div")({
  display: "block",
});
