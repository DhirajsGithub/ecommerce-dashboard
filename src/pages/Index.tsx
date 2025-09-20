import React, { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { NotificationPanel } from "@/components/dashboard/NotificationPanel";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ProjectionsChart } from "@/components/dashboard/ProjectionsChart";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { WorldMap } from "@/components/dashboard/WorldMap";
import { TopSellingProducts } from "@/components/dashboard/TopSellingProducts";
import { TotalSalesChart } from "@/components/dashboard/TotalSalesChart";

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(true);

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);
  const toggleNotifications = () => setNotificationsOpen(!notificationsOpen);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header
          onToggleSidebar={toggleSidebar}
          onToggleNotifications={toggleNotifications}
        />
        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Page Title */}
            <div className="mb-6">
              <h2 className="text-sm font-medium text-foreground">eCommerce</h2>
            </div>

            {/* Row 1: Metrics + Projections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                <MetricCard
                  title="Customers"
                  value="3,781"
                  change="+11.01%"
                  positive={true}
                />
                <MetricCard
                  title="Orders"
                  value="1,219"
                  change="-0.03%"
                  positive={false}
                />
                <MetricCard
                  title="Revenue"
                  value="$695"
                  change="+15.03%"
                  positive={true}
                />
                <MetricCard
                  title="Growth"
                  value="30.1%"
                  change="+6.08%"
                  positive={true}
                />
              </div>

              {/* Projections Chart */}
              <ProjectionsChart />
            </div>

            {/* Row 2: Revenue (big) + World Map */}
         {/* Row 2: Revenue (big) + World Map */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-stretch min-h-[400px]">
  <div className="lg:col-span-2 h-full">
    <RevenueChart />
  </div>
  <div className="h-full">
    <WorldMap />
  </div>
</div>


            {/* Row 3: Top Selling Products (big) + Total Sales */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <TopSellingProducts />
              </div>
              <TotalSalesChart />
            </div>
          </div>
        </div>
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
