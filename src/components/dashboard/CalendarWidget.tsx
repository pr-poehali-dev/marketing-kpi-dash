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
    <div className="bg-white dark:bg-[#1e3a5f] rounded-xl p-6 border border-gray-200 dark:border-blue-700/30 h-fit">
      <div className="flex items-center gap-2 mb-6">
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
        {/* Календарь с улучшенной адаптацией */}
        <div className="w-full">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="w-full [&_table]:w-full [&_table]:table-fixed
                     [&_th]:text-center [&_th]:text-xs [&_th]:font-medium [&_th]:text-gray-500 [&_th]:dark:text-blue-300 [&_th]:pb-2
                     [&_td]:text-center [&_td]:p-0 
                     [&_.rdp-cell]:w-full [&_.rdp-cell]:h-10 [&_.rdp-cell]:flex [&_.rdp-cell]:justify-center [&_.rdp-cell]:items-center
                     [&_.rdp-button]:w-8 [&_.rdp-button]:h-8 [&_.rdp-button]:text-sm [&_.rdp-button]:rounded-lg 
                     [&_.rdp-button]:hover:bg-cyan-50 [&_.rdp-button]:dark:hover:bg-blue-700/50
                     [&_.rdp-day_selected]:bg-cyan-600 [&_.rdp-day_selected]:text-white [&_.rdp-day_selected]:font-medium
                     [&_.rdp-day_today]:bg-cyan-100 [&_.rdp-day_today]:dark:bg-blue-700/30 [&_.rdp-day_today]:text-cyan-700 [&_.rdp-day_today]:dark:text-cyan-400 [&_.rdp-day_today]:font-medium
                     [&_.rdp-nav_button]:w-8 [&_.rdp-nav_button]:h-8 [&_.rdp-nav_button]:rounded-lg [&_.rdp-nav_button]:hover:bg-gray-100 [&_.rdp-nav_button]:dark:hover:bg-blue-700/50"
          />
        </div>

        {/* События */}
        <div>
          <h4 className="text-sm font-medium text-gray-600 dark:text-blue-200 mb-4">
            Ближайшие события
          </h4>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 dark:border-blue-700/30 
                         hover:bg-gray-50 dark:hover:bg-blue-700/20 transition-all duration-200 cursor-pointer"
              >
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 dark:text-white mb-1 truncate">
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

        {/* Кнопка добавить событие */}
        <button
          className="w-full py-2 px-4 text-sm text-cyan-600 dark:text-cyan-400 
                         border border-cyan-200 dark:border-blue-600 rounded-lg 
                         hover:bg-cyan-50 dark:hover:bg-blue-700/30 transition-colors duration-200
                         flex items-center justify-center gap-2"
        >
          <Icon name="Plus" size={16} />
          Добавить событие
        </button>
      </div>
    </div>
  );
};

export default CalendarWidget;
