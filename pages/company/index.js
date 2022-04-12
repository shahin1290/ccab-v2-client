import { useRouter } from "next/router";
import Banner from "../../components/CompanyHub/Banner";
import Solutions from "../../components/CompanyHub/Solutions";

const CompanyHub = () => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <Banner />
      <Solutions />
    </>
  );
};

export default CompanyHub;
