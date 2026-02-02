import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <SEO 
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Explore our financial advisory services, tax planning, virtual CFO, business advisory, financial controllership, internal audit, and risk advisory solutions. Return to homepage or browse our services."
        keywords="financial advisory services, tax planning, virtual CFO, business advisory, financial controllership, internal audit, risk advisory"
      />
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-serif text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              <span className="group-hover:animate-wiggle">Go Home</span>
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">
              <span className="group-hover:animate-wiggle">View Services</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
