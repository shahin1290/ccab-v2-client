import { BorderAllRounded } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const CustomPriceCard = ({
  bgcolor,
  position,
  name,
  price,
  courseDuration,
}) => {
  const border = 20;
  return (
    <Stack
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 300,
      }}
    >
      <Box
        sx={{
          width: { xs: "85%", sm: "90%" },
          height: 15,
          backgroundColor: bgcolor,
          borderTopLeftRadius: {
            xs: border,
            sm: position === "top" ? border : 0,
          },
          borderTopRightRadius: border,
        }}
      ></Box>

      <Paper
        sx={{
          py: { xs: 2, lg: 5 },
          px: { xs: 3 },
          width: "100%",
          borderRadius: {
            sm: position == "top" ? "20px 20px 0 20px" : "0 20px 20px 20px",
            xs: "20px",
          },
        }}
      >
        <Box
          sx={{
            height: "55%",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontSize: { xs: 16, sm: 20 },
              fontWeight: 700,
            }}
          >
            {name}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            px={{ xs: 1, sm: 2, lg: 4 }}
            py={2}
          >
            <Typography
              color="secondary.contrastText"
              variant="h6"
              sx={{ fontWeight: "normal", fontSize: { xs: 16 } }}
            >
              from
            </Typography>
            <Typography
              variant="h4"
              color={bgcolor}
              sx={{ fontSize: { xs: 25, sm: 30 } }}
            >
              {price}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="h3"
              sx={{ fontWeight: "700", fontSize: { xs: 13 } }}
            >
              Course Duration
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", fontSize: { xs: 12 } }}
            >
              {courseDuration}
            </Typography>
          </Stack>
        </Box>
      </Paper>

      <Box
        sx={{
          width: { xs: "85%", sm: "90%" },
          height: 15,
          backgroundColor: bgcolor,
          borderBottomLeftRadius: border,
          borderBottomRightRadius: {
            xs: border,
            sm: position === "bottom" ? border : 0,
          },
        }}
      ></Box>
    </Stack>
  );
};

export default CustomPriceCard;
