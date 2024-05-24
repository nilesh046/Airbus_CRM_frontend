import Banner from "./banner";
import CarouselWrapper from "./carousel";
import NavBarLoginLogoutPage from "./navBarLoginLogoutPage";

const LoginPage = function () {
  return(
    <>
      <NavBarLoginLogoutPage />
      <Banner />
      <br></br>
      <div className="container bg-light text-dark pb-2">
        <h1> 
          <b> 
            Airbus Admin Login
          </b> 
        </h1>
        <a href="/landingPage">Click here to login</a>
      </div>
      <br></br>
      <CarouselWrapper />
      <br></br>
    </>
  )
};
export default LoginPage;
