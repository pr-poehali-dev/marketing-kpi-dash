import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import Icon from "@/components/ui/icon";

const CalendarWidget: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  const upcomingEvents = [
    { date: "Сегодня", title: "Встреча с командой", time: "14:00" },
    { date: "Завтра", title: "Презентация проекта", time: "10:30" },
    { date: "15 июн", title: "Анализ метрик", time: "16:00" },
  ];

  return (
    <div className="bg-white dark:bg-[#1e3a5f] rounded-xl p-6 border border-gray-200 dark:border-blue-700/30">
      <div className="flex items-center gap-2 mb-4">
        <Icon
          name="Calendar"
          size={20}
          className="text-cyan-600 dark:text-cyan-400"
        />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Календарь
        </h3>
      </div>

      <div className="space-y-6">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md border border-gray-200 dark:border-blue-700/30"
        />

        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-blue-200 mb-3">
            Ближайшие события
          </h4>
          <div className="space-y-2">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-blue-700/30 transition-colors"
              >
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-800 dark:text-white">
                    {event.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-blue-300">
                    {event.date} • {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
