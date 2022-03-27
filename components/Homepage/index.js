import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import Footer from "./Footer";
import HowToStart from "./HowToStart";
import WhyJavascript from "./WhyJavascript";
import Header from "../Layout/Header/Header";
import Tuition from "./Tuition";
import TuitionDetails from "./TuitionDetails";

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      <HowToStart />
      <WhyJavascript />
      <Tuition />
      <TuitionDetails />
      <CareerSupport />
      <Footer />
    </>
  );
}
