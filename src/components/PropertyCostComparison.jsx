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

const PropertyVsLoanCost = () => {
  const data = [
    {
      name: "Comparison",
      "Property Value": 223000,
      "Total Loan Cost": 300321,
    },
  ];

  return (
    <div className="w-full h-96">
      <h3 className="text-lg font-semibold mb-2">
        Property Value vs Total Loan Cost
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip formatter={(value) => `£${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="Property Value" fill="#3366cc" />
          <Bar dataKey="Total Loan Cost" fill="#ff9933" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PropertyVsLoanCost;
