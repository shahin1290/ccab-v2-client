import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Underline from "../../images/svg/Underline";
import OtherSolutionCard from "./OtherSolutionCard";

const OtherSections = ({ solutionData, currentItem, identifier }) => {
  console.log(currentItem, identifier);
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pt: { xs: 5, md: 10 },
          pb: { xs: 5, md: 10 },
        }}
      >
        <Typography variant="h3" mb={2}>
          Other Solutions
        </Typography>
        <Underline />
      </Box>
      <Grid
        container
        sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
      >
        {solutionData
          .filter((item) => item[identifier] !== currentItem)
          .map((item, index) => (
            <Grid item key={index} sm={12} lg={6}>
              <OtherSolutionCard
                imageUrl={item.HeroImage}
                title={item.header + " " + item.subheader}
                description={item.description}
                slug={item.slug}
                subDirectory="company"
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default OtherSections;
