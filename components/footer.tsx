'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { InstagramIcon } from './icons'
import { useState } from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/chevroletjavep'

const unidades = {
  jau: { nome: 'JAÚ', endereco: 'Av. Antônio Henrique G. Pelegrina, 55 - Vila Industrial, Jaú - SP', map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14765.28818370701!2d-48.574822!3d-22.303657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c757e61e89b689%3A0x9186f57fe88b580a!2sChevrolet%20Javep%20Ja%C3%BA!5e0!3m2!1spt-PT!2sbr!4v1780945730175!5m2!1spt-PT!2sbr' },
  marilia: { nome: 'MARÍLIA', endereco: 'Av. Tiradentes, 1360 - Fragata, Marília - SP', map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14773.245469262984!2d-49.931854!3d-22.228262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd0add9fb0a83%3A0xe632596321ee9202!2sAv.%20Tiradentes%2C%201360%20-%20Fragata%2C%20Mar%C3%ADlia%20-%20SP%2C%2017519-000!5e0!3m2!1spt-PT!2sbr!4v1780945833072!5m2!1spt-PT!2sbr' },
  saocarlos: { nome: 'SÃO CARLOS', endereco: 'Av. Comendador Alfredo Maffei, 200 - São Carlos - SP', map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14795.264113006922!2d-47.911584!3d-22.018359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8774e23c7cc77%3A0x9e835c0f0b935f58!2sAv.%20Comendador%20Alfredo%20Maffei%2C%20200%20-%20Jardim%20Sao%20Carlos%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013561-270!5e0!3m2!1spt-PT!2sbr!4v1780946262787!5m2!1spt-PT!2sbr' },
  ribeiraopreto: { nome: 'RIBEIRÃO PRETO', endereco: 'Av. Bráz Olaia Acosta, 2040 - Jd. Nova Aliança - Ribeirão Preto - SP', map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14877.484705899064!2d-47.825994!3d-21.217125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b94bafea2a9f%3A0x6515eefa0c4caee7!2sAv.%20Braz%20Olaia%20Acosta%2C%202040%20-%20Jardim%20Nova%20Alianca%20Sul%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014026-610!5e0!3m2!1spt-PT!2sbr!4v1780945965962!5m2!1spt-PT!2sbr' },
  araca: {
  nome: 'ARAÇATUBA',
  endereco: 'Av. Joaquim Pompeu de Toledo, 333 - Parque Baguaçu - Araçatuba - SP',
  map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2478227078386!2d-50.4342784!3d-21.222019199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94964314fedb7de9%3A0xbb178b4afed75b0b!2sJavep%20Chevrolet%20Ara%C3%A7atuba!5e0!3m2!1spt-BR!2sbr!4v1780945500312!5m2!1spt-BR!2sbr'
},
  sjriopreto: { nome: 'SÃO JOSÉ DO RIO PRETO', endereco: 'Av. José Munia, 6400 - Jd. Francisco Fernandes - São José do Rio Preto - SP', map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14915.114699212012!2d-49.394965!3d-20.840642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdb2928b6c1645%3A0x850eb87e0cb5e7d6!2sChevrolet%20Javep!5e0!3m2!1spt-PT!2sbr!4v1780946351588!5m2!1spt-PT!2sbr' },
}

export default function Footer() {
  const [mapaAtual, setMapaAtual] = useState(unidades.jau.map)
  const [unidadeAtiva, setUnidadeAtiva] = useState('jau')

  const trocarUnidade = (key: keyof typeof unidades) => {
    setMapaAtual(unidades[key].map)
    setUnidadeAtiva(key)
  }

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
            <Image src="/placeholder-logo.png" alt="Javep Chevrolet" width={256} height={80} className="h-25 w-auto brightness-[0.85]" />
          </div>

          {/* Consultant Info */}
          <div className="mb-6">
            <p className="text-background font-semibold">Bryan</p>
            <p className="text-background/60 text-sm">Consultor de Vendas</p>
          </div>

          {/* Social Link */}
          <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-background/60 hover:text-primary transition-colors mb-8">
            <InstagramIcon size={20} />
            <span className="text-sm">@chevroletjavep</span>
          </Link>

          <div style={{color: "#ffffff",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "15px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  border: "1px solid #333",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  letterSpacing: "0.5px",
  lineHeight: "1.5",}}>
            Nossas Localizações!
          </div>
          <br />

          {/* MAPA COM LISTA LATERAL */}
          <div className="w-full max-w-5xl flex gap-6 mb-8">
            {/* LISTA LATERAL */}
            <div className="w-1/3 h-[400px] overflow-y-auto flex flex-col gap-4 pr-2">
              {Object.entries(unidades).map(([key, unidade]) => (
                <button
                  key={key}
                  onClick={() => trocarUnidade(key as keyof typeof unidades)}
                  className={`text-left p-4 rounded-lg transition ${
                    unidadeAtiva === key ? 'bg-yellow-500 text-black font-semibold' : 'bg-black/20 text-white/80 hover:bg-white/10'
                  }`}
                >
                  <h4 className="text-sm font-bold">{unidade.nome}</h4>
                  <p className="text-xs mt-1">{unidade.endereco}</p>
                </button>
              ))}
            </div>

            {/* MAPA */}
            <div className="w-2/3 h-[400px] rounded-xl overflow-hidden border border-white/10">
              <iframe
                src={mapaAtual}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

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