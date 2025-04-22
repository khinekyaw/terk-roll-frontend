import { defineRouting } from "next-intl/routing"

export const localesDict = {
  en: "English",
  my: "မြန်မာ",
}

export const getLocalesName = (key: keyof typeof localesDict) => {
  return localesDict[key]
}

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "my"],

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix: "as-needed",
})
