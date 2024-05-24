import MroBanner from "./mroBanner";
import MroNavBarLoginLogoutPage from "./mroNavBarLoginLogoutPage";

const MroLogoutPage = function () {
  return(
    <>
      <MroNavBarLoginLogoutPage />
      <MroBanner />
      <br></br>
      <div className="container mt-5 bg-light text-dark">
        <h1> 
          <b> 
            Logout successful
          </b> 
        </h1>
        <a href="/mro/login">Click here to login again</a>
      </div>
    </>
  )
};
export default MroLogoutPage;
