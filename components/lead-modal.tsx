'use client'

import { input } from 'framer-motion/client'
import { useState } from 'react'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadModal({
  isOpen,
  onClose,
}: LeadModalProps) {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/bryan.fusco@javep.com.br',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      )

      if (response.ok) {
        setSuccess(true)
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    }

    setLoading(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <button
          onClick={() => {
            setSuccess(false)
            onClose()
          }}
          className="absolute top-5 right-5 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-2">
          🚗 Tenho Interesse
        </h2>

        <p className="text-gray-600 mb-6">
          Receba informações sobre o Novo Chevrolet Sonic e oportunidades exclusivas da Javep.
        </p>

        {success ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">✅</div>

            <h3 className="text-xl font-bold mb-2">
              Informações enviadas com sucesso!
            </h3>

            <p className="text-gray-600 mb-6">
              Nossa equipe entrará em contato em breve.
            </p>

            <button
              onClick={() => {
                setSuccess(false)
                onClose()
              }}
              className="w-full rounded-xl bg-yellow-400 py-3 font-bold transition hover:scale-105"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="Novo Lead - Site Sonic"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="Origem"
              value="Landing Page Sonic"
            />

            <input
              type="text"
              name="Nome"
              placeholder="Nome completo"
              required
              className="w-full rounded-xl border p-3"
            />

            <input
              type="email"
              name="Email"
              placeholder="Seu e-mail"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="w-full rounded-xl border p-3"
            />

            <input
              type="tel"
              name="Celular"
              placeholder="(14) 99999-9999"
              required
              maxLength={15}
              pattern="\(\d{2}\)\s\d{5}-\d{4}"
              title="Digite um WhatsApp válido no formato (14) 99999-9999"
              onInput={(e) => {
                let value = e.currentTarget.value.replace(/\D/g, '')

                if (value.length > 11) {
                  value = value.slice(0, 11)
                }

                value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
                value = value.replace(/(\d{5})(\d)/, '$1-$2')

                e.currentTarget.value = value
              }}
              className="w-full rounded-xl border p-3 transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-yellow-400 py-3 font-bold transition hover:scale-105 disabled:opacity-50"
            >
              {loading ? 'Enviando...' : 'Receber Informações'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}