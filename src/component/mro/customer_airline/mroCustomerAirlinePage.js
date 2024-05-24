import MroBanner from "../mroBanner";
import MroNavBar from "../mroNavBar";
import MroCustomerAirlineChartsComponent from "./mroCustomerAirlineChartsComponent";
import MroCustomerAirlineDetails from "./mroCustomerAirlineDetails";

const MroCustomerAirlinePage = function () {
  return(
    <>
      <MroNavBar />
      <MroBanner />
      <MroCustomerAirlineChartsComponent />
      <br></br>
      <MroCustomerAirlineDetails />
    </>
  )
};
export default MroCustomerAirlinePage;
