import { PieChart, TrendingUp, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      icon: PieChart,
      title: "Wealth Planning",
      description: "Comprehensive financial analysis and strategy development tailored to your unique goals and risk tolerance.",
      features: ["Portfolio Analysis", "Risk Assessment", "Tax Strategy", "Estate Planning"]
    },
    {
      number: "02", 
      icon: TrendingUp,
      title: "Investment Management",
      description: "Professional portfolio management and optimization using proven strategies and cutting-edge market analysis.",
      features: ["Active Management", "Market Research", "Rebalancing", "Performance Monitoring"]
    },
    {
      number: "03",
      icon: Users,
      title: "Ongoing Advisory",
      description: "Regular reviews and strategy adjustments to ensure your portfolio remains aligned with your evolving needs.",
      features: ["Quarterly Reviews", "Strategy Updates", "Market Insights", "24/7 Support"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 smooth-reveal">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A three-step process designed to maximize your wealth and secure your financial future.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.number}
              className="premium-card group relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Number Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{service.number}</span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;