import { Award, Shield, Target, Users } from "lucide-react";
import advisorImage from "@/assets/advisor-headshot.jpg";

const AboutSection = () => {
  const credentials = [
    { icon: Award, label: "Certified Financial Planner (CFP)" },
    { icon: Shield, label: "Chartered Financial Analyst (CFA)" },
    { icon: Target, label: "Series 7 & 63 Licensed" },
    { icon: Users, label: "Accredited Investment Fiduciary" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="smooth-reveal">
            <div className="relative">
              <img 
                src={advisorImage} 
                alt="Expert Financial Advisor" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-premium"
              />
              <div className="absolute -bottom-6 -right-6 premium-card w-48">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">$1M+</div>
                  <div className="text-sm text-muted-foreground">Portfolio Focus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 smooth-reveal">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">
                Expert Financial Advisory
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience managing wealth for high-net-worth individuals, 
                I specialize in creating comprehensive financial strategies that preserve and grow 
                substantial assets while minimizing risk.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines traditional wealth management principles with innovative 
                investment strategies, ensuring your portfolio remains resilient across all 
                market conditions while maximizing long-term growth potential.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">Professional Credentials</h3>
              <div className="grid grid-cols-1 gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <credential.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{credential.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialization Highlight */}
            <div className="premium-card bg-accent/5 border-accent/20">
              <div className="flex items-center space-x-3 mb-2">
                <Target className="w-6 h-6 text-accent" />
                <h4 className="text-lg font-semibold text-primary">Specialization</h4>
              </div>
              <p className="text-muted-foreground">
                <strong>High-Net-Worth Portfolio Management</strong> - Focused exclusively on 
                clients with investable assets of $1 million or more, providing personalized 
                attention and sophisticated strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;