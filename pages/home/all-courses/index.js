import { useRouter } from "next/router";
import AllCourses from "../../../components/pages/Homepage/AllCoursesDetails";
import About from "../../../components/pages/Homepage/AllCoursesDetails/About";
import Courses from "../../../components/pages/Homepage/AllCoursesDetails/Courses";
import GetStart from "../../../components/pages/Homepage/AllCoursesDetails/GetStart";
import Hero from "../../../components/pages/Homepage/AllCoursesDetails/Hero";
import { CourseData, HeroData } from "../../../dummydata/AllCoursesData";

export default function Course() {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
    <Hero 
    Header={HeroData.title} 
    Media={HeroData.pic}/>
    <About CourseData={CourseData} />
    <Courses />
    <GetStart />
    </>
  );
}
