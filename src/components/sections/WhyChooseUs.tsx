import { 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  Award,
  Headphones,
  FileCheck,
  DollarSign,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'

const reasons = [
  {
    icon: Shield,
    title: 'Expert Team',
    description: 'Our team of qualified CAs and tax professionals bring 15+ years of combined experience.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Clock,
    title: 'Timely Filing',
    description: 'We ensure all compliances are met well before deadlines to avoid penalties.',
    color: 'text-accent-foreground',
    bgColor: 'bg-accent',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Personalized attention and customized solutions for each client\'s unique needs.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'Result-Oriented',
    description: 'Focus on optimizing tax liabilities and improving financial health.',
    color: 'text-accent-foreground',
    bgColor: 'bg-accent',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Award-winning firm with recognition from ICAI and business associations.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 support for urgent queries and ongoing consultation.',
    color: 'text-accent-foreground',
    bgColor: 'bg-accent',
  },
  {
    icon: FileCheck,
    title: '100% Accuracy',
    description: 'Meticulous attention to detail ensuring error-free filings and reports.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Competitive pricing with transparent fee structure and no hidden charges.',
    color: 'text-accent-foreground',
    bgColor: 'bg-accent',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">Our CA Firm</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We stand out with our commitment to excellence, client satisfaction, 
              and proven expertise in financial management.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reasons.slice(0, 3).map((reason, index) => (
            <AnimatedSection
              key={reason.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`inline-flex p-3 rounded-lg ${reason.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <reason.icon className={`w-6 h-6 ${reason.color} group-hover:rotate-12 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{reason.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">0%</div>
                <div className="text-muted-foreground">Penalty Rate</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={900}>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                <span className="group-hover:animate-wiggle">View All Reasons</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}