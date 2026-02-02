import { CheckCircle, Clock, FileText, Phone, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSection from '@/components/AnimatedSection'

interface ServiceDetailProps {
  title: string
  description: string
  icon: React.ElementType
  features: string[]
  pricing: { plan: string; price: string; features: string[] }[]
  process: { step: string; description: string }[]
  documents: string[]
  timeline: string
  faqs: { question: string; answer: string }[]
}

export default function ServiceDetail({
  title,
  description,
  icon: Icon,
  features,
  pricing,
  process,
  documents,
  timeline,
  faqs,
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <Button variant="ghost" className="mb-6" asChild>
              <a href="#home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </a>
            </Button>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-lg">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
                <p className="text-lg text-muted-foreground mt-2">{description}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">What's Included</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <Card key={index} className={index === 1 ? 'border-primary shadow-lg' : ''}>
                  <CardHeader>
                    <CardTitle>{plan.plan}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={index === 1 ? 'default' : 'outline'} asChild>
                      <a href="#book-appointment">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">Our Process</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{step.step}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents & Timeline */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-right">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-left">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-primary mb-2">{timeline}</p>
                  <p className="text-muted-foreground">Average completion time</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let our experts handle your {title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+919433025054">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Book Consultation</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
