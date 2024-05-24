import MroTableCustomerAirline from "./mroTableCustomerAirline";

const customerAirlinesDummyData = [
  {
    "airlineId": "FLY1", 
    "airlineName": "Air India",
    "aircraftsReceived": "40"
  },  
  {
    "airlineId": "FLY2", 
    "airlineName": "Air Canada",
    "aircraftsReceived": "50"
  },  
  {
    "airlineId": "FLY4", 
    "airlineName": "Indigo",
    "aircraftsReceived": "80"
  },  
  {
    "airlineId": "FLY3", 
    "airlineName": "Lufthansa",
    "aircraftsReceived": "20"
  },
  {
    "airlineId": "FLY5", 
    "airlineName": "Ryanair",
    "aircraftsReceived": "40"
  }
]

const MroCustomerAirlineDetails = function() {
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
      <MroTableCustomerAirline customerAirlines={customerAirlinesDummyData} />
    </>
  );
};

export default MroCustomerAirlineDetails;
