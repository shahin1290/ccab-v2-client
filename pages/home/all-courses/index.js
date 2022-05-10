import { useRouter } from "next/router";
import AllCourses from "../../../components/pages/Homepage/AllCoursesDetails";
import About from "../../../components/pages/Homepage/AllCoursesDetails/About";
import Courses from "../../../components/pages/Homepage/AllCoursesDetails/Courses";
import GetStart from "../../../components/pages/Homepage/AllCoursesDetails/GetStart";
import Hero from "../../../components/pages/Homepage/AllCoursesDetails/Hero";
import {
  HeroData,
  AllCourseData,
  GetStartData,
} from "../../../dummydata/AllCoursesData";
import { CoursesData } from "../../../dummydata/HomePageData";

export default function Course() {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <Hero Header={HeroData.title} Media={HeroData.pic} />
      <About CoursesData={CoursesData} />
      <Courses CoursesData={CoursesData} />
      <GetStart Header={GetStartData.title} SubHeader={GetStartData.subTitle} />
    </>
  );
}
