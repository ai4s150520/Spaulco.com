import { Receipt, Shield, BarChart3, FileText, Building, Users, Target, Award, Globe, ArrowRight } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { servicesData } from '@/data/servicesData'

const iconMap: Record<number, any> = {
  1: Receipt,
  2: Shield,
  3: BarChart3,
  4: FileText,
  5: Building,
  6: Users,
  7: Target,
  8: Award,
  9: Globe,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="CA Services - Financial Advisory & Tax Planning"
        description="Comprehensive CA services including financial advisory, tax planning, virtual CFO, audit services, GST compliance, business advisory, and accounting solutions. Expert chartered accountants in Kolkata. Request a consultation now!"
        keywords="CA services, chartered accountants kolkata, financial advisory services, tax planning, virtual CFO, business advisory, audit services, GST services, accounting services, tax consultants, compliance services"
        canonical="/services"
      />
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Professional Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive accounting, audit, risk, and advisory solutions tailored for your business needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* All Services */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const Icon = iconMap[service.id]
              return (
                <AnimatedSection key={service.id} animation="fade-up" delay={index * 50}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:border-primary/50 group hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300" asChild>
                        <Link to={`/services/${service.slug}`}>
                          <span className="group-hover:animate-wiggle">Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer flexible engagement models tailored to your specific requirements.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                <span className="group-hover:animate-wiggle">Contact Us Today</span>
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
