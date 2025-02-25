import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ data }) {
  return (
    <div className="h-[65vh] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="value"
            name="Anunțuri"
            fill="#36a2eb"
            stroke="#36a2eb"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
