import HomeBanner from "./HomeBanner/HomeBanner";
import HomeSpecialists from "./HomeSpecialists/HomeSpecialists";
import HomeOffer from "./HomeOffer/HomeOffer";
import MainLayout from "../../layouts/Main/MainLayout";

function Home() {
  return (
    <MainLayout>
      <HomeBanner></HomeBanner>
      <HomeSpecialists></HomeSpecialists>
      <HomeOffer></HomeOffer>
    </MainLayout>
  );
}

export default Home;
