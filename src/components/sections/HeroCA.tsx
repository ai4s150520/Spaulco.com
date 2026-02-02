// src/components/sections/HeroCA.tsx
import { Phone, ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'
import BannerImg from '@/assets/Banner.png'

const stats = [
  { label: 'Years Experience', value: '25+' },
  { label: 'Established', value: '2021' },
  { label: 'Service Areas', value: '8+' },
  { label: 'Industries Served', value: '10+' },
]

const trustPoints = [
  'Partner-Led Execution',
  'Deep Business Understanding',
  'Board-Level Advisory Experience',
  'Flexible Engagement Models',
  'Ethics & Compliance Focused',
  'Long-Term Partnership Approach',
]

export default function HeroCA() {
  return (
    <section id="home" className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-radial opacity-10 pointer-events-none"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full text-center">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold">Est. 2021 | 25+ Years Experience</span>
              </div>
              
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Subrata Paul & Co{' '}
                <span className="text-primary">Chartered Accountants</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-semibold">
                Chartered Accountants Empowering Businesses in Kolkata & Beyond
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
                Integrated accounting, audit, risk, and advisory solutions to corporates, growing enterprises, and professionally managed organizations.
              </p>
              
              {/* Trust points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto" asChild>
                  <Link to="/book-appointment">
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
                    <span className="group-hover:animate-wiggle">Book Consultation</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a href="#services">
                    <span className="group-hover:animate-wiggle">View Services</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Right content - Banner Image */}
          <AnimatedSection animation="fade-left" delay={300}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src={BannerImg} 
                  alt="Subrata Paul & Co - Professional CA Services" 
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500 cursor-pointer"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}