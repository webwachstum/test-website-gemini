import React, { useState, useEffect } from 'react';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { SectionHeading } from './components/SectionHeading';
import { Service, Project, Testimonial, BudgetOption } from './types';
import { 
  ArrowRight, 
  Code, 
  Layout, 
  BarChart, 
  Cpu, 
  Menu, 
  X,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  CheckCircle,
  Rocket
} from 'lucide-react';

// --- DATA ---

const services: Service[] = [
  {
    id: 1,
    title: "Webdesign & UI/UX",
    description: "Ästhetik trifft Funktion. Wir gestalten Interfaces, die nicht nur gut aussehen, sondern Ihre Nutzer intuitiv führen.",
    icon: <Layout className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Webentwicklung",
    description: "High-End Coding. Von komplexen Web-Apps bis zu performanten Landingpages – wir setzen auf modernen Tech-Stack.",
    icon: <Code className="w-8 h-8" />
  },
  {
    id: 3,
    title: "SEO & Performance",
    description: "Sichtbarkeit ist alles. Wir optimieren Ladezeiten und Struktur, damit Sie bei Google ganz oben stehen.",
    icon: <BarChart className="w-8 h-8" />
  },
  {
    id: 4,
    title: "KI & Automatisierung",
    description: "Effizienz durch Technologie. Wir integrieren smarte Workflows und KI-Lösungen in Ihre digitale Infrastruktur.",
    icon: <Cpu className="w-8 h-8" />
  }
];

const projects: Project[] = [
  { 
    id: 1, 
    title: "Nova FinTech Dashboard", 
    category: "Web App", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: 2, 
    title: "Bauhaus Architecture", 
    category: "Corporate Site", 
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: 3, 
    title: "Pure Earth Market", 
    category: "E-Commerce", 
    image: "https://images.unsplash.com/photo-1665686376173-ada7a0031a85?auto=format&fit=crop&q=80&w=1200" 
  },
  { 
    id: 4, 
    title: "Gallery M", 
    category: "Portfolio", 
    image: "https://images.unsplash.com/photo-1507643179173-617d654f3faf?auto=format&fit=crop&q=80&w=1200" 
  },
];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Julia Weber",
    role: "CEO",
    company: "StartUp Vision",
    quote: "Web Wachstum hat unsere digitale Identität komplett neu definiert. Die Professionalität und das Design sind erstklassig.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Markus Schmidt",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    quote: "Endlich eine Agentur, die nicht nur Design versteht, sondern auch echte Performance liefert. Unsere Leads haben sich verdoppelt.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Sarah Engel",
    role: "Founder",
    company: "Green Living",
    quote: "Die Zusammenarbeit war effizient, transparent und das Ergebnis spricht für sich. Absolute Empfehlung.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  }
];

// --- COMPONENTS ---

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 flex justify-center animate-fade-up">
      <div className="bg-primary/95 backdrop-blur-md border border-white/10 text-white rounded-lg shadow-2xl max-w-4xl w-full p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-2">Wir schätzen Ihre Privatsphäre</h4>
          <p className="text-sm text-gray-300">
            Wir nutzen Cookies, um Ihnen ein erstklassiges Nutzungserlebnis auf unserer Webseite zu ermöglichen. 
            Durch die weitere Nutzung der Seite stimmen Sie der Verwendung von Cookies zu.
          </p>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="py-2 px-6 text-sm border-white/30 hover:bg-white/10 text-white" onClick={() => setIsVisible(false)}>
            Ablehnen
          </Button>
          <Button variant="accent" className="py-2 px-6 text-sm" onClick={handleAccept}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- SECTIONS ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Über uns', href: '#about' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`flex items-center gap-2 font-display font-bold text-2xl tracking-tighter ${isScrolled ? 'text-white' : 'text-white'}`}>
          <Logo className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} />
          Web Wachstum
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-white/80 hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <Button variant="accent" className="px-6 py-2 h-auto text-xs uppercase tracking-widest" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Kontakt
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary border-t border-white/10 p-6 flex flex-col gap-6 shadow-2xl md:hidden">
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-white hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="accent" className="w-full justify-center" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView(); }}>
                Projekt starten
              </Button>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-primary">
      {/* Background Image with Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern corporate office" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 mb-6 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm animate-fade-up">
            <span className="text-accent text-xs font-bold tracking-widest uppercase">Digital Excellence</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Websites, die <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-midgrey">überzeugen.</span>
          </h1>
          <p className="text-lg md:text-xl text-midgrey max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '200ms' }}>
            Ihr digitaler Auftritt ist Ihr stärkstes Verkaufsteam. Wir bauen Ihnen eine moderne, performante Webpräsenz, die nicht nur beeindruckt, sondern aktiv Kunden gewinnt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button variant="accent" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Kostenloses Erstgespräch
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              Portfolio ansehen
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50">
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <ArrowRight className="rotate-90 w-4 h-4" />
      </div>
    </section>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-offwhite">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Unsere Expertise" title="Maßgeschneiderte Lösungen" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className="group bg-white p-8 rounded-none border-l-4 border-transparent hover:border-accent shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Showcase" title="Ausgewählte Projekte" light />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden cursor-pointer ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-3xl font-display font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
            Alle Projekte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-darkbg text-white relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading subtitle="Starter Angebot" title="Klein anfangen, groß rauskommen." light />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-[#0f2452] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-accent text-primary font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-bl-xl">
              Bestseller für Gründer
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 text-accent mb-2">
                  <Rocket className="w-5 h-5" />
                  <span className="font-bold tracking-wide uppercase text-sm">Das Schnellstart-Paket</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold">Die perfekte Basis für Ihr Unternehmen.</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Ideal für kleine Unternehmen, Praxen und Startups. Wir erstellen Ihre professionelle One-Page Website – rechtssicher, modern und sofort einsatzbereit.
                </p>
                
                <ul className="space-y-4 mt-6">
                  {[
                    "Moderne One-Page Landingpage",
                    "Responsive Design (Mobile & Desktop)",
                    "Kontaktformular Integration",
                    "Rechtstexte & Impressum inklusive",
                    "SEO-Basiskonfiguration",
                    "Domain & Hosting Einrichtung"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-1/3 w-full bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center">
                <span className="block text-gray-400 text-sm uppercase tracking-widest mb-2">Festpreis</span>
                <div className="flex items-start justify-center gap-1 mb-6">
                  <span className="text-2xl mt-2 text-accent">€</span>
                  <span className="text-6xl font-display font-bold text-white">599</span>
                </div>
                <p className="text-sm text-gray-400 mb-8">zzgl. MwSt. <br/> Einmalige Einrichtung.</p>
                
                <Button variant="accent" className="w-full justify-center" onClick={() => {
                   const contactSection = document.getElementById('contact');
                   const messageField = document.getElementById('message') as HTMLTextAreaElement;
                   const budgetField = document.getElementById('budget') as HTMLSelectElement;
                   
                   if (contactSection) {
                     contactSection.scrollIntoView({ behavior: 'smooth' });
                     // Pre-fill logic (simulated visual feedback)
                     if(messageField) messageField.value = "Ich interessiere mich für das Schnellstart-Paket für 599€.";
                     if(budgetField) budgetField.value = BudgetOption.LOW;
                   }
                }}>
                  Jetzt anfragen
                </Button>
                <p className="text-xs text-gray-500 mt-4">Fertigstellung in ca. 7 Tagen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Das Web Wachstum Team" 
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="uppercase tracking-widest text-xs font-bold text-accent mb-4 block">Über Uns</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
              Wir entwickeln Websites, die Ergebnisse liefern.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Bei Web Wachstum glauben wir daran, dass gutes Design mehr ist als nur eine hübsche Hülle. Es ist ein Werkzeug. Ein Werkzeug, um Vertrauen aufzubauen, Ihre Marke zu stärken und Besucher in treue Kunden zu verwandeln.
              </p>
              <p>
                Wir sind ein Team aus passionierten Designern, Entwicklern und Strategen. Unser Ansatz ist minimalistisch, direkt und datengetrieben. Kein unnötiger Schnickschnack, sondern purer Fokus auf Ihre Ziele.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-display font-bold text-primary mb-1">50+</h4>
                <p className="text-sm text-gray-500">Erfolgreiche Projekte</p>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-primary mb-1">100%</h4>
                <p className="text-sm text-gray-500">Kundenzufriedenheit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-offwhite overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading subtitle="Kundenstimmen" title="Vertrauen durch Qualität" />
        
        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3 flex flex-col">
              <div className="flex text-accent mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 flex-grow">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-primary">{t.name}</h5>
                  <p className="text-xs text-gray-500 uppercase">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', budget: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze.");
    setFormState({ name: '', email: '', budget: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative">
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading subtitle="Kontakt" title="Lassen Sie uns starten." light />
            <p className="text-midgrey text-lg mb-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              Bereit für den nächsten Schritt? Erzählen Sie uns von Ihrem Projekt. Wir entwickeln eine Strategie, die zu Ihren Zielen passt.
            </p>
            
            <div className="space-y-6 mt-12 hidden lg:block text-white/80">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent">
                   <Mail size={20} />
                 </div>
                 <span>hallo@webwachstum.de</span>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent">
                    <Twitter size={20} />
                 </div>
                 <span>@webwachstum</span>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Projektanfrage</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Ihr Name"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                  placeholder="ihre@email.de"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                <select 
                  id="budget"
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                  value={formState.budget}
                  onChange={e => setFormState({...formState, budget: e.target.value})}
                >
                  <option value="" disabled>Bitte wählen</option>
                  {Object.values(BudgetOption).map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Projektbeschreibung</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <Button variant="accent" type="submit" className="w-full justify-center text-primary font-bold">
                Anfrage absenden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkbg text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 font-display font-bold text-2xl mb-6">
              <Logo className="w-8 h-8 text-white" />
              Web Wachstum
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
              Wir bauen digitale Erlebnisse für Marken von morgen. 
              Minimalistisch, leistungsstark und zukunftssicher.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all hover:-translate-y-1">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" className="hover:text-accent transition-colors">Leistungen</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">Agentur</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Karriere</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Rechtliches</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Web Wachstum Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-primary antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}