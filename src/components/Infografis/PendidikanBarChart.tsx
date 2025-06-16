
import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell
} from "recharts";

const pendidikanData = [
  { name: "Tidak Sekolah", jumlah: 100 },
  { name: "SD", jumlah: 800 },
  { name: "SMP", jumlah: 1000 },
  { name: "SMA", jumlah: 1100 },
  { name: "Perg. Tinggi", jumlah: 350 },
];

const chartConfig = {
  "Tidak Sekolah": { label: "Tidak Sekolah", color: "#fecaca" }, // red-200
  SD: { label: "SD", color: "#fde047" },
  SMP: { label: "SMP", color: "#fbbf24" },     // orange-300
  SMA: { label: "SMA", color: "#f87171" },     // red-400
  "Perg. Tinggi": { label: "Perguruan Tinggi", color: "#a21caf" }, // purple-800
};

const PendidikanBarChart = () => (
  <div className="w-full h-full">
    <div className="bg-white rounded-2xl border border-red-200 shadow-md px-2 pt-1 pb-4 flex flex-col items-center transition-all duration-150">
      <h2 className="font-bold text-xl text-red-700 mb-1 mt-2 text-center">Tingkat Pendidikan</h2>
      <ChartContainer
        config={chartConfig}
        className="!aspect-[2.1/1] !h-[180px] bg-white rounded-xl border border-red-200 shadow !p-0 w-full max-w-full flex justify-center items-end"
      >
        <BarChart data={pendidikanData}>
          <XAxis
            dataKey="name"
            tick={{ fontSize: 13, fill: "#555", dy: 7 }}
            axisLine={{ stroke: "#fca5a5" }}
            tickLine={{ stroke: "#fca5a5" }}
          />
          <YAxis
            width={38}
            tick={{ fontSize: 13, fill: "#555" }}
            axisLine={{ stroke: "#fca5a5" }}
            tickLine={{ stroke: "#fca5a5" }}
            domain={[0, 1200]}
            ticks={[0, 300, 600, 900, 1200]}
          />
          <Bar dataKey="jumlah" name="Jumlah" radius={[8, 8, 0, 0]}>
            {pendidikanData.map((entry) => (
              <Cell key={entry.name} fill={chartConfig[entry.name].color} />
            ))}
          </Bar>
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent nameKey="name" />} />
        </BarChart>
      </ChartContainer>
    </div>
  </div>
);

export default PendidikanBarChart;
