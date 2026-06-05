'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const WHATSAPP_NUMBER = '551421047005'

const ctaButtons = [
  {
    label: 'AVALIAR MEU USADO',
    message: 'Olá Bryan, gostaria de avaliar meu veículo para uma possível troca no Novo Chevrolet Sonic.',
    variant: 'primary' as const,
  },
  {
    label: 'CONDIÇÕES DE PAGAMENTO',
    message: 'Olá Bryan, gostaria de saber mais sobre as formas de pagamento do Novo Chevrolet Sonic.',
    variant: 'secondary' as const,
  },
  {
    label: 'AGENDAR TEST-DRIVE',
    message: 'Olá Bryan, gostaria de agendar um test-drive do Novo Chevrolet Sonic.',
    variant: 'secondary' as const,
  },
]

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sonic-hero.png"
          alt="Chevrolet Sonic"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background tracking-tight mb-6">
              Gostou do Novo Chevrolet Sonic?
            </h2>
            <p className="text-lg text-background/80 mb-10">
              Solicite uma avaliação do seu usado, conheça as condições disponíveis ou agende um test-drive.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            {ctaButtons.map((button) => {
              const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(button.message)}`
              
              return (
                <Link
                  key={button.label}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold transition-all hover:scale-105 ${
                    button.variant === 'primary'
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-background/10 text-background border border-background/30 hover:bg-background/20'
                  }`}
                >
                  {button.label}
                  <ArrowRight size={16} />
                </Link>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
