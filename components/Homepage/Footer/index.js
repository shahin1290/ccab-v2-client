import { Box, Grid, Link } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Image from "next/image";
import logo from "../../../images/Logo.svg";
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
              <Box
                bgcolor="#6364D9"
                sx={{
                  width:"2.4em",
                  height:"2.4em",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="2em"
                  height="2em"
                  
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.545 15.025v-2.421h2.422v-1.815h-2.422V8.368H17.73v2.421h-2.421v1.815h2.421v2.421zM8.052 8.302c1.133 0 1.896.484 2.33.896l1.722-1.67c-1.048-.98-2.415-1.58-4.052-1.58C4.714 5.947 2 8.659 2 12s2.714 6.053 6.052 6.053c3.493 0 5.812-2.457 5.812-5.913c0-.503-.064-.86-.153-1.24H8.049v2.256h3.332c-.158.951-1.011 2.556-3.329 2.556c-2.003 0-3.637-1.665-3.637-3.704c0-2.042 1.634-3.706 3.637-3.706z"
                  />
                </svg>
              </Box>
              <Box
                bgcolor="#6364D9"
                sx={{
                  borderRadius: "50%",
                  width:"2.4em",
                  height:"2.4em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.4em"
                  height="1.4em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="white"
                    d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </Box>
              <Box
                bgcolor="#6364D9"
                sx={{
                  borderRadius: "50%",
                  width:"2.4em",
                  height:"2.4em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1.5em"
                  height="1.5em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"
                  />
                </svg>
              </Box>
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
