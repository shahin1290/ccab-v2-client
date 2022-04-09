import { useState } from "react";
import {
  SwipeableDrawer,
  IconButton,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/Logo.svg";
import ActiveLink from "./ActiveLink";
import {
  Appbar,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  Wrap,
  NavMenu,
  NavItem,
  ButtonWrap,
  FirstButton,
  SecondButton,
  SidebarLink,
  NavLinks,
} from "./styles";
import Link from "next/link";

const sideLinks = [
  { name: "Home", to: "/", type: "nav" },
  { name: "Software Hub", to: "/services", type: "nav" },
  { name: "Company Hub", to: "/company", type: "nav" },
  { name: "Teaching Hub", to: "/education", type: "nav" },
  { name: "Login", to: "/", type: "button" },
  { name: "Register", to: "/", type: "button" },
];
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Appbar>
      <NavbarContainer>
        <NavLogo href="/">
          <Logo src={logo} alt="codify logo" />
        </NavLogo>
        <MobileIcon onClick={() => setOpen(true)}>
          <MenuIcon style={{ fontSize: "35px" }} color="primary" />
        </MobileIcon>
        <Wrap>
          <NavMenu>
            {sideLinks.map((item) => {
              if (item.type === "button") return;
              return (
                <NavItem key={item.name}>
                  <NavLinks href={item.to} passHref>
                    <ActiveLink>{item.name}</ActiveLink>
                  </NavLinks>
                </NavItem>
              );
            })}
          </NavMenu>
          <ButtonWrap>
            <NavLinks href="/">
              <FirstButton>Login</FirstButton>
            </NavLinks>
            <NavLinks href="/">
              <SecondButton>Register</SecondButton>
            </NavLinks>
          </ButtonWrap>
        </Wrap>
      </NavbarContainer>

      <SwipeableDrawer
        anchor="top"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <IconButton
          size="large"
          color="inherit"
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
          sx={{ display: "flex", justifyContent: "start" }}
        >
          <CloseIcon color="inherit" fontSize="large" />
        </IconButton>

        <Divider />
        <List>
          {sideLinks.map((item) => (
            <ListItem
              dense
              alignItems="center"
              onClick={() => setOpen(false)}
              onKeyPress={() => setOpen(false)}
              key={item.name}
            >
              <Link href={item.to} passHref>
                <SidebarLink>{item.name}</SidebarLink>
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Appbar>
  );
}
