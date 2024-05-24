import GroundStaffBanner from "./groundStaffBanner";
import GroundStaffCarouselWrapper from "./groundStaffCarousel";
import GroundStaffNavBarLoginLogoutPage from "./groundStaffNavBarLoginLogoutPage";

const GroundStaffLoginPage = function () {
  return(
    <>
      <GroundStaffNavBarLoginLogoutPage />
      <GroundStaffBanner />
      <div className="container bg-light text-dark">
        <h1> 
          <b> 
            Ground Staff Login
          </b> 
        </h1>
        <a href="/groundStaff/landingPage">Click here to login</a>
      </div>
      <br></br>
      <GroundStaffCarouselWrapper />
      <br></br>
    </>
  )
};
export default GroundStaffLoginPage;
