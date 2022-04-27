import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, useTheme } from "@mui/system";
import React from "react";
import {
  CssIcon,
  HtmlIcon,
  JsIcon,
  MySQLIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
} from "../../../images/svg/TechStack";

const TechStack = () => {
  const theme = useTheme();
  const matchSmall = useMediaQuery("(min-width:500px)");
  const matchXSmall = useMediaQuery("(min-width:0)");
  const match = matchSmall ? 1 : matchXSmall ? 0.5 : 1;

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: { md: 15, xs: 4 },
      }}
    >
      <Grid container spacing={{ md: 8, xs: 1 }} sx={{ pb: 6 }}>
        <Grid xs={8} item>
          <Typography align="center" variant={matchSmall ? "h3" : "h4"} pb={3}>
            Front End
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            p={{ md: 5, xs: 1 }}
            sx={{
              boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
              borderTop: `8px solid ${theme.palette.primary.main}`,
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <HtmlIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                HTML
              </Typography>
            </Stack>

            <Stack alignItems="center" spacing={1}>
              <CssIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>CSS</Typography>
            </Stack>

            <Stack alignItems="center" spacing={1}>
              <JsIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>JS</Typography>
            </Stack>

            <Stack alignItems="center" spacing={1}>
              <ReactIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                React
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={4} item>
          <Typography align="center" variant={matchSmall ? "h3" : "h4"} pb={3}>
            Back-end
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            p={{ md: 5, xs: 1 }}
            sx={{
              boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
              borderTop: `8px solid ${theme.palette.secondary.main}`,
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <NodeIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Node JS
              </Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <PythonIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Python
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Grid container>
        <Grid xs={12} item>
          <Typography align="center" variant={matchSmall ? "h3" : "h4"} pb={3}>
            Full-stack
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={{ md: 5, xs: 1 }}
            sx={{
              boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
              borderTop: `8px solid ${theme.palette.tertiary.main}`,
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <ReactIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                React
              </Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <NodeIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Node JS
              </Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <MySQLIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Database
              </Typography>
            </Stack>
            <Typography variant={matchSmall ? "h3" : "h4"}>OR</Typography>

            <Stack alignItems="center" spacing={1}>
              <ReactIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                React
              </Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <PythonIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Python
              </Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <MySQLIcon size={match} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Database
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TechStack;
