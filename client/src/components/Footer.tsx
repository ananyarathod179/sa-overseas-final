import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Contact information, links, and company details
 */
export default function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">SA Overseas</h3>
            <p className="text-sm text-sidebar-foreground/80 mb-4">
              Trusted exporter of premium Fish Meal, Fish Oil, Shrimp Meal, Poultry Meal and Dry Fish from India to global markets.
            </p>
            <p className="text-xs text-sidebar-foreground/60">Global Connections. Reliable Solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-sidebar-accent transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-sidebar-accent transition-colors">Products</a></li>
              <li><a href="#markets" className="hover:text-sidebar-accent transition-colors">Markets</a></li>
              <li><a href="#contact" className="hover:text-sidebar-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-sidebar-accent transition-colors">Fish Meal</a></li>
              <li><a href="#products" className="hover:text-sidebar-accent transition-colors">Fish Oil</a></li>
              <li><a href="#products" className="hover:text-sidebar-accent transition-colors">Shrimp Meal</a></li>
              <li><a href="#products" className="hover:text-sidebar-accent transition-colors">Poultry Meal</a></li>
              <li><a href="#products" className="hover:text-sidebar-accent transition-colors">Dry Fish</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>+91 7779007779</div>
                  <div>+91 9173029197</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@sa-overseas.co.in" className="hover:text-sidebar-accent transition-colors">
                  contact@sa-overseas.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sidebar-foreground/60">
            <p>&copy; 2026 SA Overseas. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sidebar-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sidebar-accent transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
