import { Button } from 'react-bootstrap';
import '../../../css/default.css';

const MroTableMaintenanceHistory = function({maintenanceHistory, setChoiceUtility}) {
  return (
    <table className='table table-striped table-hover table-bordered'>
      <thead>
        <tr>
          <th className='th'>Maintenance Id</th>
          <th className='th'>Aircraft Id</th>
          <th className='th'>Aircraft Model</th>
          <th className='th'>Owner Airline</th>
          <th className='th'>Parts Repaired</th>
          <th className='th'>Parts Replaced</th>
          <th className='th'>Cost incurred</th>
          <th className='th'>Duration</th>
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
              <td>{(
                (instance.status === 'OPEN')
                  ? <Button type='button' className='btn btn-primary btn-sm' onClick={setChoiceUtility}> UPDATE </Button>
                  : <Button type='button' className='btn btn-light btn-sm' disabled> CLOSED </Button>
              )}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default MroTableMaintenanceHistory;
