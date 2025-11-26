
import React, { useState } from 'react';
import { X, User, Instagram } from 'lucide-react';
import { Reveal } from '../Reveal';
import { cn } from '../../utils';
import { EXTENDED_TEAM, ASSETS } from '../../constants';

export const ExtendedTeamSection = () => {
  const [activeMember, setActiveMember] = useState<typeof EXTENDED_TEAM[0] | null>(null);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
       <div className="container mx-auto px-4">
          <Reveal>
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-16">
               Equipe de <span className="text-brand-yellow">Alta Performance</span>
             </h2>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
             {EXTENDED_TEAM.map((member, idx) => (
               <div 
                 key={idx}
                 onClick={() => member.active && setActiveMember(member)}
                 className={cn(
                   "relative group rounded-2xl p-4 transition-all duration-300 border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-4",
                   member.active ? "cursor-pointer hover:border-brand-yellow hover:bg-zinc-800 hover:-translate-y-2" : "opacity-50 grayscale cursor-not-allowed"
                 )}
               >
                  <div className={cn(
                    "w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 transition-all duration-300",
                    member.active ? "border-brand-yellow/50 group-hover:border-brand-yellow" : "border-zinc-700"
                  )}>
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                    ) : (
                      <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-600">
                        <User size={32} />
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-white font-bold text-sm md:text-lg">{member.name}</h3>
                    <p className="text-brand-yellow text-xs uppercase tracking-wider font-medium">{member.role}</p>
                  </div>
                  
                  {member.active && (
                    <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  )}
               </div>
             ))}
          </div>
       </div>

       {/* Enhanced Modal / Lightbox View - Updated to requested Design */}
       {activeMember && (
         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity animate-[fadeIn_0.3s]" 
             onClick={() => setActiveMember(null)}
           ></div>

           {/* Close Button - Fixed position relative to viewport or container */}
           <button 
                onClick={() => setActiveMember(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-brand-yellow transition-colors z-[110] p-2"
              >
                <X size={32} />
           </button>

           {/* Content Wrapper */}
           <div className="relative w-full max-w-[500px] h-[600px] md:h-[700px] flex items-center justify-center animate-[zoomIn_0.4s_cubic-bezier(0.16,1,0.3,1)]">
              
              

              {/* 2. Person Image (Breaking out of frame) 
                  Positioned to sit inside the frame but pop out at the top
              */}
              <div className="absolute inset-0 flex items-end justify-center pb-24 md:pb-28">
                 <img 
                   src={activeMember.image} 
                   alt={activeMember.name} 
                   className="h-[85%] md:h-[90%] w-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                 />
              </div>

              {/* 3. Info & Button (Glued to bottom of image) */}
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-20 gap-3 pb-8 md:pb-6">
                 {/* Role Text */}
                 <h3 className="text-brand-yellow font-heading font-black text-4xl md:text-5xl uppercase tracking-wider drop-shadow-xl text-center leading-none">
                   {activeMember.role}
                 </h3>
                 
                 {/* Instagram Button */}
                 {activeMember.instagram && (
                   <a 
                     href={activeMember.instagram} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="mt-2 bg-brand-yellow text-black p-3 rounded-full hover:bg-white transition-all hover:scale-110 shadow-[0_0_20px_rgba(255,193,7,0.4)] group"
                     title="Ver Instagram"
                   >
                     <Instagram size={24} className="group-hover:text-black" />
                   </a>
                 )}
              </div>

           </div>
         </div>
       )}
    </section>
  )
}
