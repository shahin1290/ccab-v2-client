import { useRouter } from "next/router";
import Hero from "../../components/pages/EducationHub/Hero";
import HowCodifyWork from "../../components/pages/EducationHub/HowCodifyWork";
import SubjectInfo from "../../components/pages/EducationHub/SubjectInfo";
// import { CodifyData, HeroData, HowCodifyWorkData, SubjectInfoCardData, SubjectInfoData,  } from "../../dummydata/TeachingHubData";
import path from "path";
import util from "util";
import fs from "fs";
import PrivateTutoring from "../../components/pages/EducationHub/PrivateTutoring";

const CompanyHub = ({TeachingData, HowCodifyWorkData, CodifyData, SubjectInfoData, SubjectInfoCardData, PrivateTutoringData, PrivateTutoringCardsData}) => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
        <Hero Media={TeachingData.CoverImage} />
        <HowCodifyWork title={HowCodifyWorkData.Title} CodifyData={CodifyData} />
        <SubjectInfo title={SubjectInfoData.Title} SubjectInfoCardData={SubjectInfoCardData}/>
        <PrivateTutoring title={PrivateTutoringData.Header} PrivateTutoringCardsData={PrivateTutoringCardsData}/>
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