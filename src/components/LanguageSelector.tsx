"use client";

import {
  useCurrentLanguage,
  useSetCurrentLanguageFn,
} from "@/contexts/CurrentLanguageContext";

export default function LanguageSelector() {
  const currentLanguage = useCurrentLanguage();
  const setCurrentLanguage = useSetCurrentLanguageFn();

  return (
    <div className="absolute right-0 top-[50%] flex w-14 -translate-y-[50%] items-center justify-between text-sm text-gray-500 sm:text-base">
      <div
        className={`cursor-pointer hover:text-white ${currentLanguage === "vi" ? "text-gray-300" : ""}`}
        onClick={() => setCurrentLanguage("vi")}
      >
        vi
      </div>

      <div className="h-4 w-0.5 bg-gray-400"></div>

      <div
        className={`cursor-pointer hover:text-white ${currentLanguage === "en" ? "text-gray-300" : ""}`}
        onClick={() => setCurrentLanguage("en")}
      >
        en
      </div>
    </div>
  );
}
