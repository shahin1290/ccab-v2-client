import Hero from "../../components/SoftwareHub/Hero";
import HowMuch from "../../components/SoftwareHub/HowMuch";
import Services from "../../components/SoftwareHub/Services";
import ReviewsByClients from "../../components/SoftwareHub/ReviewsByClients";
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
