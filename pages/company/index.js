import { useRouter } from "next/router";
import Banner from "../../components/pages/CompanyHub/Banner";
import Solutions from "../../components/pages/CompanyHub/Solutions";
import CompanySolutionsData, { BannerData } from '../../dummydata/CompanySolutionsData'

const CompanyHub = () => {
  const router = useRouter();
  if (router.isFallback) return <h1>Loading...</h1>;
  return (
    <>
      <Banner Media={BannerData.pic} />
      <Solutions CompanySolutionsData={CompanySolutionsData} />
    </>
  );
};


export default CompanyHub;
