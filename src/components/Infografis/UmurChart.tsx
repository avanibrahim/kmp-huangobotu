
import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
} from "recharts";

const umurData = [
  { usia: "0-5", jumlah: 500 },
  { usia: "6-15", jumlah: 900 },
  { usia: "16-30", jumlah: 1100 },
  { usia: "31-45", jumlah: 700 },
  { usia: "46-60", jumlah: 200 },
  { usia: "61+", jumlah: 100 },
];

const chartConfig = {
  utama: {
    label: "Kelompok Umur",
    color: "#dc2626", // merah-700
  },
};

const UmurChart = () => (
  <div className="w-full h-full">
    <div className="bg-white rounded-2xl border border-red-200 shadow-md px-2 pt-1 pb-4 flex flex-col items-center transition-all duration-150">
      <h2 className="font-bold text-xl text-red-700 mb-1 mt-2 text-center">Kelompok Umur</h2>
      <ChartContainer
        config={chartConfig}
        className="!aspect-[2.1/1] !h-[180px] bg-white rounded-xl border border-red-200 shadow !p-0 w-full max-w-full flex justify-center items-end"
        showAreaGradient
      >
        <AreaChart data={umurData}>
          <XAxis
            dataKey="usia"
            tick={{ fontSize: 13, fill: "#555" }}
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
          <Area
            type="monotone"
            dataKey="jumlah"
            stroke={chartConfig.utama.color}
            fillOpacity={1}
            fill="url(#colorUv)"
            name="Kelompok Umur"
          />
          <ChartTooltip content={<ChartTooltipContent />} />
        </AreaChart>
      </ChartContainer>
    </div>
  </div>
);

export default UmurChart;
