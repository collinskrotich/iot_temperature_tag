import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, CategoryScale, PointElement, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from "chart.js";
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, PointElement, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const LineChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00',
            '14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'],
            datasets: [
                {
                    label: 'Hourly Temperature Readings(°C)',
                    data: [14, 16, 16, 17,18, 19, 23, 24, 24.6, 25.1, 25, 25.5, 26.1, 27, 25, 24, 24, 24.7, 22.4, 19.8, 18.3, 17.5, 17.1, 14.8 ],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162,235, 0.4)',
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Hourly temperature readings(°C)'
                }
            },
            maintainAspectratio: false,
            responsive: true
        })
    }, 
    [])

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Line data={chartData} options={chartOptions} />
        </div>
  )
}



export default LineChart