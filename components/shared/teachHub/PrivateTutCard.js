import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ImageWrapper } from "../StyledComponents";

const PrivateTutCard = ({coverImage, title, description}) => {
    const router = useRouter();
  
    return (
        <Card
        sx={{ maxWidth: 345, height: "100%" }}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#fff",
          borderRadius: "20px",
          boxShadow: "none",
        }}
      >
        <ImageWrapper>
          <Image
            priority
            src={coverImage}
            alt="learning"
            layout="responsive"
            width={375}
            height={250}
          />
        </ImageWrapper>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h6" align="center" mb={2}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "secondary.contrastText", padding: "0.8rem" }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
  )
}

export default PrivateTutCard