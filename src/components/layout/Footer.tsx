// src/components/layout/Footer.tsx
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Clock,
  Shield,
  FileText,
  Calculator
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Logo from '@/assets/Logo.png'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Financial Controllership & Virtual CFO Services', href: '/services/financial-controllership' },
  { name: 'Internal Audit & Risk Advisory', href: '/services/internal-audit' },
  { name: 'Management Audit & Process Improvement', href: '/services/management-audit' },
  { name: 'Accounting, Audit & Compliance Outsourcing', href: '/services/accounting-outsourcing' },
  { name: 'Taxation Advisory', href: '/services/taxation-advisory' },
  { name: 'Fund Raising & Transaction Support', href: '/services/fund-raising' },
  { name: 'Strategic & Special Advisory Assignments', href: '/services/strategic-advisory' },
  { name: 'CSR & Certification Services', href: '/services/csr-certification' },
  { name: 'Outsourcing Services for Overseas & Non-Resident Clients', href: '/services/overseas-outsourcing' },
]

const certifications = [
  { name: 'ICAI Member', icon: Shield },
  { name: 'Established 2021', icon: FileText },
  { name: '25+ Years Experience', icon: Calculator },
]

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={Logo} 
                alt="Subrata Paul & Co Logo" 
                className="w-12 h-12 object-contain hover:rotate-12 hover:scale-110 transition-all duration-300 cursor-pointer"
              />
              <div>
                <h3 className="font-serif text-xl font-bold">Subrata Paul & Co</h3>
                <p className="text-sm text-muted-foreground">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Professional accounting, audit, risk, and advisory solutions for growing enterprises and professionally managed organizations.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/subrata-paul-co" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-bold mb-4">Our Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></span>
                    <span className="line-clamp-2">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border"></div>

        {/* Contact Info - Two Columns */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-4">Contact Us</h4>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Address</p>
                  <p className="text-sm text-muted-foreground">
                    16/1, P. Majumdar Road<br />
                    Kolkata, West Bengal 700078
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 10AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <a href="tel:+919433025054" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 94330 25054
                  </a>
                  <span className="text-sm text-muted-foreground"> / </span>
                  <a href="tel:+919051514949" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 90515 14949
                  </a>
                  <br />
                  <a href="tel:+913335505917" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    033 3550 5917
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:s.paul@spaulco.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    s.paul@spaulco.com
                  </a>
                  <a href="mailto:s.dutta@spaulco.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                    s.dutta@spaulco.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-2">
                  <cert.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" asChild>
              <Link to="/book-appointment">
                <Calculator className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-background border-t border-border py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Subrata Paul & Co. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Chartered Accountants | Established 2021 | Kolkata, India
          </p>
        </div>
      </div>
    </footer>
  )
}