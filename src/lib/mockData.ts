export const generateMockData = (period: string) => {
  const multiplier = period === "7d" ? 0.7 : period === "30d" ? 1 : 1.3;

  const sessions = Math.floor(35000 * multiplier);
  const conversions = Math.floor(890 * multiplier);
  const cpa = 12.5 / multiplier;
  const roas = 3.2 * multiplier;

  const generateChartData = (baseValue: number, days: number) => {
    const data = [];
    for (let i = days; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const variance = (Math.random() - 0.5) * 0.4;
      data.push({
        date: date.toLocaleDateString("ru-RU", {
          month: "short",
          day: "numeric",
        }),
        value: Math.floor(baseValue * (1 + variance)),
      });
    }
    return data;
  };

  const days = period === "7d" ? 7 : period === "30d" ? 30 : 90;

  return {
    sessions: {
      current: sessions.toLocaleString(),
      change: (Math.random() - 0.5) * 20,
    },
    conversions: {
      current: conversions.toLocaleString(),
      change: (Math.random() - 0.5) * 15,
    },
    cpa: {
      current: cpa.toFixed(2),
      change: (Math.random() - 0.5) * 10,
    },
    roas: {
      current: roas.toFixed(1),
      change: (Math.random() - 0.5) * 8,
    },
    sessionsChart: generateChartData(sessions / days, days),
    conversionsChart: generateChartData(conversions / days, days),
    cpaChart: generateChartData(cpa, days),
    roasChart: generateChartData(roas, days),
    trafficSources: [
      { name: "Органический поиск", value: 45, color: "#2196F3" },
      { name: "Прямой трафик", value: 25, color: "#4CAF50" },
      { name: "Социальные сети", value: 20, color: "#FF9800" },
      { name: "Реклама", value: 10, color: "#9C27B0" },
    ],
  };
};
