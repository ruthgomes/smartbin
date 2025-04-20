import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CollectionPointsTable } from "@/components/pontos-de-coleta/collection-points-table"
import { CollectionPointsMap } from "@/components/pontos-de-coleta/collection-points-map"

export default function CollectionPointsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Pontos de Coleta</h2>
        <div className="flex items-center space-x-2">
          <Button className="bg-[#4caf50] hover:bg-[#3d8b40]">Adicionar Novo Ponto</Button>
        </div>
      </div>
      <Tabs defaultValue="lista" className="space-y-4">
        <TabsList className="bg-green-50 border border-green-100">
          <TabsTrigger value="lista" className="data-[state=active]:bg-[#4caf50] data-[state=active]:text-white">
            Lista
          </TabsTrigger>
          <TabsTrigger value="mapa" className="data-[state=active]:bg-[#4caf50] data-[state=active]:text-white">
            Mapa
          </TabsTrigger>
        </TabsList>
        <TabsContent value="lista" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Pontos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">50</div>
              </CardContent>
            </Card>
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pontos Ativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
              </CardContent>
            </Card>
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pontos Inativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
              </CardContent>
            </Card>
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Capacidade Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">250 ton</div>
              </CardContent>
            </Card>
          </div>
          <Card className="border-green-100 shadow-sm">
            <CardHeader>
              <CardTitle>Todos os Pontos de Coleta</CardTitle>
              <CardDescription>Gerencie todos os pontos de coleta do sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <CollectionPointsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mapa">
          <Card className="border-green-100 shadow-sm">
            <CardHeader>
              <CardTitle>Mapa de Pontos de Coleta</CardTitle>
              <CardDescription>Visualize a localização de todos os pontos de coleta</CardDescription>
            </CardHeader>
            <CardContent>
              <CollectionPointsMap />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
