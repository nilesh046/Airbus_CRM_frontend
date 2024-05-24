import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import { MDBContainer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement, Legend, Tooltip} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../../../css/default.css';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const MroMaintenanceHistoryChartsComponent = function() {
  const dataSales = {
    labels: ["Air India", "Air Canada", "Lufthansa", "Indigo", "Ryanair"],
    datasets: [
      {
        label: "Sales data",
        data: [4, 5, 2, 8, 4],
        backgroundColor: ["powderblue", "green", "yellow", "pink", "orange"],
      }
    ]
  };
  const dataAircraft = {
    labels: ["A320", "A380", "A350", "Dassault"],
    datasets: [
      {
        label: "Sales data",
        data: [200, 52, 40, 20],
        backgroundColor: ["orange", "green", "yellow", "pink"],
      }
    ]
  };
  const dataDamage = {
    labels: ["Tail wing", "Engine carborators", "Landing gear", "Seat belts", "Communication systems"],
    datasets: [
      {
        label: "Sales data",
        data: [2, 5, 6, 7, 3],
        backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      label: {
        display: true
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2) + '%';
          return percentage;
        },
        color: 'black',
        font: {
          weight: 'bold',
        },
      }
    },
  };
  return (
    <div className='mb-5'>
      <div className='row mb-5'>
        <div className='col-6'>
        <MDBContainer className='pieChart'>
            <h3>Maintenance requests analyis: by airline</h3>
            <Pie data={dataSales} options={options} className='mt-2' />
        </MDBContainer>
        </div>
        <div className='col-6'>
          <MDBContainer className='pieChart'>
              <h3>Maintenance requests analyis: by aircraft</h3>
              <Pie data={dataAircraft} options={options} className='mt-2' />
          </MDBContainer>
        </div>
      </div>
      {/* <div className='row justify-content-center'>
        <div className='col-md-6'>
          <MDBContainer className='pieChart'>
              <h3>Maintenance requests analysis</h3>
              <Pie data={dataDamage} options={options} className='mt-2' />
          </MDBContainer>
        </div>
      </div> */}
    </div>
  );
}
export default MroMaintenanceHistoryChartsComponent;
