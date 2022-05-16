import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import React from "react";
import Underline from "../../images/svg/Underline";

const Header = ({ title, subTitle, color }) => {
  const theme = useTheme();
  return (
    <Stack justifyContent="center" alignItems="center" spacing={1}>
      <Typography
        variant="h3"
        sx={{
          color: color === "primary" ? "#000" : "primary.contrastText",
        }}
      >
        {title}
      </Typography>
      <Underline
        fill={color === "primary" ? theme.palette.primary.main : "#fff"}
      />
      {subTitle && (
        <Typography
          variant="h6"
          sx={{
            color: color === "primary" ? "secondary.contrastText" : "#fff",
            fontWeight: "bold",
          }}
          pt={1}
        >
          {subTitle}
        </Typography>
      )}
    </Stack>
  );
};

export default Header;
