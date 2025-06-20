"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Mail, Award, Users, Target, Lightbulb, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image, { type StaticImageData } from "next/image"

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  expertise: string[]
  email: string
  linkedin: string
  avatar: StaticImageData
  color: string
}

import Img1 from "../../public/images/img1.jpg"
import Img2 from "../../public/images/img7.jpg"
import Img3 from "../../public/images/img3.jpg"
import Img4 from "../../public/images/img9.jpg"

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Marlon Barboza",
    role: "Sócia Fundadora",
    description: "Especialista em planejamento tributário com mais de 15 anos de experiência.",
    expertise: ["Planejamento Tributário", "Consultoria Empresarial", "Gestão Financeira"],
    email: "ana@veriti.com.br",
    linkedin: "#",
    avatar: Img1,
    color: "from-teal-400 to-blue-500",
  },
  {
    id: 2,
    name: "Fernando Donegá",
    role: "Diretor Contábil",
    description: "Expert em contabilidade empresarial e compliance fiscal.",
    expertise: ["Contabilidade", "Compliance", "Auditoria"],
    email: "carlos@veriti.com.br",
    linkedin: "#",
    avatar: Img2,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    name: "Tatiane Barboza",
    role: "Gerente de Relacionamento",
    description: "Responsável pelo atendimento personalizado e satisfação dos clientes.",
    expertise: ["Atendimento ao Cliente", "Gestão de Projetos", "Relacionamento"],
    email: "marina@veriti.com.br",
    linkedin: "#",
    avatar: Img3,
    color: "from-green-400 to-teal-500",
  },
  {
    id: 4,
    name: "Roberto Lima",
    role: "Especialista Tributário",
    description: "Foco em otimização fiscal e estratégias tributárias avançadas.",
    expertise: ["Tributário", "Otimização Fiscal", "Consultoria"],
    email: "roberto@veriti.com.br",
    linkedin: "#",
    avatar: Img4,
    color: "from-orange-400 to-red-500",
  },
]

function FloatingShape({ delay = 0, duration = 20 }) {
  return (
    <div
      className="absolute opacity-10 animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div className="w-32 h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-xl animate-bounce"></div>
    </div>
  )
}

function TeamCard({ member, index, isVisible }: { member: TeamMember; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background with Gradient Border */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20">
        {/* Animated Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
        ></div>

        {/* Avatar with Floating Animation */}
        <div className="relative mb-6 flex justify-center">
          <div
            className={`relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 transition-all duration-500 ${isHovered ? "scale-110 border-teal-400/50" : ""
              }`}
          >
            <Image
              src={member.avatar || "/placeholder.svg"}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
            {/* Animated Ring */}
            <div
              className={`absolute inset-0 rounded-full border-2 border-teal-400 transition-all duration-1000 ${isHovered ? "scale-125 opacity-0" : "scale-100 opacity-0"
                }`}
            ></div>
          </div>

          {/* Floating Icons */}
          {isHovered && (
            <>
              <Award className="absolute -top-2 -right-2 h-6 w-6 text-teal-400 animate-bounce" />
              <Target className="absolute -bottom-2 -left-2 h-5 w-5 text-blue-400 animate-pulse" />
            </>
          )}
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-teal-400 font-semibold text-lg">{member.role}</p>

          {/* Expandable Description - Now triggered by hover */}
          <div
            className={`overflow-hidden transition-all duration-500 ${isHovered ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <p className="text-gray-300 leading-relaxed mb-4">{member.description}</p>

            {/* Expertise Tags */}
            {/* <div className="flex flex-wrap gap-2 justify-center mb-4">
              {member.expertise.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm border border-teal-500/30"
                >
                  {skill}
                </span>
              ))}
            </div> */}

            {/* Contact Buttons - Same size */}
            <div className="flex gap-3 justify-center">
              <Button
                size="sm"
                variant="outline"
                className="border-teal-500/50 text-teal-400 hover:bg-teal-500/20 w-24"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/20 w-24"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Chevron Indicator instead of bar */}
          <div className="flex justify-center">
            <ChevronDown
              className={`h-5 w-5 text-teal-400 transition-all duration-300 ${isHovered ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  )
}

export function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStats, setActiveStats] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Auto-rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStats((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, label: "Equipe Especializada", value: "15+ Anos de Experiência" },
    { icon: Award, label: "Certificações", value: "CRC e Especializações" },
    { icon: Lightbulb, label: "Inovação", value: "Soluções Personalizadas" },
  ]

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor: "#000721" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <FloatingShape delay={0} duration={25} />
        <FloatingShape delay={5} duration={30} />
        <FloatingShape delay={10} duration={20} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nosso{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Time</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Profissionais experientes e apaixonados por transformar a gestão financeira das empresas com excelência e
              inovação.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="mt-12 flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-500 ${activeStats === index ? "opacity-100 scale-100" : "opacity-50 scale-95"
                    }`}
                  style={{ display: activeStats === index ? "flex" : "none" }}
                >
                  <div className="bg-teal-500/20 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{stat.label}</p>
                    <p className="text-teal-400">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Interactive Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-teal-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para conhecer nossa equipe pessoalmente?</h3>
            <p className="text-gray-300 mb-6">
              Agende uma reunião e descubra como podemos transformar a gestão da sua empresa.
            </p>
            <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
              Agendar Reunião
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
