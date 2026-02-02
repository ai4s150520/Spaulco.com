import { Calendar, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useToast } from '@/hooks/use-toast'

const services = [
  'GST Services',
  'Income Tax Filing',
  'Company Audit',
  'Accounting & Bookkeeping',
  'Business Registration',
  'Financial Advisory',
  'Other',
]

const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM',
]

export default function AppointmentBooking() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
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
        subject: `Appointment Booking - ${formData.service}`,
        message: `New Appointment Booking:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message || 'N/A'}`,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitted(true)
      toast({
        variant: "success",
        title: "Appointment booked successfully!",
        description: "We'll contact you shortly to confirm your appointment.",
      })
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Failed to book appointment",
        description: error.text || error.message || "Please try again or call us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    if (step === 1) return formData.name && formData.email && formData.phone
    if (step === 2) return formData.service
    if (step === 3) return formData.date && formData.time
    return true
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="font-serif text-3xl font-bold mb-4">Appointment Confirmed!</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Your appointment has been scheduled for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>
        </p>
        <div className="bg-card border border-border rounded-lg p-6 mb-6 text-left">
          <h3 className="font-bold mb-4">Appointment Details:</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Service:</strong> {formData.service}</p>
            <p><strong>Date:</strong> {formData.date}</p>
            <p><strong>Time:</strong> {formData.time}</p>
            <p><strong>Contact:</strong> {formData.phone}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          A confirmation email has been sent to <strong>{formData.email}</strong>
        </p>
        <Button onClick={() => { setSubmitted(false); setStep(1); setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' }) }}>
          Book Another Appointment
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
              step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              {s}
            </div>
            {s < 4 && <div className={`w-12 sm:w-20 h-1 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && 'Your Information'}
            {step === 2 && 'Select Service'}
            {step === 3 && 'Choose Date & Time'}
            {step === 4 && 'Additional Details'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {step === 2 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setFormData({ ...formData, service })}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      formData.service === service
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold">{service}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Date & Time */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Select Time *</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({ ...formData, time })}
                        className={`p-2 rounded-lg border-2 text-sm transition-all ${
                          formData.time === time
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Info */}
            {step === 4 && (
              <div>
                <label className="block text-sm font-medium mb-2">Additional Message (Optional)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 mt-6">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepValid()}
                  className="flex-1"
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
