import Image from "next/image"

const collaborators = [
  {
    name: "RUTH GOMES",
    role: "DESENVOLVEDORA",
    image: "/ruthgomes.png",
  },
  {
    name: "LETÍCIA SIMAS",
    role: "TEC. AUTOMAÇÃO",
    image: "/leticiasimas.png",
  },
  {
    name: "ALCINEI MACIEL",
    role: "PROJETISTA",
    image: "/alcineimaciel.png",
  },
]

export default function Collaborators() {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-4">Nossa Equipe</h2>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
          Conheça os profissionais dedicados que estão transformando a maneira como lidamos com resíduos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collaborators.map((person, index) => {
            // Alternar cores para cada card
            const colors = [
              { bg: "bg-green-50", border: "border-green-500", text: "text-green-600" },
              { bg: "bg-blue-50", border: "border-blue-500", text: "text-blue-600" },
              { bg: "bg-yellow-50", border: "border-yellow-500", text: "text-yellow-600" },
            ]
            const color = colors[index % colors.length]

            return (
              <div
                key={person.name}
                className={`${color.bg} rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border-t-4 ${color.border}`}
              >
                <div className="aspect-square relative">
                  <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold ${color.text}`}>{person.name}</h3>
                  <p className={`${color.text} mb-3`}>{person.role}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
