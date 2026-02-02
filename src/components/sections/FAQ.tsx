import { ChevronDown } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive CA services including GST registration & filing, income tax planning, company audits, accounting & bookkeeping, business registration, and financial advisory services.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing varies based on the service and complexity. We offer transparent pricing with no hidden charges. Contact us for a free consultation and customized quote.',
  },
  {
    question: 'How long does GST registration take?',
    answer: 'GST registration typically takes 3-7 working days once all required documents are submitted. We handle the entire process and keep you updated at every step.',
  },
  {
    question: 'Do you handle tax filing for individuals?',
    answer: 'Yes, we provide income tax filing services for individuals, including salaried employees, freelancers, and business owners. We ensure maximum deductions and timely filing.',
  },
  {
    question: 'What documents do I need for company audit?',
    answer: 'Required documents include financial statements, bank statements, invoices, receipts, GST returns, and other relevant financial records. We provide a detailed checklist during consultation.',
  },
  {
    question: 'Can you help with business registration?',
    answer: 'Absolutely! We assist with all types of business registrations including Private Limited Company, LLP, Partnership Firm, and Sole Proprietorship, along with necessary licenses.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services and processes.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
              <div className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/50">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent transition-all duration-300 group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-primary transition-all duration-300 group-hover:scale-125',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  )}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button size="lg" asChild>
              <a href="#contact">
                <span className="group-hover:animate-wiggle">Contact Us</span>
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
