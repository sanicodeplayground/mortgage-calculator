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

const PrincipalInterestChart = () => {
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
          principalPaid: Math.round(principal - balance),
          interestPaid: Math.round(
            monthlyPayment * month - (principal - balance)
          ),
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
          Principal vs. Interest Paid Over Time
        </h3>
        <p className="mb-2">
          How your monthly payment is split between principal and interest over
          time
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="principalPaid"
              stackId="a"
              fill="#8884d8"
              name="Principal Paid"
            />
            <Bar
              dataKey="interestPaid"
              stackId="a"
              fill="#82ca9d"
              name="Interest Paid"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PrincipalInterestChart;
