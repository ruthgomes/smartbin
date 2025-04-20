import Image from "next/image"
import {
  RatioIcon as Balance,
  CheckCircle,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Recycle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Carousel from "@/components/carousel"
import Collaborators from "@/components/collaborators"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-green-100 to-white py-20" id="home">
        <div className="container flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700">
              Reciclagem Inteligente para um Futuro Sustentável
            </h1>
            <p className="text-lg text-gray-700">
              A SmartBin oferece soluções inovadoras para monitoramento e gestão de resíduos, tornando a reciclagem mais
              eficiente e acessível.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <a href="#contato">Entre em Contato</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-green-500 text-green-500 hover:bg-green-50">
                <a href="#sobre">Saiba Mais</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="SmartBin Recycling Solution"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Nossas Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Recycle className="text-green-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-3">Lixeiras Inteligentes</h3>
              <p className="text-gray-700">
                Nossas lixeiras são equipadas com sensores que monitoram o nível de enchimento e alertam quando precisam
                ser esvaziadas.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-500" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Dashboard Analítico</h3>
              <p className="text-gray-700">
                Acompanhe em tempo real a quantidade de resíduos coletados por tipo e otimize suas rotas de coleta.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Impacto Ambiental</h3>
              <p className="text-gray-700">
                Visualize o impacto positivo da sua reciclagem no meio ambiente com métricas claras e objetivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white" id="sobre">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Sobre a SmartBin</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="História da SmartBin"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-green-600">Nossa História</h3>
              <p className="text-gray-700">
                A SmartBin nasceu em 2018 a partir da visão de um grupo de engenheiros e ambientalistas preocupados com
                o crescente problema de gestão de resíduos nas cidades brasileiras.
              </p>
              <p className="text-gray-700">
                Percebemos que muitas lixeiras de reciclagem eram esvaziadas em momentos inadequados - algumas quando
                ainda estavam pela metade, desperdiçando recursos, e outras quando já estavam transbordando, causando
                poluição.
              </p>
              <p className="text-gray-700">
                Foi então que desenvolvemos um sistema inteligente de monitoramento que utiliza sensores para medir o
                nível de enchimento das lixeiras e alertar as equipes de coleta no momento ideal para o recolhimento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Nossa Missão</h3>
              <p className="text-gray-700">
                Transformar a gestão de resíduos através da tecnologia, tornando a reciclagem mais eficiente e acessível
                para todos, contribuindo para um planeta mais limpo e sustentável.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como a principal referência em soluções tecnológicas para gestão de resíduos, presente
                em todas as grandes cidades do Brasil e da América Latina até 2030.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">Nossos Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span>Sustentabilidade em todas as ações</span>
                </li>
                <li className="flex items-center gap-2">
                  <Balance className="text-blue-500 h-5 w-5 flex-shrink-0" />
                  <span>Inovação e melhoria contínua</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="text-yellow-500 h-5 w-5 flex-shrink-0" />
                  <span>Responsabilidade socioambiental</span>
                </li>
                <li className="flex items-center gap-2">
                  <Leaf className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span>Compromisso com o futuro do planeta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <Collaborators />

      {/* Project Progress Carousel */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">Nossa Jornada</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Acompanhe a evolução do projeto SmartBin desde o início até a implementação completa.
          </p>
          <Carousel />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white" id="contato">
        <div className="container">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">
                    Nome
                  </Label>
                  <Input id="name" name="name" required className="border-green-200 focus:border-green-500" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-green-200 focus:border-green-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Telefone
                  </Label>
                  <Input id="phone" name="phone" className="border-green-200 focus:border-green-500" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="border-green-200 focus:border-green-500"
                  />
                </div>

                <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/lixeiro.jpeg"
                  alt="SmartBin Contact"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow border-b-4 border-green-500">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Telefone</h3>
              <p className="text-gray-700">(92) 91234-5678</p>
              <p className="text-gray-700">(92) 4002-8922</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow border-b-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Email</h3>
              <p className="text-gray-700">contato@smartbin.com.br</p>
              <p className="text-gray-700">suporte@smartbin.com.br</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow border-b-4 border-yellow-500">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-yellow-600 mb-2">Endereço</h3>
              <p className="text-gray-700">Av. Gov. Danilo de Matos Areosa, 1170 - Distrito Industrial I</p>
              <p className="text-gray-700">Manaus, AM - CEP 69075-351</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
