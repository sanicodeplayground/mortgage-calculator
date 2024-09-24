import {
  Home,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  ChartPie,
  Calendar,
  HandCoins,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ activePath = "/" }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: "All", path: "/" },
    { icon: Calendar, label: "Loan duration", path: "/pages/loan-duration" },
    {
      icon: HandCoins,
      label: "Deposit",
      path: "/pages/property-financing",
    },
    {
      icon: ChartPie,
      label: "Principal vs Interest",
      path: "/pages/principal-vs-interest",
    },
    {
      icon: ChartPie,
      label: "Property Value vs Loan Cost",
      path: "/pages/property-value-vs-total-loan-cost",
    },
    {
      icon: ChartPie,
      label: "Mortgage Term Comparison",
      path: "/pages/mortgage-term-comparison",
    },
    {
      icon: ChartPie,
      label: "Extra payments",
      path: "/pages/extra-payments-impact",
    },

    { icon: HelpCircle, label: "Info", path: "/info" },
  ];

  return (
    <div
      className={`bg-gray-800 text-white h-screen ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 flex justify-center items-center">
          {isCollapsed ? (
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              🏠
            </span>
          ) : (
            <div className="text-2xl font-bold">🏠 MCalc</div>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-grow">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={item.path}
                  className={`flex items-center p-2 hover:bg-gray-700 ${
                    activePath === item.path ? "bg-gray-700" : ""
                  }`}
                >
                  <item.icon size={20} />
                  {!isCollapsed && <span className="ml-4">{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Collapse Toggle */}
        <div className="p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center justify-center w-full p-2 bg-gray-700 hover:bg-gray-600 rounded"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
