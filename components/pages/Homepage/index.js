import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import HowToStart from "./HowToStart";
import WhyJavascript from "./WhyJavascript";
import Tuition from "./Tuition";
import HowMuch from "../SoftwareHub/HowMuch";
import CompanyReviews from "./CompanyReviews";
import StudentReviews from "./StudentReviews";
import LearningSummary from "./LearningSummary";
import ComprehensiveCurriculum from "./Curriculum";
import WhatStandsOut from "./WhatStandsOut";
import FAQ from "./FAQ";
import TechStack from "./TechStack";
import StudyTime from "./StudyTime";
import Curriculum from "./Curriculum";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearningSummary />
      <Curriculum />
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