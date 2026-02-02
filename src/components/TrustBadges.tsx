import { Shield, Award, Users, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'ICAI Member',
      description: 'Certified by Institute of Chartered Accountants of India',
    },
    {
      icon: Award,
      title: '25+ Years Experience',
      description: 'Proven track record in financial services',
    },
    {
      icon: Users,
      title: '100% Confidential',
      description: 'Your data is secure and protected',
    },
    {
      icon: CheckCircle,
      title: 'Established 2021',
      description: 'Trusted by businesses across India',
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm md:text-base mb-1">{badge.title}</h3>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
