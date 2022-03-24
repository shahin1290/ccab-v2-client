import { useState } from "react";
import useStyles from "./styles";
import { SwipeableDrawer, IconButton, Divider, List, ListItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

import logo from "../../../images/Logo.svg";
import Link from "next/link";

const sideLinks = [
  { name: "Home", to: "/" },
  { name: "Job", to: "/job" },
  { name: "Login", to: "/" },
  { name: "Register", to: "/" },
];

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  let activeStyle = {
    borderTop: "3px solid  #ffffff",
  };

  return (
    <nav className={classes.appbar}>
      <div className={classes.navbarContainer}>
        <Link href="/" className={classes.navlogo} passHref>
          <Image src={logo} alt="codify logo" className={classes.logo} />
        </Link>

        <div className={classes.mobileIcon} onClick={() => setOpen(true)}>
          <MenuIcon style={{ fontSize: "2rem" }} />
        </div>

        <div className={classes.wrap}>
          <ul className={classes.navMenu}>
            <li className={classes.navItem}>
              <Link
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                href="/"
                className={classes.navLinks}>
                Home
              </Link>
            </li>
            <li className={classes.navItem}>
              <Link
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                href="/job"
                className={classes.navLinks}>
                Jobs
              </Link>
            </li>
          </ul>

          <div className={classes.buttonWrap}>
            <Link href="/" className={classes.navLinks} passHref>
              <button className={classes.button}>Login</button>
            </Link>
            <Link href="/" className={classes.navLinks} passHref>
              <button className={classes.button2}>Register</button>
            </Link>
          </div>
        </div>
      </div>

      <SwipeableDrawer anchor="top" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <div onClick={() => setOpen(false)} onKeyPress={() => setOpen(false)} role="button" tabIndex={0}>
          <IconButton>
            <CloseIcon style={{ color: "#6162D8", fontSize: "2rem" }} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {sideLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                to={item.to}
                className={classes.sidebarLink}
                onClick={() => setOpen(false)}
                nKeyPress={() => setOpen(false)}>
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </nav>
  );
}
