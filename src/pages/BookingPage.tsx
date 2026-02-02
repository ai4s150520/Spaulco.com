import SEO from '@/components/SEO'
import AppointmentBooking from '@/components/AppointmentBooking'
import AnimatedSection from '@/components/AnimatedSection'
import { MapPin, Phone, Mail, Clock, Linkedin } from 'lucide-react'
import { Card } from '@/components/ui/card'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: '16/1, P. Majumdar Road, Kolkata, West Bengal 700078',
    link: 'https://maps.google.com/?q=16/1,P.Majumdar+Road,Kolkata,700078',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon-Sat: 10:00 AM - 6:00 PM | Sunday: Closed',
    extra: 'Preferred Callback: 10:00 AM - 5:00 PM',
  },
  {
    icon: Phone,
    title: 'Phone',
    phones: ['+91 94330 25054', '+91 90515 14949', '033 3550 5917'],
  },
  {
    icon: Mail,
    title: 'Email',
    emails: ['subpaul5@gmail.com', 'surajitdutta@hotmail.com'],
  },
  {
    icon: Linkedin,
    title: 'Connect on LinkedIn',
    link: 'https://www.linkedin.com/in/subrata-paul-87a011210/',
  },
]

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background py-12 sm:py-16 md:py-20">
      <SEO 
        title="Book CA Appointment - Free Consultation"
        description="Schedule your free consultation with expert chartered accountants in Kolkata. Get personalized advice on financial advisory, tax planning, virtual CFO, business advisory, audit services, and GST compliance. Book your CA appointment now!"
        keywords="book CA appointment, chartered accountants kolkata, financial advisory consultation, tax planning, virtual CFO, business advisory, audit services, free consultation, tax consultants"
        canonical="/book-appointment"
      />
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Book Your <span className="text-primary">Consultation</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Schedule a free consultation with our expert CA team. Choose your preferred date and time.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <AppointmentBooking />
        </AnimatedSection>

        {/* Contact Information */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Contact Information</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-sm">{info.title}</h3>
                    {info.content && (
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    )}
                    {info.extra && (
                      <p className="text-xs text-muted-foreground italic">{info.extra}</p>
                    )}
                    {info.phones && (
                      <div className="space-y-1">
                        {info.phones.map((phone, i) => (
                          <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm text-primary hover:underline">
                            {phone}
                          </a>
                        ))}
                      </div>
                    )}
                    {info.emails && (
                      <div className="space-y-1">
                        {info.emails.map((email, i) => (
                          <a key={i} href={`mailto:${email}`} className="block text-sm text-primary hover:underline break-all">
                            {email}
                          </a>
                        ))}
                      </div>
                    )}
                    {info.link && info.title === 'Office Address' && (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        View on Map
                      </a>
                    )}
                    {info.link && info.title === 'Connect on LinkedIn' && (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                        <Linkedin className="w-4 h-4" />
                        Follow Us
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
