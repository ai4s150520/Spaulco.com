import { Linkedin, Mail, Phone, Award, Briefcase, GraduationCap } from 'lucide-react'
import SEO from '@/components/SEO'
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
    fullBio: 'Subrata Paul, Founder & Proprietor, is a Chartered Accountant and alumnus of St. Xavier\'s College, Kolkata, with over 25 years of senior finance leadership experience in multinational organizations including ESAB, Danieli, Fläkt, and Wabtec India. He has also served as Director on the Boards of multiple Wabtec Group companies in India, with deep exposure to governance, strategy, and large-scale operations.',
    image: SubrataPaulImg,
    linkedin: 'https://www.linkedin.com/in/subrata-paul-87a011210/',
    achievements: [
      'Led complex demerger of assets and manpower within Indian group entities, resulting in significant cost efficiencies',
      'Executed financial analysis and successful bidding for projects exceeding ₹700 crores in value',
      'Led Finance ERP implementations and finance transformation initiatives',
      'Played a key role in re-establishing manufacturing facilities, including process design and operational setup',
      'Designed billing structures and cash-flow management processes across large projects',
      'Contributed as finance lead to IPO-related financial data preparation and projections under tight timelines',
      'Conducted internal audit assignments across multiple international locations',
    ],
  },
  {
    name: 'Surajit Datta',
    role: 'Senior Consultant – Internal Audit, Risk & Governance',
    experience: '30+ Years',
    specialization: 'Internal Audit, Risk & Governance',
    education: 'MBA (Finance), CA Intermediate',
    bio: '16+ years heading Internal Audit for Dubai Government-owned organization. Expert in ERM frameworks, process re-engineering, and Board advisory.',
    fullBio: 'Surajit Datta, Senior Consultant – Internal Audit, Risk & Governance, brings 30+ years of experience across India and the UAE. He has led Internal Audit, Compliance, and ERM functions, including over 16 years heading Internal Audit for a Dubai Government-owned entity. He is recognized for building risk-based audit frameworks, driving process improvements, and advising Boards and Audit Committees on governance and risk matters. He holds an MBA (Finance) and is CA Intermediate, and has contributed to academia as a mentor to MBA students at S.P. Jain School of Global Management, Dubai.',
    image: SurajitDattaImg,
    linkedin: 'https://www.linkedin.com/in/surajit-datta-62953b22/',
    achievements: [
      'Established and led the Internal Audit function for a Dubai Government–owned organization (USD 150 million revenue), defining risk-based audit strategy and Board-level reporting',
      'Designed and implemented a Group-wide Enterprise Risk Management (ERM) framework, including Risk Register and executive monitoring mechanisms',
      'Developed and guided implementation of enterprise-wide operational SOPs for a UK-based multinational with USD 300 million annual revenues, strengthening control maturity and scalability',
      'Established internal audit and compliance frameworks for a multi-unit luxury F&B group in Dubai, reporting directly to the Group Chairman and Board',
      'Led finance and process digitization initiatives, significantly reducing manual effort and improving compliance and data integrity',
      'Supported automation of revenue-critical processes, contributing to a significant reduction in revenue leakage',
    ],
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Our Expert CA Team - Chartered Accountants Kolkata"
        description="Meet our experienced chartered accountants specializing in financial advisory services, tax planning, virtual CFO, business advisory, and audit services. 25+ years of combined CA expertise in Kolkata. Connect with our experts today!"
        keywords="chartered accountants kolkata, CA team, financial advisory services, tax planning, virtual CFO, business advisory, audit services, tax consultants, finance professionals, CA firm kolkata"
        canonical="/team"
      />
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-primary">Expert Team</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Our team of qualified chartered accountants brings extensive experience and specialized expertise to serve you better.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} animation="fade-up" delay={index * 100}>
                <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    {/* Image */}
                    <div className="flex flex-col items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-full border-4 border-primary/20 mb-4"
                      />
                      <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                      <p className="text-primary font-semibold text-center mb-4">{member.role}</p>
                      <div className="flex gap-3">
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={`mailto:${member.name === 'Subrata Paul' ? 's.paul@spaulco.com' : 's.dutta@spaulco.com'}`} className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Mail className="w-5 h-5" />
                        </a>
                        <a href={`tel:${member.name === 'Subrata Paul' ? '+919433025054' : '+919051514949'}`} className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          <Phone className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2 space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{member.experience} Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{member.specialization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{member.education}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-2">About</h4>
                        <p className="text-muted-foreground leading-relaxed">{member.fullBio}</p>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-12 sm:py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl font-bold mb-6">Cross-Industry Experience</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Backed by extensive cross-industry experience across manufacturing, retail, FMCG, logistics, hospitality, NBFCs, and government-linked entities, spanning India, the USA, and the UAE. The leadership team brings strong expertise in Board-level advisory, governance frameworks, enterprise risk management, internal audit setup, finance transformation, and process re-engineering, supporting organizations in strengthening controls, efficiency, and compliance.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
