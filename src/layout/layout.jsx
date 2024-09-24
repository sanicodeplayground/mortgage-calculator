import MortgageDetails from "../components/MortgageDetails";

export default function Layout({ children, mortgageState }) {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="mx-auto px-6 py-8 grid gap-6">
        <h1 className="text-3xl font-semibold text-gray-800 mt-2">
          Advanced Mortgage Calculator
        </h1>
        <MortgageDetails
          propertyPrice={mortgageState.propertyPrice}
          loanAmount={mortgageState.loanAmount}
          deposit={mortgageState.deposit}
          monthlyPayment={mortgageState.monthlyPayment}
          totalDuration={mortgageState.totalDuration}
          totalPayments={mortgageState.totalPayments}
          totalInterest={mortgageState.totalInterest}
        />
        {children}
      </div>
    </main>
  );
}
