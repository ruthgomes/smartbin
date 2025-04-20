import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertsTable } from "@/components/alertas/alerts-table"
import { AlertsOverview } from "@/components/alertas/alerts-overview"

export default function AlertsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Alertas</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-[#4caf50] hover:bg-[#3d8b40]">Atualizar Alertas</Button>
        </div>
      </div>

      <AlertsOverview />

      <Card className="border-green-100 shadow-sm">
        <CardHeader>
          <CardTitle>Todos os Alertas</CardTitle>
          <CardDescription>Gerencie todos os alertas do sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <AlertsTable />
        </CardContent>
      </Card>
    </div>
  )
}
