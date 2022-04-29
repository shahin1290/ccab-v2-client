import ComprehensiveCurriculum from "../../components/Homepage/ComprehensiveCurriculum";
import Hero from "../../components/Homepage/Hero";
import HowToStart from "../../components/Homepage/HowToStart";
import LearningSummary from "../../components/Homepage/LearningSummary";
import TechStack from "../../components/Homepage/TechStack";
import Tuition from "../../components/Homepage/Tuition";
import WhyJavascript from "../../components/Homepage/WhyJavascript";
import HowMuch from "../../components/SoftwareHub/HowMuch";
import StudyTime from "../../components/Homepage/StudyTime";
import WhatStandsOut from "../../components/Homepage/WhatStandsOut";
import StudentReviews from "../../components/Homepage/StudentReviews";
import CompanyReviews from "../../components/Homepage/CompanyReviews";
import FAQ from "../../components/Homepage/FAQ";
import CareerSupport from "../../components/Homepage/CareerSupport";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearningSummary />
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
