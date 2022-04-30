import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { CardButton } from "./CustomComponents2";

const CourseCard = ({ image, title, description, link }) => {
  const router = useRouter();
  return (
    <Card
      sx={{ maxWidth: 400 }}
      style={{
        background: "#F7F8FB",
        borderRadius: "20px",
        boxShadow: "none",
      }}
    >
      <Image priority src={image} alt="learning" layout="responsive" />
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
        <CardButton
          variant="contained"
          color="primary"
          onClick={() => router.push(link)}
        >
          Learn More
        </CardButton>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
