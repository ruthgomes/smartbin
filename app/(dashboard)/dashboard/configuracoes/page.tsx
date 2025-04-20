"use client"

import { useState } from "react"
import { Lock, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

export default function ConfiguracoesPage() {
  const [notificacoes, setNotificacoes] = useState({
    alertas: true,
    relatorios: false,
    atualizacoes: true,
  })

  const [temaEscuro, setTemaEscuro] = useState(false)

  const handleSalvar = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram atualizadas com sucesso.",
    })
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Configurações</h1>
      </div>

      <Tabs defaultValue="conta">
        <TabsList className="mb-6">
          <TabsTrigger value="conta">Conta</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="aparencia">Aparência</TabsTrigger>
          <TabsTrigger value="seguranca">Segurança</TabsTrigger>
        </TabsList>

        <TabsContent value="conta">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
              <CardDescription>Atualize suas informações pessoais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome" defaultValue="Administrador" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="admin@smartbin.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cargo">Cargo</Label>
                <Input id="cargo" defaultValue="Gerente de Operações" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-500 hover:bg-green-600" onClick={handleSalvar}>
                <Save className="mr-2 h-4 w-4" /> Salvar Alterações
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificações</CardTitle>
              <CardDescription>Controle quais notificações você deseja receber</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Alertas de Pontos Cheios</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba notificações quando pontos estiverem quase cheios
                  </p>
                </div>
                <Switch
                  checked={notificacoes.alertas}
                  onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, alertas: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Relatórios Semanais</Label>
                  <p className="text-sm text-muted-foreground">Receba relatórios semanais por email</p>
                </div>
                <Switch
                  checked={notificacoes.relatorios}
                  onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, relatorios: checked })}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Atualizações do Sistema</Label>
                  <p className="text-sm text-muted-foreground">Receba notificações sobre atualizações do sistema</p>
                </div>
                <Switch
                  checked={notificacoes.atualizacoes}
                  onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, atualizacoes: checked })}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-500 hover:bg-green-600" onClick={handleSalvar}>
                <Save className="mr-2 h-4 w-4" /> Salvar Preferências
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="aparencia">
          <Card>
            <CardHeader>
              <CardTitle>Aparência</CardTitle>
              <CardDescription>Personalize a aparência do dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tema Escuro</Label>
                  <p className="text-sm text-muted-foreground">Ativar modo escuro para o dashboard</p>
                </div>
                <Switch checked={temaEscuro} onCheckedChange={setTemaEscuro} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-500 hover:bg-green-600" onClick={handleSalvar}>
                <Save className="mr-2 h-4 w-4" /> Salvar Preferências
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="seguranca">
          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>Gerencie suas configurações de segurança</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senha-atual">Senha Atual</Label>
                <Input id="senha-atual" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nova-senha">Nova Senha</Label>
                <Input id="nova-senha" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                <Input id="confirmar-senha" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-green-500 hover:bg-green-600" onClick={handleSalvar}>
                <Lock className="mr-2 h-4 w-4" /> Atualizar Senha
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
