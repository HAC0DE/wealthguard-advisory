import { Shield, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gold-gradient rounded-full"></div>
              <span className="text-xl font-bold">WealthGuard Advisory</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner in wealth management, serving high-net-worth individuals with personalized financial strategies.
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/60">
              <Shield className="w-4 h-4" />
              <span>SEC Registered Investment Advisor</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="font-semibold mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">(212) 555-WEALTH</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80">contact@wealthguard.com</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Important Information</h3>
            <div className="text-sm text-primary-foreground/60 space-y-2">
              <p>Investment advice offered through WealthGuard Advisory, LLC, a registered investment advisor.</p>
              <p>Securities offered through FINRA member firms.</p>
              <p>Client assets protected by SIPC insurance.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 WealthGuard Advisory. All rights reserved. | Minimum investment: $1,000,000</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;