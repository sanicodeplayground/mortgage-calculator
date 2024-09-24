const AdditionalInformation = ({
  product,
  interestRate,
  interestChargingMethod,
  minInsuranceCover,
  repaymentMethod,
  startDate,
  elapsedYears,
  remainingYears,
}) => {
  const formatCurrency = (value) => {
    return value.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatPercentage = (value) => {
    return value.toLocaleString("en-GB", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatYears = (years) => {
    return years.toLocaleString("en-GB", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="w-full max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">Product:</td>
              <td className="py-2 text-right">{product}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">Interest Rate:</td>
              <td className="py-2 text-right">
                {formatPercentage(interestRate / 100)} fixed until 1 August 2028
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">Interest Rate after 5y:</td>
              <td className="py-2 text-right">???</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">
                Interest charging method:
              </td>
              <td className="py-2 text-right">{interestChargingMethod}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">
                Minimum insurance cover:
              </td>
              <td className="py-2 text-right">
                {formatCurrency(minInsuranceCover)}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">Repayment method:</td>
              <td className="py-2 text-right">{repaymentMethod}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">Start date:</td>
              <td className="py-2 text-right">{formatDate(startDate)}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4 font-medium">Elapsed time:</td>
              <td className="py-2 text-right">
                {formatYears(elapsedYears)} years
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-medium">Remaining time:</td>
              <td className="py-2 text-right">
                {formatYears(remainingYears)} years
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdditionalInformation;
