import { Card, CardContent } from "@mui/material";
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

  export const SubjectInfoCard = styled(Card)(({theme}) =>({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border:"none",
    boxShadow:"none",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "20px",
  }))

  export const SubjectInfoCardHeader = styled('div')(({theme}) =>({
    paddingTop:"12px",
    width: "100%",
    borderRadius:" 20px 20px 0 0",
    color: "#fff",
  }))

  export const SubjectInfoCardSubHeader = styled(CardContent)(({theme}) =>({
    borderBottom: "1px solid ",
  }))