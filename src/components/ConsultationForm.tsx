import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Clock } from "lucide-react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentAmount: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="consultation" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div className="smooth-reveal">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ready to Secure Your Financial Future?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Schedule a confidential consultation to discuss your wealth management goals. 
              We work exclusively with investors who have $1 million or more in investable assets.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Confidential Assessment</h3>
                  <p className="text-muted-foreground">
                    Complete privacy and discretion in all our client interactions and financial planning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">No-Obligation Consultation</h3>
                  <p className="text-muted-foreground">
                    45-minute comprehensive review with no commitment required.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicator */}
            <div className="premium-card bg-accent/5 border-accent/20">
              <p className="text-sm text-muted-foreground text-center">
                <strong className="text-primary">Qualified Investors Only:</strong> Minimum $1M investable assets required
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="premium-card smooth-reveal">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">Request Free Consultation</h3>
              <p className="text-muted-foreground">Schedule your confidential wealth assessment</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="investment-amount">Investable Assets</Label>
                <Select onValueChange={(value) => handleInputChange("investmentAmount", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5m">$1M - $5M</SelectItem>
                    <SelectItem value="5-10m">$5M - $10M</SelectItem>
                    <SelectItem value="10-25m">$10M - $25M</SelectItem>
                    <SelectItem value="25m+">$25M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your financial goals..."
                  rows={4}
                />
              </div>

              <Button type="submit" variant="consultation" className="w-full">
                Schedule Meeting
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you consent to being contacted about our wealth management services.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;