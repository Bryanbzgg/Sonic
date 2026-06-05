'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { InstagramIcon } from './icons'

const INSTAGRAM_URL = 'https://www.instagram.com/chevroletjavep'

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/placeholder-logo.png"
              alt="Javep Chevrolet"
              width={256}
              height={80}
              className="h-25 w-auto brightness-[0.85]"
            />
          </div>

          {/* Consultant Info */}
          <div className="mb-6">
            <p className="text-background font-semibold">Bryan</p>
            <p className="text-background/60 text-sm">Consultor de Vendas</p>
          </div>

          {/* Social Link */}
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-background/60 hover:text-primary transition-colors mb-8"
          >
            <InstagramIcon size={20} />
            <span className="text-sm">@chevroletjavep</span>
          </Link>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-background/10 mb-6" />

          {/* Copyright */}
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Javep Chevrolet. Todos os direitos reservados.
          </p>
        </motion.div>

        
      </div>

      
    </footer>
  )
}
