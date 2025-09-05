import { MapPin, Phone, Mail, Clock, Award, Shield, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["123 Financial District", "New York, NY 10005", "32nd Floor, North Tower"]
    },
    {
      icon: Phone,
      title: "Phone & Email",
      details: ["(212) 555-WEALTH", "contact@wealthguard.com", "Direct Line Available"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Emergency Contact Available"]
    }
  ];

  const certifications = [
    { icon: Award, label: "SEC Registered Investment Advisor" },
    { icon: Shield, label: "FINRA Member Firm" },
    { icon: CheckCircle, label: "SIPC Protected" },
    { icon: Award, label: "CFA Institute Member" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 smooth-reveal">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of New York's Financial District. Serving high-net-worth clients nationwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Information */}
          <div className="space-y-8 smooth-reveal">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Professional Certifications */}
            <div className="premium-card">
              <h3 className="text-xl font-semibold text-primary mb-4">Professional Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <cert.icon className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Map Placeholder */}
          <div className="smooth-reveal">
            <div className="premium-card h-96 bg-secondary/30 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Prime Financial District Location</h3>
                <p className="text-muted-foreground mb-4">
                  Easily accessible via subway and major highways
                </p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>📍 123 Financial District, NY 10005</p>
                  <p>🚇 Wall St Station - 2 min walk</p>
                  <p>🅿️ Valet parking available</p>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="premium-card text-center">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
              <div className="premium-card text-center">
                <div className="text-2xl font-bold text-accent mb-1">Secure</div>
                <div className="text-sm text-muted-foreground">All Communications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;