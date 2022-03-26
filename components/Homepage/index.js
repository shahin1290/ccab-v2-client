import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import Footer from "./Footer";
import HowToStart from "./HowToStart";
import WhyJavascript from "./WhyJavascript";
import Tuition from "./Tuition";
import TuitionDetails from "./TuitionDetails";

export default function HomePage() {
  return (
    <>
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
