'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'en' | 'zh';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, zh?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('site-lang') as Lang;
    if (saved === 'en' || saved === 'zh') setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('site-lang', l);
  };

  const t = (en: string, zh?: string): string =>
    lang === 'zh' && zh ? zh : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
