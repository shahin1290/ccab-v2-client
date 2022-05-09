import Homepage from "./home";
import path from "path";
import util from "util";
import fs from "fs";

export default function Home(props) {
  return <Homepage {...props} />;
}

export async function getStaticProps() {
  const readFile = util.promisify(fs.readFile);

  const jsonData = await readFile(
    path.join(process.cwd(), "dummydata", "HomepageData.json")
  );
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...data },
    revalidate: 300,
  };
}
