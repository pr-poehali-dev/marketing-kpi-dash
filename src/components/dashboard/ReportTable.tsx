import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReportData {
  period: string;
  amount: string;
  clients: number;
}

interface ReportTableProps {
  data: ReportData[];
}

const ReportTable: React.FC<ReportTableProps> = ({ data }) => {
  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-[#1D3152]">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
            Отчет
          </CardTitle>
          <select className="text-sm bg-transparent border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-gray-600 dark:text-gray-300">
            <option>Март</option>
            <option>Апрель</option>
            <option>Май</option>
          </select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0"
            >
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {item.period}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-blue-400">
                  {item.amount}
                </span>
                <span className="text-sm text-red-400">/ {item.clients}</span>
              </div>
            </div>
          ))}

          <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-600">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Средняя ставка
              </span>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-blue-400">
                  $975.61
                </span>
                <span className="text-sm text-red-400">/ 78</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportTable;
