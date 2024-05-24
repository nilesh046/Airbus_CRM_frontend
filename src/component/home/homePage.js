import BannerHomePage from "./bannerHomePage";
import CarouselWrapperHomePage from "./carouselHomePage";

const HomePage = function () {
  return(
    <>
    <BannerHomePage />
    <br></br>
    <CarouselWrapperHomePage />
    <div className="container">
      <div className="row mt-4">
        <div className="col-5 bg-light px-5 py-5 ms-5 me-5">
          <h3>
            <a href="/login">
              Airbus Admin
            </a>
          </h3>
        </div>
        <div className="col-5 bg-light px-5 py-5 ms-5 me-5">
          <h3>
            <a href="/airline/login">
              Ariline Login
            </a>
          </h3>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-5 bg-light px-5 py-5 ms-5 me-5">
          <h3>
            <a href="/mro/login">
              MRO Login
            </a>
          </h3>
        </div>
        <div className="col-5 bg-light px-5 py-5 ms-5 me-5">
          <h3>
            <a href="/groundStaff/login">
              Ground Staff Login
            </a>
          </h3>
        </div>
      </div>
    </div>
    </>
  )
};
export default HomePage;
