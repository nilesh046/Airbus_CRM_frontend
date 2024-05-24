import '../../../css/default.css';

const TableAircraft = function({aircrafts}) {
  console.log(aircrafts)
  return (
    <table className='table table-striped table-hover table-bordered'>
      <thead>
        <tr>
          <th className='th'>Aircraft Id</th>
          <th className='th'>Aircraft Model Id</th>
          <th className='th'>Aircraft Model Name</th>
          <th className='th'>Owner Airline Id</th>
          <th className='th'>Owner Airline Name</th>
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
