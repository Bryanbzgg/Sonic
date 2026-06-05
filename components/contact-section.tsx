'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from './icons'

const WHATSAPP_NUMBER = '551421047005'
const INSTAGRAM_URL = 'https://www.instagram.com/chevroletjavep'

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Bryan, gostaria de receber atendimento sobre o Novo Chevrolet Sonic.')}`

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* Photo */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/60" />
            <div className="absolute inset-1 rounded-full overflow-hidden bg-muted">
              <Image
                src="/images/consultant-bryan.png"
                alt="Bryan - Consultor de Vendas"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <h3 className="text-2xl font-bold text-foreground mb-1">Bryan</h3>
          <p className="text-muted-foreground mb-8">
            Consultor de Vendas Javep Chevrolet
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#20BD5C] transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={22} />
              Conversar no WhatsApp
            </Link>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              <InstagramIcon size={22} />
              Siga no Instagram
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
