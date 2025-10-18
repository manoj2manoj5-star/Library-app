
import { GoogleGenAI } from "@google/genai";
import { Book } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateChapterContent = async (book: Book): Promise<string> => {
  const prompt = `You are a creative author in the style of classic Odia writers. Write the first chapter of the book titled "${book.title}" by "${book.author}". The book's genre is ${book.genre}, and its summary is: "${book.summary}". 
  
  The chapter should capture the essence of Odia literature, focusing on rich descriptions, emotional depth, and cultural context. The chapter should be approximately 500 words long. Start directly with the chapter content. Do not add a title like "Chapter 1".`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini API:", error);
    return "Error: Could not generate the chapter content. Please try again later.";
  }
};
