'use client'

import { motion } from 'framer-motion'
import { Fuel, Cog, Gauge, Box, Shield, Monitor } from 'lucide-react'

const specs = [
  {
    icon: Fuel,
    label: 'Motorização',
    value: '1.0 Turbo',
    detail: '115cv | 16,8 kgfm',
  },
  {
    icon: Cog,
    label: 'Transmissão',
    value: '6 Marchas',
    detail: 'Automática',
  },
  {
    icon: Gauge,
    label: 'Consumo',
    value: '14 km/l',
    detail: 'Estrada (Flex)',
  },
  {
    icon: Box,
    label: 'Porta-malas',
    value: '392L',
    detail: 'Capacidade',
  },
  {
    icon: Shield,
    label: 'Segurança',
    value: '6 Airbags',
    detail: 'ABS + ESP + Tração',
  },
  {
    icon: Monitor,
    label: 'Multimídia',
    value: '11"',
    detail: 'MyLink Sem Fio',
  },
]

export default function SpecsSection() {
  return (
    <section id="especificacoes" className="py-24 lg:py-32 bg-foreground">
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
            Especificações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background tracking-tight">
            Números que impressionam
          </h2>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-background/10 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <spec.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <p className="text-sm text-background/60 mb-1">{spec.label}</p>
              <p className="text-3xl sm:text-4xl font-bold text-background mb-1">{spec.value}</p>
              <p className="text-sm text-background/60">{spec.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
