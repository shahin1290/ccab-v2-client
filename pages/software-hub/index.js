import Hero from "../../components/pages/SoftwareHub/Hero";
import HowMuch from "../../components/pages/SoftwareHub/HowMuch";
import Services from "../../components/pages/SoftwareHub/Services";
import ReviewsByClients from "../../components/pages/SoftwareHub/ReviewsByClients";
import { useRouter } from "next/router";
import { LocalDining } from "@mui/icons-material";
import SoftwareServicesData, {
  HeroDummyData,
  ReviewsByClientsData,
  ReviewsData,
} from "../../dummydata/SoftwareServicesData";

import path from "path";
import util from "util";
import fs from "fs";

const SoftwareHub = ({ HowMuchData }) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <Hero
        Header={HeroDummyData.title}
        SubHeader={HeroDummyData.subTitle}
        Media={HeroDummyData.pic}
      />
      <Services SoftwareServiceData={SoftwareServicesData} />
      <HowMuch
        title={HowMuchData.title}
        subTitle={HowMuchData.subTitle}
        AllSections={HowMuchData.sections}
        lastStage={7}
        lastButtonText="Start Learning"
      />
      <ReviewsByClients
        Header={ReviewsByClientsData.title}
        Description={ReviewsByClientsData.description}
        ReviewsData={ReviewsData}
      />
    </>
  );
};

export default SoftwareHub;

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
