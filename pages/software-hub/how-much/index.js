import React from "react";
import HowMuch from "../../../components/pages/SoftwareHub/HowMuch";
import AllSections from "../../../components/pages/SoftwareHub/HowMuch/data.";
import { HowMuchData } from "../../../dummydata/SoftwarePageData";

const HowMuchPage = () => {
  return (
    <HowMuch
      Header={HowMuchData.title}
      Description={HowMuchData.description}
      AllSections={AllSections}
    />
  );
};

export default HowMuchPage;
