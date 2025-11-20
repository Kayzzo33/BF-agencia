
import React from 'react';
import { ASSETS } from '../../constants';

export const PartnershipSection = () => {
  return (
    <section className="relative bg-black pt-48 pb-0 z-20 overflow-visible">
       <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-0 max-w-7xl mx-auto relative z-10 pb-12 lg:pb-24">
             <img src={ASSETS.logoYellow} alt="BF" className="w-32 lg:w-48 h-auto object-contain shrink-0 relative z-20 lg:mr-12" />
             <div className="bg-brand-yellow rounded-3xl p-8 md:p-12 lg:pr-64 shadow-[0_0_30px_rgba(255,193,7,0.2)] relative z-10 w-full lg:w-auto lg:min-w-[650px]">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-black leading-tight max-w-2xl">
                       “Nós não queremos clientes, <span className="font-black">queremos</span> <br/>parceiros!”
                  </h2>
             </div>
          </div>
          <div className="relative lg:absolute lg:bottom-0 lg:right-0 xl:right-20 w-[300px] md:w-[450px] lg:w-[500px] z-30 pointer-events-none flex justify-center mx-auto lg:mx-0 mt-[-40px] lg:mt-0">
             <img src={ASSETS.partnerPerson} alt="Parceiro" className="w-full h-auto object-contain drop-shadow-2xl transform lg:translate-y-0 origin-bottom" /> 
          </div>
       </div>
    </section>
  )
};
