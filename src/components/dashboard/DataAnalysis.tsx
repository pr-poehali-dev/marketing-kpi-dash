import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnalysisData {
  bankAccount: number;
  paypal: number;
  qiwi: number;
}

interface DataAnalysisProps {
  data: AnalysisData;
}

const DataAnalysis: React.FC<DataAnalysisProps> = ({ data }) => {
  const total = data.bankAccount + data.paypal + data.qiwi;
  const bankPercent = Math.round((data.bankAccount / total) * 100);
  const paypalPercent = Math.round((data.paypal / total) * 100);
  const qiwiPercent = Math.round((data.qiwi / total) * 100);

  return (
    <Card className="shadow-lg border-0 bg-white dark:bg-[#1D3152]">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
            Анализ данных
          </CardTitle>
          <select className="text-sm bg-transparent border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-gray-600 dark:text-gray-300">
            <option>Фильтр</option>
          </select>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Неделя 4</p>
      </CardHeader>
      <CardContent>
        <div className="relative w-48 h-48 mx-auto mb-6">
          {/* Simplified pie chart visualization */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-red-400 to-pink-500 opacity-80"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-60"></div>

            {/* Percentages */}
            <div className="absolute top-4 right-8 text-white font-bold text-sm">
              {qiwiPercent}%
            </div>
            <div className="absolute bottom-8 left-4 text-white font-bold text-lg">
              {paypalPercent}%
            </div>
            <div className="absolute top-8 left-8 text-white font-bold text-sm">
              {bankPercent}%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {data.bankAccount}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Bank account
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {data.paypal}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Paypal
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              {data.qiwi}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Qiwi</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataAnalysis;
