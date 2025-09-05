import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, DollarSign } from "lucide-react";
import advisorImage from "@/assets/advisor-headshot.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 smooth-reveal">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Your Trusted Partner in{" "}
                <span className="text-gradient-gold">Wealth Management</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Managing $50+ Million in Assets | Proven Investment Strategies
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="consultation" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary number-counter">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary number-counter">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary number-counter">$50M+</div>
                <div className="text-sm text-muted-foreground">Assets Managed</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Photo with Floating Elements */}
          <div className="relative flex justify-center">
            <div className="relative">
              <img 
                src={advisorImage} 
                alt="Professional Financial Advisor" 
                className="w-80 h-96 object-cover rounded-2xl shadow-premium"
              />
              
              {/* Floating Dashboard Cards */}
              <div className="floating-card top-4 -left-16 w-40 animate-float">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">Portfolio Growth</div>
                    <div className="text-xs text-muted-foreground">+12.5% YTD</div>
                  </div>
                </div>
              </div>
              
              <div className="floating-card top-20 -right-20 w-44" style={{animationDelay: '2s'}}>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">Active Clients</div>
                    <div className="text-xs text-muted-foreground">150+ Families</div>
                  </div>
                </div>
              </div>
              
              <div className="floating-card bottom-4 -left-12 w-36" style={{animationDelay: '4s'}}>
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">Awards</div>
                    <div className="text-xs text-muted-foreground">Top Advisor</div>
                  </div>
                </div>
              </div>
              
              <div className="floating-card bottom-16 -right-16 w-42" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">AUM</div>
                    <div className="text-xs text-muted-foreground">$50M+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;