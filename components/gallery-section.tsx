'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const galleryImages = [
  { src: '/images/sonic-front.png', alt: 'Lateral', label: 'Vista Lateral' },
  { src: '/images/sonic-rear.png', alt: 'Chevrolet Sonic visto de frente em perspectiva aérea', label: 'Vista Aérea Frontal' },
  { src: '/images/sonic-side.png', alt: 'Bancos dianteiros do Chevrolet Sonic', label: 'Bancos Dianteiros' },
  { src: '/images/sonic-wheel.png', alt: 'Chevrolet Sonic em movimento na estrada', label: 'Design em Movimento' },
  { src: '/images/sonic-interior.png', alt: 'Traseira do Chevrolet Sonic', label: 'Vista Traseira' },
  { src: '/images/sonic-dashboard.png', alt: 'Painel de instrumentos do Chevrolet Sonic', label: 'Painel de Instrumentos' },
  { src: '/images/sonic-multimedia.png', alt: 'Chevrolet Sonic visto por trás em perspectiva aérea', label: 'Vista Traseira Aérea' },
  { src: '/images/sonic-seats.png', alt: 'Painel do Chevrolet Sonic', label: 'Painel Digital' },
  { src: '/images/sonic-trunk.png', alt: 'Frente do Chevrolet Sonic', label: 'Vista Frontal' },
]

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-background">
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
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Conheça cada detalhe
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <div className={`relative ${index === 0 ? 'aspect-[4/3] md:aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-background text-sm font-medium">{image.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 text-background/80 hover:text-background transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => swiper?.slidePrev()}
              className="absolute left-4 z-10 p-2 text-background/80 hover:text-background transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="absolute right-4 z-10 p-2 text-background/80 hover:text-background transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={40} />
            </button>

            {/* Swiper */}
            <div className="w-full max-w-5xl px-16">
              <Swiper
                modules={[Navigation, Pagination, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                initialSlide={currentIndex}
                onSwiper={setSwiper}
                pagination={{ clickable: true }}
                className="w-full"
              >
                {galleryImages.map((image) => (
                  <SwiperSlide key={image.src}>
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        quality={100}
                      />
                    </div>
                    <p className="text-center text-background/80 mt-4 text-lg">{image.label}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
