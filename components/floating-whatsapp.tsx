'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '551421047005'

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Bryan, gostaria de saber mais sobre o Novo Chevrolet Sonic.')}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BD5C] transition-all hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle size={28} className="sm:w-8 sm:h-8" />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </Link>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Fale com Bryan
          <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-foreground" />
        </div>
      </div>
    </motion.div>
  )
}
