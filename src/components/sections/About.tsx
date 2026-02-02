import { CheckCircle, Award, Users, TrendingUp, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'
import OfficeImg from '@/assets/Office.png'

const highlights = [
  'Solutions delivered within the framework of law and ethical standards',
  'Deep understanding of client businesses before advising',
  'Focus on preventing recurrence of issues, not just reporting them',
  'Strong hand-holding support for new and growing enterprises',
  'Commitment to long-term professional relationships',
  'Partner-led execution and accountability',
]

const stats = [
  { icon: Award, label: 'Years Experience', value: '25+' },
  { icon: Users, label: 'Established', value: '2021' },
  { icon: TrendingUp, label: 'Service Areas', value: '8+' },
  { icon: Shield, label: 'Industries', value: '10+' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection animation="fade-right">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-primary">Subrata Paul & Co</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Subrata Paul & Co is a professional services firm established in 2021, providing integrated accounting, audit, risk, and advisory solutions to corporates, growing enterprises, and professionally managed organizations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Founded by Mr. Subrata Paul, a Chartered Accountant with over 25 years of senior leadership experience in multinational organizations, the firm combines deep technical expertise with practical business understanding. Our focus is on delivering robust governance, financial discipline, and scalable processes, enabling clients to grow with confidence.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <Link to="/about">
                  <span className="group-hover:animate-wiggle">Learn More About Us</span>
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={OfficeImg} 
                  alt="Subrata Paul & Co Office" 
                  className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 hover:border-primary/50"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
