import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-600 to-green-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartBin</h3>
            <p className="text-green-100 mb-4">Transformando a maneira como reciclamos com tecnologia inteligente.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="text-green-100 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="text-green-100 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-green-100 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-300" />
                <span className="text-green-100">Av. Gov. Danilo de Matos Areosa, 1170 - Manaus</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-300" />
                <span className="text-green-100">(92) 91234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-300" />
                <span className="text-green-100">contato@smartbin.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-100">
          <p>&copy; {new Date().getFullYear()} SmartBin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
