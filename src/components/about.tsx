"use client"

import { Users, Award, Target, TrendingUp, Calculator, PieChart, Lightbulb, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content + Rotating Icons */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 flex items-center gap-4">
                A Veriti
                <Image
                  src="/images/8.png"
                  alt="Ícone da Veriti"
                  width={25}
                  height={25}
                />
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Somos mais do que uma empresa de contabilidade - somos parceiros estratégicos no crescimento do seu
                negócio. Atuamos com excelência nas áreas de contabilidade, gestão empresarial e consultoria financeira,
                oferecendo soluções inteligentes, personalizadas e alinhadas com as necessidades de cada cliente.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="#contact">Conversar com especialista</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Glow/blur de fundo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 opacity-20 blur-3xl z-0" />

            {/* Imagem central com borda e sombra */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
              <Image
                src="/images/img10.jpg"
                alt="Imagem dos sócios da Veriti"
                fill
                className="object-cover"
              />
            </div>

            {/* Ícones orbitando */}
            <div className="absolute w-[420px] h-[420px] animate-spin-slow z-0">
              {/* Cada ícone posicionado com transformações absolutas */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <PieChart className="h-6 w-6 text-teal-600" />
                </div>
              </div>

              <div className="absolute top-1/4 right-0 -translate-y-1/2 translate-x-1/2">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <Calculator className="h-5 w-5 text-teal-600" />
                </div>
              </div>

              <div className="absolute top-3/4 right-0 translate-y-1/2 translate-x-1/2">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <FileText className="h-5 w-5 text-teal-600" />
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-1/2">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <Lightbulb className="h-6 w-6 text-teal-600" />
                </div>
              </div>

              <div className="absolute top-3/4 left-0 translate-y-1/2 -translate-x-1/2">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <TrendingUp className="h-5 w-5 text-teal-600" />
                </div>
              </div>

              <div className="absolute top-1/4 left-0 -translate-y-1/2 -translate-x-1/2">
                <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <Target className="h-5 w-5 text-teal-600" />
                </div>
              </div>

              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <Award className="h-4 w-4 text-teal-600" />
                </div>
              </div>

              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2">
                <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                  <Users className="h-4 w-4 text-teal-600" />
                </div>
              </div>
            </div>
          </div>

        </div>


        {/* Bottom section with features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Equipe Especializada</h3>
            <p className="text-gray-600">
              Profissionais qualificados e experientes em contabilidade e gestão tributária.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Excelência</h3>
            <p className="text-gray-600">Comprometimento com a qualidade e precisão em todos os nossos serviços.</p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Foco no Cliente</h3>
            <p className="text-gray-600">
              Soluções personalizadas que atendem às necessidades específicas de cada empresa.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Crescimento</h3>
            <p className="text-gray-600">Ajudamos empresas a crescer com gestão financeira eficiente e estratégica.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
