import { useState } from "react";

const emptyAicraft = {
  "aircraftModelId": "",
  "ownerAirlineId": ""
}

const AddAircraft = function({addAircraftWrapper}) {
  const [newAircraft, setNewAircraft] = useState(emptyAicraft);

  const addAircraftUtility = function() {
    addAircraftWrapper(newAircraft);
  };

  return (
    <>
      <div className="container">
        <br />
        <div className="row">
          <h4>Add a new aircraft</h4>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <b>Aircraft Model Id: </b> 
            <input 
              type="text"
              value={newAircraft.aircraftModelId}
              onChange={(e) => 
                setNewAircraft({...newAircraft, aircraftModelId: e.target.value})
              }
            />
          </div>
          <div className="col-4">
            <b>Owner Airline Id: </b> 
            <input 
              type="text"
              value={newAircraft.ownerAirlineId}
              onChange={(e) => 
                setNewAircraft({...newAircraft, ownerAirlineId: e.target.value})
              }
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-2">
            <button className="btn btn-primary" onClick={addAircraftUtility}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAircraft;