
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const dataAPB = [
  { name: "Pendapatan", value: 450, color: "#dc2626" },
  { name: "Belanja", value: 200, color: "#fbbf24" },
  { name: "Pembiayaan", value: 70, color: "#2563eb" },
];

const APBDesaSection = () => (
  <section id="apbdes" className="mb-10">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-xl font-semibold text-red-700">APB Kelurahan</h3>
      <a href="#apbdes" className="text-red-600 text-sm hover:underline"></a>
    </div>
    <div className="w-full flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl px-6 py-6 shadow">
      <div className="w-full md:w-72 h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={dataAPB} dataKey="value" nameKey="name" outerRadius={80} label>
              {dataAPB.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1 grid gap-2">
        {dataAPB.map((d) => (
          <div key={d.name} className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full" style={{ background: d.color }} />
            <span className="font-semibold text-gray-800">{d.name}</span>
            <span className="ml-auto font-mono text-red-700">{d.value} juta</span>
          </div>
        ))}
        <div className="pt-2 text-xs text-gray-400">
          Data APB Kelurahan, sumber: <a href="#" className="underline">BPKAD 2025</a>
        </div>
      </div>
    </div>
  </section>
);

export default APBDesaSection;
