import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Logo from "../../public/logo-black.png"

export function Footer() {
  return (
    <footer className="bg-[#000A20] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src={Logo}
              alt="VERITI"
              width={120}
              height={40}
              className="h-10 w-auto "
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando a gestão financeira das empresas com soluções contábeis modernas e personalizadas.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Contabilidade
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Gestão Tributária
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria Financeira
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Departamento Pessoal
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#plans" className="text-gray-400 hover:text-white transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">contato@veriti.com.br</span>
              </div>
              <div className="text-gray-400">
                Rua das Empresas, 123
                <br />
                Centro, São Paulo - SP
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 VERITI - Contabilidade e Gestão Tributária. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
