import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import Footer from "./Footer";
import HowToStart from "./HowToStart";
import WhyJavascript from "./WhyJavascript";
import Tuition from "./Tuition";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <HowToStart />
      <WhyJavascript />
      <Tuition />
      <CareerSupport />
      <Footer />
    </>
  );
}
