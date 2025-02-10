import {
  Chart as ChartJs,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJs.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

function BarChart({ data }) {
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    console.log(data);
    if (data !== null) {
      setBarData({
        labels: data.labels,
        datasets: [
          {
            label: "Anunturi",
            data: data.values,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1,
          },
        ],
      });
    }
  }, [data]);

  return (
    <div>
      {barData !== null && (
        <Bar
          options={{ plugins: { tooltip: { enabled: true } } }}
          data={barData}
        ></Bar>
      )}
    </div>
  );
}

export default BarChart;
