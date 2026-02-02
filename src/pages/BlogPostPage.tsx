import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'
import { blogPosts } from '@/data/blogData'
import ReactMarkdown from 'react-markdown'
import NotFound from './NotFound'

export default function BlogPostPage() {
  const { postSlug } = useParams()
  const post = blogPosts.find(p => p.slug === postSlug)

  if (!post) return <NotFound />

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={post.title}
        description={`${post.excerpt} Learn expert strategies for financial advisory services, tax planning, business advisory, and more. Read the full article now!`}
        keywords={`${post.category}, financial advisory services, tax planning, virtual CFO, business advisory, financial controllership, internal audit, risk advisory, ${post.title.toLowerCase()}`}
        canonical={`/blog/${post.slug}`}
        ogType="article"
      />
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-primary/10 text-primary">
                {post.category}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl font-bold mb-4">Need Professional Assistance?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of expert chartered accountants is here to help you with all your financial needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  <span className="group-hover:animate-wiggle">Contact Us</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/blog">
                  <span className="group-hover:animate-wiggle">Read More Articles</span>
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
