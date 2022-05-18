import { CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TechInfoCard } from "./TechStyledComponent";

const PricingOffers = ({ title, content, icon }) => {
  return (
    <TechInfoCard>
      <CardMedia>
        <Image alt="cIcon" src={icon} width={140} height={125} />
      </CardMedia>
      <CardContent>
        <Typography
          align="center"
          mb={2}
          sx={{ fontSize: { xs: "16px", sm: "18px" }, fontWeight: "bold", whiteSpace:"nowrap" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "secondary.contrastText" }}
          align="center"
        >
          {content}
        </Typography>
      </CardContent>
    </TechInfoCard>
  );
};

export default PricingOffers;
