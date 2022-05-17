import { Card } from "@mui/material";
import { styled } from "@mui/system";

export const TechInfoCard = styled(Card)(({ theme }) => ({
    height: "370px",
    display: "flex",
    flexDirection: "column",
    border:"none",
    boxShadow:"none",
    alignItems: "center",
    padding: "25px 10px 5px",
  }));