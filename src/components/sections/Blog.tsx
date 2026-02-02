import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSection from '@/components/AnimatedSection'

const posts = [
  {
    title: 'GST Filing Deadlines for FY 2024-25',
    excerpt: 'Stay compliant with the latest GST filing deadlines and avoid penalties.',
    category: 'Tax Tips',
    date: '2024-01-15',
    readTime: '5 min read',
    featured: true,
  },
  {
    title: 'Income Tax Deductions You Should Know',
    excerpt: 'Maximize your tax savings with these essential deductions under Section 80C.',
    category: 'Finance',
    date: '2024-01-10',
    readTime: '4 min read',
  },
  {
    title: 'Starting a Business in Kolkata',
    excerpt: 'Complete guide to company registration and compliance requirements.',
    category: 'Business',
    date: '2024-01-05',
    readTime: '6 min read',
  },
]

const categoryColors: Record<string, string> = {
  'Tax Tips': 'bg-primary/10 text-primary',
  'Finance': 'bg-accent text-accent-foreground',
  'Business': 'bg-muted text-muted-foreground',
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="text-primary">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest tax tips, financial advice, and business insights.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimatedSection key={post.title} animation="fade-up" delay={index * 100}>
              <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:border-primary/50 group hover:-translate-y-2 flex flex-col">
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit ${categoryColors[post.category]} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {post.category}
                  </span>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 relative z-10">{post.title}</CardTitle>
                  <CardDescription className="group-hover:text-foreground transition-colors duration-300 relative z-10">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 group-hover:text-primary transition-colors" />
                      <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 group-hover:text-primary transition-colors" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto group-hover:text-primary transition-colors" asChild>
                    <Link to="/blog">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">
                <span className="group-hover:animate-wiggle">View All Articles</span>
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
