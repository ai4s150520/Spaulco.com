// src/components/sections/TeamShowcase.tsx
import { Linkedin, Mail, Phone, Award, Briefcase, GraduationCap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import AnimatedSection from '@/components/AnimatedSection'
import SubrataPaulImg from '@/assets/Subrata_Paul.jpg'
import SurajitDattaImg from '@/assets/Surajit_Datta.jpg'

const teamMembers = [
  {
    name: 'Subrata Paul',
    role: 'Founder & Proprietor',
    experience: '25+ Years',
    specialization: 'Finance Leadership & Strategy',
    education: 'Member of ICAI, St. Xavier\'s College Kolkata',
    bio: 'An alumnus of St. Xavier\'s College, Kolkata, and a Member of the Institute of Chartered Accountants of India. Held senior finance leadership positions with ESAB India, Danieli India, Fläkt (India), and Wabtec India Transportation Pvt. Ltd. Served as Director on Boards of multiple Wabtec Group companies in India.',
    image: SubrataPaulImg,
    linkedin: 'https://www.linkedin.com/in/subrata-paul-87a011210/',
  },
  {
    name: 'Surajit Datta',
    role: 'Senior Consultant',
    experience: '30+ Years',
    specialization: 'Internal Audit, Risk & Governance',
    education: 'MBA (Finance), CA Intermediate',
    bio: '16+ years heading Internal Audit for Dubai Government-owned organization. Expert in ERM frameworks, process re-engineering, and Board advisory.',
    image: SurajitDattaImg,
    linkedin: 'https://www.linkedin.com/in/surajit-datta-62953b22/',
  },
]

export default function TeamShowcase() {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-primary">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our team of qualified chartered accountants brings extensive 
              experience and specialized expertise to serve you better.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2">
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative mb-6 z-10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto border-4 border-background group-hover:border-primary/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-6 cursor-pointer"
                    />
                    <div className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium group-hover:scale-110 transition-transform duration-300">
                      {member.role}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-center mb-2 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Briefcase className="w-4 h-4 group-hover:text-primary transition-colors" />
                      <span>{member.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Award className="w-4 h-4 group-hover:text-primary transition-colors" />
                      <span>{member.specialization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <GraduationCap className="w-4 h-4 group-hover:text-primary transition-colors" />
                      <span>{member.education}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 group-hover:text-foreground transition-colors duration-300">{member.bio}</p>
                  
                  <div className="flex justify-center gap-3">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-125 hover:shadow-lg">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${member.name === 'Subrata Paul' ? 's.paul@spaulco.com' : 's.dutta@spaulco.com'}`} className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-125 hover:shadow-lg">
                      <Mail className="w-4 h-4" />
                    </a>
                    <a href={`tel:${member.name === 'Subrata Paul' ? '+919433025054' : '+919051514949'}`} className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-125 hover:shadow-lg">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Backed by extensive cross-industry experience across manufacturing, retail, FMCG, logistics, hospitality, and government-linked entities, spanning India, USA, and UAE.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">
                <span className="group-hover:animate-wiggle">View Full Team Details</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}