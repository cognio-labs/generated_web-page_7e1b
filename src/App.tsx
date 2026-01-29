import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  Clock,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
            <Sparkles className="text-rose-500 w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>AASHISWA</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Results', 'Reviews'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-rose-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-rose-200">
            Book Appointment
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {['Services', 'About', 'Results', 'Reviews'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 font-medium py-2 border-b border-slate-50" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="bg-rose-500 text-white py-3 rounded-xl font-semibold">Book Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80" 
        className="w-full h-full object-cover"
        alt="Spa background"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
    </div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 bg-rose-500/20 backdrop-blur-md border border-rose-500/30 text-rose-200 rounded-full text-sm font-medium mb-6">
          Premium Medical Aesthetics
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
          Reveal Your Most <br />
          <span className="italic text-rose-300">Radiant Self</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-lg leading-relaxed">
          Experience the perfect blend of medical expertise and luxury wellness. At Aashiswa, we specialize in advanced skin rejuvenation and non-surgical enhancements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group">
            Schedule Consultation
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all">
            View Services
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Facial Rejuvenation",
      desc: "Customized medical-grade facials and chemical peels for a glowing complexion.",
      icon: <Sparkles className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
    },
    {
      title: "Injectables & Fillers",
      desc: "Expertly administered Botox and dermal fillers for natural-looking results.",
      icon: <Heart className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80"
    },
    {
      title: "Laser Treatments",
      desc: "Advanced laser technology for hair removal, skin tightening, and pigmentation.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">Curated Treatments</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6">
                  {s.icon}
                </div>
                <h4 className="text-2xl font-serif text-slate-900 mb-3">{s.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                <button className="text-rose-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-slate-900 py-20">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {[
        { label: "Happy Clients", value: "5,000+" },
        { label: "Years Experience", value: "12+" },
        { label: "Specialists", value: "15" },
        { label: "Awards Won", value: "24" }
      ].map((stat, i) => (
        <div key={i}>
          <div className="text-4xl font-serif text-rose-400 mb-2">{stat.value}</div>
          <div className="text-slate-400 text-sm uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-slate-900">What our clients say about their experience</h3>
        </div>
        <div className="flex gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <span className="font-bold text-slate-900">4.9/5 Rating</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Jenkins",
            role: "Regular Client",
            text: "The atmosphere at Aashiswa is incredibly calming. My skin has never looked better after their signature facial series.",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
          },
          {
            name: "Michael Chen",
            role: "Patient",
            text: "Professional, clean, and the results are subtle yet transformative. The staff really takes time to explain every procedure.",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
          },
          {
            name: "Elena Rodriguez",
            role: "Patient",
            text: "I was nervous about injectables, but the team made me feel so comfortable. I look refreshed and natural. Highly recommend!",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80"
          }
        ].map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
            <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h5 className="font-bold text-slate-900">{t.name}</h5>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-serif font-bold text-slate-900">AASHISWA</span>
          </div>
          <p className="text-slate-500 leading-relaxed mb-6">
            Elevating beauty through science and art. Your destination for premium medical aesthetic treatments.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-rose-500 hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-rose-500 hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h6 className="font-bold text-slate-900 mb-6">Quick Links</h6>
          <ul className="space-y-4 text-slate-500">
            <li><a href="#" className="hover:text-rose-500 transition-colors">Our Services</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Before & After</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Membership</a></li>
            <li><a href="#" className="hover:text-rose-500 transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-slate-900 mb-6">Contact Us</h6>
          <ul className="space-y-4 text-slate-500">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-rose-500 shrink-0" />
              <span>123 Aesthetic Way, Suite 100<br />Beverly Hills, CA 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-rose-500 shrink-0" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-rose-500 shrink-0" />
              <span>Mon - Sat: 9am - 7pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-slate-900 mb-6">Newsletter</h6>
          <p className="text-slate-500 mb-4 text-sm">Subscribe for exclusive offers and beauty tips.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-white border border-slate-200 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Aashiswa Med Spa. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-rose-100 selection:text-rose-600">
      <Navbar />
      <Hero />
      
      {/* Trust Bar */}
      <div className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-50 grayscale">
          <img src="https://placehold.co/120x40/transparent/64748b?text=VOGUE" alt="Vogue" />
          <img src="https://placehold.co/120x40/transparent/64748b?text=ELLE" alt="Elle" />
          <img src="https://placehold.co/120x40/transparent/64748b?text=ALLURE" alt="Allure" />
          <img src="https://placehold.co/120x40/transparent/64748b?text=BAZAAR" alt="Bazaar" />
        </div>
      </div>

      <Services />

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
                alt="Treatment room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-rose-500 text-white p-8 rounded-3xl hidden md:block max-w-[240px]">
              <p className="text-2xl font-serif mb-2">"Beauty is being comfortable in your own skin."</p>
            </div>
          </div>
          <div>
            <h2 className="text-rose-500 font-semibold tracking-widest uppercase text-sm mb-3">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">Science-Backed Beauty, Artfully Delivered</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At Aashiswa, we believe that medical aesthetics should enhance your natural features, not mask them. Our team of board-certified professionals combines the latest clinical innovations with a personalized, artistic approach.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Board-certified medical practitioners",
                "FDA-approved premium products",
                "Personalized treatment plans",
                "State-of-the-art clinical facility"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-rose-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all">
              Meet Our Specialists
            </button>
          </div>
        </div>
      </section>

      <Stats />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-rose-50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-200/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Ready to start your glow-up journey?</h2>
              <p className="text-slate-600 text-lg mb-10">
                Book your complimentary consultation today and receive a customized skin analysis from our experts.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-rose-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-rose-200 hover:bg-rose-600 transition-all flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Now
                </button>
                <button className="bg-white text-slate-900 px-10 py-4 rounded-full text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                  Call (555) 123-4567
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </div>
  );
}