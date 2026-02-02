import { Award, TrendingUp, Users, Building, Globe, Target, Shield, FileText, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'

const achievements = [
  {
    category: 'Subrata Paul',
    items: [
      {
        icon: Award,
        title: 'Complex Demerger Execution',
        description: 'Led complex demerger of assets and manpower within Indian group entities, resulting in significant cost efficiencies.',
      },
      {
        icon: TrendingUp,
        title: 'Large Project Bidding',
        description: 'Executed financial analysis and successful bidding for projects exceeding ₹700 crores in value.',
      },
      {
        icon: Building,
        title: 'Finance ERP Implementation',
        description: 'Led Finance ERP implementations and finance transformation initiatives.',
      },
      {
        icon: Users,
        title: 'Manufacturing Facility Re-establishment',
        description: 'Played a key role in re-establishing manufacturing facilities, including process design and operational setup.',
      },
      {
        icon: Globe,
        title: 'IPO Readiness Support',
        description: 'Contributed as finance lead to IPO-related financial data preparation and projections under tight timelines.',
      },
      {
        icon: Target,
        title: 'International Audit Leadership',
        description: 'Conducted internal audit assignments across multiple international locations.',
      },
    ],
  },
  {
    category: 'Surajit Datta',
    items: [
      {
        icon: Building,
        title: 'Internal Audit Function Establishment',
        description: 'Established and led the Internal Audit function for a Dubai Government-owned organization (USD 150 million revenue), defining risk-based audit strategy and Board-level reporting.',
      },
      {
        icon: Shield,
        title: 'Enterprise Risk Management Framework',
        description: 'Designed and implemented a Group-wide Enterprise Risk Management (ERM) framework, including Risk Register and executive monitoring mechanisms.',
      },
      {
        icon: FileText,
        title: 'Operational SOPs Development',
        description: 'Developed and guided implementation of enterprise-wide operational SOPs for a UK-based multinational with USD 300 million annual revenues, strengthening control maturity and scalability.',
      },
      {
        icon: Users,
        title: 'Compliance Framework for F&B Group',
        description: 'Established internal audit and compliance frameworks for a multi-unit luxury F&B group in Dubai, reporting directly to the Group Chairman and Board.',
      },
      {
        icon: TrendingUp,
        title: 'Finance Digitization',
        description: 'Led finance and process digitization initiatives, significantly reducing manual effort and improving compliance and data integrity.',
      },
      {
        icon: Target,
        title: 'Revenue Process Automation',
        description: 'Supported automation of revenue-critical processes, contributing to a significant reduction in revenue leakage.',
      },
    ],
  },
]

export default function Achievements() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Selected Professional <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven track record of delivering high-impact results across complex financial, governance, and transformation initiatives.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-12">
          {achievements.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <AnimatedSection animation="fade-up">
                <h3 className="font-serif text-2xl font-bold mb-6 text-center text-primary">{section.category}</h3>
              </AnimatedSection>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.slice(0, 3).map((achievement, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 h-full group hover:-translate-y-2">
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                          <achievement.icon className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{achievement.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                <span className="group-hover:animate-wiggle">View All Achievements</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
