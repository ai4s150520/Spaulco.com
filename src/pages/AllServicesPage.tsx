import { Receipt, Shield, BarChart3, FileText, Building, Users, Target, Award, Globe } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const allServices = [
  {
    title: 'Financial Controllership & Virtual CFO Services',
    description: 'Senior-level financial oversight including MIS, budgeting, forecasting, cash-flow management, costing, and Board reporting.',
    icon: Receipt,
    features: [
      'Monthly/quarterly financial closing and reporting',
      'Management Information Systems (MIS) and dashboards',
      'Budgeting, forecasting, and variance analysis',
      'Cash flow planning and working capital optimization',
      'Product costing and margin analysis',
      'ERP finance module implementation and optimization',
      'Support for Board and promoter-level financial reviews',
    ],
    clientValue: [
      'Improved financial discipline and decision-making',
      'Predictable cash flows and cost control',
      'Investor- and lender-ready financial reporting',
      'Strong linkage between strategy and financial outcomes',
    ],
  },
  {
    title: 'Internal Audit & Governance Advisory',
    description: 'Risk-based Internal Audit and governance advisory services designed to strengthen internal controls, enhance process efficiency, and provide assurance to promoters, Boards, and Audit Committees.',
    icon: Shield,
    features: [
      'Risk Based Internal Audit (RBIA)',
      'Process and operational audits',
      'SOX / Internal Controls over Financial Reporting (ICFR)',
      'Loss prevention and shrinkage audits',
      'Compliance audits (statutory, regulatory, internal policies)',
      'Special audits, investigations, and management reviews',
      'Audit Committee reporting and tracking of corrective actions',
      'Enterprise Risk Management (ERM) framework design',
      'Risk registers and heat maps',
      'Governance, Risk & Compliance (GRC) automation advisory',
      'Whistle-blower mechanism design and reviews',
    ],
    clientValue: [
      'Early identification of business and compliance risks',
      'Reduced revenue leakage and operational losses',
      'Improved governance confidence for stakeholders',
      'Board-level insight, not just compliance reporting',
    ],
  },
  {
    title: 'Management Audit & Process Improvement',
    description: 'Process reviews, re-engineering, KPI design, automation advisory, and operational efficiency enhancement.',
    icon: BarChart3,
    features: [
      'End-to-end process mapping and documentation',
      'Identification of control gaps and inefficiencies',
      'Process re-engineering and redesign',
      'KPI framework development and performance monitoring',
      'Automation and digitization advisory',
      'Change management support',
    ],
    clientValue: [
      'Leaner, faster, and better-controlled operations',
      'Measurable efficiency gains',
      'Reduced manual effort and dependency risks',
      'Sustainable improvements rather than one-time fixes',
    ],
  },
  {
    title: 'Accounting, Audit & Compliance Outsourcing',
    description: 'Reliable and scalable outsourcing of routine and complex finance functions, enabling clients to focus on core business growth.',
    icon: FileText,
    features: [
      'Book-keeping and accounting services',
      'Finalization of financial statements',
      'Audit support and coordination with statutory auditors',
      'MIS preparation and reporting',
      'Payroll accounting support',
      'Transactional processing (subject to system access)',
      'Retainer-based monthly services',
      'Transaction-volume-based models',
      'Hybrid onsite-offsite delivery',
    ],
    clientValue: [
      'Cost efficiency through India-based delivery',
      'Access to experienced professionals',
      'Flexibility to scale services up or down',
      'Strong adherence to timelines and quality standards',
    ],
  },
  {
    title: 'Taxation Advisory & Compliance Services',
    description: 'Comprehensive tax advisory and compliance services covering both direct and indirect taxation matters.',
    icon: Building,
    features: [
      'Corporate and individual tax compliance',
      'Advisory on complex tax matters',
      'Tax planning and structuring',
      'Representation before tax authorities',
      'Support during tax audits and assessments',
      'Advisory on cross-border tax considerations (where applicable)',
    ],
    clientValue: [
      'Reduced tax risks and exposures',
      'Practical, compliant tax strategies',
      'Timely and accurate filings',
      'Peace of mind for promoters and management',
    ],
  },
  {
    title: 'Fund Raising & Transaction Advisory',
    description: 'End-to-end support for clients seeking growth capital, debt funding, or strategic transactions.',
    icon: Users,
    features: [
      'Financial modelling and projections',
      'Business valuation support',
      'Preparation of information memoranda',
      'Support in equity and debt fund raising',
      'Lender and investor coordination',
      'Due diligence support (financial and operational)',
    ],
    clientValue: [
      'Professionally prepared investment cases',
      'Improved credibility with banks and investors',
      'Faster transaction closure',
      'Alignment between business plans and funding structures',
    ],
  },
  {
    title: 'Strategic & Special Advisory Assignments',
    description: 'High-impact advisory services tailored for complex or one-time strategic initiatives.',
    icon: Target,
    features: [
      'Demerger and restructuring advisory',
      'ERP finance transformation projects',
      'IPO readiness support (financial data, processes, controls)',
      'Cross-functional strategic initiatives',
      'Board-level advisory on finance and risk matters',
    ],
    clientValue: [
      'Access to senior-level expertise',
      'Reduced execution risk in critical initiatives',
      'Structured approach to complex transformations',
    ],
  },
  {
    title: 'CSR, ESG & Certification Assignments',
    description: 'Independent evaluations, reporting, and certification services aligned with regulatory and stakeholder expectations.',
    icon: Award,
    features: [
      'CSR project evaluation and reporting',
      'Utilization certificate preparation',
      'Impact assessment support',
      'Certification assignments under applicable laws and standards',
      'Special purpose financial certifications',
    ],
    clientValue: [
      'Transparent and credible reporting',
      'Regulatory compliance assurance',
      'Enhanced stakeholder confidence',
    ],
  },
  {
    title: 'Outsourcing Services for Non-Resident Clients',
    description: 'Dedicated service offerings for non-resident individuals and overseas entities leveraging India\'s cost and talent advantage.',
    icon: Globe,
    features: [
      'Advisory for setting up operations in India',
      'Accounting and tax compliance support',
      'Regulatory and reporting assistance',
      'Transactional processing support',
      'Ongoing hand-holding for new businesses',
      'Strong focus on timelines and responsiveness',
      'Flexible resourcing based on client needs',
      'Secure and controlled access to client platforms',
    ],
    clientValue: [
      'Cost efficiency through India-based delivery',
      'Access to experienced professionals',
      'Flexibility to scale services',
      'Strong adherence to timelines',
    ],
  },
]

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-background">
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
          <div className="space-y-12">
            {allServices.map((service, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <CardHeader className="bg-accent/30">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-4">Key Services:</h4>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <h4 className="font-semibold mb-4">Client Value:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.clientValue.map((value, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{value}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6" asChild>
                      <a href="#contact">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
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
              <a href="#contact">Contact Us Today</a>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
