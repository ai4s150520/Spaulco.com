import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { servicesData } from '@/data/servicesData'
import NotFound from './NotFound'

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = servicesData.find(s => s.slug === serviceSlug)

  if (!service) return <NotFound />

  // Generate SEO description based on service
  const seoDescription = `Elevate your business with our ${service.title.toLowerCase()}. ${service.shortDescription} Get expert financial advisory services, tax planning, and business advisory solutions tailored to your needs. Contact us today!`
  
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={service.title}
        description={seoDescription}
        keywords={`${service.title}, financial advisory services, tax planning, virtual CFO, business advisory, financial controllership, internal audit, risk advisory, ${service.slug.replace(/-/g, ' ')}`}
        canonical={`/services/${service.slug}`}
      />
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <Link to="/services" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {service.shortDescription}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="font-serif text-3xl font-bold mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="font-serif text-3xl font-bold mb-8">Key Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.keyServices.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities (if applicable) */}
      {service.advancedCapabilities && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up">
                <h2 className="font-serif text-3xl font-bold mb-8">Advanced Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.advancedCapabilities.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Engagement Models (if applicable) */}
      {service.engagementModels && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up">
                <h2 className="font-serif text-3xl font-bold mb-8">Engagement Models</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.engagementModels.map((model, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{model}</CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Delivery Philosophy (if applicable) */}
      {service.deliveryPhilosophy && (
        <section className="py-12 sm:py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up">
                <h2 className="font-serif text-3xl font-bold mb-8">Delivery Philosophy</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {service.deliveryPhilosophy.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* Client Value */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="font-serif text-3xl font-bold mb-8">Client Value</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.clientValue.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl font-bold mb-4">Interested in This Service?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with us to discuss how we can help your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <span className="group-hover:animate-wiggle">Contact Us</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">
                  <span className="group-hover:animate-wiggle">View All Services</span>
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
