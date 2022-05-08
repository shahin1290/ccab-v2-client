import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import HowToStart from "./HowToStart";
import WhyJavascript from "./WhyJavascript";
import Tuition from "./Tuition";
import HowMuch from "../SoftwareHub/HowMuch";
import CompanyReviews from "./CompanyReviews";
import StudentReviews from "./StudentReviews";
import LearningSummary from "./LearningSummary";
import WhatStandsOut from "./WhatStandsOut";
import FAQ from "./FAQ";
import TechStack from "./TechStack";
import StudyTime from "./StudyTime";
import CurriculumSection from "./CurriculumSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearningSummary />
      <CurriculumSection />
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
