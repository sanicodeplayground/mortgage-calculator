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
export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar activePath={currentPath} setCurrentPath={setCurrentPath} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8 ">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 ">
              Advanced Mortgage Calculator
            </h1>
            <div className="bg-white rounded-lg shadow p-4">
              <Routes>
                <Route path="/" element={<MortgageCalc />} />
                <Route
                  path="/pages/loan-duration"
                  element={<TimeProgressPage />}
                />
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
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
