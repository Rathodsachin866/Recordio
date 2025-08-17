// src/pages/GraphPage.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import "./graphwithhint.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const GraphWithHint = () => {
  const wordAccuracy = 86;
  const sentenceAccuracy = 72;
  const hint = "Try to improve sentence fluency and grammar.";

  const data = {
    labels: ["Word Accuracy", "Sentence Accuracy"],
    datasets: [
      {
        label: "Accuracy (%)",
        data: [wordAccuracy, sentenceAccuracy],
        backgroundColor: ["#4B9CD3", "#4BC0C0"],
        borderRadius: 10,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "Accuracy (%)",
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Metrics",
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="graph-page-container">
      <div className="graph-card">
        <h1 className="graph-title">Co-Host Accuracy Dashboard</h1>
        <div className="graph-wrapper">
          <Bar data={data} options={options} />
        </div>
        <div className="graph-hint-box">
          <strong>Hint:</strong> {hint}
        </div>
      </div>
    </div>
  );
};


export default GraphWithHint;
