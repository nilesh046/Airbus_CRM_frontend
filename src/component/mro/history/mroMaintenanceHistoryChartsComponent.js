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
  const dataPartsReplaced = {
    labels: ["Hose Pipe", "Gate gears", "Seat belts", "Lav gate", "Others"],
    datasets: [
      {
        label: "Sales data",
        data: [40, 50, 20, 80, 40],
        backgroundColor: ["powderblue", "green", "yellow", "pink", "orange"],
      }
    ]
  };
  const dataPartsRepaired = {
    labels: ["Emphasis motors", "Seat benders", "Communication systems", "Others"],
    datasets: [
      {
        label: "Sales data",
        data: [200, 520, 400, 10],
        backgroundColor: ["orange", "green", "yellow", "pink"],
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
            <h3>Parts Repaired</h3>
            <Pie data={dataPartsRepaired} options={options} className='mt-2' />
        </MDBContainer>
        </div>
        <div className='col-6'>
          <MDBContainer className='pieChart'>
              <h3>Parts Replaced</h3>
              <Pie data={dataPartsReplaced} options={options} className='mt-2' />
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}
export default MroMaintenanceHistoryChartsComponent;
