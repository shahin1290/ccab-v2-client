import { Box, useTheme } from "@mui/system";
import React from "react";
import CompanySolutionsData from "../../../dummydata/CompanySolutionsData";
import CustomServiceCard from "../../shared/CustomServiceCard";

const Solutions = () => {
  const theme = useTheme();
  return (
    <Box>
      {CompanySolutionsData.map((item, index) => {
        return (
          <CustomServiceCard
            key={item.slug}
            slug={item.slug}
            subDirectory="company"
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

export default Solutions;
