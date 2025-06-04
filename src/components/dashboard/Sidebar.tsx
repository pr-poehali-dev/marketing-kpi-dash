import React from "react";
import Icon from "@/components/ui/icon";
import { useTheme } from "@/contexts/ThemeContext";

interface SidebarProps {
  isCollapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed = false }) => {
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { icon: "LayoutDashboard", label: "Дашборд", active: true },
    { icon: "Calendar", label: "Календарь" },
    { icon: "Eye", label: "Визуализация" },
    { icon: "BarChart3", label: "Графики" },
    { icon: "Settings2", label: "Управление" },
    { icon: "Smartphone", label: "Соц. сети", badge: "3" },
    {
      icon: "Bell",
      label: "Уведомления",
      badge: "2",
      badgeColor: "bg-red-500",
    },
    { icon: "HelpCircle", label: "Помощь" },
    { icon: "Settings", label: "Настройки" },
    { icon: "LogOut", label: "Выход" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-[#1e3a5f] text-gray-800 dark:text-white flex flex-col z-50 border-r border-gray-200 dark:border-blue-700/30">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-blue-700/30">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-cyan-400 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-cyan-600 dark:text-cyan-400">
            Art
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-medium text-gray-800 dark:text-white">
              Mr. Humen
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">
        <ul className="space-y-1">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-blue-700/50 ${
                  item.active
                    ? "bg-cyan-50 dark:bg-blue-600/50 text-cyan-700 dark:text-white"
                    : "text-gray-600 dark:text-blue-200"
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span
                    className={`ml-auto text-xs px-2 py-0.5 rounded-full text-white ${
                      item.badgeColor || "bg-green-500"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div className="p-6 border-t border-gray-200 dark:border-blue-700/30">
        <div className="flex items-center gap-3">
          <Icon
            name="Sun"
            size={20}
            className={`transition-colors ${!isDark ? "text-yellow-500" : "text-gray-400 dark:text-blue-200"}`}
          />
          <div className="flex-1 flex justify-center">
            <button
              onClick={toggleTheme}
              className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                isDark ? "bg-cyan-400" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
                  isDark ? "translate-x-6" : "translate-x-0.5"
                }`}
              ></div>
            </button>
          </div>
          <Icon
            name="Moon"
            size={20}
            className={`transition-colors ${isDark ? "text-blue-300" : "text-gray-400"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
