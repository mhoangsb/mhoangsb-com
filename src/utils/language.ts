export type Language = "en" | "vi";

export const languages: Language[] = ["en", "vi"];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_SEARCH_PARAM = "lang";

export function parseLanguage(input: string | null): Language {
  if (!input) {
    return DEFAULT_LANGUAGE;
  }

  return languages.includes(input as Language) ? (input as Language) : DEFAULT_LANGUAGE;
}
