import { useRouter } from "next/router";
import Hero from "../../components/pages/EducationHub/Hero";
import HowCodifyWork from "../../components/pages/EducationHub/HowCodifyWork";
import SubjectInfo from "../../components/pages/EducationHub/SubjectInfo";
// import { CodifyData, HeroData, HowCodifyWorkData, SubjectInfoCardData, SubjectInfoData,  } from "../../dummydata/TeachingHubData";
import path from "path";
import util from "util";
import fs from "fs";
import PrivateTutoring from "../../components/pages/EducationHub/PrivateTutoring";
import Pricing from "../../components/pages/EducationHub/Pricing";
import BecomeTutor from "../../components/pages/EducationHub/BecomeTutor";
import TimelineTech from "../../components/pages/EducationHub/Timeline";

const CompanyHub = ({
  TeachingData, 
  HowCodifyWorkData, 
  CodifyData, 
  SubjectInfoData, 
  SubjectInfoCardData, 
  PrivateTutoringData, 
  PrivateTutoringCardsData, 
  PricingData, 
  PricingCardData, 
  CodifyPricingOffers,
  BecomeTutorData,
  BecomeTutorCardsData,
  TimelineData,
  TimelineMainData}) => {

  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
        <Hero Media={TeachingData.CoverImage} />
        <HowCodifyWork title={HowCodifyWorkData.Title} CodifyData={CodifyData} />
        <SubjectInfo title={SubjectInfoData.Title} SubjectInfoCardData={SubjectInfoCardData}/>
        <TimelineTech 
        TimelineData={TimelineData}
        title={TimelineMainData.Header}
        Media={TimelineMainData.Media}
        />
        <PrivateTutoring title={PrivateTutoringData.Header} PrivateTutoringCardsData={PrivateTutoringCardsData}/>
        <Pricing 
        title={PricingData.Header} 
        description={PricingData.Content} 
        PricingCardData={PricingCardData} 
        secondTitle={PricingData.SecondHeader} 
        CodifyPricingOffers={CodifyPricingOffers}  
        />
        <BecomeTutor title={BecomeTutorData.Title} BecomeTutorCardsData={BecomeTutorCardsData} />
        
    </>
  );
};


export default CompanyHub;

export async function getStaticProps() {
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "TeachingHubData.json")
  );
  const data = JSON.parse(jsonData);

  // const results = await axios.get("/api/homepages?populate=*");
  // console.log(results.data.data[0]);

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