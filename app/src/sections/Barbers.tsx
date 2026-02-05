import { useEffect, useRef } from 'react';
import { Instagram, Star } from 'lucide-react';

interface Barber {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
}

const barbers: Barber[] = [
  {
    id: 1,
    name: 'John "The Craftsman" Smith',
    specialty: 'Classic Cuts & Straight Razor',
    experience: '18 Years',
    image: '/barber1.jpg',
    bio: 'Master of the traditional scissor over comb technique. Trained in London and Milan.'
  },
  {
    id: 2,
    name: 'Mike "The Artist" Johnson',
    specialty: 'Beard Design & Modern Styles',
    experience: '12 Years',
    image: '/barber2.jpg',
    bio: 'Award-winning beard sculptor known for precision fades and creative designs.'
  },
  {
    id: 3,
    name: 'Alex "The Innovator" Green',
    specialty: 'Contemporary & Trend Cuts',
    experience: '10 Years',
    image: '/barber3.jpg',
    bio: 'Bringing fresh perspectives from New York Fashion Week to Main Street.'
  }
];

const Barbers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32"
      id="barbers"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="scroll-reveal mb-6">
            <span className="inline-block geo-block-red text-sm tracking-widest">
              THE MASTERS
            </span>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display text-4xl lg:text-6xl text-[#1D3557] mb-4">
              MEET THE ARTISTS
            </h2>
            <div className="line-separator mx-auto max-w-xs" />
          </div>
          <div className="scroll-reveal mt-6" style={{ transitionDelay: '0.2s' }}>
            <p className="font-body text-lg text-[#1D3557]/70 max-w-2xl mx-auto">
              Our team of skilled barbers brings decades of combined experience 
              and a passion for the craft to every cut.
            </p>
          </div>
        </div>

        {/* Barbers Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {barbers.map((barber, index) => (
            <div 
              key={barber.id}
              className="scroll-reveal group"
              style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Portrait with thick frame */}
              <div className="relative mb-6">
                <div className="thick-frame overflow-hidden img-zoom">
                  <img 
                    src={barber.image} 
                    alt={barber.name}
                    className="w-full h-[350px] lg:h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Experience badge */}
                <div className="absolute -bottom-4 right-4 bg-[#E63946] text-white px-4 py-2 font-display text-sm">
                  {barber.experience}
                </div>

                {/* Specialty tag */}
                <div className="absolute top-4 left-4 bg-[#1D3557] text-white px-3 py-1.5 font-body text-xs tracking-wider">
                  {barber.specialty}
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-display text-2xl text-[#1D3557] mb-2 group-hover:text-[#E63946] transition-colors duration-300">
                  {barber.name}
                </h3>
                <p className="font-body text-sm text-[#1D3557]/70 mb-4">
                  {barber.bio}
                </p>

                {/* Social & Rating */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                    ))}
                  </div>
                  <button className="p-2 border-2 border-[#1D3557]/20 hover:border-[#E63946] hover:bg-[#E63946] hover:text-white transition-all duration-300">
                    <Instagram className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="scroll-reveal mt-16 p-8 bg-[#1D3557]" style={{ transitionDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl text-white mb-2">
                WANT TO JOIN OUR TEAM?
              </h3>
              <p className="font-body text-white/70">
                We're always looking for talented barbers who share our passion.
              </p>
            </div>
            <button className="ticket-btn bg-white text-[#1D3557] hover:bg-[#E63946] hover:text-white whitespace-nowrap">
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Barbers;
