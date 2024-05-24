import MroTableMaintenanceHistory from "./mroTableMaintenanceHistory";

const maintenanceHistoryDummyData = [
  {
    "aircraftId": "AIR1", 
    "aircraftModelName": "A320",
    "ownerAirlineName": "Air India",
    "maintenanceId": "MAIN1",
    "partsRepaired": "Tail wing, Hose Pipe HP-32",
    "partsReplaced": "NA",
    "costIncurredInDollars": "$1,00,000",
    "durationInDays": "2+",
    "status": "OPEN"
  },  
  {
    "aircraftId": "AIR2", 
    "aircraftModelName": "A320",
    "ownerAirlineName": "Air India",
    "maintenanceId": "MAIN2",
    "partsRepaired": "Tail wing, Hose Pipe HP-32",
    "partsReplaced": "NA",
    "costIncurredInDollars": "$1,20,000",
    "durationInDays": "20",
    "status": "CLOSED"
  },
  {
    "aircraftId": "AIR3", 
    "aircraftModelName": "A320",
    "ownerAirlineName": "Air Canada",
    "maintenanceId": "MAIN3",
    "partsRepaired": "Warm water pipe WP-312",
    "partsReplaced": "Lav Door",
    "costIncurredInDollars": "$50,000",
    "durationInDays": "20+",
    "status": "OPEN"
  },
  {
    "aircraftId": "AIR4", 
    "aircraftModelName": "A380",
    "ownerAirlineName": "Indigo",
    "maintenanceId": "MAIN5",
    "partsRepaired": "Seat belts, Hose Pipe HP-32",
    "partsReplaced": "Seat cushions",
    "costIncurredInDollars": "$60,000",
    "durationInDays": "20",
    "status": "CLOSED"
  },
  {
    "aircraftId": "AIR5", 
    "aircraftModelId": "M2",
    "aircraftModelName": "A380",
    "ownerAirlineName": "Lufthansa",
    "maintenanceId": "MAIN5",
    "partsRepaired": "Rear fender GS-23",
    "partsReplaced": "NA",
    "costIncurredInDollars": "$1,00,400",
    "durationInDays": "24",
    "status": "CLOSED"
  },
]

const MroMaintenanceHistoryDetails = function({setChoiceUtility}) {
  // const apiCallGetAirlines = function () {
  //   axios.get(
  //     server_url+"/airline/get_all_airline_details"
  //   ).then((response) => {
  //     console.log(response)
  //     setAirlines(response.data);
  //   });
  // };

  // useEffect(
  //   apiCallGetAirlines, 
  //   []
  // )

  return (
    <>
      <MroTableMaintenanceHistory maintenanceHistory={maintenanceHistoryDummyData} setChoiceUtility={setChoiceUtility} />
    </>
  );
};

export default MroMaintenanceHistoryDetails;
