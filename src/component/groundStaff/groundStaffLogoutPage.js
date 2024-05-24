import GroundStaffBanner from "./groundStaffBanner";
import GroundStaffCarouselWrapper from "./groundStaffCarousel";
import GroundStaffNavBarLoginLogoutPage from "./groundStaffNavBarLoginLogoutPage";

const GroundStaffLogoutPage = function () {
  return(
    <>
      <GroundStaffNavBarLoginLogoutPage />
      <GroundStaffBanner />
      <div className="container bg-light text-dark">
        <h1> 
          <b> 
            Logout successful
          </b> 
        </h1>
        <a href="/groundStaff/login">Click here to login again</a>
      </div>
      <br></br>
      <GroundStaffCarouselWrapper />
      <br></br>
    </>
  )
};
export default GroundStaffLogoutPage;
