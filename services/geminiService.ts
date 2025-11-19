import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  try {
    const systemInstruction = `
      Você é o assistente virtual da BF Agência, uma agência de marketing digital especializada em tráfego pago.
      
      INFORMAÇÕES DA AGÊNCIA:
      - Nome: BF Agência
      - Especialidade: Gestão de Tráfego Pago (Google Ads, Meta Ads), Criação de Copy, Treinamento de Equipes.
      - Diferencial: Análise de dados profunda, foco em ROI, atendimento humanizado.
      - Contato: WhatsApp +55 73 9830-6902.
      
      OBJETIVO:
      Responda a dúvidas sobre os serviços de forma curta, profissional e persuasiva. Tente levar o usuário a agendar uma conversa.
      Se perguntarem preços, diga que depende do projeto e sugira uma análise gratuita.
      
      Tom de voz: Profissional, moderno, direto e energético.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Erro na Gemini API:", error);
    return "Estamos com alto volume de contatos. Por favor, use o WhatsApp para resposta imediata.";
  }
};