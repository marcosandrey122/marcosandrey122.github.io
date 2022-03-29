import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Chart } from 'react-chartjs-2'; 

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const LineChart = (props) => {

    const labels = props.label
    const line = props.line
    const bar1 = props.bar1
    const bar2 = props.bar2.map(element => element*-1)

    const values = {
        labels,
        datasets: [
          {
            type: 'line' ,
            label: 'Lucro',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: line,
          },
          {
            type: 'bar',
            label: 'Entrada',
            backgroundColor: 'rgb(75, 192, 192)',
            data: bar1,
            borderColor: 'white',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'Saída',
            backgroundColor: 'rgb(53, 162, 235)',
            data: bar2,
          },
        ],
      }

    return (
        <>
          <Chart type='bar' data={values}/>
        </>
    )
}

