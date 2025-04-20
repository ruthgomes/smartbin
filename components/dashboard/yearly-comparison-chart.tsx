"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "2020",
    papel: 500,
    plastico: 400,
    metal: 240,
  },
  {
    name: "2021",
    papel: 650,
    plastico: 520,
    metal: 280,
  },
  {
    name: "2022",
    papel: 800,
    plastico: 600,
    metal: 320,
  },
  {
    name: "2023",
    papel: 950,
    plastico: 700,
    metal: 380,
  },
  {
    name: "2024",
    papel: 1100,
    plastico: 850,
    metal: 450,
  },
]

export function YearlyComparisonChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} ton`, ""]} />
          <Legend />
          <Bar dataKey="papel" name="Papel" fill="#0088FE" />
          <Bar dataKey="plastico" name="Plástico" fill="#00C49F" />
          <Bar dataKey="metal" name="Metal" fill="#FFBB28" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
