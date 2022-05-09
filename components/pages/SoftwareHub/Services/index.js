import { Box, useTheme } from "@mui/system";
import React from "react";
import OverviewSection from "../../../shared/OverviewSection";
// import SoftwareServiceData from "../../../../dummydata/SoftwareServicesData";

const Services = ({SoftwareServiceData}) => {
  const theme = useTheme();
  return (
    <Box>
      {SoftwareServiceData?.map((item, index) => {
        return (
          <OverviewSection
            key={item.slug}
            slug={item.slug}
            subDirectory="software-hub"
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
