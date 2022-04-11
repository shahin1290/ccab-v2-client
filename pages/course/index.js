import { useRouter } from "next/router";
import CourseDetails from "../../components/CourseDetails";

export default function Course() {
    const router = useRouter();
    if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <CourseDetails />
    </>
  )
}
