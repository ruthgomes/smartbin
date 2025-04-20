import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StatusCards } from "@/components/dashboard/status-cards"
import { WasteTypeChart } from "@/components/dashboard/waste-type-chart"
import { YearlyComparisonChart } from "@/components/dashboard/yearly-comparison-chart"
import { MonthlyComparisonChart } from "@/components/dashboard/monthly-comparison-chart"
import { TopCollectionPointsChart } from "@/components/dashboard/top-collection-points-chart"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-white">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-green-50 border border-orange-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#4caf50] data-[state=active]:text-white">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="analytics" className="data-[state=active]:bg-[#4caf50] data-[state=active]:text-white">
            Análise Detalhada
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <StatusCards />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 border-green-100 shadow-sm">
              <CardHeader>
                <CardTitle>Comparativo Anual</CardTitle>
                <CardDescription>Volume de resíduos coletados por ano</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <YearlyComparisonChart />
              </CardContent>
            </Card>
            <Card className="col-span-3 border-green-100 shadow-sm">
              <CardHeader>
                <CardTitle>Tipos de Resíduos</CardTitle>
                <CardDescription>Distribuição por tipo de material</CardDescription>
              </CardHeader>
              <CardContent>
                <WasteTypeChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3 border-green-100 shadow-sm">
              <CardHeader>
                <CardTitle>Pontos com Maior Volume</CardTitle>
                <CardDescription>Top 5 pontos de coleta com maior volume</CardDescription>
              </CardHeader>
              <CardContent>
                <TopCollectionPointsChart />
              </CardContent>
            </Card>
            <Card className="col-span-4 border-green-100 shadow-sm">
              <CardHeader>
                <CardTitle>Comparativo Mensal</CardTitle>
                <CardDescription>Volume de resíduos coletados por mês</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <MonthlyComparisonChart />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-7 border-green-100 shadow-sm">
              <CardHeader>
                <CardTitle>Análise Detalhada</CardTitle>
                <CardDescription>Visualização detalhada de todos os dados de coleta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Desempenho por Tipo de Resíduo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-20 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-medium text-blue-800 mb-2">Papel</h4>
                        <div className="text-2xl font-bold">450 toneladas</div>
                        <p className="text-sm text-blue-600">36% do total coletado</p>
                        <div className="mt-2 h-2 bg-blue-200 rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full" style={{ width: "36%" }}></div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium text-green-800 mb-2">Plástico</h4>
                        <div className="text-2xl font-bold">350 toneladas</div>
                        <p className="text-sm text-green-600">28% do total coletado</p>
                        <div className="mt-2 h-2 bg-green-200 rounded-full">
                          <div className="h-2 bg-green-500 rounded-full" style={{ width: "28%" }}></div>
                        </div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-medium text-yellow-800 mb-2">Metal</h4>
                        <div className="text-2xl font-bold">445 toneladas</div>
                        <p className="text-sm text-yellow-600">36% do total coletado</p>
                        <div className="mt-2 h-2 bg-yellow-200 rounded-full">
                          <div className="h-2 bg-yellow-500 rounded-full" style={{ width: "36%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Eficiência das Equipes</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-green-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                              Equipe
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                              Pontos Atendidos
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                              Volume Coletado
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                              Eficiência
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Equipe A</td>
                            <td className="px-6 py-4 whitespace-nowrap">12</td>
                            <td className="px-6 py-4 whitespace-nowrap">320 ton</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div className="h-2.5 bg-[#4caf50] rounded-full" style={{ width: "85%" }}></div>
                                </div>
                                <span>85%</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Equipe B</td>
                            <td className="px-6 py-4 whitespace-nowrap">10</td>
                            <td className="px-6 py-4 whitespace-nowrap">280 ton</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div className="h-2.5 bg-[#4caf50] rounded-full" style={{ width: "78%" }}></div>
                                </div>
                                <span>78%</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Equipe C</td>
                            <td className="px-6 py-4 whitespace-nowrap">8</td>
                            <td className="px-6 py-4 whitespace-nowrap">245 ton</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div className="h-2.5 bg-[#4caf50] rounded-full" style={{ width: "65%" }}></div>
                                </div>
                                <span>65%</span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Equipe D</td>
                            <td className="px-6 py-4 whitespace-nowrap">7</td>
                            <td className="px-6 py-4 whitespace-nowrap">210 ton</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div className="h-2.5 bg-[#4caf50] rounded-full" style={{ width: "60%" }}></div>
                                </div>
                                <span>60%</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Distribuição Geográfica</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium mb-2 text-green-800">Região Norte</h4>
                        <div className="text-2xl font-bold">15 pontos</div>
                        <p className="text-sm text-green-700">30% do total de pontos</p>
                        <div className="mt-2 h-2 bg-green-200 rounded-full">
                          <div className="h-2 bg-[#4caf50] rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium mb-2 text-green-800">Região Sul</h4>
                        <div className="text-2xl font-bold">12 pontos</div>
                        <p className="text-sm text-green-700">24% do total de pontos</p>
                        <div className="mt-2 h-2 bg-green-200 rounded-full">
                          <div className="h-2 bg-[#4caf50] rounded-full" style={{ width: "24%" }}></div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium mb-2 text-green-800">Região Leste</h4>
                        <div className="text-2xl font-bold">13 pontos</div>
                        <p className="text-sm text-green-700">26% do total de pontos</p>
                        <div className="mt-2 h-2 bg-green-200 rounded-full">
                          <div className="h-2 bg-[#4caf50] rounded-full" style={{ width: "26%" }}></div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-medium mb-2 text-green-800">Região Oeste</h4>
                        <div className="text-2xl font-bold">10 pontos</div>
                        <p className="text-sm text-green-700">20% do total de pontos</p>
                        <div className="mt-2 h-2 bg-green-200 rounded-full">
                          <div className="h-2 bg-[#4caf50] rounded-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
