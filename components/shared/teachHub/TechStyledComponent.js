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

  export const PricingInfoCard =styled(Card)(({theme}) =>({
    height: "100%",
    width:"100%",
    display: "flex",
    flexDirection: "column",
    overflow: "inherit",
    border:"none",
    boxShadow:"none",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "15px",
    background:"#F5F6F9"
  }))

  export const PricingInfoCardHeader = styled('div')(({theme}) =>({
    paddingTop:"12px",
    width: "100%",
  }))

  export const PricingInfoCardSubHeader = styled(CardContent)(({theme}) =>({
    width:"105%",
    borderRadius:" 5px ",
  }))

  export const PricingInfoCardFooter = styled(CardContent)(({theme}) =>({
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    borderRadius:"0 0 15px 15px"
  }))
