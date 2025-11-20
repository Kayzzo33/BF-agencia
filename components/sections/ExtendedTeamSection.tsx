
import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Reveal } from '../Reveal';
import { cn } from '../../utils';
import { EXTENDED_TEAM } from '../../constants';

export const ExtendedTeamSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
       <div className="container mx-auto px-4">
          <Reveal>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-16">
               Equipe de <span className="text-brand-yellow">Alta Performance</span>
             </h2>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-8">
             {EXTENDED_TEAM.map((member, idx) => {
               const isActive = activeCard === idx;
               return (
                 <div 
                   key={idx}
                   onClick={() => setActiveCard(isActive ? null : idx)}
                   className={cn(
                     "relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-out overflow-hidden group",
                     isActive ? "w-full md:w-[500px] bg-zinc-800 border-brand-yellow shadow-[0_0_30px_rgba(255,193,7,0.2)] scale-105 z-10" : "w-[280px] hover:bg-zinc-800 hover:-translate-y-2"
                   )}
                 >
                    <div className="flex items-center gap-4">
                       <div className={cn(
                         "rounded-full overflow-hidden border-2 border-brand-yellow/50 transition-all duration-500",
                         isActive ? "w-24 h-24 border-brand-yellow" : "w-16 h-16"
                       )}>
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                       </div>
                       <div>
                          <h3 className="text-white font-bold text-xl">{member.name}</h3>
                          <p className="text-brand-yellow text-sm uppercase tracking-wider font-medium">{member.role}</p>
                       </div>
                    </div>

                    <div className={cn(
                      "mt-6 pt-6 border-t border-white/10 transition-all duration-500 overflow-hidden",
                      isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                       <p className="text-gray-300 text-sm leading-relaxed mb-4">
                         Especialista dedicado a garantir que suas campanhas performem no mais alto nível, com foco total em resultados.
                       </p>
                       <a href={`https://instagram.com/${member.instagram.replace('@','')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-brand-yellow transition-colors text-sm font-bold">
                          <Instagram size={18} />
                          {member.instagram}
                       </a>
                    </div>

                    {/* Decorative Orbit */}
                    <div className="absolute -right-10 -bottom-10 w-32 h-32 border border-white/5 rounded-full group-hover:border-brand-yellow/20 transition-colors pointer-events-none"></div>
                 </div>
               )
             })}
          </div>
       </div>
    </section>
  )
}
