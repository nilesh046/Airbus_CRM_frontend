import GroundStaffBanner from "../groundStaffBanner";
import GroundStaffNavBar from "../groundStaffNavBar";
import GroundStaffRepairHistoryDetails from "./groundStaffRepairHisoryDetails";
import GroundStaffRepairHistoryChartsComponent from "./groundStaffRepairHistoryChartsComponent";

const GroundStaffRepairHistoryPage = function () {
  return(
    <>
      <GroundStaffNavBar />
      <GroundStaffBanner />
      <br></br>
      <GroundStaffRepairHistoryChartsComponent />
      <br></br>
      <GroundStaffRepairHistoryDetails />
    </>
  )
};
export default GroundStaffRepairHistoryPage;
