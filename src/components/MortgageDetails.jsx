const MortgageDetails = ({
  propertyPrice,
  loanAmount,
  deposit,
  monthlyPayment,
  totalDuration,
}) => (
  <div className="bg-white rounded-lg shadow p-4">
    <div className="w-full max-w-2xl mx-auto">
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
        </tbody>
      </table>
    </div>
  </div>
);

export default MortgageDetails;
