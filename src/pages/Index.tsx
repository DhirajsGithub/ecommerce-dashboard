import React, { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { NotificationPanel } from "@/components/dashboard/NotificationPanel";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ProjectionsChart } from "@/components/dashboard/ProjectionsChart";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { TopSellingProducts } from "@/components/dashboard/TopSellingProducts";
import { TotalSalesChart } from "@/components/dashboard/TotalSalesChart";
import RevenueWorldMap from "@/components/dashboard/WorldMap";
import Projects from "@/components/Projects";
import Ecommerce from "@/components/Ecommerce";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(true);
  const [dashboard, setDashboard] = useState("eCommerce");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} setDashboard={setDashboard} dashboard={dashboard} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header
          onToggleSidebar={toggleSidebar}
          onToggleNotifications={toggleNotifications}
        />
        {/* Dashboard Content */}
        {dashboard === "Projects" ? <Projects /> : <Ecommerce />}
      </div>
      {/* Notification Panel */}
      <NotificationPanel
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </div>
  );
};

export default Index;
