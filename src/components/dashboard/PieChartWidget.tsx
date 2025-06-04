import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface PieChartData {
  name: string;
  value: number;
  color: string;
}

interface PieChartWidgetProps {
  title: string;
  data: PieChartData[];
}

const PieChartWidget: React.FC<PieChartWidgetProps> = ({ title, data }) => {
  const chartConfig = data.reduce((config, item) => {
    config[item.name.toLowerCase()] = {
      label: item.name,
      color: item.color,
    };
    return config;
  }, {} as any);

  const renderCustomLabel = (entry: any) => {
    return `${entry.value}%`;
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-[#1D3152]">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{
                fontSize: "14px",
                color: "#6B7280",
              }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartWidget;
