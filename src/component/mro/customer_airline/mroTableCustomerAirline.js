import '../../../css/default.css';

const MroTableCustomerAirline = function({customerAirlines}) {
  console.log(customerAirlines)
  return (
    <table className='table table-striped table-hover table-bordered'>
      <thead>
        <tr>
          <th className='th'>Airline Id</th>
          <th className='th'>Airline Name</th>
          <th className='th'>Aircrafts Received</th>
        </tr>
      </thead>
      <tbody>
        {
          customerAirlines.map( (customerAirline) => ( 
            <tr key={customerAirline.airlineId}>
              <td>{customerAirline.airlineId}</td>
              <td>{customerAirline.airlineName}</td>
              <td>{customerAirline.aircraftsReceived}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default MroTableCustomerAirline;
