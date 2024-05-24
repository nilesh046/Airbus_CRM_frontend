import { useState } from "react";

const emptyAirline = {
  "airlineId": "FLY5", 
  "airlineName": "",
  "regionOperated": "",
  "airlineAdminUsername": "parsec",
  "airlineAdminPassword": "pass",
  "totalAircraftsOwned" : "0"
}

const AddAirline = function({addAirlineWrapper}) {
  const [newAirline, setNewAirline] = useState(emptyAirline);

  const addAirlineUtility = function() {
    addAirlineWrapper(newAirline);
  };

  return (
    <>
      <div className="container mb-4">
        <br />
        <div className="row">
          <h4>Add a new airline</h4>
        </div>
        <br />
        <div className="row">
          <div className="col-3">
            <b>Airline name: </b> 
            <input 
              type="text"
              value={newAirline.airlineName}
              onChange={(e) => 
                setNewAirline({...newAirline, airlineName: e.target.value})
              }
            />
          </div>
          <div className="col-4">
            <b>Region Operated: </b> 
            <input 
              type="text"
              value={newAirline.regionOperated}
              onChange={(e) => 
                setNewAirline({...newAirline, regionOperated: e.target.value})
              }
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-2">
            <button className="btn btn-primary" onClick={addAirlineUtility}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAirline;