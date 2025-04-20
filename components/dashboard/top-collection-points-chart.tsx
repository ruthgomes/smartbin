"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Ponto 1",
    total: 120,
  },
  {
    name: "Ponto 7",
    total: 98,
  },
  {
    name: "Ponto 12",
    total: 86,
  },
  {
    name: "Ponto 3",
    total: 72,
  },
  {
    name: "Ponto 9",
    total: 65,
  },
]

export function TopCollectionPointsChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip formatter={(value) => [`${value} ton`, "Total Coletado"]} />
          <Legend />
          <Bar dataKey="total" name="Total Coletado (ton)" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
