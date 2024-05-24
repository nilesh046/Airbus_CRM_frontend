import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import { MDBContainer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement, Legend, Tooltip} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import '../../../css/default.css';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const MroCustomerAirlineChartsComponent = function() {
  const dataSales = {
    labels: ["Air India", "Air Canada", "Lufthansa", "Indigo", "Ryanair"],
    datasets: [
      {
        label: "Orders received",
        data: [40, 50, 20, 80, 40],
        backgroundColor: ["powderblue", "green", "yellow", "pink", "orange"],
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
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <MDBContainer className='pieChart'>
            <h3>Orders received</h3>
            <Pie data={dataSales} options={options} className='mt-2' />
        </MDBContainer>
      </div>
    </div>
  );
}
export default MroCustomerAirlineChartsComponent;
