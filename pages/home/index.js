import Hero from "../../components/pages/Homepage/Hero";
import HowToStart from "../../components/pages/Homepage/HowToStart";
import LearningSummary from "../../components/pages/Homepage/LearningSummary";
import TechStack from "../../components/pages/Homepage/TechStack";
import Tuition from "../../components/pages/Homepage/Tuition";
import WhyJavascript from "../../components/pages/Homepage/WhySection";
import StudyTime from "../../components/pages/Homepage/StudyTime";
import WhatStandsOut from "../../components/pages/Homepage/WhatStandsOut";
import StudentReviews from "../../components/pages/Homepage/StudentReviews";
import CompanyReviews from "../../components/pages/Homepage/CompanyReviews";
import FAQ from "../../components/pages/Homepage/FAQ";
import CareerSupport from "../../components/pages/Homepage/CareerSupport";
import CurriculumSection from "../../components/pages/Homepage/CurriculumSection";
import HowMuch from "../../components/pages/SoftwareHub/HowMuch";

import path from "path";
import util from "util";
import fs from "fs";
import axios from "../../axios";

export default function Homepage({
  HeroData,
  LearningSummaryData,
  CoursesData,
  HowToStartData,
  WhySectionData,
  HowMuchData,
  WhatStandsOutData,
  StudentReviewData,
  FAQData,
  CareerSupportData,
  TuitionData,
  StudyTimeData,
  Curriculums,
}) {
  return (
    <>
      <Hero
        Header={HeroData?.title}
        SubHeader={HeroData.subTitle}
        Description={HeroData.description}
        Media={HeroData.media}
      />
      <LearningSummary
        Header={LearningSummaryData.title}
        BranchedHeader={LearningSummaryData.titleKeyword}
        SubHeader={LearningSummaryData.subTitle}
        Description={LearningSummaryData.description}
        CoursesData={CoursesData}
      />
      <CurriculumSection Curriculums={Curriculums} />
      <HowToStart
        title={HowToStartData.title}
        subTitle={HowToStartData.subTitle}
        bannerTitle={HowToStartData.bannerTitle}
        bannerSubTitle={HowToStartData.bannerSubTitle}
        banner={HowToStartData.banner}
        cardData={HowToStartData.cardData}
      />
      <WhyJavascript data={WhySectionData} />
      <Tuition
        TuitionFees={TuitionData}
        title={TuitionData.title}
        subTitle={TuitionData.subTitle}
        paragraphTitle={TuitionData.paragraphTitle}
        content={TuitionData.content}
        firstCourseCategory={TuitionData.firstCourseCategory}
        secondCourseCategory={TuitionData.secondCourseCategory}
      />
      <HowMuch
        title={HowMuchData.title}
        subTitle={HowMuchData.subTitle}
        AllSections={HowMuchData.sections}
        lastStage={4}
        lastButtonText="Start Learning"
      />
      <TechStack />
      <StudyTime StudyTimeData={StudyTimeData} />
      <WhatStandsOut
        title={WhatStandsOutData.title}
        subTitle={WhatStandsOutData.subTitle}
        cardData={WhatStandsOutData.cardData}
      />
      <StudentReviews
        title={StudentReviewData.title}
        subTitle={StudentReviewData.subtitle}
        reviewData={StudentReviewData.reviewData}
      />
      <CompanyReviews />
      <FAQ FAQs={FAQData.FAQs} title={FAQData.title} />
      <CareerSupport
        title={CareerSupportData.title}
        subTitle={CareerSupportData.subtitle}
        supportList={CareerSupportData.supportList}
      />
    </>
  );
}

export async function getStaticProps() {
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "HomepageData.json")
  );
  const data = JSON.parse(jsonData);

  const results = await axios.get("/api/homepages?populate=*");
  console.log(results.data.data[0]);

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
