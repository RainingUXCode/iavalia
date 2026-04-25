import { useState } from "react";
import { LandingPage } from "./app/pages/LandingPage";
import { DashboardPage } from "./app/pages/DashboardPage";
import { ScanPage } from "./app/pages/ScanPage";

type Page = "landing" | "dashboard" | "scan";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");

  const handleLogin = () => {
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setCurrentPage("landing");
  };

  const handleNavigateToScan = () => {
    setCurrentPage("scan");
  };

  const handleBackToDashboard = () => {
    setCurrentPage("dashboard");
  };

  return (
    <>
      {currentPage === "landing" && <LandingPage onLogin={handleLogin} />}
      {currentPage === "dashboard" && (
        <DashboardPage
          onNavigateToScan={handleNavigateToScan}
          onLogout={handleLogout}
        />
      )}
      {currentPage === "scan" && <ScanPage onBack={handleBackToDashboard} />}
    </>
  );
}
