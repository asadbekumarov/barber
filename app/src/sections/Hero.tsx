import { useEffect, useRef } from 'react';
import { Scissors, Calendar } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = heroRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      id="home"
    >
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E63946]/10 transform rotate-45" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#1D3557]/5 transform rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#457B9D]/20" />
      </div>

      {/* Barber pole accent */}
      <div className="absolute left-0 top-0 h-full w-4 barber-pole-stripes hidden lg:block" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div ref={textRef} className="relative z-10 order-2 lg:order-1">
            {/* Subtitle */}
            <div className="scroll-reveal mb-6">
              <span className="inline-flex items-center gap-3 geo-block-blue text-sm tracking-widest">
                <Scissors className="w-4 h-4" />
                EXPERIENCE THE FINEST TRADITION
              </span>
            </div>

            {/* Main Heading */}
            <div className="scroll-reveal mb-8" style={{ transitionDelay: '0.1s' }}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none mb-2">
                <span className="block text-[#1D3557]">GENTLEMAN'S</span>
                <span className="block shimmer-text">BLADE</span>
              </h1>
              <div className="line-separator max-w-md" />
            </div>

            {/* Tagline */}
            <div className="scroll-reveal mb-10" style={{ transitionDelay: '0.2s' }}>
              <p className="font-body text-lg text-[#1D3557]/80 max-w-md leading-relaxed">
                Where classic American craftsmanship meets modern style. 
                Step into tradition and leave with confidence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="scroll-reveal flex flex-wrap gap-4" style={{ transitionDelay: '0.3s' }}>
              <button className="ticket-btn flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                BOOK APPOINTMENT
              </button>
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 px-6 py-3 border-3 border-[#1D3557] text-[#1D3557] font-semibold tracking-wider text-sm hover:bg-[#1D3557] hover:text-white transition-all duration-300"
              >
                VIEW SERVICES
              </a>
            </div>

            {/* Stats */}
            <div className="scroll-reveal mt-16 grid grid-cols-3 gap-8 max-w-md" style={{ transitionDelay: '0.4s' }}>
              <div className="text-center">
                <div className="font-display text-4xl text-[#E63946]">15+</div>
                <div className="font-body text-xs tracking-wider text-[#1D3557]/70 uppercase mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl text-[#E63946]">5K+</div>
                <div className="font-body text-xs tracking-wider text-[#1D3557]/70 uppercase mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-display text-4xl text-[#E63946]">4.9</div>
                <div className="font-body text-xs tracking-wider text-[#1D3557]/70 uppercase mt-1">Rating Score</div>
              </div>
            </div>
          </div>

          {/* Right: Image Cluster */}
          <div ref={imagesRef} className="relative order-1 lg:order-2">
            <div className="scroll-reveal relative" style={{ transitionDelay: '0.2s' }}>
              {/* Main Image */}
              <div className="relative z-10 img-zoom">
                <div className="thick-frame">
                  <img 
                    src="/hero1.jpg" 
                    alt="Barber at work"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                </div>
              </div>

              {/* Secondary Image - Offset */}
              <div className="absolute -bottom-8 -left-8 lg:-bottom-12 lg:-left-12 w-2/3 z-20 img-zoom">
                <div className="thick-frame shadow-2xl">
                  <img 
                    src="/hero2.jpg" 
                    alt="Traditional barbershop"
                    className="w-full h-[200px] lg:h-[280px] object-cover"
                  />
                </div>
              </div>

              {/* Decorative badge */}
              <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 z-30">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#E63946] flex items-center justify-center text-white font-display text-center p-4 animate-pulse">
                  <div>
                    <div className="text-2xl lg:text-3xl">EST.</div>
                    <div className="text-lg lg:text-xl">2009</div>
                  </div>
                </div>
              </div>

              {/* Geometric accent */}
              <div className="absolute -bottom-4 right-1/4 w-20 h-20 bg-[#457B9D]/20 transform rotate-12 z-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E63946] via-[#1D3557] to-[#457B9D]" />
    </section>
  );
};

export default Hero;
