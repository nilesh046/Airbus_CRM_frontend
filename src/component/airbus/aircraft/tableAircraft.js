const TableAircraft = function({aircrafts}) {
  console.log(aircrafts)
  return (
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th>Aircraft Id</th>
          <th>Aircraft Model Id</th>
          <th>Aircraft Model Name</th>
          <th>Owner Airline Id</th>
          <th>Owner Airline Name</th>
        </tr>
      </thead>
      <tbody>
        {
          aircrafts.map( (aircraft) => ( 
            <tr key={aircraft.aircraftId}>
              <td>{aircraft.aircraftId}</td>
              <td>{aircraft.aircraftModelId}</td>
              <td>{aircraft.aircraftModelName}</td>
              <td>{aircraft.ownerAirlineId}</td>
              <td>{aircraft.ownerAirlineName}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default TableAircraft;
