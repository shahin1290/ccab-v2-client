import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { CardButton } from "./CustomComponents2";

export default function CustomCompanySolutionsCard({
  imageUrl,
  title,
  description,
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{ display: "flex", border: "none", boxShadow: "none" }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        sx={{ maxWidth: 300 }}
        image={imageUrl}
        alt="Live from space album cover"
      />

      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 300 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
         
          >
            {description}
          </Typography>

          <CardButton
            variant="contained"
            color="secondary"
            onClick={() => router.push("/course")}
          >
            Read More
          </CardButton>
        </CardContent>
      </Box>
    </Card>
  );
}
