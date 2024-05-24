import '../../../css/default.css';

const TableAirline = function({airlines}) {
  console.log(airlines)
  return (
    <table className='table table-striped table-bordered'>
      <thead>
        <tr>
          <th className='th'>Airline Id</th>
          <th className='th'>Airline Name</th>
          <th className='th'>Region Operated</th>
          {/* <th>Total Aircrafts Owned</th> */}
        </tr>
      </thead>
      <tbody>
        {
          airlines.map( (airline) => ( 
            <tr key={airline.airlineId}>
              <td>{airline.airlineId}</td>
              <td>{airline.airlineName}</td>
              <td>{airline.regionOperated}</td>
              {/* <td>{airline.totalAircraftsOwned}</td> */}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default TableAirline;
