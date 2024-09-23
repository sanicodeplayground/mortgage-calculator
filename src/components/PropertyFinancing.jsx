import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts";
import { propertyPrice, deposit } from "../utils/consts";

export default function SimpleDepositChart() {
  const COLORS = ["#0088FE", "#FFBB28"];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Property Financing</h3>
      <div className="space-y-2">
        <p>Property price: £{propertyPrice.toLocaleString()}</p>
      </div>
      <div className="h-64 w-96 mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[
                { name: "Deposit", value: deposit },
                { name: "Loan", value: propertyPrice - deposit },
              ]}
              isAnimationActive={false}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {[0, 1].map((index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                value={`£${deposit.toLocaleString()}`}
                position="center"
                className="text-xl font-bold"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm">
        Lenders may expect more than a 10% deposit
      </p>
    </div>
  );
}
