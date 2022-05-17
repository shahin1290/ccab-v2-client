import { useRouter } from "next/router";
import Hero from "../../components/pages/EducationHub/Hero";
import HowCodifyWork from "../../components/pages/EducationHub/HowCodifyWork";
import SubjectInfo from "../../components/pages/EducationHub/SubjectInfo";
import { CodifyData, HeroData, HowCodifyWorkData, SubjectInfoCardData, SubjectInfoData,  } from "../../dummydata/TeachingHubData";


const CompanyHub = () => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
        <Hero Media={HeroData.CoverImage} />
        <HowCodifyWork title={HowCodifyWorkData.Title} CodifyData={CodifyData} />
        <SubjectInfo title={SubjectInfoData.Title} SubjectInfoCardData={SubjectInfoCardData}/>
    </>
  );
};


export default CompanyHub;
