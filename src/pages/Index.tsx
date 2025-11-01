import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Dashboard } from "@/components/Dashboard";
import { Customers } from "@/components/Customers";
import { Bookings } from "@/components/Bookings";
import { Tours } from "@/components/Tours";
import { Insights } from "@/components/Insights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "insights":
        return <Insights />;
      case "customers":
        return <Customers />;
      case "bookings":
        return <Bookings />;
      case "tours":
        return <Tours />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
