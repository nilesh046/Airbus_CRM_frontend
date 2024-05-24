import '../../../css/default.css';

const GroundStaffTableRepairHistory = function({repairHistory}) {
  console.log(repairHistory)
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
          repairHistory.map( (instance) => ( 
            <tr key={instance.aircraftId}>
              <td>{instance.aircraftId}</td>
              <td>{instance.aircraftModelId}</td>
              <td>{instance.aircraftModelName}</td>
              <td>{instance.ownerAirlineId}</td>
              <td>{instance.ownerAirlineName}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default GroundStaffTableRepairHistory;
