import React from "react";
import HowMuch from "../../../components/pages/SoftwareHub/HowMuch";

import path from "path";
import util from "util";
import fs from "fs";

const HowMuchPage = ({ HowMuchData }) => {
  return (
    <HowMuch
      title={HowMuchData.title}
      subTitle={HowMuchData.subTitle}
      AllSections={HowMuchData.sections}
      lastStage={7}
      lastButtonText="Start Learning"
    />
  );
};

export default HowMuchPage;

export async function getStaticProps() {
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "HomepageData.json")
  );
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data },
    revalidate: 10,
  };
}
