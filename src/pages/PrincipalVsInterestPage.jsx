import { interestData, COLORS } from "../utils/consts";
import PrincipalVsInterest from "../components/PrincipalVsInterest";
import MortgageAmortizationGraph from "../components/MortgageAmortizationGraph";
import PrincipalInterestChart from "../components/PrincipalInterestChart";
PrincipalInterestChart;
import BalancePrincipalChart from "../components/BalancePrincipalChart";

export default function PrincipalVsInterestPage() {
  return (
    <>
      <PrincipalVsInterest interestData={interestData} COLORS={COLORS} />
      <MortgageAmortizationGraph />
      <BalancePrincipalChart />
      <PrincipalInterestChart />
    </>
  );
}
