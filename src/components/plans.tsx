import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export function Plans() {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 299",
      period: "/mês",
      description: "Ideal para pequenas empresas e MEIs",
      features: [
        "Escrituração contábil básica",
        "Apuração de impostos",
        "Balancetes mensais",
        "Suporte por email",
        "Portal do cliente",
      ],
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 599",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Tudo do plano Essencial",
        "Consultoria tributária",
        "Relatórios gerenciais",
        "Suporte prioritário",
        "Reuniões mensais",
        "Planejamento tributário",
      ],
      popular: true,
    },
    {
      name: "Empresarial",
      price: "R$ 1.299",
      period: "/mês",
      description: "Solução completa para grandes empresas",
      features: [
        "Tudo do plano Profissional",
        "Auditoria interna",
        "Consultoria financeira",
        "Suporte 24/7",
        "Reuniões semanais",
        "Departamento pessoal",
        "Compliance avançado",
      ],
      popular: false,
    },
  ]

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Planos e Soluções</h2>
          <p className="text-lg text-gray-600">
            Escolha o plano ideal para sua empresa. Todos os planos incluem atendimento personalizado e tecnologia de
            ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-teal-500 shadow-lg scale-105" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">{plan.description}</CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full mt-8 ${plan.popular ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-900 hover:bg-gray-800"}`}
                >
                  <Link href="#contact">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
