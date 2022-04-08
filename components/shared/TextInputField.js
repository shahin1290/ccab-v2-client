import { TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";

const TextInputField = ({
  FieldLabel,
  required = false,
  multiline = false,
  rows = 1,
}) => {
  const theme = useTheme();
  return (
    <TextField
      label={
        <Typography
          variant="body1"
          color="primary"
          sx={{
            display: "inline",
            color: theme.palette.secondary.contrastText,
          }}
        >
          {FieldLabel}
        </Typography>
      }
      required={required}
      fullWidth
      variant="filled"
      multiline={multiline}
      rows={rows}
      sx={{
        borderRadius: 3,
        color: "black",
        backgroundColor: theme.palette.common.white,
        "&:hover": { backgroundColor: theme.palette.common.white },
        "& .MuiFilledInput-root": {
          background: "transparent !important",
        },
      }}
      InputProps={{ sx: { fontWeight: "bold" }, disableUnderline: true }}
      InputLabelProps={{
        sx: { color: "red", background: "transparent !important" },
      }}
    />
  );
};

export default TextInputField;
