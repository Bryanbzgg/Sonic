'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const interiorImages = [
  { src: '/images/sonic-dashboard.png', label: 'Painel' },
  { src: '/images/sonic-seats.png', label: 'Bancos' },
  { src: '/images/sonic-multimedia.png', label: 'Multimídia' },
  { src: '/images/sonic-interior.png', label: 'Acabamento' },
]

export default function InteriorSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="interior" className="py-24 lg:py-32 bg-background">
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
            Interior
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Interior Premium
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pensado para quem busca conforto, tecnologia e praticidade.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden mb-8"
        >
          <Image
            src={interiorImages[activeIndex].src}
            alt={interiorImages[activeIndex].label}
            fill
            className="object-cover transition-opacity duration-500"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
        </motion.div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4"
        >
          {interiorImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setActiveIndex(index)}
              className={`group relative rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative w-20 h-14 sm:w-28 sm:h-20">
                <Image
                  src={image.src}
                  alt={image.label}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="absolute bottom-0 left-0 right-0 bg-foreground/80 text-background text-xs py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {image.label}
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
