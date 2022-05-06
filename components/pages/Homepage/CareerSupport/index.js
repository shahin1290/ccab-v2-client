import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import { DotGrid } from "../../../../images/svg/CareerSupport";

const CareerSupport = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor="#6364D9"
      color="white"
      mt={{ md: 10, xs: 5 }}
      p={{ md: 0, xs: 5 }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: { lg: "-30px", md: "-50px" },
            left: { lg: "-70px", md: "-10px" },
            display: { xs: "none", md: "block" },
          }}
        >
          <DotGrid fillColor={theme.palette.secondary.main} />
        </Box>

        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={8} order={{ xs: 2, sm: 1 }}>
            <Typography variant="h2">Career Support?</Typography>
            <Box py={{ xs: 1 }}>
              <Typography variant="body1">
                Register yourself now and get real employable skills that top
                companies want.
              </Typography>
            </Box>

            <List>
              {data.map((item) => (
                <ListItem key={item.id} disableGutters>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircleIcon sx={{ fontSize: 8 }} />
                    <Typography variant="body1">{item.content}</Typography>
                  </Stack>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={4} order={{ xs: 1, sm: 2 }}>
            <Box
              sx={{
                color: "blue",
                paddingBottom: "15px",
              }}
            >
              <Image
                priority
                src="/svgImages/HeroImages/CompanySolution.svg"
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

const data = [
  { id: 1, content: "CV writing" },
  { id: 2, content: "Technical Interviews / Mock Interviews" },
  { id: 3, content: "Personal Development Program Portfolio" },
  { id: 4, content: " Network Events" },
];
export default CareerSupport;
