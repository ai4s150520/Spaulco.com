// src/pages/HomePage.tsx
import SEO from '../components/SEO'
import HeroCA from '../components/sections/HeroCA'
import TrustBadges from '../components/TrustBadges'
import ServicesGrid from '../components/sections/ServicesGrid'
import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Achievements from '../components/sections/Achievements'
import TeamShowcase from '../components/sections/TeamShowcase'
import Testimonials from '../components/sections/Testimonials'
import Blog from '../components/sections/Blog'
import FAQ from '../components/sections/FAQ'
import GSTCalculator from '../components/sections/GSTCalculator'

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Expert Chartered Accountants in Kolkata"
        description="Leading CA firm in Kolkata offering expert financial advisory services, tax planning, virtual CFO, business advisory, audit services, and compliance solutions. 25+ years of experience. Book your free consultation today!"
        keywords="chartered accountants kolkata, CA firm kolkata, financial advisory services, tax planning, virtual CFO, business advisory, audit services, GST services, tax consultant kolkata, accounting services kolkata"
        canonical="/"
      />
      <HeroCA />
      <TrustBadges />
      <ServicesGrid />
      <About />
      <WhyChooseUs />
      <Achievements />
      <TeamShowcase />
      <Testimonials />
      <Blog />
      <FAQ />
      <GSTCalculator />
    </>
  )
}