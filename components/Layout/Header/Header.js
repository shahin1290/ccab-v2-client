import { useState } from "react";
import { SwipeableDrawer, IconButton, Divider, List, ListItem,  } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../images/Logo.svg";
import { Appbar, ButtonWrap, FirstButton, Logo, MobileIcon, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, SecondButton, SidebarLink, Wrap } from "./styles";
import { useRouter } from 'next/router'
import ActiveLink from "./ActiveLink";

const sideLinks = [
  { name: "Home", to: "/" },
  { name: "Job", to: "/job" },
  { name: "Login", to: "/" },
  { name: "Register", to: "/" },
];
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Appbar >
      <NavbarContainer >
        <NavLogo href="/" passHref>
          <Logo src={logo} alt="codify logo" />
        </NavLogo>

        <MobileIcon onClick={() => setOpen(true)}>
          <MenuIcon style={{ fontSize:'35px' }} />
        </MobileIcon>

        <Wrap >
          <NavMenu >
            <NavItem >    
              <NavLinks
                href='/'
              > 
                <ActiveLink href='/'>
                 Home
                </ActiveLink>
              </NavLinks>  
            </NavItem>
            <NavItem>
              <NavLinks
                href='/jobs'
                >
                  <ActiveLink href='/jobs'>
                    Jobs
                  </ActiveLink>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <ButtonWrap >
            <NavLinks href="/" >
              <FirstButton >Login</FirstButton>
            </NavLinks>
            <NavLinks href="/" >
              <SecondButton>
                Register
              </SecondButton> 
            </NavLinks>
          </ButtonWrap>
        </Wrap>
      </NavbarContainer>

      <SwipeableDrawer anchor="top" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <div onClick={() => setOpen(false)} onKeyPress={() => setOpen(false)} role="button" tabIndex={0}>
          <IconButton>
            <CloseIcon style={{ color: "#6162D8", fontSize:'25px' }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideLinks.map((item) => (
            <ListItem key={item.name}>
              <SidebarLink
                href={item.to}
                onClick={() => setOpen(false)}
                nKeyPress={() => setOpen(false)}>
                {item.name}
              </SidebarLink>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </Appbar>
  );
}
