
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../../utils';
import { ASSETS } from '../../constants';

export const TeamSection = () => {
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
      <div className="absolute inset-0 z-0">
        <img src={ASSETS.teamBg} alt="Team Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative md:absolute md:top-[12%] left-0 w-full z-30 flex items-center gap-4 md:gap-6 px-4 md:px-0 pt-32 md:pt-0 mb-8 md:mb-0">
        <div className={cn("h-3 md:h-12 bg-brand-yellow rounded-r-full shadow-[0_0_20px_rgba(255,193,7,0.6)] transition-all duration-1000 ease-out", isVisible ? "w-12 md:w-24 opacity-100" : "w-0 opacity-0")}></div>
        <h3 className={cn("text-white font-heading font-bold text-lg md:text-3xl max-w-2xl leading-tight transition-all duration-1000 delay-300", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
          Conheça o time que vai fazer diferença nos seus resultados:
        </h3>
      </div>

      <div className="absolute top-6 right-8 md:right-24 z-20 hidden md:block">
        <img src={ASSETS.teamLogo} alt="BF Logo" className="w-24 sm:w-32 h-auto object-contain opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col md:flex-row justify-center items-end gap-16 lg:gap-24 w-full">
          <div className="relative w-full max-w-[550px] flex flex-col items-center group">
             <div className={cn("absolute top-[20%] -left-[10%] z-30 text-left hidden md:block transition-all duration-700 delay-500", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                <h4 className="text-brand-yellow font-heading font-bold text-3xl mb-1">Geriel Soglia</h4>
                <div className="w-24 h-[2px] bg-white mb-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <p className="text-white text-xl font-light">Gestor de tráfego</p>
             </div>
             <div className="md:hidden w-full text-center mb-6">
                <h4 className="text-brand-yellow font-heading font-bold text-3xl">Geriel Soglia</h4>
                <div className="w-12 h-[2px] bg-white mx-auto my-2"></div>
                <p className="text-white text-lg">Gestor de tráfego</p>
             </div>
             <div className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[90%] h-[70%] z-0 opacity-60">
                <img src={ASSETS.teamFrame} alt="" className="w-full h-full object-contain" />
             </div>
             <img src={ASSETS.teamPerson1} alt="Geriel" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 origin-bottom" />
          </div>
          <div className="relative w-full max-w-[550px] flex flex-col items-center group">
             <div className={cn("absolute top-[20%] -left-[10%] z-30 text-left hidden md:block transition-all duration-700 delay-700", isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
                <h4 className="text-brand-yellow font-heading font-bold text-3xl mb-1">Marcos Júnior</h4>
                <div className="w-24 h-[2px] bg-white mb-1 shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                <p className="text-white text-xl font-light">Gestor de tráfego</p>
             </div>
             <div className="md:hidden w-full text-center mb-6">
                <h4 className="text-brand-yellow font-heading font-bold text-3xl">Marcos Júnior</h4>
                <div className="w-12 h-[2px] bg-white mx-auto my-2"></div>
                <p className="text-white text-lg">Gestor de tráfego</p>
             </div>
             <div className="absolute bottom-0 left-[38%] -translate-x-1/2 w-[90%] h-[70%] z-0 opacity-60">
                <img src={ASSETS.teamFrame} alt="" className="w-full h-full object-contain" />
             </div>
             <img src={ASSETS.teamPerson2} alt="Marcos" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105 origin-bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};
