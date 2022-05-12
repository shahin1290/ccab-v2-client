import { useRouter } from "next/router";
import About from "../../../components/pages/Homepage/AllCoursesDetails/About";
import Courses from "../../../components/pages/Homepage/AllCoursesDetails/Courses";
import GetStart from "../../../components/pages/Homepage/AllCoursesDetails/GetStart";
import Hero from "../../../components/pages/Homepage/AllCoursesDetails/Hero";

import {AllCoursesHeroData, AllCoursesGetStartData, CoursesData } from "../../../dummydata/HomePageData";

export default function Course() {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <Hero Header={AllCoursesHeroData.title} Media={AllCoursesHeroData.pic} />
      <About CoursesData={CoursesData} />
      <Courses CoursesData={CoursesData} />
      <GetStart Header={AllCoursesGetStartData.title} SubHeader={AllCoursesGetStartData.subTitle} />
    </>
  );
}
