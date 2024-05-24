import MroBanner from "./mroBanner";
import MroChartsComponent from "./mroChartsComponent";
import MroNavBar from "./mroNavBar";

const MroLandingPage = function () {
  return(
    <>
      <MroNavBar />
      <MroBanner />
      <br></br>
      <MroChartsComponent />
    </>
  )
};
export default MroLandingPage;
