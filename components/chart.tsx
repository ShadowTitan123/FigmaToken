import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Card, CardContent, Grid, useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Your Analytics",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function Chart() {
  let theme = useTheme();

  const data = {
    labels,
    datasets: [
      {
        label: "Drivers",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: theme.palette.primary.light,
      },
      {
        label: "Vehicles",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: theme.palette.primary.dark,
      },
    ],
  };
  return (
    <>
      <Card>
        <CardContent>
          <Bar options={options} data={data} />
        </CardContent>
      </Card>
    </>
  );
}
