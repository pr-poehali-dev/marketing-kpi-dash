import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  source: string;
  icon: string;
  isInverted?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  source,
  icon,
  isInverted = false,
}) => {
  const isPositive = isInverted ? change < 0 : change > 0;
  const changeColor = isPositive ? "text-green-600" : "text-red-600";
  const changeSymbol = change > 0 ? "+" : "";

  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl">{icon}</div>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {source}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          <div
            className={`text-sm font-medium ${changeColor} flex items-center`}
          >
            <span className="mr-1">{isPositive ? "↗" : "↘"}</span>
            {changeSymbol}
            {change.toFixed(1)}%
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
