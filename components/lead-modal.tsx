'use client'

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
              className="w-full rounded-xl border p-3"
            />

            <input
              type="tel"
              name="Celular"
              placeholder="WhatsApp"
              required
              className="w-full rounded-xl border p-3"
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