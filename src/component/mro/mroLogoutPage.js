import MroBanner from "./mroBanner";
import MroCarouselWrapper from "./mroCarousel";
import MroNavBarLoginLogoutPage from "./mroNavBarLoginLogoutPage";

const MroLogoutPage = function () {
  return(
    <>
      <MroNavBarLoginLogoutPage />
      <MroBanner />
      <div className="container bg-light text-dark">
        <h1> 
          <b> 
            Logout successful
          </b> 
        </h1>
        <a href="/mro/login">Click here to login again</a>
      </div>
      <br></br>
      <MroCarouselWrapper />
      <br></br>
    </>
  )
};
export default MroLogoutPage;
