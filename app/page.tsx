import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import CinematicSection from '@/components/cinematic-section'
import GallerySection from '@/components/gallery-section'
import HighlightsSection from '@/components/highlights-section'
import InteriorSection from '@/components/interior-section'
import SpecsSection from '@/components/specs-section'
import DifferentialsSection from '@/components/differentials-section'
import CTASection from '@/components/cta-section'
import ContactSection from '@/components/contact-section'
import FloatingWhatsApp from '@/components/floating-whatsapp'
import Footer from '@/components/footer'
import LeadPopup from '@/components/lead-popup'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CinematicSection />
      <GallerySection />
      <HighlightsSection />
      <InteriorSection />
      <SpecsSection />
      <DifferentialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
      <LeadPopup />
    </main>
  )
}
