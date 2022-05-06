import { useRouter } from "next/router";
import AllCourses from "../../../components/pages/Homepage/AllCoursesDetails";

export default function Course() {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return <AllCourses />;
}
