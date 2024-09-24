import { BrowserRouter, Route, Routes } from "react-router-dom";
import MortgageCalc from "./components/MortgageCalc";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import TimeProgressPage from "./pages/LoanDurationPage";
import PropertyFinancingPage from "./pages/PropertyFinancingPage";
import PrincipalVsInterestPage from "./pages/PrincipalVsInterestPage";
import PropertyCostComparisonPage from "./pages/PropertyCostComparisonPage";
import MortgageTermComparisonPage from "./pages/MortgageTermComparisonPage";
import ExtraPaymentsImpactPage from "./pages/ExtraPaymentsImpactPage";
import InfoPage from "./pages/InfoPage";
import Layout from "./layout/layout";
export default function App() {
  const [currentPath, setCurrentPath] = useState("/");
  const [mortgageState, setMortgageState] = useState({
    propertyPrice: 0,
    loanAmount: 0,
    deposit: 0,
    monthlyPayment: 0,
    totalDuration: 25,
    totalPayments: 0,
    totalInterest: 0,
  });

  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar activePath={currentPath} setCurrentPath={setCurrentPath} />
        <Layout mortgageState={mortgageState}>
          <Routes>
            <Route
              path="/"
              element={<MortgageCalc setMortgageState={setMortgageState} />}
            />
            <Route path="/pages/loan-duration" element={<TimeProgressPage />} />
            <Route
              path="/pages/property-financing"
              element={<PropertyFinancingPage />}
            />
            <Route
              path="/pages/principal-vs-interest"
              element={<PrincipalVsInterestPage />}
            />
            <Route
              path="/pages/property-value-vs-total-loan-cost"
              element={<PropertyCostComparisonPage />}
            />
            <Route
              path="/pages/mortgage-term-comparison"
              element={<MortgageTermComparisonPage />}
            />
            <Route
              path="/pages/extra-payments-impact"
              element={<ExtraPaymentsImpactPage />}
            />
            <Route path="/pages/info" element={<InfoPage />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}
