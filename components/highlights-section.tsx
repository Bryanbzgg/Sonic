'use client'

import { motion } from 'framer-motion'
import { Sparkles, Cpu, Shield, Armchair, Wifi, Gauge } from 'lucide-react'

const highlights = [
  {
    icon: Sparkles,
    title: 'Visual SUV Cupê',
    description: 'Design moderno e esportivo que se destaca em qualquer lugar.',
  },
  {
    icon: Cpu,
    title: 'Central MyLink 11"',
    description: 'Android Auto e Apple CarPlay sem fio com painel digital de 8".',
  },
  {
    icon: Shield,
    title: '6 Airbags + ESP',
    description: 'Controle de estabilidade, tração, ABS com EBD e ISOFIX.',
  },
  {
    icon: Armchair,
    title: 'Conforto Premium',
    description: 'Ar digital automático, chave presencial e partida por botão.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi OnStar',
    description: 'Conexão nativa, sensores de estacionamento e câmera de ré.',
  },
  {
    icon: Gauge,
    title: 'Motor Turbo',
    description: '1.0 Turbo Flex de 115cv, econômico e com resposta ágil.',
  },
]

export default function HighlightsSection() {
  return (
    <section id="destaques" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            Destaques
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            O que faz o Sonic especial
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
