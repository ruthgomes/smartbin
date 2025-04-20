"use client"

import { BarChart3, Download, FileText, PieChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RelatoriosPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Relatórios</h1>
        <Button className="bg-green-500 hover:bg-green-600">
          <Download className="mr-2 h-4 w-4" /> Exportar Dados
        </Button>
      </div>

      <Tabs defaultValue="resumo">
        <TabsList className="mb-6">
          <TabsTrigger value="resumo">Resumo</TabsTrigger>
          <TabsTrigger value="coletas">Coletas</TabsTrigger>
          <TabsTrigger value="equipes">Equipes</TabsTrigger>
          <TabsTrigger value="pontos">Pontos</TabsTrigger>
        </TabsList>

        <TabsContent value="resumo">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Coleta por Material</CardTitle>
                <CardDescription>Distribuição de coleta por tipo de material</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-gray-300" />
                  <span className="ml-4 text-gray-500">Gráfico de distribuição</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" /> Ver relatório detalhado
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Coleta Mensal</CardTitle>
                <CardDescription>Volume de coleta nos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-gray-300" />
                  <span className="ml-4 text-gray-500">Gráfico de tendência</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" /> Ver relatório detalhado
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="coletas">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Coletas</CardTitle>
              <CardDescription>Registro de todas as coletas realizadas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Relatório de Coletas</h3>
                <p className="text-gray-500 mb-4">Dados detalhados sobre todas as coletas realizadas</p>
                <Button className="bg-green-500 hover:bg-green-600">
                  <Download className="mr-2 h-4 w-4" /> Baixar Relatório
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipes">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho das Equipes</CardTitle>
              <CardDescription>Análise de desempenho por equipe</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Relatório de Equipes</h3>
                <p className="text-gray-500 mb-4">Dados detalhados sobre o desempenho das equipes</p>
                <Button className="bg-green-500 hover:bg-green-600">
                  <Download className="mr-2 h-4 w-4" /> Baixar Relatório
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pontos">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Pontos de Coleta</CardTitle>
              <CardDescription>Desempenho e estatísticas dos pontos de coleta</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">Relatório de Pontos</h3>
                <p className="text-gray-500 mb-4">Dados detalhados sobre todos os pontos de coleta</p>
                <Button className="bg-green-500 hover:bg-green-600">
                  <Download className="mr-2 h-4 w-4" /> Baixar Relatório
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
