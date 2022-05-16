import { Container, Box, Grid } from "@mui/material";
import InformationCard from "../../../shared/InformationCard";
import Header from "../../../shared/Header";

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
        <Header title={title} subTitle={subTitle} color="secondary" />
        <Grid
          container
          sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
          gap={2}
        >
          {cardData.map((item) => {
            return (
              <Grid item key={item.id} sx={{ width: 290 }}>
                <InformationCard
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatStandsOut;
