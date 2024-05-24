import Banner from "./banner";
import CarouselWrapper from "./carousel";
import ChartsComponent from "./chartsComponent";
import NavBar from "./navBar";

const LandingPage = function () {
  return(
    <>
      <NavBar />
      <Banner />
      <br></br>
      <ChartsComponent />
    </>
  )
};
export default LandingPage;
