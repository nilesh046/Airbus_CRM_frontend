import MroBanner from "../mroBanner";
import MroNavBar from "../mroNavBar";
import MroMaintenanceHistoryDetails from "./mroMaintenanceHisoryDetails";
import MroMaintenanceHistoryChartsComponent from "./mroMaintenanceHistoryChartsComponent";

const MroMaintenanceHistoryPage = function () {
  return(
    <>
      <MroNavBar />
      <MroBanner />
      <br></br>
      <MroMaintenanceHistoryChartsComponent />
      <br></br>
      <MroMaintenanceHistoryDetails />
    </>
  )
};
export default MroMaintenanceHistoryPage;
