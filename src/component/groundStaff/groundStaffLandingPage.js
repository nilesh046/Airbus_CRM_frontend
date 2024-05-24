import GroundStaffBanner from "./groundStaffBanner";
import GroundStaffCarouselWrapper from "./groundStaffCarousel";
import GroundStaffChartsComponent from "./groundStaffChartsComponent";
import GroundStaffNavBar from "./groundStaffNavBar";

const GroundStaffLandingPage = function () {
  return(
    <>
      <GroundStaffNavBar />
      <GroundStaffBanner />
      <br></br>
      <GroundStaffCarouselWrapper />
      <GroundStaffChartsComponent />
    </>
  )
};
export default GroundStaffLandingPage;
