import axios from "axios";
import { useEffect, useState } from "react";
import { server_url } from "../../../config";
import AddAirline from "./addAirline";
import TableAirline from "./tableAirline";

const airlinesDummyData = [
  {
    "airlineId": "1", 
    "airlineName": "Air India",
    "regionOperated": "APAC",
    // "totalAircraftsOwned": 21
  },
  {
    "airlineId": "2", 
    "airlineName": "Air Canada",
    "regionOperated": "US",
    // "totalAircraftsOwned": 24
  },
  {
    "airlineId": "3", 
    "airlineName": "Lufthansa",
    "regionOperated": "Europe",
    // "totalAircraftsOwned": 42
  },
  {
    "airlineId": "4", 
    "airlineName": "Indigo",
    "regionOperated": "APAC",
    // "totalAircraftsOwned": 32
  }
]

const AirlineDetails = function() {
  const [airlines, setAirlines] = useState(airlinesDummyData);

  // const apiCallPostAirline = function (newAirline) {
  //   axios.post(
  //     server_url+"/airline/add_airline_details",
  //     newAirline
  //   ).then((response) => {
  //     console.log(response)
  //   });
  // };

  const addAirlineWrapper = function(newAirline) {
    // apiCallPostAirline(newAirline);
    setAirlines([...airlines, newAirline]);
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
      <TableAirline airlines={airlines} />
      <AddAirline addAirlineWrapper={addAirlineWrapper} />
    </>
  );
};

export default AirlineDetails;
