"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", "2023": 65, "2024": 78 },
  { name: "Fev", "2023": 59, "2024": 63 },
  { name: "Mar", "2023": 80, "2024": 85 },
  { name: "Abr", "2023": 81, "2024": 90 },
  { name: "Mai", "2023": 56, "2024": 68 },
  { name: "Jun", "2023": 55, "2024": 65 },
  { name: "Jul", "2023": 40, "2024": 0 },
  { name: "Ago", "2023": 45, "2024": 0 },
  { name: "Set", "2023": 60, "2024": 0 },
  { name: "Out", "2023": 70, "2024": 0 },
  { name: "Nov", "2023": 80, "2024": 0 },
  { name: "Dez", "2023": 90, "2024": 0 },
]

export function MonthlyComparisonChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} ton`, ""]} />
          <Legend />
          <Line type="monotone" dataKey="2023" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="2024" stroke="#4caf50" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
