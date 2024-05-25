import { Button } from 'react-bootstrap';
import '../../../css/default.css';

const GroundStaffTableRepairHistory = function({repairHistory, setChoiceUtility}) {
  return (
    <table className='table table-striped table-hover table-bordered'>
      <thead>
        <tr>
          <th className='th'>Repair Id</th>
          <th className='th'>Aircraft Id</th>
          <th className='th'>Aircraft Model</th>
          <th className='th'>Owner Airline</th>
          <th className='th'>Parts Repaired</th>
          <th className='th'>Parts Replaced</th>
          <th className='th'>Duration (in hrs)</th>
          <th className='th'>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          repairHistory.map( (instance) => ( 
            <tr key={instance.maintenanceId}>
              <td>{instance.maintenanceId}</td>
              <td>{instance.aircraftId}</td>
              <td>{instance.aircraftModelName}</td>
              <td>{instance.ownerAirlineName}</td>
              <td>{instance.partsRepaired}</td>
              <td>{instance.partsReplaced}</td>
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

export default GroundStaffTableRepairHistory;
