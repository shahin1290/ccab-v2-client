import Hero from "../../components/pages/Homepage/Hero";
import HowToStart from "../../components/pages/Homepage/HowToStart";
import LearningSummary from "../../components/pages/Homepage/LearningSummary";
import TechStack from "../../components/pages/Homepage/TechStack";
import Tuition from "../../components/pages/Homepage/Tuition";
import WhyJavascript from "../../components/pages/Homepage/WhyJavascript";
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
// import {
//   HeroDummyData,
//   LearningSummaryData,
// } from "../../dummydata/HomePageData";

export default function HomePage({
  HeroData,
  LearningSummaryData,
  CoursesData,
  HowToStartData,
  WhatStandsOutData,
  FAQData,
  StudentReviewData,
}) {
  return (
    <>
      <Hero
        Header={HeroData.title}
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
      <CurriculumSection />
      <HowToStart
        title={HowToStartData.title}
        subTitle={HowToStartData.subTitle}
        bannerTitle={HowToStartData.bannerTitle}
        bannerSubTitle={HowToStartData.bannerSubTitle}
        banner={HowToStartData.banner}
        cardData={HowToStartData.cardData}
      />
      <WhyJavascript />
      <Tuition />
      <HowMuch />
      <TechStack />
      <StudyTime />
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
      <CareerSupport />
    </>
  );
}

export async function getStaticProps(context) {
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "HomepageData.json")
  );
  const data = JSON.parse(jsonData);

  return {
    props: { ...data },
  };
}
