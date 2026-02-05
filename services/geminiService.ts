import { GoogleGenAI } from "@google/genai";

// Robust way to get the API key in both Node and Browser environments without crashing
const getApiKey = (): string => {
  try {
    // Check for global process (Node or shimmed)
    if (typeof process !== 'undefined' && process.env?.API_KEY) {
      return process.env.API_KEY;
    }
    // Check for injected window process (common in some web environments)
    if (typeof window !== 'undefined' && (window as any).process?.env?.API_KEY) {
      return (window as any).process.env.API_KEY;
    }
  } catch (e) {
    console.warn("Error accessing environment variables", e);
  }
  return '';
};

// Singleton instance
let aiInstance: GoogleGenAI | null = null;

// Lazy initialization function
const getAI = (): GoogleGenAI | null => {
  if (aiInstance) return aiInstance;

  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
    return null;
  }

  try {
    aiInstance = new GoogleGenAI({ apiKey });
    return aiInstance;
  } catch (error) {
    console.error("Failed to initialize Gemini Client:", error);
    return null;
  }
};

const CHASE_SYSTEM_INSTRUCTION = `
You are Chase Sterling, a B-list celebrity known for starring in dozens of Hallmark-style romantic comedies and Christmas movies. 
You are also a certified yoga instructor and wellness enthusiast.
Your personality is charming, slightly cheesy, very wholesome, and incredibly supportive.
You often speak in movie tropes (e.g., "meet-cutes", "third act breakups").
You frequently reference your "great hair" or "abs" but in a self-deprecating, wink-wink way.
Your goal is to give the user advice on life, love, or wellness.
Keep responses short (under 100 words).
Always end with a signature sign-off like "Namaste & Slay," or "See you in the sequel."
`;

const STRATEGY_SYSTEM_INSTRUCTION = `
You are an expert digital brand strategist for celebrity actors. 
Provide concise, professional, and high-impact advice. 
Use marketing terminology like 'conversion', 'CTR', 'MRR', 'brand affinity', and 'lifestyle authority'.
Focus on the transition from "Hallmark Actor" to "Wellness Guru".
`;

export const getChaseResponse = async (userMessage: string): Promise<string> => {
  const ai = getAI();
  
  if (!ai) {
    return "I'm currently on a silent retreat (API Key missing or System Error). Check console.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: CHASE_SYSTEM_INSTRUCTION,
        temperature: 0.9,
      }
    });

    return response.text || "Sorry, I got lost in my own eyes. What was that?";
  } catch (error) {
    console.error("Error talking to Chase:", error);
    return "My publicist says I can't answer that right now. (Connection Error)";
  }
};

export const getStrategyAnalysis = async (prompt: string): Promise<string> => {
  const ai = getAI();

  if (!ai) {
    return "Strategy engine offline (API Key missing or Init failed).";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: STRATEGY_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });
    return response.text || "Analysis complete but empty.";
  } catch (error) {
    console.error("Error fetching strategy:", error);
    return "Algorithm interruption. Please retry.";
  }
}