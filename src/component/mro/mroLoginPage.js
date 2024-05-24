import MroCarouselWrapper from "../mro/mroCarousel";
import MroBanner from "./mroBanner";
import MroNavBarLoginLogoutPage from "./mroNavBarLoginLogoutPage";

const MroLoginPage = function () {
  return(
    <>
      <MroNavBarLoginLogoutPage />
      <MroBanner />
      <div className="container bg-light text-dark">
        <h1> 
          <b> 
            MRO Login
          </b> 
        </h1>
        <a href="/mro/landingPage">Click here to login</a>
      </div>
      <br></br>
      <MroCarouselWrapper />
      <br></br>
    </>
  )
};
export default MroLoginPage;
