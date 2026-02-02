import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blogData'

const categoryColors: Record<string, string> = {
  'Tax Tips': 'bg-primary/10 text-primary',
  'Finance': 'bg-accent text-accent-foreground',
  'Business': 'bg-muted text-muted-foreground',
  'Audit': 'bg-primary/10 text-primary',
  'Technology': 'bg-accent text-accent-foreground',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="CA Blog - Tax & Finance Insights"
        description="Expert insights from chartered accountants on financial advisory, tax planning strategies, virtual CFO best practices, business advisory tips, GST compliance, and audit services. Read our latest CA articles and improve your financial management today!"
        keywords="CA blog, chartered accountants, financial advisory services, tax planning, virtual CFO, business advisory, audit services, tax tips, GST compliance, accounting insights, tax consultants"
        canonical="/blog"
      />
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Latest <span className="text-primary">Insights & Articles</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert advice on taxation, finance, audit, and business management from our professional team.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} animation="fade-up" delay={index * 100}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30 flex flex-col">
                  <CardHeader>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">By {post.author}</div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link to={`/blog/${post.slug}`}>
                        Read Full Article <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
