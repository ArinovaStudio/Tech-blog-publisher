import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { DSASection } from '@/components/dsa-section'
import { CourseCards } from '@/components/course-cards'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CourseCards />
      <DSASection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
