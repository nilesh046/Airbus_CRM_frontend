import Banner from "./banner";
import NavBarLoginLogoutPage from "./navBarLoginLogoutPage";

const LogoutPage = function () {
  return(
    <>
      <NavBarLoginLogoutPage />
      <Banner />
      <br></br>
      <div className="container mt-5 bg-light text-dark">
        <h1> 
          <b> 
            Logout successful
          </b> 
        </h1>
        <a href="/login">Click here to login again</a>
      </div>
    </>
  )
};
export default LogoutPage;
