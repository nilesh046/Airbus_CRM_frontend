import BannerHomePage from "./bannerHomePage";
import CarouselWrapperHomePage from "./carouseHomePage";

const HomePage = function () {
  return(
    <>
    <div className="row">
      <BannerHomePage />
    </div>
    <br></br>
    <div className="row">
      <CarouselWrapperHomePage />
    </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-5 mt-2 mb-2 bg-light px-5 py-5 ms-5 me-5">
          <h3>
            <a href="/login">
              Airbus Admin
            </a>
          </h3>
        </div>
        <div className="col-5 mt-2 mb-2 bg-light px-5 py-5 ms-5 me-5">
          <h3>
            <a href="/airline/login">
              Ariline Login
            </a>
          </h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-5 mb-5 bg-light px-5 py-5 ms-5 me-5">
          <h3>
            <a href="/mro/login">
              MRO Login
            </a>
          </h3>
        </div>
        <div className="col-5 mb-5 bg-light px-5 py-5 ms-5 me-5">
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
