import type React from "react"
import { ArrowUpIcon, CheckCircle2, Clock, Trash2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatusCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-green-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Coletado</CardTitle>
          <Trash2 className="h-4 w-4 text-[#4caf50]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.245 toneladas</div>
          <p className="text-xs text-[#4caf50]">
            <span className="text-[#4caf50] inline-flex items-center">
              <ArrowUpIcon className="mr-1 h-4 w-4" />
              +20.1%
            </span>{" "}
            em relação ao mês anterior
          </p>
        </CardContent>
      </Card>
      <Card className="border-green-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pontos Ativos</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-[#4caf50]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42 / 50</div>
          <p className="text-xs text-[#4caf50]">84% dos pontos estão ativos</p>
        </CardContent>
      </Card>
      <Card className="border-green-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Equipes em Campo</CardTitle>
          <Users className="h-4 w-4 text-[#4caf50]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12 / 15</div>
          <p className="text-xs text-[#4caf50]">
            <span className="text-[#4caf50] inline-flex items-center">
              <ArrowUpIcon className="mr-1 h-4 w-4" />
              +2
            </span>{" "}
            em relação à semana anterior
          </p>
        </CardContent>
      </Card>
      <Card className="border-green-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Alertas Pendentes</CardTitle>
          <Clock className="h-4 w-4 text-[#4caf50]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">7</div>
          <p className="text-xs text-[#4caf50]">
            <span className="text-red-500 inline-flex items-center">
              <ArrowUpIcon className="mr-1 h-4 w-4" />
              +3
            </span>{" "}
            nas últimas 24 horas
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
