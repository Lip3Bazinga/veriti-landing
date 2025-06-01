import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contabilidade e Gestão Tributária <span className="text-teal-400">Inteligente</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Transforme a gestão financeira da sua empresa com soluções contábeis modernas, eficientes e totalmente
            personalizadas para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3">
              <Link href="#contact">
                Conheça Nossas Soluções
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900"
            >
              <Link href="#services">Ver Serviços</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-teal-400" />
              <span className="text-sm">Atendimento Personalizado</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-teal-400" />
              <span className="text-sm">Tecnologia Avançada</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-teal-400" />
              <span className="text-sm">Compliance Garantido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
