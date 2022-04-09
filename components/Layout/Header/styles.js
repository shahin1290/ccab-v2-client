import { Link as LinkMUI } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

export const Appbar = styled("nav")({
  height: "120px",
  display: "flex",
  background: "#f5f6f9",
  alignItems: "center",
  fontSize: "1rem",
  // position:'fixed',
  marginBottom: 3,
  top: 0,
  zIndex: 10,
  "@media (max-width: 600px)": {
    transition: "0.8s all ease",
  },
});

export const NavbarContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  height: "80px",
  zIndex: 1,
  width: "100%",
  padding: " 0 24px",
  maxWidth: "1100px",
});

export const NavLogo = styled(LinkMUI)({
  justifySelf: "flex-start",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  color: "#ff5773",
  fontSize: "1.25rem",
  fontWeight: "bold",
  textDecoration: "none",
  marginTop: "5px",
  width: "100%",
  height: "100%",
});

export const Logo = styled(Image)({
  width: "98px",
  height: "85px",
  background: "transparent  0% 0% no-repeat padding-box",
  // "@media (max-width: 480px)": {
  //   width: "50px",
  //   height: "60px",
  // }
});

export const MobileIcon = styled("div")({
  display: "none",
  "@media (max-width: 980px)": {
    display: "block",
    position: "absolute",
    right: "40px",
    transform: "translate(100%, 60%)",
    fontSize: "2rem",
    cursor: "pointer",
    color: "#000000",
    boxShadow: "transparent 1.95px 1.95px 2.6px",
  },
});

export const Wrap = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  // width: "625px",
  right: "0",
  borderRadius: "38px 0px 0px 38px",
  background:
    "transparent linear-gradient(90deg, #6162D8 0%, #8D92ED 100%) 0% 0% no-repeat padding-box",
  height: "60px",
  top: "40px",
  position: "absolute",
  "@media (max-width: 980px)": {
    display: "none",
    background: "none",
    borderRadius: "none",
  },
});

export const NavMenu = styled("ul")({
  display: "flex",
  justifySelf: "flex-end",
  alignItems: "center",
  listStyle: "none",
  textAlign: "center",
  "@media (max-width: 980px)": {
    display: "none",
  },
});

export const NavItem = styled("li")({
  height: "60px",
  color: "#ffffff",
  display: "flex",
  fontSize: "20px ",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1.5rem",
  height: "100%",
  cursor: "pointer",
  whiteSpace: "nowrap",
});

export const NavLinks = styled(Link)({
  color: "#ffffff",
  display: "flex",
  fontSize: "20px ",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1.5rem",
  height: "100%",
  cursor: "pointer",
});

export const ButtonWrap = styled("div")({
  width: "100%",
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-end",
  flexFlow: "wrap",
  gap: " 0.5rem",
  paddingRight: "1rem",
  "@media (max-width: 980px)": {
    display: "none",
  },
});

export const FirstButton = styled("button")({
  transition: "all .5s ease",
  borderRadius: "18px",
  background: "none",
  whiteSpace: "nowrap",
  fontSize: "20px",
  color: "#ffffff",
  outline: "none",
  border: "2px solid #ffffff",
  cursor: "pointer",
  overflow: " hidden",
  width: "115px",
  height: "35px",
  position: "relative",
  marginRight: "1rem",
  "&:hover": {
    color: "#001F3F",
    backgroundColor: "#fff",
  },
});

export const SecondButton = styled("button")({
  transition: "all .5s ease",
  borderRadius: "20px",
  background: "#ffffff",
  whiteSpace: "nowrap",
  fontSize: "18px",
  color: "#001F3F",
  outline: "none",
  border: "2px solid #ffffff",
  cursor: "pointer",
  overflow: " hidden",
  width: "115px",
  height: "35px",
  position: "relative",
  "&:hover": {
    color: "#fff",
    backgroundColor: "transparent",
  },
});

export const SidebarLink = styled("p")(({ theme }) => ({
  margin: "5px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px ",
  listStyle: "none",
  transition: "0.2 ease-in-out",
  textDecoration: "none !important",
  color: theme.palette.primary.main,
  cursor: "pointer",
  boxShadow: "transparent 1.95px 1.95px 2.6px",
  "&:hover": {
    color: "#707070",
    transition: "0.2s ease-in-out",
  },
}));
