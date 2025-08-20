import { useState } from "react";
import { translateText } from "./translator.js";

export function useTranslate(defaultLang = "en") {
  const [language, setLanguage] = useState(defaultLang);

  async function t(text) {
    if (language === "en") return text; 
    try {
      return await translateText(text, language);
    } catch (err) {
      console.error("Translation error:", err);
      return text; 
    }
  }

  return { t, setLanguage, language };
}
