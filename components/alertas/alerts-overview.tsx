import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, AlertTriangle, CheckCircle2 } from "lucide-react"

export function AlertsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-red-200 bg-red-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-red-800">Pontos Críticos</CardTitle>
          <AlertCircle className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-800">3</div>
          <p className="text-xs text-red-600">Pontos com mais de 80% de capacidade</p>
        </CardContent>
      </Card>
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-yellow-800">Pontos em Alerta</CardTitle>
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-800">4</div>
          <p className="text-xs text-yellow-600">Pontos entre 50% e 80% de capacidade</p>
        </CardContent>
      </Card>
      <Card className="border-green-200 bg-green-50">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-green-800">Pontos Normais</CardTitle>
          <CheckCircle2 className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-800">35</div>
          <p className="text-xs text-green-600">Pontos com menos de 50% de capacidade</p>
        </CardContent>
      </Card>
    </div>
  )
}
