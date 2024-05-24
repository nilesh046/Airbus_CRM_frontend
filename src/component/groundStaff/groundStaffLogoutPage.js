import GroundStaffBanner from "./groundStaffBanner";
import GroundStaffNavBarLoginLogoutPage from "./groundStaffNavBarLoginLogoutPage";

const GroundStaffLogoutPage = function () {
  return(
    <>
      <GroundStaffNavBarLoginLogoutPage />
      <GroundStaffBanner />
      <br></br>
      <div className="container mt-5 bg-light text-dark">
        <h1> 
          <b> 
            Logout successful
          </b> 
        </h1>
        <a href="/groundStaff/login">Click here to login again</a>
      </div>
    </>
  )
};
export default GroundStaffLogoutPage;
