import Hero from "../../components/pages/SoftwareHub/Hero";
import HowMuch from "../../components/pages/SoftwareHub/HowMuch";
import Services from "../../components/pages/SoftwareHub/Services";
import ReviewsByClients from "../../components/pages/SoftwareHub/ReviewsByClients";
import { useRouter } from "next/router";
import { LocalDining } from "@mui/icons-material";
import {
  HeroDummyData,
  HowMuchData,
  ReviewsByClientsData,
  ReviewsData,
} from "../../dummydata/SoftwarePageData";
import SoftwareServicesData from "../../dummydata/SoftwareServicesData";
import AllSections from "../../components/pages/SoftwareHub/HowMuch/data.";

const SoftwareHub = ({}) => {
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
        Header={HowMuchData.title}
        Description={HowMuchData.description}
        AllSections={AllSections}
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
