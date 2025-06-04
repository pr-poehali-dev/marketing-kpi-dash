import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

interface ChartWidgetProps {
  title: string;
  data: Array<{ date: string; value: number }>;
  type: "area" | "line" | "bar";
  color: string;
  period?: string;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({
  title,
  data,
  type,
  color,
  period = "2024",
}) => {
  const chartConfig = {
    value: {
      label: title,
      color: color,
    },
  };

  // Создаем градиентные определения
  const gradientId = `gradient-${title.replace(/\s+/g, "-")}`;
  const areaGradientId = `area-gradient-${title.replace(/\s+/g, "-")}`;

  return (
    <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white animate-fade-in">
      <CardHeader className="pb-6 px-6">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-white">
            {title}
          </CardTitle>
          <span className="text-sm text-slate-400 font-medium">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-0">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {type === "area" ? (
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: -10, bottom: 20 }}
              >
                <defs>
                  <linearGradient
                    id={areaGradientId}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="#1D4ED8" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  className="text-slate-400"
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  className="text-slate-400"
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent className="bg-slate-800 border-slate-600 text-white shadow-2xl rounded-lg" />
                  }
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  fill={`url(#${areaGradientId})`}
                  strokeWidth={3}
                  className="animate-scale-in"
                  dot={false}
                />
              </AreaChart>
            ) : type === "bar" ? (
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: -10, bottom: 20 }}
              >
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#1E40AF" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  className="text-slate-400"
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  className="text-slate-400"
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent className="bg-slate-800 border-slate-600 text-white shadow-2xl rounded-lg" />
                  }
                />
                <Bar
                  dataKey="value"
                  fill={`url(#${gradientId})`}
                  radius={[4, 4, 0, 0]}
                  className="animate-scale-in"
                />
              </BarChart>
            ) : (
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: -10, bottom: 20 }}
              >
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  className="text-slate-400"
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#94A3B8" }}
                  className="text-slate-400"
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent className="bg-slate-800 border-slate-600 text-white shadow-2xl rounded-lg" />
                  }
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={4}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 6 }}
                  activeDot={{
                    r: 8,
                    stroke: "#3B82F6",
                    strokeWidth: 2,
                    fill: "#1E40AF",
                  }}
                  className="animate-fade-in"
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartWidget;
