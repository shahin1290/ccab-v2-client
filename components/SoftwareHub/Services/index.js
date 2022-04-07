import { Box, useTheme } from "@mui/system";
import React from "react";
import CustomServiceCard from "./CustomServiceCard";
import SoftwareServiceData from "../../../dummydata/SoftwareServicesData";

const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      {SoftwareServiceData.map((item, index) => {
        return (
          <CustomServiceCard
            key={item.slug}
            slug={item.slug}
            title={item.header + " " + item.subheader}
            detailParagraphs={item.detailParagraphs}
            imageUrl={item.HeroImage}
            bgcolor={
              index % 2 !== 0
                ? theme.palette.primary.background
                : theme.palette.common.white
            }
          />
        );
      })}
    </Box>
  );
};

export default Services;
