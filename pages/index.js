import Head from "next/head";
import CareerSupport from "../components/CareerSupport";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodifyCollege</title>
        <meta name="description" content="CodifyCollege" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CareerSupport />
      <Footer />
    </div>
  );
}
