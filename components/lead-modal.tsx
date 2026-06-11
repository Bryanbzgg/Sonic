'use client'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadModal({
  isOpen,
  onClose,
}: LeadModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in">

        <button
          onClick={onClose}
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

        <form
          action="https://formsubmit.co/bryan.fusco@javep.com.br"
          method="POST"
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
            className="w-full rounded-xl bg-yellow-400 py-3 font-bold transition hover:scale-105"
          >
            Receber Informações
          </button>
        </form>
      </div>
    </div>
  )
}