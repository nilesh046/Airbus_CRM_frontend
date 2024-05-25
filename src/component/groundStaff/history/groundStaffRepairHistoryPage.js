import { useState } from "react";
import GroundStaffBanner from "../groundStaffBanner";
import GroundStaffNavBar from "../groundStaffNavBar";
import GroundStaffRepairHistoryDetails from "./groundStaffRepairHisoryDetails";
import GroundStaffRepairHistoryChartsComponent from "./groundStaffRepairHistoryChartsComponent";
import GroundStaffMaintenanceHistoryUpdatePage from "./update_maintenance_history/groundStaffMaintenanceHistoryUpdatePage";

const GroundStaffRepairHistoryPage = function () {
  const [choice, setChoice] = useState("OPEN");
  const setChoiceUtility = function() {
    setChoice("UPDATE");
  }
  const resetChoiceUtility = function() {
    setChoice("OPEN");
  }
  return(
    (choice === 'UPDATE')
    ? (
      <>
        <GroundStaffNavBar />
        <GroundStaffBanner />
        <br></br>
        <GroundStaffMaintenanceHistoryUpdatePage resetChoiceUtility={resetChoiceUtility}/>
      </>
    )
    : (
      <>
        <GroundStaffNavBar />
        <GroundStaffBanner />
        <br></br>
        <GroundStaffRepairHistoryChartsComponent />
        <br></br>
        <GroundStaffRepairHistoryDetails setChoiceUtility={setChoiceUtility}/>
      </>
    )
  )
};
export default GroundStaffRepairHistoryPage;
