import { Box, Grid, Link } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Image from "next/image";
import logo from "../images/Logo.svg";
import styled from "@emotion/styled";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterLink = styled(Link)({
  textDecoration: "none",
});

export default function Footer() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <footer>
      <Box px={{ lg: 10, md: 5, xs: 5 }} bgcolor="#161616" color="white">
        <Grid container spacing={2} align={matches ? "center" : "start"}>
          <Grid item xs={12} sm={6} md={4}>
            <Box py={{ xs: 2 }}>
              <Image src={logo} alt="company-logo" width="100" height="100" />
            </Box>
            <Box pr={{ xl: 25, lg: 15, md: 10, xs: 2 }} color="white">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </Box>
            <Box
              pt={{ xs: 2 }}
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: `${matches ? "center" : "start"}`,
              }}
            >
              <FacebookRoundedIcon
                sx={{
                  color: "#6364D9",
                }}
              />

              <LinkedInIcon
                sx={{
                  color: "#6364D9",
                }}
              />

              <TwitterIcon
                sx={{
                  color: "#6364D9",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{ color: "#6364D9", fontWeight: "bold" }}
              pt={{ xs: 2, md: 10 }}
              pb={{ xs: 3 }}
            >
              Services
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                Foundation Course
              </FooterLink>
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                Front-end Full Course
              </FooterLink>
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                Mern Full-Stack Developer
              </FooterLink>
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                Career Support
              </FooterLink>
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                Comprehendive Curriculum
              </FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={2} sm={6}>
            <Box
              pt={{ xs: 2, md: 10 }}
              pb={{ xs: 3 }}
              sx={{ color: "#6364D9", fontWeight: "bold" }}
            >
              Quick Links
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                About Us
              </FooterLink>
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                Contact Us
              </FooterLink>
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                FAQs
              </FooterLink>
            </Box>
            <Box pb={{ xs: 3 }}>
              <FooterLink href="/" color="inherit">
                Privacy Policy
              </FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              pt={{ xs: 2, md: 10 }}
              pb={{ xs: 3 }}
              sx={{ color: "#6364D9", fontWeight: "bold" }}
            >
              Contact Us
            </Box>
            <Box
              pb={{ xs: 2 }}
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <PinDropIcon sx={{ fontSize: "20px", color: "#6364D9" }} />

              <FooterLink href="/" color="inherit">
                Rontgenvagen 1, 141 52, Huddinge, Stockholm, Sweden
              </FooterLink>
            </Box>
            <Box
              pb={{ xs: 5 }}
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <LocalPostOfficeIcon
                sx={{ fontSize: "20px", color: "#6364D9" }}
              />

              <FooterLink href="/" color="inherit">
                info@codifycollege.se
              </FooterLink>
            </Box>
          </Grid>
        </Grid>
        <Box py={{ xs: 5 }} color="#fff">
          {new Date().getFullYear()} &copy; CF College AB. Designed by CF
          College AB
        </Box>
      </Box>
    </footer>
  );
}
