'use client'

import { motion } from 'framer-motion'
import { Sparkles, Cpu, BadgeDollarSign, Award } from 'lucide-react'

const differentials = [
  {
    icon: Sparkles,
    title: 'Visual SUV Cupê',
    description: 'Design moderno e estilo único que chama atenção.',
  },
  {
    icon: Cpu,
    title: 'Multimídia Grande',
    description: 'Tela de 11" com conexão sem fio completa.',
  },
  {
    icon: BadgeDollarSign,
    title: 'A partir de R$ 129.990',
    description: '70% + 12x sem juros ou 50% + 36x a 0,99%.',
  },
  {
    icon: Award,
    title: 'Porta-malas 392L',
    description: 'O mais espaçoso da categoria para sua aventura.',
  },
]

export default function DifferentialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Por que conhecer o Novo Sonic?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
