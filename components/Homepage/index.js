import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import Footer from "../Layout/Footer";
import HowToStart from "./HowToStart";
import WhyJavascript from "./WhyJavascript";
import Tuition from "./Tuition";
import TuitionDetails from "./TuitionDetails";
import CompanyReviews from "./CompanyReviews";
import StudentReviews from "./StudentReviews";
import LearningSummary from "./LearningSummary";
import ComprehensiveCurriculum from "./ComprehensiveCurriculum";
import WhatStandsOut from "./WhatStandsOut";
import FAQ from "./FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearningSummary />
      <ComprehensiveCurriculum />
      <HowToStart />
      <WhyJavascript />
      <Tuition />
      <TuitionDetails />
      <WhatStandsOut />
      <StudentReviews />
      <CompanyReviews />
      <FAQ />
      <CareerSupport />
    </>
  );
}
