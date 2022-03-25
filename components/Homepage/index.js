import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import Footer from "./Footer";
import HowToStart from "./HowToStart";
import FAQ from "./FAQ";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <HowToStart />
      <FAQ />
      <CareerSupport />
      <Footer />
    </>
  );
}
