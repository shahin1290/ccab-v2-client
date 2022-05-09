import Hero from "../../components/pages/SoftwareHub/Hero";
import HowMuch from "../../components/pages/SoftwareHub/HowMuch";
import Services from "../../components/pages/SoftwareHub/Services";
import ReviewsByClients from "../../components/pages/SoftwareHub/ReviewsByClients";
import { useRouter } from "next/router";
import { LocalDining } from "@mui/icons-material";
import { HeroDummyData, ReviewsByClientsData, ReviewsData } from "../../dummydata/SoftwarePageData";
import SoftwareServicesData from "../../dummydata/SoftwareServicesData";

const SoftwareHub = ({ }) => {
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
      <HowMuch />
      <ReviewsByClients 
      Header={ReviewsByClientsData.title}
      Description={ReviewsByClientsData.description}
      ReviewsData={ReviewsData}
      />
    </>
  );
};

export default SoftwareHub;
