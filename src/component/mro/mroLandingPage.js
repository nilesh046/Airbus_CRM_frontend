import MroBanner from "./mroBanner";
import MroCarouselWrapper from "./mroCarousel";
import MroChartsComponent from "./mroChartsComponent";
import MroNavBar from "./mroNavBar";

const MroLandingPage = function () {
  return(
    <>
      <MroNavBar />
      <MroBanner />
      <br></br>
      <MroCarouselWrapper />
      <MroChartsComponent />
    </>
  )
};
export default MroLandingPage;
