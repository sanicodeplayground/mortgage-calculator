import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BalancePrincipalChart = () => {
  const calculateAmortization = () => {
    const principal = 182000;
    const annualRate = 0.0438;
    const monthlyRate = annualRate / 12;
    const totalPayments = 25 * 12;
    const monthlyPayment = 1001.07;

    let balance = principal;
    const data = [];

    for (let month = 0; month <= totalPayments; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = monthlyPayment - interest;
      balance -= principalPayment;
      if (balance < 0) balance = 0;

      if (month % 12 === 0) {
        data.push({
          year: 2023 + Math.floor(month / 12),
          balance: Math.round(balance),
          principalPaid: Math.round(principal - balance),
        });
      }
    }

    return data;
  };

  const data = calculateAmortization();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="w-full h-96 mb-12">
        <h3 className="text-lg font-semibold mb-2">
          Principal vs. Balance vs. Paid Over Time
        </h3>
        <p className="mb-2">
          How your monthly payment is split between principal and balance
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#82ca9d"
              name="Remaining Balance"
            />
            <Line
              type="monotone"
              dataKey="principalPaid"
              stroke="#8884d8"
              name="Principal Paid"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalancePrincipalChart;
