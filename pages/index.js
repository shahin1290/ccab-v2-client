import Head from "next/head";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodifyCollege</title>
        <meta name="description" content="CodifyCollege" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
