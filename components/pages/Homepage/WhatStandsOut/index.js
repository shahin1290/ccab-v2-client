import {
  Container,
  Stack,
  Box,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Underline from "../../../../images/svg/Underline";

import {
  InfoCard,
} from "../../../shared/StyledComponents";

const WhatStandsOut = ({ title, subTitle, cardData }) => {
  return (
    <Box bgcolor="primary.main">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          my: { xs: 2, md: 5 },
          py: { xs: 3, md: 10 },
          gap: { xs: 5, md: 10 },
        }}
      >
        <Stack justifyContent="center" alignItems="center" spacing={1}>
          <Typography variant="h3" sx={{ color: "primary.contrastText" }}>
            {title}
          </Typography>
          <Underline fill="#fff" />
          <Typography
            variant="h6"
            sx={{ color: "primary.contrastText", fontWeight: "normal" }}
            pt={1}
          >
            {subTitle}
          </Typography>
        </Stack>

        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
          gap={2}
        >
          {cardData.map((item) => {
            return (
              <Grid item key={item.id} sx={{ width: 290 }}>
                <InfoCard>
                  <CardMedia>
                    <Image
                      alt="company-logo"
                      src={item.icon}
                      width={168}
                      height={75}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" align="center" mb={2}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "secondary.contrastText" }}
                      align="center"
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
                </InfoCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatStandsOut;
