import React from "react";
import PeriodSelector from "./PeriodSelector";
import ExportButton from "./ExportButton";

interface DashboardHeaderProps {
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  selectedPeriod,
  onPeriodChange,
}) => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 font-montserrat transition-colors duration-300">
            Marketing KPI Dashboard
          </h1>
          <p className="text-gray-600 dark:text-blue-200 text-lg transition-colors duration-300">
            Мониторинг ключевых метрик из GA4 и Meta Ads
          </p>
        </div>

        <div className="flex gap-3">
          <PeriodSelector value={selectedPeriod} onChange={onPeriodChange} />
          <ExportButton />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
