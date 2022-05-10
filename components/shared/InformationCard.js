import { CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { InfoCard } from "./StyledComponents";

const InformationCard = ({ title, content, icon }) => {
  return (
    <InfoCard>
      <CardMedia>
        <Image alt="cIcon" src={icon} width={168} height={75} />
      </CardMedia>
      <CardContent>
        <Typography
          align="center"
          mb={2}
          sx={{ fontSize: { xs: "16px", sm: "18px" }, fontWeight: "bold" }}
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
    </InfoCard>
  );
};

export default InformationCard;
