import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Active Session',
        },
    },
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
            beginAtZero: true,
            max: 100,
            stepSize: 10,
        },
    },
};

const labels = Array(9).fill("1-2-2022")

export const data = {
    labels,
    datasets: [
        {
            label: 'All',
            data: [6, 9, 10, 9, 13, 19, 6, 5, 6],
            backgroundColor: '#abf3f5',
            borderColor: '#1cabad',
            fill: true,
        },
        {
            label: 'Down',
            data: [11, 13, 10, 8, 7, 6, 8, 4, 5],
            backgroundColor: '#e0eadf',
            borderColor: '#5eb84d',
            fill: true,
        },
        {
            label: 'Up',
            data: [26, 3, 19, 17, 25, 21, 17, 19, 9],
            backgroundColor: '#f5f590',
            borderColor: '#f2f222',
            fill: true,
        },
    ],
};

export function LineChart() {
    return <div className='chart-container'>
        <Line options={options} data={data} />
    </div>
}
