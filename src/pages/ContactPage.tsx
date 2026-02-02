import { MapPin, Phone, Mail, Clock, Send, Linkedin } from 'lucide-react'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: '16/1, P. Majumdar Road\nKolkata, West Bengal 700078',
    link: 'https://maps.google.com/?q=16/1,P.Majumdar+Road,Kolkata,700078',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+91 94330 25054 / +91 90515 14949\nOffice: 033 3550 5917',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 's.paul@spaulco.com\ns.dutta@spaulco.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Sat: 10:00 AM - 6:00 PM\nSunday: Closed',
    extra: 'Preferred Callback: 10:00 AM - 5:00 PM',
  },
  {
    icon: Linkedin,
    title: 'Connect with Us',
    content: 'LinkedIn',
    link: 'https://www.linkedin.com/in/subrata-paul-87a011210/',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing')
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      toast({
        variant: "success",
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: error.text || error.message || "Please try again or contact us at s.paul@spaulco.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Contact CA Firm - Get Expert Financial Advice"
        description="Connect with expert chartered accountants in Kolkata for financial advisory services, tax planning, virtual CFO, business advisory, audit services, and GST compliance. Schedule your free consultation today and get professional CA support!"
        keywords="contact chartered accountants, CA firm kolkata, financial advisory services, tax planning consultation, virtual CFO, business advisory, audit services, tax consultants, accounting services"
        canonical="/contact"
      />
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fade-right" delay={100}>
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2 group-hover:animate-wiggle" />
                    <span className="group-hover:animate-wiggle">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-2">{info.title}</h4>
                        {info.title === 'Office Address' ? (
                          <>
                            <p className="text-muted-foreground whitespace-pre-line mb-2">{info.content}</p>
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-primary hover:underline text-sm inline-flex items-center gap-1"
                            >
                              <MapPin className="w-4 h-4" />
                              View on Google Maps
                            </a>
                          </>
                        ) : info.title === 'Phone' ? (
                          <>
                            <a href="tel:+919433025054" className="text-muted-foreground hover:text-primary transition-colors block">
                              +91 94330 25054
                            </a>
                            <a href="tel:+919051514949" className="text-muted-foreground hover:text-primary transition-colors block">
                              +91 90515 14949
                            </a>
                            <a href="tel:+913335505917" className="text-muted-foreground hover:text-primary transition-colors block">
                              033 3550 5917
                            </a>
                          </>
                        ) : info.title === 'Email' ? (
                          <>
                            <a href="mailto:s.paul@spaulco.com" className="text-muted-foreground hover:text-primary transition-colors block">
                              s.paul@spaulco.com
                            </a>
                            <a href="mailto:s.dutta@spaulco.com" className="text-muted-foreground hover:text-primary transition-colors block">
                              s.dutta@spaulco.com
                            </a>
                          </>
                        ) : info.title === 'Connect with Us' ? (
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                            <Linkedin className="w-5 h-5" />
                            Follow us on LinkedIn
                          </a>
                        ) : (
                          <>
                            <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                            {info.extra && <p className="text-sm text-muted-foreground mt-2 italic">{info.extra}</p>}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
