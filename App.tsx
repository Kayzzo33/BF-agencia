import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ArrowRight, Check, Instagram, Facebook, Linkedin, Mail, Phone, Target, TrendingUp, Users, ShieldCheck, Cpu } from 'lucide-react';
import { cn } from './utils';
import { Modal } from './components/Modal';
import { Reveal } from './components/Reveal';
import { AIChat } from './components/AIChat';

// Assets configuration
const ASSETS = {
  heroBg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
  team1: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop", // Placeholder for team member
  team2: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop", // Placeholder for team member
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
};

// Data
const SERVICES = [
  { title: "Gestão de Tráfego", desc: "Campanhas otimizadas no Meta e Google Ads para PMEs.", icon: <Target size={32} /> },
  { title: "Análise de ROI", desc: "Foco total no retorno sobre o investimento do seu negócio.", icon: <TrendingUp size={32} /> },
  { title: "Copywriting", desc: "Textos persuasivos que convertem visitantes em clientes.", icon: <MessageCircle size={32} /> },
  { title: "Consultoria AI", desc: "Análise de dados preditiva com tecnologia Gemini.", icon: <Cpu size={32} /> },
];

const STATS = [
  { value: 50, label: "Projetos Concluídos", suffix: "+" },
  { value: 50, label: "Clientes Satisfeitos", suffix: "+" },
  { value: 99, label: "Taxa de Sucesso", suffix: "%" },
  { value: 5, label: "Anos de Experiência", suffix: "+" },
];

const TESTIMONIALS = [
  { name: "Carlos Silva", role: "CEO, TechStore", text: "A BF Agência transformou nossas vendas online em 3 meses." },
  { name: "Mariana Costa", role: "Diretora, Clinica Bem Estar", text: "Profissionalismo e resultados consistentes. Recomendo demais!" },
  { name: "Ricardo Gomes", role: "Fundador, Burger King (Franquia)", text: "O tráfego pago finalmente deu retorno real para nossa loja." },
  { name: "Ana Paula", role: "Gerente, Modas 360", text: "Atendimento humanizado e estratégias que funcionam." },
  { name: "Fernanda Lima", role: "Advogada", text: "Conseguiram segmentar meu público perfeitamente." },
];

// --- Components within App to simplify file structure while maintaining separation ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
      isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-brand-yellow rounded flex items-center justify-center text-black font-black text-xl group-hover:scale-110 transition-transform">
            BF
          </div>
          <span className={cn(
            "font-heading font-bold text-white text-lg tracking-wide transition-all duration-500",
            isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
          )}>
            AGÊNCIA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm uppercase tracking-wider font-medium">Início</a>
          <a href="#about" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm uppercase tracking-wider font-medium">Quem Somos</a>
          <a href="#services" className="text-gray-300 hover:text-brand-yellow transition-colors text-sm uppercase tracking-wider font-medium">Serviços</a>
          <button 
            onClick={onOpenModal}
            className="bg-brand-yellow hover:bg-yellow-400 text-black font-bold px-6 py-2 rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,193,7,0.4)] hover:-translate-y-0.5"
          >
            Falar com Especialista
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-4 flex flex-col gap-4 md:hidden animate-[fadeIn_0.2s]">
            <a href="#home" className="text-white p-2" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#about" className="text-white p-2" onClick={() => setIsMenuOpen(false)}>Quem Somos</a>
            <a href="#services" className="text-white p-2" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <button onClick={() => { onOpenModal(); setIsMenuOpen(false); }} className="bg-brand-yellow text-black font-bold p-3 rounded text-center">
              Falar com Especialista
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-brand-dark z-10"></div>
        <img src={ASSETS.heroBg} alt="Background" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
        <Reveal>
          <div className="inline-block px-4 py-1 mb-6 border border-brand-yellow/30 rounded-full bg-brand-yellow/10 backdrop-blur-sm">
            <span className="text-brand-yellow text-xs md:text-sm font-bold tracking-widest uppercase">Agência Especializada</span>
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-6 max-w-5xl">
            GESTÃO DIGITAL DE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">TRÁFEGO PAGO</span> <br/>
            INTELIGENTE
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Escale suas vendas e domine seu nicho com estratégias validadas de anúncios online. 
            Nós cuidamos da tecnologia, você cuida do crescimento.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5573983069002?text=Olá! Gostaria de conhecer os serviços da BF Agência para gestão de tráfego pago."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-black text-lg font-bold px-8 py-4 rounded-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <MessageCircle size={24} />
              Falar com Especialista
            </a>
            <button 
              onClick={onOpenModal}
              className="border border-white/20 text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Solicitar Análise
            </button>
          </div>
        </Reveal>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ArrowRight className="rotate-90" />
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-yellow/20 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <img src={ASSETS.team1} alt="Equipe BF" className="relative rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[500px]" />
            
            <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur p-6 border-l-4 border-brand-yellow transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h4 className="text-white font-bold text-xl">Especialistas Certificados</h4>
              <p className="text-gray-400 text-sm">Meta Ads & Google Partner</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div>
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2 text-sm">Quem Somos</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Mais que uma agência, <br/>seus parceiros de <span className="text-brand-yellow">crescimento.</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A BF Agência nasceu com um propósito claro: democratizar o acesso a estratégias de tráfego pago de alta performance para empresas que desejam escalar de verdade.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Não somos apenas apertadores de botões. Somos estrategistas de dados. Utilizamos inteligência artificial e análise preditiva para garantir que cada centavo investido retorne como lucro para o seu caixa.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black p-4 rounded-lg border border-zinc-800 hover:border-brand-yellow/50 transition-colors">
                <h4 className="text-white font-bold mb-1">Foco em ROI</h4>
                <p className="text-xs text-gray-500">Seu lucro é nossa meta</p>
              </div>
              <div className="bg-black p-4 rounded-lg border border-zinc-800 hover:border-brand-yellow/50 transition-colors">
                <h4 className="text-white font-bold mb-1">Data Driven</h4>
                <p className="text-xs text-gray-500">Decisões baseadas em dados</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-black">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Nossas <span className="text-brand-yellow">Especialidades</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Soluções completas para dominar o digital e vender mais todos os dias.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {SERVICES.map((service, idx) => (
          <Reveal key={idx} delay={idx * 100} className="h-full">
            <div className="group bg-brand-dark border border-zinc-800 p-6 rounded-2xl hover:border-brand-yellow hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-brand-yellow mb-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => {
  // Simplified counter logic for brevity
  return (
    <section className="py-20 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-6xl font-black text-brand-purple mb-2 flex items-baseline">
                  {stat.value}<span className="text-2xl md:text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-gray-400 uppercase text-xs md:text-sm tracking-widest font-bold">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => (
  <section className="py-24 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
            Por que escolher a <br/><span className="text-brand-yellow">BF Agência?</span>
          </h2>
          
          <div className="space-y-6">
            {[
              "Somos especialistas em Meta e Google Ads certificado.",
              "Conhecemos seu nicho como nenhuma outra agência.",
              "Análise 100% da sua conta antes de contratar.",
              "Suporte ágil e atendimento diferenciado no WhatsApp."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 min-w-[24px] min-h-[24px] bg-brand-purple/20 rounded-full flex items-center justify-center text-brand-purple">
                  <Check size={14} strokeWidth={3} />
                </div>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <a href="https://wa.me/5573983069002?text=Olá! Vim pelo site da BF Agência." className="inline-block mt-10 text-brand-purple font-bold border-b border-brand-purple pb-1 hover:text-white hover:border-white transition-colors">
            Você vai é precisar de um cofre novo &rarr;
          </a>
        </Reveal>

        <Reveal delay={200} className="order-1 lg:order-2 relative">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-yellow/5 rounded-3xl -z-10"></div>
          <img src={ASSETS.team2} alt="Consultoria" className="rounded-2xl shadow-2xl w-full object-cover h-[600px] filter sepia-[.2] contrast-125" />
        </Reveal>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-brand-dark overflow-hidden">
    <div className="container mx-auto px-4 mb-12 text-center">
      <h2 className="text-3xl font-heading font-bold text-white">O que dizem nossos <span className="text-brand-yellow">Parceiros</span></h2>
    </div>
    
    {/* Infinite Scroll Marquee */}
    <div className="relative w-full flex overflow-hidden group">
      <div className="flex animate-scroll group-hover:[animation-play-state:paused] gap-6 px-6">
        {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
          <div key={i} className="flex-shrink-0 w-[350px] bg-black border border-zinc-800 p-8 rounded-xl hover:border-brand-yellow/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-xs text-gray-500 uppercase">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"{t.text}"</p>
            <div className="flex text-brand-yellow mt-4 gap-1">
              {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
            </div>
          </div>
        ))}
      </div>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-brand-dark to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-dark to-transparent z-10"></div>
    </div>
  </section>
);

const CtaSection = ({ onOpenModal }: { onOpenModal: () => void }) => (
  <section className="py-24 bg-brand-yellow relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-heading font-black text-black mb-6 uppercase">
          Quer ser nosso próximo case de <br/>sucesso?
        </h2>
        <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
          Temos apenas 3 vagas disponíveis para novos projetos este mês. Garanta sua análise gratuita agora.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://wa.me/5573983069902?text=Quero transformar meu negócio com a BF Agência!" 
            className="bg-black text-white font-bold text-lg px-10 py-4 rounded-lg hover:scale-105 transition-transform shadow-xl"
          >
            Falar no WhatsApp
          </a>
          <button 
            onClick={onOpenModal}
            className="bg-transparent border-2 border-black text-black font-bold text-lg px-10 py-4 rounded-lg hover:bg-black hover:text-white transition-all"
          >
            Receber Proposta
          </button>
        </div>
      </Reveal>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="w-12 h-12 bg-brand-yellow rounded flex items-center justify-center text-black font-black text-2xl mb-6">BF</div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Agência de gestão de tráfego pago focada em resultados reais. Transformamos cliques em clientes e dados em lucro.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contato</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors">
              <Phone size={18} className="text-brand-purple" />
              <span>+55 73 9830-6902</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors">
              <Mail size={18} className="text-brand-purple" />
              <span>onzycompany@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponível agora para novos projetos</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Social</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} BF Agência. Todos os direitos reservados.</p>
        <p>Desenvolvido com Tecnologia React & Gemini AI</p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/5573983069002?text=Olá! Vim pelo site da BF Agência."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 animate-pulse-slow flex items-center justify-center"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
    </svg>
  </a>
);

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-brand-yellow selection:text-black">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <Services />
      <Stats />
      <WhyUs />
      <Testimonials />
      <CtaSection onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      
      <FloatingWhatsApp />
      <AIChat />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;