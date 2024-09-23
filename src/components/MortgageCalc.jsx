import TimeProgress from "./LoanDuration";
import PropertyFinancing from "./PropertyFinancing";
import PrincipalVsInterest from "./PrincipalVsInterest";
import MortgageDetails from "./MortgageDetails";
import AdditionalInformation from "./AdditionalInformation";
import MortgageAmortizationGraph from "./MortgageAmortizationGraph";
import BalancePrincipalChart from "./BalancePrincipalChart";
import PrincipalInterestChart from "./PrincipalInterestChart";
import PropertyCostComparison from "./PropertyCostComparison";
import MortgageTermComparison from "./MortgageTermComparison";
import ExtraPaymentsImpact from "./ExtraPaymentsImpact";
import {
  timeData,
  startDate,
  elapsedYears,
  remainingYears,
  COLORS,
  financingData,
  propertyPrice,
  loanAmount,
  deposit,
  monthlyPayment,
  totalPayments,
  totalInterest,
  interestData,
} from "../utils/consts";

export default function MortgageCalc() {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-16">
        <MortgageDetails
          propertyPrice={propertyPrice}
          loanAmount={loanAmount}
          deposit={deposit}
          monthlyPayment={monthlyPayment}
          totalDuration={25}
          totalPayments={totalPayments}
          totalInterest={totalInterest}
        />
        <AdditionalInformation
          product="Exc 5 Year Everyday Fixed Cashback 995 Prod Fee - Purchase Only"
          interestRate={4.38}
          interestChargingMethod="Daily interest"
          minInsuranceCover={210000}
          repaymentMethod="Capital repayment"
          startDate={startDate}
          elapsedYears={elapsedYears}
          remainingYears={remainingYears}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 mt-16">
        <TimeProgress timeData={timeData} />
        <PropertyFinancing financingData={financingData} COLORS={COLORS} />
        <PrincipalVsInterest interestData={interestData} COLORS={COLORS} />
        <MortgageAmortizationGraph />
        <BalancePrincipalChart />
        <PrincipalInterestChart />
        <PropertyCostComparison />
        <MortgageTermComparison />
        <ExtraPaymentsImpact />
      </div>
    </>
  );
}
