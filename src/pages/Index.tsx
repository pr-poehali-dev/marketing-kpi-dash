import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MetricCard from "@/components/dashboard/MetricCard";
import ChartWidget from "@/components/dashboard/ChartWidget";
import CalendarWidget from "@/components/dashboard/CalendarWidget";
import ReportTable from "@/components/dashboard/ReportTable";
import DataAnalysis from "@/components/dashboard/DataAnalysis";
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

          {/* Top metrics row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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

          {/* Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left column - Charts and tables */}
            <div className="lg:col-span-3 space-y-6">
              {/* Earnings chart */}
              <ChartWidget
                title="Доходы"
                subtitle="$5825.53 • Клиенты 92"
                data={data.earningsChart}
                type="line"
                color="#2196F3"
                height="300px"
              />

              {/* Bottom row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ReportTable data={data.reportData} />
                <DataAnalysis data={data.analysisData} />
              </div>
            </div>

            {/* Right column - Calendar and stats */}
            <div className="space-y-6">
              <CalendarWidget />

              {/* Statistics widget */}
              <div className="bg-white dark:bg-[#1D3152] rounded-xl p-4 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Статистика
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Пн - Вт
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-red-400 rounded"></div>
                      <span className="text-sm font-medium">$1200</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Ср - Чт
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-red-400 rounded"></div>
                      <span className="text-sm font-medium">$950</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Пт - Вс
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-2 bg-red-400 rounded"></div>
                      <span className="text-sm font-medium">$800</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
