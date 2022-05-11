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
  MongoBDIcon,
  NodeIcon,
  PythonIcon,
  ReactIcon,
  FlutterIcon,
  DartIcon,
} from "../../../../images/svg/TechStack";

const TechStack = () => {
  const theme = useTheme();
  const matchSmall = useMediaQuery("(min-width:800px)");
  const matchXSmall = useMediaQuery("(min-width:0)");
  const match = matchSmall ? 1 : matchXSmall ? 0.7 : 1;

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: { md: 15, xs: 4 },
      }}
    >
      <Grid container spacing={{ md: 1, xs: 1 }} sx={{ pb: 6 }}>
        <Grid xs={12} lg={6} item pb={5}>
          <Typography align="center" variant={matchSmall ? "h3" : "h4"} pb={3}>
            Front End
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            p={{ md: 2, lg: 5, xs: 1 }}
            sx={{
              boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
              borderTop: `8px solid ${theme.palette.primary.main}`,
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <HtmlIcon size={match} />
              <Typography>HTML</Typography>
            </Stack>

            <Stack alignItems="center" spacing={1}>
              <CssIcon size={match} />
              <Typography>CSS</Typography>
            </Stack>

            <Stack alignItems="center" spacing={1}>
              <JsIcon size={match} />
              <Typography>JS</Typography>
            </Stack>

            <Stack alignItems="center" spacing={1}>
              <ReactIcon size={match} />
              <Typography>React</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid xs={6} lg={3} item>
          <Typography align="center" variant={matchSmall ? "h3" : "h4"} pb={3}>
            Back-end
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            p={{ md: 2, lg: 5, xs: 1 }}
            sx={{
              boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
              borderTop: `8px solid ${theme.palette.secondary.main}`,
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <NodeIcon size={match} />
              <Typography>Node JS</Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <PythonIcon size={match} />
              <Typography>Python</Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={6} lg={3} item>
          <Typography align="center" variant={matchSmall ? "h3" : "h4"} pb={3}>
            Mobile Development
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            p={{ md: 2, lg: 5, xs: 1 }}
            sx={{
              boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
              borderTop: `8px solid ${theme.palette.secondary.main}`,
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Stack alignItems="center" spacing={1}>
              <FlutterIcon size={match} />
              <Typography>Flutter</Typography>
            </Stack>
            <Stack alignItems="center" spacing={1}>
              <DartIcon size={match} />
              <Typography>Dart</Typography>
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
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            p={{ md: 2, lg: 5, xs: 1 }}
            sx={{
              boxShadow: "0 10px 8px rgba(0,0,0,0.1)",
              borderTop: `8px solid ${theme.palette.tertiary.main}`,
              borderRadius: "5px 5px 0 0",
            }}
          >
            <Stack direction="row" spacing={{ xs: 5, sm: 2, md: 5, lg: 14 }}>
              <Stack alignItems="center" spacing={1}>
                <ReactIcon size={match} />
                <Typography>React</Typography>
              </Stack>
              <Stack alignItems="center" spacing={1}>
                <NodeIcon size={match} />
                <Typography>Node JS</Typography>
              </Stack>
              <Stack alignItems="center" spacing={1}>
                <MongoBDIcon size={match} />
                <Typography>Database</Typography>
              </Stack>
            </Stack>
            <Typography variant={matchSmall ? "h3" : "h4"}>OR</Typography>
            <Stack direction="row" spacing={{ xs: 7, sm: 2, md: 5, lg: 14 }}>
              <Stack alignItems="center" spacing={1}>
                <ReactIcon size={match} />
                <Typography>React</Typography>
              </Stack>
              <Stack alignItems="center" spacing={1}>
                <PythonIcon size={match} />
                <Typography>Python</Typography>
              </Stack>
              <Stack alignItems="center" spacing={1}>
                <MongoBDIcon size={match} />
                <Typography>Database</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TechStack;
