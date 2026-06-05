import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  display: 'swap'
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Novo Chevrolet Sonic | Javep Chevrolet',
  description: 'Conheça o Novo Chevrolet Sonic. Tecnologia, design e performance em um único veículo. Fale com Bryan, consultor Javep Chevrolet.',
  keywords: ['Chevrolet Sonic', 'Javep Chevrolet', 'carro novo', 'sedan', 'test-drive', 'Bryan'],
  authors: [{ name: 'Javep Chevrolet' }],
  openGraph: {
    title: 'Novo Chevrolet Sonic | Javep Chevrolet',
    description: 'Tecnologia, design e performance em um único veículo.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#003478',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
