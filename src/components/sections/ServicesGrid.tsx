// src/components/sections/ServicesGrid.tsx
import { 
  Receipt, 
  FileText, 
  Shield, 
  BarChart3, 
  Building, 
  Users,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Financial Controllership & Virtual CFO Services',
    description: 'Senior-level financial oversight including MIS, budgeting, forecasting, cash-flow management, costing, and Board reporting.',
    icon: Receipt,
    features: ['Monthly/Quarterly Closing', 'MIS & Dashboards', 'Budgeting & Forecasting', 'Cash Flow Planning'],
    color: 'bg-primary/10',
  },
  {
    title: 'Internal Audit & Risk Advisory',
    description: 'Risk-based Internal Audits, SOX / ICFR reviews, operational audits, ERM frameworks, governance advisory, and Audit Committee support.',
    icon: Shield,
    features: ['Risk Based Audits', 'SOX/ICFR Reviews', 'ERM Frameworks', 'Governance Advisory'],
    color: 'bg-accent',
  },
  {
    title: 'Management Audit & Process Improvement',
    description: 'Process reviews, re-engineering, KPI design, automation advisory, and operational efficiency enhancement.',
    icon: BarChart3,
    features: ['Process Mapping', 'Control Gap Analysis', 'Process Re-engineering', 'KPI Development'],
    color: 'bg-muted',
  },
  {
    title: 'Accounting, Audit & Compliance Outsourcing',
    description: 'Accounting, book-keeping, financial statement finalization, audit coordination, and MIS support.',
    icon: FileText,
    features: ['Book-keeping', 'Financial Statements', 'Audit Support', 'MIS Preparation'],
    color: 'bg-primary/10',
  },
  {
    title: 'Taxation Advisory',
    description: 'Direct and indirect tax compliance, advisory, assessments, and representation.',
    icon: Building,
    features: ['Tax Compliance', 'Tax Planning', 'Assessments', 'Representation'],
    color: 'bg-accent',
  },
  {
    title: 'Fund Raising & Transaction Support',
    description: 'Financial modelling, valuation support, equity and debt fund raising assistance, and due diligence support.',
    icon: Users,
    features: ['Financial Modelling', 'Valuation Support', 'Fund Raising', 'Due Diligence'],
    color: 'bg-muted',
  },
  {
    title: 'Strategic & Special Advisory Assignments',
    description: 'High-impact advisory services tailored for complex or one-time strategic initiatives.',
    icon: Receipt,
    features: ['Demerger Advisory', 'ERP Transformation', 'IPO Readiness', 'Board Advisory'],
    color: 'bg-primary/10',
  },
  {
    title: 'CSR & Certification Services',
    description: 'CSR evaluations, utilization certificates, impact assessments, and statutory certifications.',
    icon: Shield,
    features: ['CSR Evaluation', 'Utilization Certificates', 'Impact Assessment', 'Certifications'],
    color: 'bg-accent',
  },
  {
    title: 'Outsourcing Services for Overseas & Non-Resident Clients',
    description: 'Cost-efficient outsourcing solutions for overseas entities and non-resident individuals.',
    icon: Users,
    features: ['India Setup Advisory', 'Accounting Support', 'Tax Compliance', 'Regulatory Assistance'],
    color: 'bg-muted',
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="text-primary">CA Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer a complete range of chartered accountancy services tailored 
              to meet your business and personal financial needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-up"
              delay={index * 100}
            >
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:border-primary/50 border-border overflow-hidden hover:-translate-y-2 hover:scale-105">
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start justify-between mb-4 relative z-10">
                    <div className={`p-3 rounded-lg ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors duration-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 group/item hover:translate-x-2 transition-transform duration-200">
                        <CheckCircle className="w-4 h-4 text-primary group-hover/item:scale-125 transition-transform" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300" asChild>
                    <Link to="/contact">
                      <span className="group-hover:animate-wiggle">Learn More</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/services">
                <span className="group-hover:animate-wiggle">View All Services</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}