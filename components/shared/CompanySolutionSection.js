import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardButton } from "./StyledComponents";
import Image from "next/image";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function CompanySolutionSection({
  imageUrl,
  title,
  description,
  slug,
  subDirectory,
}) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          mb: { xs: 5, sm: 15 },
        }}
      >
        <Box
          bgcolor={theme.palette.primary.main}
          p={1}
          sx={{
            maxWidth: "320px",
            height: "auto",
            borderRadius: { sm: "20px 0 0 20px", xs: "20px  20px 0 0" },
          }}
        >
          <Image src={imageUrl} alt="image" width={500} height={500} />
        </Box>

        <Box
          bgcolor={theme.palette.primary.background}
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "320px",
            borderRadius: { sm: "0 20px 20px 0", xs: "0 0 20px  20px " },
          }}
        >
          <Box
            p={3}
            sx={{
              height: "auto",
            }}
          >
            <Typography component="div" variant="h3" pb={2}>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div">
              {description}
            </Typography>

            <CardButton
              variant="contained"
              color="secondary"
              onClick={() => {
                router.push(`/${subDirectory}/${slug}`);
              }}
            >
              Read More
            </CardButton>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}
