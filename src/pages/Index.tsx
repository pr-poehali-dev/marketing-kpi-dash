import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import ChartWidget from "@/components/dashboard/ChartWidget";
import CalendarWidget from "@/components/dashboard/CalendarWidget";
import { generateMockData } from "@/lib/mockData";

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");
  const data = generateMockData(selectedPeriod);

  return (
    <div className="min-h-screen flex bg-white dark:bg-[#28406B] transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="container mx-auto px-6 py-8">
          <DashboardHeader
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Сессии"
              value={data.sessions.current}
              change={data.sessions.change}
              source="GA4"
              icon="👥"
            />
            <MetricCard
              title="Конверсии"
              value={data.conversions.current}
              change={data.conversions.change}
              source="GA4"
              icon="🎯"
            />
            <MetricCard
              title="CPA"
              value={`$${data.cpa.current}`}
              change={data.cpa.change}
              source="Meta Ads"
              icon="💰"
              isInverted
            />
            <MetricCard
              title="ROAS"
              value={`${data.roas.current}x`}
              change={data.roas.change}
              source="Meta Ads"
              icon="📈"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <ChartWidget data={data.chartData} />
            </div>
            <div>
              <CalendarWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
