import {
  Container,
  Stack,
  Box,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { SecondaryButton } from "../../shared/CustomComponents";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";

import Underline from "../../../images/svg/Underline";

const Services = ({ title, detailParagraphs, imageUrl, bgcolor, slug }) => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:900px)");
  const router = useRouter();

  return (
    <Box bgcolor={bgcolor}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py: { xs: 3, md: 10 },
          gap: { xs: 5, md: 2 },
        }}
      >
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3" mb={2}>
            {title}
          </Typography>
          <Underline />
        </Stack>
        <Grid
          container
          justifyContent={{ lg: "space-between", xs: "center" }}
          spacing={{ xs: 0, md: 15 }}
          alignItems="center"
        >
          <Grid item md={7} xs={12}>
            <Stack
              spacing={4}
              justifyContent="center"
              alignItems={{ xs: "center", md: "start" }}
              px={{ xs: 2, md: 5 }}
            >
              {detailParagraphs.map((p) => (
                <Typography
                  variant="body1"
                  sx={{
                    color: "secondary.contrastText",
                    textAlign: { xs: "center", md: "left" },
                  }}
                  key={p.id}
                >
                  {p.text}
                </Typography>
              ))}

              {!matches && (
                <SecondaryButton
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    console.log("clicked");
                    router.push(`/services/${slug}`);
                  }}
                >
                  Read More
                </SecondaryButton>
              )}
            </Stack>
          </Grid>
          <Grid item md={5} sm={6} xs={12}>
            <Image
              src={imageUrl}
              alt={title}
              width={500}
              height={500}
              layout="responsive"
            />
          </Grid>
        </Grid>
        {matches && (
          <Stack justifyContent="center" alignItems="center">
            <SecondaryButton
              variant="contained"
              color="secondary"
              onClick={() => {
                console.log("clicked");
                router.push(`/services/${slug}`);
              }}
            >
              Read More
            </SecondaryButton>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Services;
