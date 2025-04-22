"use client";

import { createContext, useContext, useState } from "react";
import { Language, LANGUAGE_SEARCH_PARAM, parseLanguage } from "@/utils/language";
import { useSearchParams } from "next/navigation";

type SetCurrentLanguageFn = (lang: Language) => void;

const CurrentLanguageContext = createContext<Language | undefined>(undefined);
const SetCurrentLanguageFnContext = createContext<SetCurrentLanguageFn | undefined>(
  undefined,
);

function CurrentLanguageProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const initialLanguage: Language = parseLanguage(
    searchParams.get(LANGUAGE_SEARCH_PARAM),
  );

  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLanguage);

  const handleSwitchLanguage: SetCurrentLanguageFn = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  return (
    <CurrentLanguageContext.Provider value={currentLanguage}>
      <SetCurrentLanguageFnContext.Provider value={handleSwitchLanguage}>
        {children}
      </SetCurrentLanguageFnContext.Provider>
    </CurrentLanguageContext.Provider>
  );
}

function useCurrentLanguage() {
  const currentLanguage = useContext(CurrentLanguageContext);

  if (!currentLanguage) {
    throw new Error("Forget to setup <CurrentLanguageProvider />.");
  }

  return currentLanguage;
}

function useSetCurrentLanguageFn() {
  const setCurrentLanguageFn = useContext(SetCurrentLanguageFnContext);

  if (!setCurrentLanguageFn) {
    throw new Error("Forget to setup <CurrentLanguageProvider />.");
  }

  return setCurrentLanguageFn;
}

export { CurrentLanguageProvider, useCurrentLanguage, useSetCurrentLanguageFn };
