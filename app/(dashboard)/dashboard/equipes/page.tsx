import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TeamsTable } from "@/components/equipes/teams-table"
import { TeamAssignmentDialog } from "@/components/equipes/team-assignment-dialog"

export default function TeamsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Equipes</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-[#4caf50] hover:bg-[#3d8b40]">Adicionar Nova Equipe</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-green-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Equipes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
          </CardContent>
        </Card>
        <Card className="border-green-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Equipes Ativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card className="border-green-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Equipes em Manutenção</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
        <Card className="border-green-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pontos Atendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42 / 50</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-green-100 shadow-sm">
        <CardHeader>
          <CardTitle>Todas as Equipes</CardTitle>
          <CardDescription>Gerencie todas as equipes do sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <TeamsTable />
        </CardContent>
      </Card>

      <TeamAssignmentDialog />
    </div>
  )
}
