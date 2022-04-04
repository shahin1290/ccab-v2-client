import { Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { SecondaryButton } from "./CustomComponents";

export const HeroContainer = styled(Container)({
  background: "#f5f6f9",
  maxWidth: "none !important",
  fontFamily: "Segoe UI",
  "@media (max-width: 480px)": {
    fontSize: "5px",
    maxHeight:'260px'
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
