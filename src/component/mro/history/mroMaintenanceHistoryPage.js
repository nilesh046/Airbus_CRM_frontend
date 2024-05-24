import { useState } from "react";
import MroBanner from "../mroBanner";
import MroNavBar from "../mroNavBar";
import MroMaintenanceHistoryDetails from "./mroMaintenanceHisoryDetails";
import MroMaintenanceHistoryChartsComponent from "./mroMaintenanceHistoryChartsComponent";
import MroMaintenanceHistoryUpdatePage from "./update_maintenance_history/mroMaintenanceHistoryUpdatePage";

const MroMaintenanceHistoryPage = function () {
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
        <MroNavBar />
        <MroBanner />
        <br></br>
        <MroMaintenanceHistoryUpdatePage resetChoiceUtility={resetChoiceUtility}/>
      </>
    )
    : (
      <>
        <MroNavBar />
        <MroBanner />
        <br></br>
        <MroMaintenanceHistoryChartsComponent />
        <br></br>
        <MroMaintenanceHistoryDetails setChoiceUtility={setChoiceUtility}/>
      </>
    )
  )
};
export default MroMaintenanceHistoryPage;
