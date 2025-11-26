
import React from 'react';
import { Target, TrendingUp, MessageCircle, Cpu, ScanEye, Users } from 'lucide-react';

// Assets configuration
export const ASSETS = {
  heroBg: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763568231/BackGround_Hero_boqfkf.jpg", 
  logoMain: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763570166/logo_hero_qw4x5l.png",
  logoText: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763570163/agencia_logo_hero_dr6zrq.png",
  heroLogo: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/Logo_Preta_p7evqr.png",
  logoWatermark: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/logo_branco_z9jsgg.png",
  introBg: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763573021/fundo_section2_rys2qf.jpg",
  notebook: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763573334/notebook_cffgac.png",
  arrow: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763573324/SETAS_o6qbsb.png",
  logoYellow: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/logo_amarela_gb7rgq.png",
  teamBg: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763576420/Fundobsluan_tagksa.jpg",
  teamPerson1: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763575835/BFCOMSOMBRA_lnyxdd.png",
  teamPerson2: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763575823/LuanComSombra_zs8shq.png",
  teamFrame: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763576406/QuadradoLinha_rtqqjk.png",
  teamLogo: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569572/Logo_Preta_p7evqr.png",
  notebookBlack: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763671478/notebookblack_-_Editado_gba0ri.png",
  notebookBlur: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763581375/notebookblackdesfocado_ndrxwe.png",
  partnerPerson: "https://res.cloudinary.com/dxhlvrach/image/upload/v1763569573/bf_cinza_v5jmst.png",
};

// Data
export const SERVICES = [
  { title: "Gestão de Tráfego", desc: "Campanhas otimizadas no Meta e Google Ads para PMEs.", icon: Target },
  { title: "Análise de ROI", desc: "Foco total no retorno sobre o investimento do seu negócio.", icon: TrendingUp },
  { title: "Copywriting", desc: "Textos persuasivos que convertem visitantes em clientes.", icon: MessageCircle },
  { title: "Consultoria AI", desc: "Análise de dados preditiva com tecnologia Gemini.", icon: Cpu },
];

export const STATS = [
  { value: 50, label: "Projetos Concluídos", suffix: "+" },
  { value: 50, label: "Clientes Satisfeitos", suffix: "+" },
  { value: 99, label: "Taxa de Sucesso", suffix: "%" },
  { value: 5, label: "Anos de Experiência", suffix: "+" },
];

export const TESTIMONIALS = [
  { name: "Carlos Silva", role: "CEO, TechStore", text: "A BF Agência transformou nossas vendas online em 3 meses." },
  { name: "Mariana Costa", role: "Diretora, Clinica Bem Estar", text: "Profissionalismo e resultados consistentes. Recomendo demais!" },
  { name: "Ricardo Gomes", role: "Fundador, Burger King (Franquia)", text: "O tráfego pago finalmente deu retorno real para nossa loja." },
  { name: "Ana Paula", role: "Gerente, Modas 360", text: "Atendimento humanizado e estratégias que funcionam." },
  { name: "Fernanda Lima", role: "Advogada", text: "Conseguiram segmentar meu público perfeitamente." },
];

export const SOLUTIONS_LIST = [
  "Criação de campanhas estratégicas",
  "Gerenciamento de métricas",
  "Foco em resultados exponenciais",
  "Planejamento de escala",
  "Análise de criativos",
  "Análise de Copy",
  "Relatório Mensal com dados precisos"
];

export const ADAPTATION_ITEMS = [
  { title: "Observação de mercado", icon: ScanEye },
  { title: "Análise completa do nicho", icon: Target },
  { title: "Direcionamento estratégico de público", icon: Users }
];

export const EXTENDED_TEAM = [
  { 
    name: "Especialista", 
    role: "Suporte", 
    instagram: "https://www.instagram.com/bf.agencia/", 
    image: "https://res.cloudinary.com/dxhlvrach/image/upload/v1764126140/Design_sem_nome_33_kyymvg.png",
    active: true
  },
  { 
    name: "Especialista", 
    role: "Suporte", 
    instagram: "https://www.instagram.com/bf.agencia/", 
    image: "https://res.cloudinary.com/dxhlvrach/image/upload/v1764126141/Design_sem_nome_34_t9da6z.png",
    active: true 
  },
  { 
    name: "Em breve", 
    role: "Vaga Aberta", 
    instagram: "", 
    image: "",
    active: false
  },
  { 
    name: "Em breve", 
    role: "Vaga Aberta", 
    instagram: "", 
    image: "",
    active: false
  },
];
