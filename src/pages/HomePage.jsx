import HeroSection from "../components/HeroSection";
import NewArrivals from "../components/NewArrivals";
import MaxWidthContainer from "../components/ui/maxwidthcontainer";

const HomePage = () => {
  return (
    <MaxWidthContainer>
        <HeroSection />
        <NewArrivals />
    </MaxWidthContainer>
  )
};
export default HomePage;
