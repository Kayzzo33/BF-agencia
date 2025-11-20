
import React from 'react';
import { Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer = () => (
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
            <li className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors"><Phone size={18} className="text-brand-yellow" /><span>+55 73 9830-6902</span></li>
            <li className="flex items-center gap-3 text-gray-400 hover:text-brand-yellow transition-colors"><Mail size={18} className="text-brand-yellow" /><span>onzycompany@gmail.com</span></li>
            <li className="flex items-center gap-3 text-gray-400"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div><span>Disponível agora para novos projetos</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Social</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-yellow hover:text-black transition-all"><Linkedin size={20} /></a>
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
