// src/components/layout/Header.tsx
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import Logo from '@/assets/Logo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 border-b-2 border-primary/20",
      scrolled 
        ? "bg-background/95 backdrop-blur-md shadow-lg" 
        : "bg-background"
    )}>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-xs gap-1">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a href="tel:+919433025054" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <span className="whitespace-nowrap">+91 94330 25054</span>
            </a>
            <a href="tel:+919051514949" className="hidden md:flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3 flex-shrink-0" />
              <span className="whitespace-nowrap">+91 90515 14949</span>
            </a>
            <a href="mailto:s.paul@spaulco.com" className="hidden sm:flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3 flex-shrink-0" />
              <span className="hidden lg:inline">s.paul@spaulco.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="text-xs truncate max-w-[200px] sm:max-w-none">16/1, P. Majumdar Road, Kolkata</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src={Logo} 
              alt="Subrata Paul & Co Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain hover:rotate-12 hover:scale-110 transition-all duration-300 cursor-pointer"
            />
            <div>
              <h1 className="font-serif text-base sm:text-lg md:text-xl font-bold text-foreground">Subrata Paul & Co</h1>
              <p className="text-xs text-muted-foreground">Chartered Accountants</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavClick}
                className={cn(
                  "text-foreground hover:text-primary transition-colors font-medium",
                  location.pathname === item.href && "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
                <span className="group-hover:animate-wiggle">Get a Quote</span>
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 border-t border-border pt-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-2 px-4 rounded-md hover:bg-accent font-medium",
                    location.pathname === item.href && "bg-accent text-primary"
                  )}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
                  <span className="group-hover:animate-wiggle">Get a Quote</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}