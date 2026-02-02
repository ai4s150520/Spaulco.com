// src/components/sections/ContactCTA.tsx
import { Phone, Mail, MapPin, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Ready to <span className="text-primary">Transform</span> Your 
                  Financial Management?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Schedule a free consultation with our expert CA team. 
                  Let's discuss how we can help your business grow.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us Anytime</p>
                      <p className="text-lg font-bold">+91 94330 25054</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="text-lg font-bold">s.paul@spaulco.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Visit Our Office</p>
                      <p className="text-lg font-bold">16/1, P. Majumdar Road, Kolkata</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">Book Your Free Consultation</h3>
                
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Required
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select a service</option>
                      <option value="gst">GST Services</option>
                      <option value="tax">Income Tax</option>
                      <option value="audit">Audit Services</option>
                      <option value="accounting">Accounting</option>
                      <option value="business-setup">Business Setup</option>
                      <option value="advisory">Financial Advisory</option>
                    </select>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Free Consultation
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      No commitment required. We'll get back within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}