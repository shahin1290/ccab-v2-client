import Head from "next/head";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HomePage from "./Home/HomePage";


export default function Home() {
  return (
    <div>
      <Head>
        <title>CodifyCollege</title>
        <meta name="description" content="CodifyCollege" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router>
      <Header />
      <Routes>
          <Route element={<HomePage />} path="/" exact />
      </Routes>
      </Router>
      
    </div>
  );
}
