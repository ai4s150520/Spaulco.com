// src/components/sections/Testimonials.tsx
import { Star, Quote } from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'

const testimonials = [
  {
    name: 'Arun Mehta',
    company: 'Mehta Textiles Pvt. Ltd.',
    role: 'Director',
    content: 'Outstanding service! They handled our GST compliance seamlessly for 3 years. Their proactive approach saved us from multiple penalties.',
    rating: 5,
  },
  {
    name: 'Sunita Reddy',
    company: 'Reddy Foods',
    role: 'Proprietor',
    content: 'The team helped us optimize our tax structure, resulting in 30% savings. Their expertise in restaurant taxation is exceptional.',
    rating: 5,
  },
  {
    name: 'Rohan Kapoor',
    company: 'Tech Innovators Inc.',
    role: 'CEO',
    content: 'Professional, timely, and accurate. Their audit services helped us secure funding. Highly recommended for startups.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses and individuals across Kolkata for 
              reliable financial services.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.name}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative">
                <Quote className="w-12 h-12 text-primary/10 absolute top-4 right-4" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}