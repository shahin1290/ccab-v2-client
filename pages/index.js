import Head from "next/head";

import HomePage from "../components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Codify College Dashboard</title>
        <meta name="description" content="CodifyCollege" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
