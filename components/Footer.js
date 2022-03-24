import { Box, Container, Grid } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Box
        py={{ xs: 5, sm: 10 }}
        px={{ lg: 10, md: 5, xs: 5 }}
        bgcolor="#161616"
        color="white"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box pb={{ xs: 2 }}>
              <Image
                src="/images/CF.png"
                alt="company-logo"
                width="100"
                height="100"
              />
            </Box>
            <Box pr={{ xl: 25, lg: 15, md: 10, xs: 2 }} color="white">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati.
            </Box>
            <Box
              pt={{ xs: 2 }}
              color="#fff"
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <FacebookRoundedIcon />
              <FacebookRoundedIcon />
              <FacebookRoundedIcon />
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box sx={{ color: "#6364D9" }} pb={{ xs: 5 }}>
              Services
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Foundation Course
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Front-end Full Course
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Mern Full-Stack Developer
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Career Support
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Comprehendive Curriculum
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Box pb={{ xs: 5 }} sx={{ color: "#6364D9" }}>
              Quick Links
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                About Us
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Contact Us
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                FAQs
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box pb={{ xs: 5 }} sx={{ color: "#6364D9" }}>
              Contact Us
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                Rontgenvagen 1, 141 52, Huddinge, Stockholm, Sweden
              </Link>
            </Box>
            <Box pb={{ xs: 5 }}>
              <Link href="/" color="inherit">
                info@codifycollege.se
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }} color="#fff">
          {new Date().getFullYear()} &copy; CF College AB. Designed by CF
          College AB
        </Box>
      </Box>
    </footer>
  );
}
