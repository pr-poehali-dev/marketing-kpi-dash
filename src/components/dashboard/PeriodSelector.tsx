import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PeriodSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({ value, onChange }) => {
  const periods = [
    { value: "7d", label: "Последние 7 дней" },
    { value: "30d", label: "Последние 30 дней" },
    { value: "90d", label: "Последние 90 дней" },
  ];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px] bg-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {periods.map((period) => (
          <SelectItem key={period.value} value={period.value}>
            {period.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PeriodSelector;
