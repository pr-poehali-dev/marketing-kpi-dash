import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-4",
        caption_label: "text-sm font-medium text-gray-800 dark:text-white px-2",
        nav: "space-x-1 flex items-center absolute inset-0",
        nav_button:
          "h-8 w-8 bg-transparent p-0 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-700/50 border-0 shadow-none",
        nav_button_previous: "absolute left-0",
        nav_button_next: "absolute right-0",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-gray-500 dark:text-blue-300 rounded-md w-9 font-normal text-xs text-center pb-2",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative",
        day: "h-8 w-8 p-0 font-normal rounded-lg text-sm hover:bg-cyan-50 dark:hover:bg-blue-700/50 border-0 shadow-none",
        day_range_end: "day-range-end",
        day_selected:
          "bg-cyan-600 text-white hover:bg-cyan-600 hover:text-white focus:bg-cyan-600 focus:text-white font-medium",
        day_today:
          "bg-cyan-100 dark:bg-blue-700/30 text-cyan-700 dark:text-cyan-400 font-medium",
        day_outside: "text-gray-400 dark:text-gray-600 opacity-50",
        day_disabled: "text-gray-400 dark:text-gray-600 opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ..._props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ..._props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
