import fetch from "node-fetch";

const OLLAMA_API = "http://localhost:11434/api/generate"; 

export async function translateText(text, targetLang) {
  const prompt = `Preserve all HTML tags and attributes in this code, but translate the inner text from English to ${targetLang}. Return the translated HTML code with no changes to the structure or layout. Please take the following HTML code as input: ${text}`

  const response = await fetch(OLLAMA_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3.1",  
      prompt,
      stream: false
    }),
  });

  const data = await response.json();
  return data.response.trim();
}
