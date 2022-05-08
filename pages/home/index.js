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

import HowMuch from "../../components/pages/SoftwareHub/HowMuch";
import ComprehensiveCurriculum from "../../components/pages/Homepage/ComprehensiveCurriculum";
import { HeroDummyData, LearningSummaryData } from "../../dummydata/HomePageData";

export default function HomePage() {
  return (
    <>
      <Hero
        Header={HeroDummyData.title}
        SubHeader={HeroDummyData.subTitle}
        Description={HeroDummyData.description}
        Media={HeroDummyData.pic}
      />
      <LearningSummary 
      Header={LearningSummaryData.title}
      BranchedHeader={LearningSummaryData.brachedTitle}
      SubHeader={LearningSummaryData.subTitle}
      Description={LearningSummaryData.description}
        />
      <ComprehensiveCurriculum />
      <HowToStart />
      <WhyJavascript />
      <Tuition />
      <HowMuch />
      <TechStack />
      <StudyTime />
      <WhatStandsOut />
      <StudentReviews />
      <CompanyReviews />
      <FAQ />
      <CareerSupport />
    </>
  );
}
