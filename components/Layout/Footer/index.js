import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../images/Logo.svg";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PinDropIcon from "@mui/icons-material/PinDrop";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";

const FooterLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    color: "#b1b2ec",
  },
}));

export default function Footer({
  logoLink,
  description,
  services,
  quickLinks,
  contactUs,
  copyrightText,
  socialLinks,
}) {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <footer>
      <Box px={{ lg: 10, md: 5, xs: 5 }} bgcolor="#161616" color="white">
        <Grid container spacing={2} align={matches ? "center" : "start"}>
          <Grid item xs={12} sm={6} md={4}>
            <Box py={{ xs: 2 }}>
              <Image
                priority
                src={logoLink}
                alt="company-logo"
                width="100"
                height="100"
              />
            </Box>
            <Box pr={{ xl: 25, lg: 15, md: 10, xs: 2 }} color="white">
              <Typography variant="body2">{description}</Typography>
            </Box>
            <Box
              pt={{ xs: 2 }}
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: `${matches ? "center" : "start"}`,
              }}
            >
              <Link
                href={socialLinks.gogglePlus}
                sx={{
                  backgroundColor: "#6364D9",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#4f50ae",
                  },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M19.545 15.025v-2.421h2.422v-1.815h-2.422V8.368H17.73v2.421h-2.421v1.815h2.421v2.421zM8.052 8.302c1.133 0 1.896.484 2.33.896l1.722-1.67c-1.048-.98-2.415-1.58-4.052-1.58C4.714 5.947 2 8.659 2 12s2.714 6.053 6.052 6.053c3.493 0 5.812-2.457 5.812-5.913c0-.503-.064-.86-.153-1.24H8.049v2.256h3.332c-.158.951-1.011 2.556-3.329 2.556c-2.003 0-3.637-1.665-3.637-3.704c0-2.042 1.634-3.706 3.637-3.706z"
                  />
                </svg>
              </Link>
              <Link
                href={socialLinks.facebook}
                sx={{
                  backgroundColor: "#6364D9",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#4f50ae",
                  },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="12px"
                  height="12px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="white"
                    d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </Link>
              <Link
                href={socialLinks.linkedin}
                sx={{
                  backgroundColor: "#6364D9",
                  borderRadius: "50%",
                  width: "22px",
                  height: "22px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&:hover": {
                    backgroundColor: "#4f50ae",
                  },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="15px"
                  height="15px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#fff"
                    d="M8.268 28H2.463V9.306h5.805zM5.362 6.756C3.506 6.756 2 5.218 2 3.362a3.362 3.362 0 0 1 6.724 0c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-.044-4.95-3.018-4.95c-3.018 0-3.481 2.356-3.481 4.794V28h-5.799V9.306h5.567v2.55h.081c.775-1.469 2.668-3.019 5.492-3.019c5.875 0 6.955 3.869 6.955 8.894V28z"
                  />
                </svg>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{ color: "#6364D9", fontWeight: "bold" }}
              pt={{ xs: 2, md: 10 }}
              pb={{ xs: 3 }}
            >
              <Typography variant="body1">Services</Typography>
            </Box>

            {services.map((item) => (
              <Box key={item.id} pb={{ xs: 3 }}>
                <FooterLink href={item.link} color="inherit">
                  <Typography variant="body1">{item.name}</Typography>
                </FooterLink>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={2} sm={6}>
            <Box
              pt={{ xs: 2, md: 10 }}
              pb={{ xs: 3 }}
              sx={{ color: "#6364D9", fontWeight: "bold" }}
            >
              <Typography variant="body1">Quick Links</Typography>
            </Box>

            {quickLinks.map((item) => (
              <Box key={item.id} pb={{ xs: 3 }}>
                <FooterLink href={item.link} color="inherit">
                  <Typography variant="body1">{item.name}</Typography>
                </FooterLink>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box
              pt={{ xs: 2, md: 10 }}
              pb={{ xs: 3 }}
              sx={{ color: "#6364D9", fontWeight: "bold" }}
            >
              <Typography variant="body1"> Contact Us</Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <PinDropIcon sx={{ fontSize: "20px", color: "#6364D9" }} />

              <FooterLink href="/" color="inherit">
                <Typography variant="body1">{contactUs.address}</Typography>
              </FooterLink>
            </Stack>
            <Box
              py={{ xs: 3 }}
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <LocalPostOfficeIcon
                sx={{ fontSize: "20px", color: "#6364D9" }}
              />

              <FooterLink href="/" color="inherit">
                <Typography variant="body1"> {contactUs.email}</Typography>
              </FooterLink>
            </Box>
          </Grid>
        </Grid>
        <Box py={{ xs: 5 }} color="#fff">
          <Typography variant="body1">
            {new Date().getFullYear()} &copy; {copyrightText}
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}
