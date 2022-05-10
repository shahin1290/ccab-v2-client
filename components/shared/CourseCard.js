import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { CardButton, ImageWrapper, TextWrapper } from "./StyledComponents";

const CourseCard = ({ image, title, description, slug }) => {
  const router = useRouter();
  return (
    <Card
      sx={{ maxWidth: 345, height:"100%"  }}
      style={{
        display: 'flex',
        flexDirection:'column',
        background: "#F7F8FB",
        borderRadius: "20px",
        boxShadow: "none",
      }}
    >
      <ImageWrapper>
      <Image
        priority
        src={image}
        alt="learning"
        layout="responsive"
        width={375}
        height={250}
      />
      </ImageWrapper>
      <CardContent style={{ textAlign: "center",  }} >
        <Typography variant="h6" align="center" mb={2}  >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "secondary.contrastText", padding: "0.8rem",   }}
        >
          {description}
        </Typography>
        <CardButton
          variant="contained"
          color="primary"
          style={{}}
          onClick={() => router.push(`/home/course-details/${slug}`)}
        >
          Learn More
        </CardButton>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
