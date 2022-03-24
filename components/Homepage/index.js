import Hero from "./Hero";
import CareerSupport from "./CareerSupport";
import Footer from "./Footer";
import HowToStart from "./HowToStart";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowToStart />
      <CareerSupport />
      <Footer />
    </main>
  );
}
