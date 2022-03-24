import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

const CareerSupport = () => {
  return (
    <Box bgcolor="#6364D9" color="white">
      <Container maxWidth="lg">
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Career Support?
            </Typography>
            <Box py={{ xs: 1 }}>
              Register yourself now and get real employable skills that top
              companies want.
            </Box>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "15px",
              }}
            >
              <li>CV writing </li>
              <li>Tecknical Interviews / Mock Interviews </li>
              <li>Personal Development Program Portfolio </li>
              <li>Networking Events </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                color: "blue",
                paddingBottom: "15px",
              }}
            >
              <Image
                src="/images/career-support.png"
                alt="company-logo"
                width="400"
                height="400"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CareerSupport;
