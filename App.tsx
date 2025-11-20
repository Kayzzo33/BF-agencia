import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, ArrowRight, Check, Instagram, Facebook, Linkedin, Mail, Phone, Target, TrendingUp, Users, ShieldCheck, Cpu, Sparkles, MapPin, ScanEye, CheckCircle2 } from 'lucide-react';
import { cn } from './utils';
import { Modal } from './components/Modal';
import { Reveal } from './components/Reveal';
import { AIChat } from './components/AIChat';
import RadialOrbitalTimeline from './components/RadialOrbitalTimeline';

// Assets configuration
const ASSETS = {
  heroBg: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763568231/BackGround_Hero_boqfkf.jpg", 
  // New Logos
  logoMain: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763570166/logo_hero_qw4x5l.png",
  logoText: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763570163/agencia_logo_hero_dr6zrq.png",
  heroLogo: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/Logo_Preta_p7evqr.png",
  logoWatermark: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/logo_branco_z9jsgg.png",
  
  // Intro Section Assets
  introBg: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763573021/fundo_section2_rys2qf.jpg",
  notebook: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763573334/notebook_cffgac.png",
  arrow: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763573324/SETAS_o6qbsb.png",
  logoYellow: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/logo_amarela_gb7rgq.png",

  // Team Section Assets
  teamBg: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763576420/Fundobsluan_tagksa.jpg",
  teamPerson1: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763575835/BFCOMSOMBRA_lnyxdd.png", // Geriel
  teamPerson2: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763575823/LuanComSombra_zs8shq.png", // Marcos
  teamFrame: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763576406/QuadradoLinha_rtqqjk.png",
  teamLogo: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/Logo_Preta_p7evqr.png",

  // Solutions Assets
  notebookBlack: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763581102/notebookblack_or44lx.png",
  notebookBlur: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763581375/notebookblackdesfocado_ndrxwe.png",
  
  // Partnership Section
  partnerPerson: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569573/bf_cinza_v5jmst.png",

  team2: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop", 
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

const SOLUTIONS_LIST = [
  "Criação de campanhas estratégicas",
  "Gerenciamento de métricas",
  "Foco em resultados exponenciais",
  "Planejamento de escala",
  "Análise de criativos",
  "Análise de Copy",
  "Relatório Mensal com dados precisos"
];

const ADAPTATION_ITEMS = [
  { title: "Observação de mercado", icon: <ScanEye size={28} /> },
  { title: "Análise completa do nicho", icon: <Target size={28} /> },
  { title: "Direcionamento estratégico de público", icon: <Users size={28} /> }
];

// --- Helper Components ---

const Counter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        // Frame time 16ms (approx 60fps)
        const totalFrames = duration / 16;
        const increment = end / totalFrames;
        
        const timer = window.setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            window.clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

// --- Main Layout Components ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pointer-events-none">
      <nav 
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-between",
          isScrolled 
            ? "mt-6 w-[92%] md:w-fit bg-black/70 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)] md:gap-12" 
            : "w-full max-w-7xl px-6 py-8 bg-transparent md:gap-0"
        )}
      >
        <div className="flex items-center gap-3">
          {/* Main Logo Symbol */}
          <img 
            src={ASSETS.logoMain} 
            alt="BF Logo" 
            className="h-8 w-auto object-contain transition-transform hover:scale-110" 
          />
          
          {/* Text Logo - Collapses on scroll */}
          <div className={cn(
            "overflow-hidden transition-all duration-500 ease-in-out flex items-center",
            isScrolled ? "w-0 opacity-0" : "w-24 sm:w-32 opacity-100"
          )}>
            <img 
              src={ASSETS.logoText} 
              alt="Agência" 
              className="h-6 sm:h-8 w-auto object-contain ml-2" 
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            className={cn(
              "transition-colors text-sm uppercase tracking-wider font-bold",
              // If scrolled, light gray (on black). If not scrolled, BLACK (on yellow hero).
              isScrolled ? "text-gray-300 hover:text-brand-yellow" : "text-black hover:text-zinc-700"
            )}
          >
            Início
          </a>
          <a 
            href="#about" 
            className={cn(
              "transition-colors text-sm uppercase tracking-wider font-bold",
              isScrolled ? "text-gray-300 hover:text-brand-yellow" : "text-black hover:text-zinc-700"
            )}
          >
            Quem Somos
          </a>
          <a 
            href="#services" 
            className={cn(
              "transition-colors text-sm uppercase tracking-wider font-bold",
              isScrolled ? "text-gray-300 hover:text-brand-yellow" : "text-black hover:text-zinc-700"
            )}
          >
            Serviços
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenModal}
            className={cn(
              "bg-brand-yellow hover:bg-yellow-400 text-black font-bold rounded-full transition-all hover:shadow-[0_0_15px_rgba(255,193,7,0.4)] hover:-translate-y-0.5 whitespace-nowrap",
              isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2 shadow-xl"
            )}
          >
            Falar com Especialista
          </button>

          {/* Mobile Toggle */}
          <button 
            className={cn("md:hidden transition-colors", isScrolled ? "text-white" : "text-black")} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full mt-4 left-0 right-0 bg-zinc-900/95 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex flex-col gap-4 md:hidden animate-[fadeIn_0.2s] shadow-2xl mx-4">
            <a href="#home" className="text-white p-2 text-center font-medium hover:text-brand-yellow" onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#about" className="text-white p-2 text-center font-medium hover:text-brand-yellow" onClick={() => setIsMenuOpen(false)}>Quem Somos</a>
            <a href="#services" className="text-white p-2 text-center font-medium hover:text-brand-yellow" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          </div>
        )}
      </nav>
    </div>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Adjusted overlay to let the yellow background shine through for the black logo, but darken at bottom for flow */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-yellow/10 via-transparent to-black/90 z-10"></div>
        <img src={ASSETS.heroBg} alt="Background" className="w-full h-full object-cover opacity-100" />
      </div>

      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
        
        <Reveal>
          <img 
            src={ASSETS.heroLogo} 
            alt="BF Agência" 
            className="w-64 md:w-80 lg:w-96 mx-auto mb-8 drop-shadow-2xl"
          />
        </Reveal>
        
        <Reveal delay={200}>
          <h2 className="text-black md:text-zinc-900 text-xl md:text-3xl font-heading font-bold mb-12 max-w-3xl mx-auto drop-shadow-md">
            As melhores soluções em tráfego pago para o seu negócio
          </h2>
        </Reveal>

        <Reveal delay={400}>
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
              className="border border-white/20 text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center bg-black/30 backdrop-blur-sm"
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

const IntroSection = () => {
  return (
    <section className="relative w-full min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={ASSETS.introBg} alt="Intro Background" className="w-full h-full object-cover" />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>
      </div>

      {/* Logo Top Right */}
      <div className="absolute top-8 right-8 z-30">
        <img src={ASSETS.logoYellow} alt="BF Logo" className="w-24 md:w-32 opacity-90 hover:opacity-100 transition-opacity" />
      </div>

      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col md:flex-row items-center">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 pt-20 md:pt-0 pl-4 md:pl-12">
          <Reveal>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] uppercase tracking-tight">
              <span className="text-white block">Gestão</span>
              <span className="text-white block">Digital de</span>
              <span className="text-brand-yellow block mt-2">Tráfego Pago</span>
              <span className="text-brand-yellow block">Inteligente</span>
            </h2>
          </Reveal>
        </div>

        {/* Right: Visuals */}
        <div className="w-full md:w-1/2 relative h-[500px] md:h-[700px] flex items-end justify-center md:justify-end pb-10">
          {/* Arrow Image - Static (Reverted) */}
          <img 
            src={ASSETS.arrow} 
            alt="Arrow" 
            className="absolute bottom-0 right-0 w-[90%] md:w-[80%] object-contain z-10"
            style={{ maxHeight: '90%' }}
          />
          
          {/* Notebook - Static/Simple Entry (Reverted) */}
          <div className="relative z-20 w-[85%] md:w-[75%] md:-mr-10 mb-10 md:mb-20">
            <img 
              src={ASSETS.notebook} 
              alt="Dashboard" 
              className="w-full h-auto object-contain drop-shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 relative">
      {/* Duplicated partial logo on the Left (Cutoff) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] w-[300px] md:w-[500px] pointer-events-none opacity-[0.08]">
        <img 
          src={ASSETS.logoWatermark} 
          alt="Decoration" 
          className="w-full h-auto object-contain filter brightness-0" 
        />
      </div>

      {/* Main Content Centered */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-heading font-bold leading-none mb-6">
            <span className="text-brand-yellow block">QUEM</span>
            <span className="text-black block">SOMOS?</span>
          </h2>
          <div className="w-24 h-2 bg-brand-yellow mb-8 mx-auto"></div>
          <p className="text-zinc-800 text-lg md:text-xl leading-relaxed font-medium">
            Somos uma agência de marketing digital focada e <span className="font-bold">especializada em tráfego pago</span> com inteligência. 
            Atendemos tanto clientes locais, como de todo o Brasil.
          </p>
        </Reveal>
      </div>

      {/* Right Watermark Logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] w-[400px] md:w-[600px] pointer-events-none opacity-[0.08]">
        <img 
          src={ASSETS.logoWatermark} 
          alt="BF Watermark" 
          className="w-full h-auto object-contain filter brightness-0" 
        />
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

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen sm:min-h-[900px] flex flex-col items-center justify-between md:justify-end overflow-hidden bg-black pt-0 pb-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={ASSETS.teamBg} alt="Team Background" className="w-full h-full object-cover" />
      </div>

      {/* Header: Relative on Mobile (pushed by justify-between), Absolute on Desktop */}
      <div className="relative md:absolute md:top-[12%] left-0 w-full z-30 flex items-center gap-4 md:gap-6 px-4 md:px-0 pt-32 md:pt-0 mb-8 md:mb-0">
        {/* Animated Bar Shape */}
        <div className={cn(
            "h-3 md:h-12 bg-brand-yellow rounded-r-full shadow-[0_0_20px_rgba(255,193,7,0.6)] transition-all duration-1000 ease-out",
            isVisible ? "w-12 md:w-24 opacity-100" : "w-0 opacity-0"
        )}></div>

        {/* Header Text */}
        <h3 className={cn(
            "text-white font-heading font-bold text-lg md:text-3xl max-w-2xl leading-tight transition-all duration-1000 delay-300",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        )}>
          Conheça o time que vai fazer diferença nos seus resultados:
        </h3>
      </div>

      {/* Top Right Black Logo - Hidden on Mobile, moved left */}
      <div className="absolute top-6 right-8 md:right-24 z-20 hidden md:block">
        <img src={ASSETS.teamLogo} alt="BF Logo" className="w-24 sm:w-32 h-auto object-contain opacity-90" />
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-center items-end gap-16 lg:gap-24 w-full">
          
          {/* Person 1 */}
          <div className="relative w-full max-w-[550px] flex flex-col items-center group">
             {/* Desktop Text - Left aligned with line */}
             <div className={cn(
               "absolute top-[20%] -left-[10%] z-30 text-left hidden md:block transition-all duration-700 delay-500",
               isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
             )}>
                <h4 className="text-brand-yellow font-heading font-bold text-3xl mb-1">Geriel Soglia</h4>
                <div className="w-24 h-[2px] bg-white mb-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <p className="text-white text-xl font-light">Gestor de tráfego</p>
             </div>
             
             {/* Mobile Text */}
             <div className="md:hidden w-full text-center mb-6">
                <h4 className="text-brand-yellow font-heading font-bold text-3xl">Geriel Soglia</h4>
                <div className="w-12 h-[2px] bg-white mx-auto my-2"></div>
                <p className="text-white text-lg">Gestor de tráfego</p>
             </div>

             <div className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[90%] h-[70%] z-0 opacity-60">
                <img src={ASSETS.teamFrame} alt="" className="w-full h-full object-contain" />
             </div>
             <img 
               src={ASSETS.teamPerson1} 
               alt="Geriel" 
               className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 origin-bottom"
             />
          </div>

          {/* Person 2 */}
          <div className="relative w-full max-w-[550px] flex flex-col items-center group">
             {/* Desktop Text */}
             <div className={cn(
               "absolute top-[20%] -left-[10%] z-30 text-left hidden md:block transition-all duration-700 delay-700",
               isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
             )}>
                <h4 className="text-brand-yellow font-heading font-bold text-3xl mb-1">Marcos Júnior</h4>
                <div className="w-24 h-[2px] bg-white mb-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <p className="text-white text-xl font-light">Gestor de tráfego</p>
             </div>
             
             {/* Mobile Text */}
             <div className="md:hidden w-full text-center mb-6">
                <h4 className="text-brand-yellow font-heading font-bold text-3xl">Marcos Júnior</h4>
                <div className="w-12 h-[2px] bg-white mx-auto my-2"></div>
                <p className="text-white text-lg">Gestor de tráfego</p>
             </div>

             <div className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[90%] h-[70%] z-0 opacity-60">
                <img src={ASSETS.teamFrame} alt="" className="w-full h-full object-contain" />
             </div>
             <img 
               src={ASSETS.teamPerson2} 
               alt="Marcos" 
               className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 origin-bottom"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

const SolutionsSection = () => {
  return (
    <section className="relative bg-black pt-24 pb-48 overflow-visible z-30">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Part 1: Solutions (Premium Dark Glass Grid) */}
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-heading font-bold leading-tight">
              <span className="text-brand-yellow">Solucionamos e sanamos</span> <span className="text-white">a demanda</span>
              <br />
              <span className="text-white">de acordo com sua necessidade:</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-6xl mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS_LIST.map((item, idx) => (
                <Reveal key={idx} delay={idx * 50}>
                  <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex items-start gap-4 overflow-hidden transition-all duration-300 hover:border-brand-yellow hover:shadow-[0_0_25px_rgba(255,193,7,0.15)] hover:-translate-y-1 cursor-default h-full backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="mt-1 min-w-[28px]">
                      <div className="w-7 h-7 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-colors shadow-md">
                        <CheckCircle2 size={16} />
                      </div>
                    </div>
                    <p className="text-zinc-200 font-medium text-lg leading-snug group-hover:text-white transition-colors relative z-10">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
        </div>

        {/* Part 2: Adaptation (Overlap Layout) */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 relative z-20 mt-40">
           {/* Text Content - Pushed Right */}
           <div className="w-full lg:w-7/12 lg:pl-12 z-20 relative order-2 lg:order-1">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-10">
                  Adaptação diante <br/><span className="text-brand-yellow">a concorrência:</span>
                </h2>
                <div className="flex flex-col gap-5">
                  {ADAPTATION_ITEMS.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="group relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 flex items-center gap-6 overflow-hidden transition-all duration-500 hover:border-brand-yellow hover:bg-zinc-900/90 cursor-default hover:-translate-y-1 shadow-lg hover:shadow-[0_0_30px_rgba(255,193,7,0.1)] w-full max-w-xl"
                    >
                       {/* Hover Gradient Background */}
                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-yellow/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                       {/* Icon Box */}
                       <div className="min-w-[64px] w-[64px] h-[64px] rounded-xl bg-black border border-zinc-800 flex items-center justify-center text-brand-yellow group-hover:scale-110 group-hover:border-brand-yellow/50 transition-all duration-300 shadow-inner relative z-10">
                          {item.icon}
                       </div>

                       {/* Text */}
                       <h3 className="text-lg md:text-xl font-heading font-bold text-white group-hover:text-brand-yellow transition-colors leading-tight relative z-10">
                         {item.title}
                       </h3>
                       
                       <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-brand-yellow">
                          <ArrowRight size={20} />
                       </div>
                    </div>
                  ))}
                </div>
              </Reveal>
           </div>
           
           {/* Sharp Notebook - Pushed Left & Overlapping */}
           <div className="w-full lg:w-5/12 hidden lg:flex justify-end lg:-ml-12 relative z-10 order-1 lg:order-2">
              <Reveal delay={200}>
                 <div className="relative">
                    {/* Glow effect behind notebook */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-yellow/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <img 
                      src={ASSETS.notebookBlack} 
                      alt="Dashboard" 
                      className="w-full max-w-sm h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
              </Reveal>
           </div>
        </div>

      </div>

      {/* Blurred Notebook Transition - Bottom Left - Hidden on responsive */}
      <div className="hidden lg:block absolute bottom-[-180px] left-[-80px] md:-left-[250px] z-30 w-[280px] md:w-[550px] pointer-events-none">
        <img src={ASSETS.notebookBlur} alt="" className="w-full h-auto object-contain opacity-80" />
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-zinc-900 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="flex flex-col items-center group cursor-default">
                <div className="text-4xl md:text-6xl font-black text-brand-yellow mb-2 flex items-baseline group-hover:scale-110 transition-transform duration-300">
                  <Counter end={stat.value} />
                  <span className="text-2xl md:text-4xl">{stat.suffix}</span>
                </div>
                <div className="text-gray-400 uppercase text-xs md:text-sm tracking-widest font-bold group-hover:text-white transition-colors">
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
  <section className="py-24 bg-white relative overflow-hidden min-h-[900px] flex flex-col z-10">
    <div className="container mx-auto px-4 relative z-10">
      <div className="w-full max-w-4xl mx-auto mb-12 text-center">
           <Reveal>
            <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-8">
              <span className="text-brand-yellow">Porque</span>
              <br/>
              <span className="text-black">contratar a BF?</span>
            </h2>
            
            <p className="text-zinc-600 text-lg max-w-md mx-auto">
              Entenda como nossa metodologia única transforma seu investimento em resultados reais.
            </p>
          </Reveal>
      </div>
      
      {/* Orbital Timeline Animation taking full width */}
      <div className="w-full relative z-20 mt-8">
         <RadialOrbitalTimeline />
      </div>
    </div>
  </section>
);

const PartnershipSection = () => {
  return (
    <section className="relative bg-black pt-48 pb-0 z-20 overflow-visible">
       <div className="container mx-auto px-4 relative">
          
          {/* Flex container for Logo and Card - Center/Left alignment */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-0 max-w-7xl mx-auto relative z-10 pb-12 lg:pb-24">
             
             {/* Logo - positioned left of card */}
             <img 
                src={ASSETS.logoYellow} 
                alt="BF" 
                className="w-32 lg:w-48 h-auto object-contain shrink-0 relative z-20 lg:mr-12" 
             />

             {/* Yellow Card with extra padding right for the person overlay */}
             <div className="bg-brand-yellow rounded-3xl p-8 md:p-12 lg:pr-64 shadow-[0_0_30px_rgba(255,193,7,0.2)] relative z-10 w-full lg:w-auto lg:min-w-[650px]">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-black leading-tight max-w-2xl">
                       “Nós não queremos clientes, <span className="font-black">queremos</span> <br/>parceiros!”
                  </h2>
             </div>
          </div>

          {/* Person Image - Absolute positioned to overlap card and top section */}
          <div className="relative lg:absolute lg:bottom-0 lg:right-0 xl:right-20 w-[300px] md:w-[450px] lg:w-[500px] z-30 pointer-events-none flex justify-center mx-auto lg:mx-0 mt-[-40px] lg:mt-0">
             {/* Removed negative translate so feet align with bottom border */}
             <img 
               src={ASSETS.partnerPerson} 
               alt="Parceiro" 
               className="w-full h-auto object-contain drop-shadow-2xl transform lg:translate-y-0 origin-bottom" 
             /> 
          </div>
       </div>
    </section>
  )
};

const Testimonials = () => (
  <section className="py-24 bg-brand-dark overflow-hidden relative z-30">
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
              <Phone size={18} className="text-brand-yellow" />
              <span>+55 73 9830-6902</span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors">
              <Mail size={18} className="text-brand-yellow" />
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
      <IntroSection />
      <About />
      <Services />
      <TeamSection />
      <SolutionsSection />
      <WhyUs />
      <PartnershipSection />
      <Testimonials />
      <Stats />
      <CtaSection onOpenModal={() => setIsModalOpen(true)} />
      <Footer />
      
      <FloatingWhatsApp />
      <AIChat />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;