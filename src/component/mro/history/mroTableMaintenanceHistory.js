import '../../../css/default.css';

const MroTableMaintenanceHistory = function({maintenanceHistory}) {
  console.log(maintenanceHistory)
  return (
    <table className='table table-striped table-hover table-bordered'>
      <thead>
        <tr>
          <th className='th'>Maintenance Id</th>
          <th className='th'>Aircraft Id</th>
          <th className='th'>Aircraft Model Id</th>
          <th className='th'>Owner Airline Name</th>
          <th className='th'>Parts Repaired</th>
          <th className='th'>Parts Replaced</th>
          <th className='th'>Cost incurred</th>
          <th className='th'>Duration (in days)</th>
          <th className='th'>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          maintenanceHistory.map( (instance) => ( 
            <tr key={instance.maintenanceId}>
              <td>{instance.maintenanceId}</td>
              <td>{instance.aircraftId}</td>
              <td>{instance.aircraftModelName}</td>
              <td>{instance.ownerAirlineName}</td>
              <td>{instance.partsRepaired}</td>
              <td>{instance.partsReplaced}</td>
              <td>{instance.costIncurredInDollars}</td>
              <td>{instance.durationInDays}</td>
              <td>{instance.status}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default MroTableMaintenanceHistory;
