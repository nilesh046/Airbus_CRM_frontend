import GroundStaffBanner from "./groundStaffBanner";
import GroundStaffNavBarLoginLogoutPage from "./groundStaffNavBarLoginLogoutPage";


const GroundStaffLoginPage = function () {
  return(
    <>
      <GroundStaffNavBarLoginLogoutPage />
      <GroundStaffBanner />
      <br></br>
      <div className="container mt-5 bg-light text-dark">
        <h1> 
          <b> 
            MRO Login
          </b> 
        </h1>
        <a href="/groundStaff/landingPage">Click here to login</a>
      </div>
    </>
  )
};
export default GroundStaffLoginPage;
