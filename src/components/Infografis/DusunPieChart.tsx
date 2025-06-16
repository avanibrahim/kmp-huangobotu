
import React from "react";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  PieChart,
  Pie,
  Cell,
} from "recharts";

const dusunData = [
  { name: "Dusun A", value: 1200 },
  { name: "Dusun B", value: 1000 },
  { name: "Dusun C", value: 1300 },
];

const chartConfig = {
  "Dusun A": { label: "Dusun A", color: "#f87171" }, // red-400
  "Dusun B": { label: "Dusun B", color: "#fbbf24" },
  "Dusun C": { label: "Dusun C", color: "#60a5fa" },
};

const DusunPieChart = () => (
  <div className="w-full h-full">
    <div className="bg-white rounded-2xl border border-red-200 shadow-md px-2 pt-1 pb-4 flex flex-col items-center transition-all duration-150">
      <h2 className="font-bold text-xl text-red-700 mb-1 mt-2 text-center">Distribusi Penduduk per Dusun</h2>
      <ChartContainer config={chartConfig} className="!aspect-[2.1/1] !h-[180px] bg-white rounded-xl border border-red-200 shadow !p-0 w-full max-w-full flex justify-center items-end">
        <PieChart>
          <Pie
            data={dusunData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={58}
            innerRadius={30}
            labelLine={false}
            label={({ value, name }) => (
              <text
                fill={chartConfig[name]?.color || "#888"}
                fontSize={14}
                fontWeight={500}
                textAnchor="middle"
                x={0}
                y={0}
              >
                {value}
              </text>
            )}
            paddingAngle={2}
          >
            {dusunData.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={chartConfig[entry.name].color} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent nameKey="name" labelKey="name" />} />
          <ChartLegend
            content={<ChartLegendContent nameKey="name" />}
            verticalAlign="bottom"
          />
        </PieChart>
      </ChartContainer>
    </div>
  </div>
);

export default DusunPieChart;
