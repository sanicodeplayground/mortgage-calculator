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

const ExtraPaymentsImpact = () => {
  const calculateMortgage = (principal, annualRate, years, extraYearly = 0) => {
    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;
    const regularPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    let balance = principal;
    let month = 0;
    let totalInterest = 0;
    const data = [];

    while (balance > 0 && month <= totalPayments) {
      const interest = balance * monthlyRate;
      let principalPayment = regularPayment - interest;

      if (month % 12 === 0 && month > 0) {
        principalPayment += Math.min(extraYearly, balance);
      }

      balance = Math.max(balance - principalPayment, 0);
      totalInterest += interest;

      if (month % 12 === 0) {
        data.push({
          year: Math.floor(month / 12),
          balance: Math.round(balance),
          totalInterest: Math.round(totalInterest),
        });
      }

      month++;
    }

    return data;
  };

  const principal = 182000;
  const annualRate = 0.0438;
  const years = 25;

  const originalData = calculateMortgage(principal, annualRate, years);
  const extra5000Data = calculateMortgage(principal, annualRate, years, 5000);
  const extra10000Data = calculateMortgage(principal, annualRate, years, 10000);

  const combinedData = originalData.map((item, index) => ({
    year: item.year,
    "Original Balance": item.balance,
    "£5,000 Extra/Year Balance": extra5000Data[index]?.balance || 0,
    "£10,000 Extra/Year Balance": extra10000Data[index]?.balance || 0,
    "Original Interest": item.totalInterest,
    "£5,000 Extra/Year Interest": extra5000Data[index]?.totalInterest || 0,
    "£10,000 Extra/Year Interest": extra10000Data[index]?.totalInterest || 0,
  }));

  return (
    <div className="space-y-8">
      <div className="w-full h-96 mb-32">
        <h3 className="text-lg font-semibold mb-2">Loan Balance Over Time</h3>
        <p className="mb-4">
          How additional payments can significantly reduce interest and loan
          duration.
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={combinedData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `£${value.toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="Original Balance" stroke="#8884d8" />
            <Line
              type="monotone"
              dataKey="£5,000 Extra/Year Balance"
              stroke="#82ca9d"
            />
            <Line
              type="monotone"
              dataKey="£10,000 Extra/Year Balance"
              stroke="#ffc658"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-96 mb-32">
        <h3 className="text-lg font-semibold mb-2">Cumulative Interest Paid</h3>
        <p className="mb-4">
          How additional payments can significantly reduce interest and loan
          duration.
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={combinedData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip formatter={(value) => `£${value.toLocaleString()}`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="Original Interest"
              stroke="#8884d8"
            />
            <Line
              type="monotone"
              dataKey="£5,000 Extra/Year Interest"
              stroke="#82ca9d"
            />
            <Line
              type="monotone"
              dataKey="£10,000 Extra/Year Interest"
              stroke="#ffc658"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExtraPaymentsImpact;
