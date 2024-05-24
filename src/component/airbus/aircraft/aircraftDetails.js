import { useState } from "react";
import AddAircraft from "./addAircraft";
import TableAircraft from "./tableAircraft";

const aircraftDummyData = [
  {
    "aircraftId": "AIR1", 
    "aircraftModelId": "M1",
    "aircraftModelName": "A320",
    "ownerAirlineId": "FLY1",
    "ownerAirlineName": "Air India"
  },  
  {
    "aircraftId": "AIR2", 
    "aircraftModelId": "M1",
    "aircraftModelName": "A320",
    "ownerAirlineId": "FLY1",
    "ownerAirlineName": "Air India"
  },
  {
    "aircraftId": "AIR3", 
    "aircraftModelId": "M1",
    "aircraftModelName": "A320",
    "ownerAirlineId": "FLY2",
    "ownerAirlineName": "Air Canada"
  },
  {
    "aircraftId": "AIR4", 
    "aircraftModelId": "M2",
    "aircraftModelName": "A380",
    "ownerAirlineId": "FLY4",
    "ownerAirlineName": "Indigo"
  },
  {
    "aircraftId": "AIR5", 
    "aircraftModelId": "M2",
    "aircraftModelName": "A380",
    "ownerAirlineId": "FLY3",
    "ownerAirlineName": "Lufthansa"
  },
]

const AircraftDetails = function() {
  const [aircrafts, setAircrafts] = useState(aircraftDummyData);

  // const apiCallPostAirline = function (newAirline) {
  //   axios.post(
  //     server_url+"/airline/add_airline_details",
  //     newAirline
  //   ).then((response) => {
  //     console.log(response)
  //   });
  // };

  const addAircraftWrapper = function(newAircraft) {
    // apiCallPostAirline(newAirline);
    setAircrafts([...aircrafts, newAircraft]);
  }

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
      <TableAircraft aircrafts={aircrafts} />
      <AddAircraft addAircraftWrapper={addAircraftWrapper} />
    </>
  );
};

export default AircraftDetails;
