import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'File Transfer Activity',
        },
    },
    responsive: true,
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

const labels = Array(12).fill("1 pm")

export const data = {
    labels,
    datasets: [
        {
            label: 'Uploaded',
            data: [21, 38, 28, 22, 23, 22, 51, 39, 29, 43, 24, 19],
            backgroundColor: '#1d4e82',
        },
        {
            label: 'Dismissed',
            data: [32, 31, 60, 37, 35, 31, 27, 24, 50, 27, 19, 24],
            backgroundColor: '#F4C416',
        },
    ],
};

export default function BarChart() {
    return <div className='chart-container'>
        <Bar options={options} data={data} />
    </div>;
}
