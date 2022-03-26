import { useTheme } from "@emotion/react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import CustomCard from "../../shared/CustomCard";

const data = {
  title: "Fully Flexible Self-Paced Online Learning",
  content: [
    "Interest-free payment option of 5-6 months Alternatively, you may sign up for up to 36 months with Klarna, which includes complete access to the materials for 6 months and 9-15 weeks of mentor assistance, which includes access to the support platform, 1:1 sessions, and our Slack chat group.",
    "If you require additional time and mentor help to complete the bootcamp, you may extend it on a weekly basis for 99€ each week, allowing you to study at your own speed while still receiving all of the support and direction we give.",
    "As a result, you may finish the bootcamp according to your schedule and learning pace – from a full-time intense 3-6 months to a longer period, just as we do with our in-person group on campus.",
  ],
};

const Tuition = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="primary.background" py={10}>
      <Container maxWidth="xl">
        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h3">Tuition</Typography>
          <Typography variant="subtitle2">
            We conduct discount programs from time to time, so the price may be lower
          </Typography>
        </Stack>
        <Grid container alignItems="start" justifyContent="space-between" mt={10} spacing={1} wrap="wrap-reverse">
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              height: "100%",
              alignItems: "start",
              justifyContent: "start",
              display: "flex",
            }}>
            <Stack direction="column" spacing={3}>
              <Typography variant="h4" sx={{ color: "primary.main" }}>
                {data.title}
              </Typography>
              {data.content.map((item, index) => {
                return (
                  <Typography variant="body1" sx={{ color: "secondary.contrastText" }} key={index}>
                    {item}
                  </Typography>
                );
              })}
            </Stack>
          </Grid>
          <Grid
            item
            md={5}
            sm={10}
            xs={12}
            sx={{
              mb: 5,
              width: "100%",
              maxWidth: "500px",
              display: "grid",
              // justifyContent: "center",
              // alignItems: "center",
              // backgroundColor: "red",
              height: "100%",
              // gridTemplateColumns: "40% 20% 40%",
              // gridTemplateRows: "45%  10% 45% ",
              gridTemplateColumns: "minmax(40%, 200px) minmax(20%, 100px) minmax(40%, 200px)",
              gridTemplateRows: "minmax(45%, 80px) minmax(5%, 20px) minmax(45%, 80px)",

              justifyItems: { xs: "center", sm: "end" },
              alignContent: "center",
            }}>
            <CustomCard
              price="2000€"
              duration="3-5"
              durationType="months"
              cardColor={theme.palette.primary.main}
              sx={{
                position: "relative",
                zIndex: 1,
                gridColumn: "1 / 3",
                gridRow: "1 / 3",
                width: { sm: 300, xs: 230 },
              }}
            />
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ gridColumn: "3 ", gridRow: "1", alignSelf: "center", justifySelf: "center" }}>
              Course Fees
            </Typography>
            <CustomCard
              price="2000€"
              duration="3-5"
              durationType="months"
              cardColor={theme.palette.secondary.main}
              sx={{
                position: "relative",
                zIndex: 2,
                gridColumn: "2 / 4",
                gridRow: "2 / 4",
                width: { sm: 300, xs: 230 },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Tuition;
