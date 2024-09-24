import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TimeProgress = ({ timeData }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-lg font-semibold mb-2">Loan duration</h3>
    <p className="mb-4">
      Monitor the time elapsed since the start of your mortgage, providing a
      clear view of how much progress has been made and how much remains until
      the loan is fully repaid.
    </p>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={timeData} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip formatter={(value) => `${value.toFixed(2)} years`} />
        <Legend />
        <Bar dataKey="years" fill="#3366cc" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default TimeProgress;
