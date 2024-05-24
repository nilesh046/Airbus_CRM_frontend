import Banner from "./banner";
import CarouselWrapper from "./carousel";
import NavBarLoginLogoutPage from "./navBarLoginLogoutPage";

const LogoutPage = function () {
  return(
    <>
      <NavBarLoginLogoutPage />
      <Banner />
      <br></br>
      <div className="container bg-light text-dark pb-2">
        <h1> 
          <b> 
            Logout successful
          </b> 
        </h1>
        <a href="/login">Click here to login again</a>
      </div>
      <br></br>
      <CarouselWrapper />
      <br></br>
    </>
  )
};
export default LogoutPage;
