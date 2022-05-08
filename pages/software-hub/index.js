import Hero from "../../components/pages/SoftwareHub/Hero";
import HowMuch from "../../components/pages/SoftwareHub/HowMuch";
import Services from "../../components/pages/SoftwareHub/Services";
import ReviewsByClients from "../../components/pages/SoftwareHub/ReviewsByClients";
import { useRouter } from "next/router";
import { LocalDining } from "@mui/icons-material";

const SoftwareHub = () => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <Hero />
      <Services />
      <HowMuch />
      <ReviewsByClients />
    </>
  );
};

export default SoftwareHub;