const MortgageDetails = ({
  propertyPrice,
  loanAmount,
  deposit,
  monthlyPayment,
  totalDuration,
  totalPayments,
  totalInterest,
}) => (
  <div className="w-full max-w-2xl mx-auto">
    <h3 className="text-lg font-semibold mb-4">Mortgage details</h3>
    <table className="w-full border-collapse">
      <tbody>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Property price:</td>
          <td className="py-2 text-right">£{propertyPrice.toFixed(2)}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Loan amount:</td>
          <td className="py-2 text-right">£{loanAmount.toFixed(2)}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Deposit:</td>
          <td className="py-2 text-right">
            £{deposit.toFixed(2)} (
            {((deposit / propertyPrice) * 100).toFixed(2)}% of property value)
          </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Monthly Payment:</td>
          <td className="py-2 text-right">£{monthlyPayment.toFixed(2)}</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Total duration of loan:</td>
          <td className="py-2 text-right">{totalDuration} years</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Year loan finishes:</td>
          <td className="py-2 text-right">2048</td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Age in 2048:</td>
          <td className="py-2 text-right">60 years old </td>
        </tr>
        <tr className="border-b">
          <td className="py-2 pr-4 font-medium">Total amount to be repaid:</td>
          <td className="py-2 text-right">£{totalPayments.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="py-2 pr-4 font-medium">Total interest to be paid:</td>
          <td className="py-2 text-right">£{totalInterest.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MortgageDetails;
