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

const MortgageTermComparison = () => {
  const calculateMortgage = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const totalPaid = monthlyPayment * numberOfPayments;
    const totalInterest = totalPaid - principal;

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPaid: Math.round(totalPaid),
      totalInterest: Math.round(totalInterest),
    };
  };

  const principal = 182000;
  const annualRate = 0.0438;

  const terms = [15, 25, 30];
  const mortgages = terms.map((term) => ({
    term,
    ...calculateMortgage(principal, annualRate, term),
  }));

  const monthlyPaymentData = mortgages.map((m) => ({
    term: `${m.term} Years`,
    "Monthly Payment": m.monthlyPayment,
  }));

  const totalCostData = mortgages.map((m) => ({
    term: `${m.term} Years`,
    Principal: principal,
    Interest: m.totalInterest,
  }));

  return (
    <div className="space-y-8">
      <div className="w-full h-96">
        <h3 className="text-lg font-semibold mb-2">
          Monthly Payments Comparison
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyPaymentData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="term" />
            <YAxis />
            <Tooltip formatter={(value) => `£${value.toLocaleString()}`} />
            <Legend />
            <Bar dataKey="Monthly Payment" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-96">
        <h3 className="text-lg font-semibold mb-2">Total Cost Comparison</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={totalCostData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="term" />
            <YAxis />
            <Tooltip formatter={(value) => `£${value.toLocaleString()}`} />
            <Legend />
            <Bar dataKey="Principal" stackId="a" fill="#8884d8" />
            <Bar dataKey="Interest" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MortgageTermComparison;
