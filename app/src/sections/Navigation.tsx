import { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#barbers', label: 'Barbers' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#F5F1E8]/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E63946] flex items-center justify-center group-hover:bg-[#1D3557] transition-colors duration-300">
                <Scissors className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="hidden md:block">
                <span className="font-display text-lg lg:text-xl text-[#1D3557]">GENTLEMAN'S</span>
                <span className="font-display text-lg lg:text-xl text-[#E63946] ml-1">BLADE</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="nav-pill text-xs lg:text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="ticket-btn text-xs py-2 px-3 lg:text-sm lg:py-2 lg:px-4"
              >
                BOOK NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#1D3557] hover:text-[#E63946] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-[#F5F1E8] border-t border-[#1D3557]/10 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="block font-body text-base sm:text-lg text-[#1D3557] hover:text-[#E63946] transition-colors py-2 sm:py-3 border-b border-[#1D3557]/10"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="w-full ticket-btn mt-4 text-sm sm:text-base"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </nav>

      {/* Barber pole accent on mobile */}
      <div className="md:hidden fixed left-0 top-0 bottom-0 w-2 barber-pole-stripes z-40" />
    </>
  );
};

export default Navigation;
