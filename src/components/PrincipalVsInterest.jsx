import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PrincipalVsInterest = ({ interestData, COLORS }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Principal vs Interest</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={interestData}
          isAnimationActive={false}
          cx="50%"
          cy="50%"
          labelLine={true}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {interestData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default PrincipalVsInterest;
