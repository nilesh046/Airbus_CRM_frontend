import Banner from "./banner";
import NavBarLoginLogoutPage from "./navBarLoginLogoutPage";

const LoginPage = function () {
  return(
    <>
      <NavBarLoginLogoutPage />
      <Banner />
      <br></br>
      <div className="container mt-5 bg-light text-dark">
        <h1> 
          <b> 
            Airbus Admin Login
          </b> 
        </h1>
        <a href="/landingPage">Click here to login</a>
      </div>
    </>
  )
};
export default LoginPage;
