import { Gradient } from "@mui/icons-material";
import { Box, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { SecondaryButton } from "./CustomComponents";

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
  "@media (max-width: 600px)": {
    marginTop: "-120px",
  },
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
  paddingTop: "100px",
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

export const CourseDetailsBtn=styled("button")({
  transition: "all .5s ease",
  borderRadius: "29px",
  background:'#FFA950',
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
  

export const CourseDetailsBtn2=styled("button")({
  transition: "all .5s ease",
  borderRadius: "29px",
  background:'#ffffff',
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