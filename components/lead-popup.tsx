'use client'

import { useEffect, useState } from 'react'
import LeadModal from './lead-modal'

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LeadModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      {showPopup && (
        <div className="fixed bottom-24 right-6 z-50 max-w-sm rounded-3xl bg-white p-6 shadow-2xl border animate-bounce">

          <button
            onClick={() => setShowPopup(false)}
            className="absolute right-3 top-3"
          >
            ✕
          </button>

          <h3 className="font-bold text-lg mb-2">
            🚗 Interessado no Novo Sonic?
          </h3>

          <p className="text-sm text-gray-600 mb-4">
            Receba novidades, condições especiais e oportunidades exclusivas.
          </p>

          <button
            onClick={() => {
              setShowPopup(false)
              setShowModal(true)
            }}
            className="w-full rounded-xl bg-yellow-400 py-3 font-bold"
          >
            Quero Saber Mais
          </button>
        </div>
      )}
    </>
  )
}