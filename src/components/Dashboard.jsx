import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Phishing", "Malware", "Ransomware", "DDoS", "Others"],
    datasets: [
      {
        label: "Number of Threats",
        data: [12, 19, 7, 10, 5],
        backgroundColor: [
          "#3f51b5",
          "#ff9800",
          "#e91e63",
          "#4caf50",
          "#607d8b",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Threats Analysis Overview",
      },
    },
  };

  return (
    <Box className="p-4 bg-gray-900">
      <h1 className="text-center text-3xl text-white">Threads-Overview</h1>
      <Box className="p-4 flex flex-wrap justify-center gap-4">
        <Paper className="p-4 bg-blue-600 text-white w-full md:w-1/3">
          <Typography variant="h6">Total Threats</Typography>
          <Typography variant="h4">53</Typography>
        </Paper>
        <Paper className="p-4 bg-pink-600 text-white w-full md:w-1/3">
          <Typography variant="h6">Phishing Attempts</Typography>
          <Typography variant="h4">12</Typography>
        </Paper>
      </Box>

      <Box mt={4}>
        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default Dashboard;
