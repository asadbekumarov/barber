import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      alert('Thank you for your message! We will get back to you soon.');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: MapPin, label: 'Visit Us', value: '123 Main Street, Downtown' },
    { icon: Phone, label: 'Call Us', value: '(555) 123-BLADE' },
    { icon: Mail, label: 'Email Us', value: 'hello@gentlemansblade.com' },
    { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM - 7PM' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="scroll-reveal mb-6">
            <span className="inline-block geo-block-red text-sm tracking-widest">
              GET IN TOUCH
            </span>
          </div>
          <div className="scroll-reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display text-4xl lg:text-6xl text-[#1D3557] mb-4">
              BOOK YOUR VISIT
            </h2>
            <div className="line-separator mx-auto max-w-xs" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="scroll-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="poster-block bg-white">
              <h3 className="font-display text-2xl text-[#1D3557] mb-8">
                SEND US A MESSAGE
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body text-sm text-[#1D3557]/70 uppercase tracking-wider mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-vintage"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-sm text-[#1D3557]/70 uppercase tracking-wider mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-vintage"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-[#1D3557]/70 uppercase tracking-wider mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-vintage"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm text-[#1D3557]/70 uppercase tracking-wider mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-vintage resize-none"
                    placeholder="Tell us about your desired service or any questions..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full ticket-btn flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'SENDING...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Info & Map */}
          <div className="scroll-reveal space-y-8" style={{ transitionDelay: '0.3s' }}>
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="p-6 border-2 border-[#1D3557]/10 hover:border-[#E63946] hover:bg-[#E63946]/5 transition-all duration-300 group"
                >
                  <info.icon className="w-6 h-6 text-[#E63946] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-body text-xs text-[#1D3557]/60 uppercase tracking-wider mb-1">
                    {info.label}
                  </div>
                  <div className="font-body text-sm text-[#1D3557] font-medium">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="poster-block bg-white p-0 overflow-hidden">
              <div className="relative h-64 bg-[#1D3557]/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#E63946] mx-auto mb-4" />
                    <p className="font-body text-[#1D3557]/60">
                      123 Main Street, Downtown
                    </p>
                    <p className="font-body text-sm text-[#1D3557]/40 mt-2">
                      Click for directions
                    </p>
                  </div>
                </div>
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `linear-gradient(#1D3557 1px, transparent 1px), linear-gradient(90deg, #1D3557 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>
            </div>

            {/* Quick Book CTA */}
            <div className="bg-[#E63946] p-8 text-white">
              <h3 className="font-display text-2xl mb-2">PREFER TO CALL?</h3>
              <p className="font-body text-white/80 mb-4">
                Our friendly staff is ready to schedule your appointment.
              </p>
              <a 
                href="tel:5551232523" 
                className="font-display text-3xl hover:text-[#1D3557] transition-colors duration-300"
              >
                (555) 123-BLADE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
