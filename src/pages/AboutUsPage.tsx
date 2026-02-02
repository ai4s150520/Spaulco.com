import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us - Leading CA Firm in Kolkata"
        description="Discover Subrata Paul & Co, a professional CA firm in Kolkata with 25+ years of experience. We provide expert financial advisory services, tax planning, virtual CFO, audit services, and business advisory solutions. Partner with us today!"
        keywords="CA firm kolkata, chartered accountants, financial advisory services, tax planning, virtual CFO, business advisory, audit services, professional accounting firm, tax consultants kolkata"
        canonical="/about"
      />
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-primary">Subrata Paul & Co</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Professional services firm established in 2021, providing integrated accounting, audit, risk, and advisory solutions to corporates, growing enterprises, and professionally managed organizations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="fade-up">
              <h2 className="font-serif text-3xl font-bold mb-6">Firm Profile</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Subrata Paul & Co is a professional services firm established in 2021, providing integrated accounting, audit, risk, and advisory solutions to corporates, growing enterprises, and professionally managed organizations. The firm was founded by Mr. Subrata Paul, a Chartered Accountant with over 25 years of senior finance leadership experience in multinational organizations.
                </p>
                <p>
                  The firm combines deep technical expertise with strong business understanding, focusing on strengthening governance, financial discipline, and scalable operating processes that enable clients to grow sustainably and with confidence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership & Experience */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-6">Leadership & Experience</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The firm is led by senior finance, audit, and risk professionals with extensive cross-industry experience across manufacturing, retail, FMCG, logistics, hospitality, NBFCs, and government-linked entities, spanning India, the USA, and the UAE. The leadership team brings strong expertise in Board-level advisory, governance frameworks, enterprise risk management, internal audit setup, finance transformation, and process re-engineering, supporting organizations in strengthening controls, efficiency, and compliance.
                </p>
                <p>
                  Subrata Paul, Founder & Proprietor, is a Chartered Accountant and alumnus of St. Xavier's College, Kolkata, with over 25 years of senior finance leadership experience in multinational organizations including ESAB, Danieli, Fläkt, and Wabtec India. He has also served as Director on the Boards of multiple Wabtec Group companies in India, with deep exposure to governance, strategy, and large-scale operations.
                </p>
                <p>
                  Surajit Datta, Senior Consultant – Internal Audit, Risk & Governance, brings 30+ years of experience across India and the UAE. He has led Internal Audit, Compliance, and ERM functions, including over 16 years heading Internal Audit for a Dubai Government-owned entity. He is recognized for building risk-based audit frameworks, driving process improvements, and advising Boards and Audit Committees on governance and risk matters. He holds an MBA (Finance) and is CA Intermediate, and has contributed to academia as a mentor to MBA students at S.P. Jain School of Global Management, Dubai.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Credentials & Capabilities */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Selected Credentials & Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Transaction support including financial modeling, bid evaluations, and due diligence',
                  'Support to finance transformation, ERP implementations, and digitization initiatives',
                  'Establishment and leadership of Internal Audit functions for large organizations, including government-owned entities',
                  'Design and implementation of enterprise-wide ERM frameworks and risk registers',
                  'Development and implementation of operational SOPs for large multinational groups',
                  'Board and Audit Committee reporting and advisory support',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Our Value Proposition</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Partner-led execution with high accountability',
                  'Deep understanding of client business models before advising',
                  'Practical, implementable recommendations rather than theoretical reports',
                  'Flexible engagement and delivery models',
                  'Strong focus on ethics, compliance, and long-term professional relationships',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Philosophy */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Core Service Offerings</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Financial Controllership & Virtual CFO Services',
                  'Accounting, Audit & Compliance Outsourcing',
                  'Internal Audit & Risk Advisory (risk-based audits, ERM frameworks, governance advisory)',
                  'Management Audit & Process Improvement',
                  'Taxation Advisory & Regulatory Compliance',
                  'Fund Raising & Transaction Support',
                  'Strategic & Special Advisory Assignments',
                ].map((service, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Guiding Service Philosophy */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Guiding Service Philosophy</h2>
              <p className="text-lg text-muted-foreground text-center mb-8">Across All Verticals</p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Client-first, solution-oriented approach',
                  'Strong adherence to legal and ethical standards',
                  'Emphasis on prevention rather than correction',
                  'Long-term partnership mindset',
                  'Deep understanding of business processes and practical realities',
                ].map((philosophy, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{philosophy}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Value System */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Our Value System</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Solutions delivered within the framework of law and ethical standards',
                  'Deep understanding of client businesses before advising',
                  'Focus on preventing recurrence of issues, not just reporting them',
                  'Strong hand-holding support for new and growing enterprises',
                  'Commitment to long-term professional relationships',
                ].map((value, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Why Clients Choose Us</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Deep understanding of business processes',
                  'Partner-led execution and accountability',
                  'Flexible engagement models',
                  'Practical, implementable recommendations',
                  'Continuous focus on professional excellence',
                ].map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can support your business growth with our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
