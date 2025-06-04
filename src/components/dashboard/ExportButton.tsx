import React from "react";
import { Button } from "@/components/ui/button";

const ExportButton: React.FC = () => {
  const handleExport = () => {
    // Mock CSV export functionality
    const csvData = `Date,Sessions,Conversions,CPA,ROAS
2024-01-01,1245,89,12.50,3.2
2024-01-02,1367,95,11.80,3.4
2024-01-03,1198,78,13.20,3.1`;

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "marketing-kpi-export.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button
      onClick={handleExport}
      className="bg-blue-600 hover:bg-blue-700 text-white"
    >
      📊 Экспорт CSV
    </Button>
  );
};

export default ExportButton;
