import { useTheme } from "@emotion/react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { TextWrapper } from "../../../shared/StyledComponents";
import Image from "next/image";

const CurriculumContent = ({
  description,
  largeContent,
  smallContent,
  list,
}) => {
  const theme = useTheme();

  const LgContent =
    list && largeContent ? (
      largeContent
    ) : (
      <Image
        src={largeContent}
        alt="Curriculum Image"
        objectFit="contain"
        layout="responsive"
        width={1000}
        height={500}
      />
    );
  const SmContent =
    list && smallContent ? (
      smallContent
    ) : (
      <Image
        src={smallContent}
        alt="Curriculum Image"
        objectFit="contain"
        layout="fixed"
        width={350}
        height={1200}
      />
    );
  return (
    <Container maxWidth="lg">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: theme.palette.primary.background,
        }}
      >
        <TextWrapper sx={{ padding: 0 }}>
          <Typography
            variant="h6"
            sx={{ color: "secondary.contrastText", padding: "0.8rem", mb: 3 }}
          >
            {description}
          </Typography>
        </TextWrapper>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
              width: "100%",
              height: "auto",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {LgContent}
        </Box>
        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          {SmContent}
        </Box>
      </Stack>
    </Container>
  );
};

export default CurriculumContent;
