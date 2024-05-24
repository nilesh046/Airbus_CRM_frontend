import MroBanner from "./mroBanner";
import MroNavBarLoginLogoutPage from "./mroNavBarLoginLogoutPage";

const MroLoginPage = function () {
  return(
    <>
      <MroNavBarLoginLogoutPage />
      <MroBanner />
      <br></br>
      <div className="container mt-5 bg-light text-dark">
        <h1> 
          <b> 
            MRO Login
          </b> 
        </h1>
        <a href="/mro/landingPage">Click here to login</a>
      </div>
    </>
  )
};
export default MroLoginPage;
