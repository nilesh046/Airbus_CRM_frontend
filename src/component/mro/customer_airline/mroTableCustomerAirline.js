import '../../../css/default.css';

const MroTableCustomerAirline = function({customerAirlines}) {
  console.log(customerAirlines)
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
          customerAirlines.map( (customerAirline) => ( 
            <tr key={customerAirline.aircraftId}>
              <td>{customerAirline.aircraftId}</td>
              <td>{customerAirline.aircraftModelId}</td>
              <td>{customerAirline.aircraftModelName}</td>
              <td>{customerAirline.ownerAirlineId}</td>
              <td>{customerAirline.ownerAirlineName}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default MroTableCustomerAirline;
