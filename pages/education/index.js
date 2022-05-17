import { useRouter } from "next/router";
import Hero from "../../components/pages/EducationHub/Hero";
import { HeroData,  } from "../../dummydata/TeachingHubData";


const CompanyHub = () => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
        <Hero Media={HeroData.CoverImage} />
    </>
  );
};


export default CompanyHub;
