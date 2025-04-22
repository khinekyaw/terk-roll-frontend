import { defineRouting } from "next-intl/routing"

export const localesDict: {[key: string]: string} = {
  en: "English",
  my: "မြန်မာ",
}

export const getLocaleName = (key: string) => {
  return localesDict[key]
}

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "my"],

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix: "as-needed",
})
