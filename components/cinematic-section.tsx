'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const phrases = [
  'Não vai sair da sua cabeça.',
  '115cv de pura emoção turbo.',
  'Multimídia de 11" sem fio.',
  'Sua nova experiência ao volante.',
]

export default function CinematicSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[200vh] bg-foreground">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/sonic-trunk.png"
            alt="Chevrolet Sonic em movimento"
            fill
            className="object-cover object-center"
            quality={90}
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="space-y-8">
            {phrases.map((phrase, index) => (
              <PhraseItem key={index} phrase={phrase} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PhraseItem({
  phrase,
  index,
  scrollYProgress,
}: {
  phrase: string
  index: number
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const start = 0.1 + index * 0.15
  const end = start + 0.15

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, index === 3 ? 1 : 0]
  )
  const y = useTransform(scrollYProgress, [start, start + 0.05], [30, 0])

  return (
    <motion.p
      style={{ opacity, y }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-background tracking-tight"
    >
      {phrase}
    </motion.p>
  )
}
