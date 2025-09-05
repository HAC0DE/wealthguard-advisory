import { useEffect, useState } from "react";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const StatsDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const CounterCard = ({ 
    icon: Icon, 
    value, 
    label, 
    suffix = "", 
    prefix = "", 
    delay = 0 
  }: {
    icon: any;
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
    delay?: number;
  }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          const duration = 2000;
          const increment = value / (duration / 16);
          let current = 0;
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(counter);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, 16);
          
          return () => clearInterval(counter);
        }, delay);
        
        return () => clearTimeout(timer);
      }
    }, [isVisible, value, delay]);

    return (
      <div className="premium-card text-center group">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Icon className="w-8 h-8 text-accent" />
          </div>
        </div>
        <div className="text-3xl font-bold text-primary number-counter mb-2">
          {prefix}{displayValue}{suffix}
        </div>
        <div className="text-muted-foreground font-medium">{label}</div>
      </div>
    );
  };

  return (
    <section id="stats" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 smooth-reveal">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Proven Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our results speak for themselves. Trusted by high-net-worth individuals and families.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterCard
            icon={Target}
            value={50}
            prefix="$"
            suffix="M+"
            label="Assets Under Management"
            delay={0}
          />
          <CounterCard
            icon={Users}
            value={98}
            suffix="%"
            label="Client Satisfaction"
            delay={200}
          />
          <CounterCard
            icon={TrendingUp}
            value={12}
            suffix="% "
            label="Average Annual Returns"
            delay={400}
          />
          <CounterCard
            icon={Award}
            value={15}
            suffix="+"
            label="Years Experience"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;