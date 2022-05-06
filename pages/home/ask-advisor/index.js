import {
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  FilledInput,
  InputLabel,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import { SecondaryButton } from "../../../components/shared/StyledComponents";

const CardInputField = ({ label, placeholder }) => {
  return (
    <Box sx={{ mx: 2, my: { md: 5, sm: 1 } }}>
      <InputLabel
        required
        sx={{
          fontWeight: "bold",
          mb: 1,
          ml: 1,
          "& .MuiInputLabel-asterisk": { color: "red" },
        }}
      >
        {label}
      </InputLabel>
      <FilledInput
        fullWidth
        sx={{ borderRadius: 3 }}
        disableUnderline
        multiline={label.toLowerCase().includes("question")}
        rows={label.toLowerCase().includes("question") ? 5 : 0}
      />
    </Box>
  );
};

const AskAdvisorScreen = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        background: theme.palette.primary.background,
        height: { xl: "1300px", lg: "1100px", sm: "1000px", xs: "900px" },
        position: "relative",
      }}
      maxWidth={false}
    >
      <Box
        bgcolor="primary.main"
        sx={{
          width: { xs: "350px", sm: "500px", lg: "500px", xl: "650px" },
          height: { xs: "650px", sm: "850px", lg: "900px", xl: "1200px" },
          borderRadius: "400px 400px 0 0",
          position: "absolute",
          left: "-130px",
          transform: "rotate(45deg)",
        }}
      >
        <Box
          sx={{
            transform: "rotate(-45deg)",
            position: "absolute",
            top: { lg: "25%", md: "30%", sm: "32%", xs: "12%" },
            left: { lg: "20%", md: "14%", sm: "24%", xs: "10%" },
            color: "primary.contrastText",
            width: {
              xl: "16vw",
              lg: "20vw",
              md: "20vw",
              sm: "30vw",
              xs: "50vw",
            },
          }}
        >
          <Typography
            fontSize={{ lg: "35px", sm: "25px", xs: "22px" }}
            fontWeight={{ xs: "bold" }}
            pb={2}
          >
            Ask an advisor
          </Typography>

          <Typography variant="body1" letterSpacing={1.5}>
            Enter your question(s) in the area provided below. Your question
            will be emailed to the appropriate person.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          transform: "translate(-50%,-50%)",
          top: { xl: "50%", md: "55%", sm: "50%", xs: "60%" },
          left: { md: "50%", sm: "65%", xs: "50%" },
        }}
      >
        <Paper
          sx={{
            placeItems: "center",
            p: { xl: 7, lg: 5, md: 3, xs: 2 },
            width: { xs: "85vw", sm: "50vw", xl: "40vw", lg: "45vw" },
            borderRadius: "20px",
          }}
        >
          <CardInputField label="First Name" />

          <CardInputField label="Last Name" />

          <CardInputField label="Email Address" />

          <CardInputField label="Question(s)" />
          <Stack justifyContent="center" alignItems="center">
            <SecondaryButton
              variant="contained"
              color="primary"
              sx={{ px: { xl: 15, lg: 13 }, mt: { xs: 5, sm: 1 } }}
            >
              Submit
            </SecondaryButton>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
};

export default AskAdvisorScreen;
