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
import CurriculumSection from "../../components/pages/Homepage/CurriculumSection";

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
