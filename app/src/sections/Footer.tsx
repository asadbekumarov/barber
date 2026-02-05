import { Scissors, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#1D3557] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E63946] flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display text-2xl block">GENTLEMAN'S</span>
                <span className="font-display text-2xl text-[#E63946]">BLADE</span>
              </div>
            </div>
            <p className="font-body text-white/70 leading-relaxed mb-6 max-w-md">
              Where tradition meets modern style. Since 2009, we've been the 
              cornerstone of classic American barbering, delivering precision 
              cuts and unforgettable experiences.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-[#E63946] hover:bg-[#E63946] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 border-2 border-white/30 flex items-center justify-center hover:border-[#E63946] hover:bg-[#E63946] transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Our Barbers', href: '#barbers' },
                { label: 'Reviews', href: '#testimonials' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="font-body text-white/70 hover:text-[#E63946] transition-colors duration-300 razor-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg mb-6">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E63946] flex-shrink-0 mt-0.5" />
                <span className="font-body text-white/70">
                  123 Main Street<br />Downtown, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E63946] flex-shrink-0" />
                <a 
                  href="tel:5551232523" 
                  className="font-body text-white/70 hover:text-[#E63946] transition-colors"
                >
                  (555) 123-BLADE
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E63946] flex-shrink-0" />
                <a 
                  href="mailto:hello@gentlemansblade.com" 
                  className="font-body text-white/70 hover:text-[#E63946] transition-colors"
                >
                  hello@gentlemansblade.com
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h5 className="font-body text-sm text-white/50 uppercase tracking-wider mb-2">
                Hours
              </h5>
              <p className="font-body text-white/70">
                Mon - Sat: 9AM - 7PM<br />
                Sunday: 10AM - 4PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/50">
              © {currentYear} Gentleman's Blade. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="font-body text-sm text-white/50 hover:text-[#E63946] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-white/50 hover:text-[#E63946] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barber pole accent */}
      <div className="absolute bottom-0 right-0 w-4 h-full barber-pole-stripes hidden lg:block" />
    </footer>
  );
};

export default Footer;
