'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_NUMBER = '551421047005'

export default function HeroSection() {
  const whatsappUrlInfo = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Bryan, vi a página do Novo Chevrolet Sonic e gostaria de saber mais detalhes.')}`
  const whatsappUrlTestDrive = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Bryan, gostaria de agendar um test-drive do Novo Chevrolet Sonic.')}`

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sonic-wheel.png"
          alt="Novo Chevrolet Sonic"
          fill
          className="object-cover object-right"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-sm font-semibold tracking-[0.3em] text-primary uppercase mb-4">
              Lançamento 2027
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground"
          >
            NOVO CHEVROLET
            <br />
            <span className="text-primary">SONIC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Visual SUV Cupê, 1.0 Turbo de 115cv e tecnologia de ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 text-2xl sm:text-3xl font-bold text-primary"
          >
            A partir de R$ 129.990
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={whatsappUrlInfo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              QUERO SABER MAIS
            </Link>
            <Link
              href={whatsappUrlTestDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background/80 backdrop-blur-sm text-foreground border border-border px-8 py-4 rounded-full text-base font-semibold hover:bg-muted transition-all"
            >
              AGENDAR TEST-DRIVE
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
