// Main page: page.tsx
"use client";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Transactions from "./components/Transactions";
import Reports from "./components/Reports";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <Products />;
      case "transactions":
        return <Transactions />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 p-6">{renderSection()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}